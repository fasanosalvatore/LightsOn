import mqtt from 'mqtt'

export function getMqttClient(){
  const host = process.env.NODE_ENV === 'production' ? 'rabbitmq' : 'localhost'
  return mqtt.connect(`ws://${host}:15675`, {
    path: "/ws",
    username: "guest",
    password: "guest"
  })
}
