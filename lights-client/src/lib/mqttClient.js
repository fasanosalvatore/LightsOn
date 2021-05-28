import mqtt from 'mqtt'

export const client = mqtt.connect('ws://localhost:15675', {
  path: "/ws",
  username: "guest",
  password: "guest"
})
