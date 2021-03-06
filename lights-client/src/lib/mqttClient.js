import mqtt from 'mqtt'
import dns from 'dns'
import util from 'util'

const lookup = util.promisify(dns.lookup);

/**
 * It is not possible to use the websockets protocol with hostnames, so you have to calculate the ip address
 */
export async function getMqttClient(){
  const host = process.env.NODE_ENV === 'production' ? 'rabbitmq' : 'localhost'
  const address = lookup(host);
  return mqtt.connect(`ws://${address}`, {
    path: "/ws",
    username: "guest",
    password: "guest",
    port: 15675
  })
}
