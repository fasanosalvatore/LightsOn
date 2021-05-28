const redis = require("redis");

exports.handler = function(context, event) {
  const client = redis.createClient({host: "redis"});
  const data = Buffer.from(JSON.parse(JSON.stringify(event)).body.data).toString();
  const device = event.url.split("/")[2] || "test"

  if(data === "off") {
    client.del(device, () => {
      context.callback(`Light bulb ${device} has been turned off`);
    });
  } else {
    client.get(device, (err, reply) => {
      if(!reply) {
        client.set(device, new Date().toString())
        context.callback(`Light bulb ${device} has been turned on`);
      } else {
        context.callback(`Light bulb ${device} was on already`);
      }
    })
  }

  // client.quit();
};
