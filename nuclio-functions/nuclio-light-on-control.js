const redis = require("redis");
const mqtt = require('mqtt');
const url = require('url');
const { promisify } = require("util");

const mqtt_url = url.parse(process.env.CLOUDAMQP_MQTT_URL || 'mqtt://guest:guest@rabbitmq:1883');
const auth = (mqtt_url.auth || ':').split(':');
const newUrl = "mqtt://" + mqtt_url.host;

var options = {
  port: mqtt_url.port,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: auth[0],
  password: auth[1],
};

exports.handler = function(context, event) {
  const mqttClient = mqtt.connect(newUrl, options);
  const redisClient = redis.createClient({host: "redis"});
  const getAsync = promisify(redisClient.get).bind(redisClient);

  mqttClient.on('connect', () => {
    redisClient.keys('*', (err, keys) => {
      if(err) context.callback("ERROR");
      if(keys.length === 0) {
        mqttClient.end();
        context.callback("No light on");
      }
      keys.forEach(async (key, i, arr) => {
        const lightDate = await getAsync(key);
        const difference = (new Date() - new Date(lightDate))/1000/60
        if(difference >= 2) {
          mqttClient.publish('iot/lightsWarning', key, () => {
            if(arr.length - 1 === i) {
              mqttClient.end();
              context.callback("Notifications sent!");
            }
        });
        }
      })
    });
  });

  // client.quit();
};
