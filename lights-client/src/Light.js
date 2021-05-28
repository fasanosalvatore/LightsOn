import mqtt from 'mqtt'
import {useEffect} from 'react'
import LightIcon from './LightIcon'

function Light({light, setLights, setActiveLight}) {
  useEffect(() => {
    const client = mqtt.connect('ws://localhost:15675', {
      path: "/ws",
      username: "guest",
      password: "guest"
    })
    client.on('connect', function () {
      client.subscribe(`iot/lights/${light.id}`)
    })

    client.on('message', function (topic, message) {
      const stringMessage = message.toString();
      let color;
      switch(stringMessage) {
        case "off": {
          color = "black";
          break;
        }
        case "on": {
          color = "#ffffed";
          break;
        }
        case "#f0f0ff": { //First message of homebridge for confirm
          color = "#000000";
          break;
        }
        default: color = stringMessage;
      }
      setLights(oldLights => oldLights.map(oldLight => {
        if(oldLight.id === light.id) oldLight.color = color;
        return oldLight;
      }))
    })

    return () => client.end();
  }, [light, setLights])

  return (
    // <div className="light" style={{backgroundColor: light.color}} />
      <button className="light" onClick={() => setActiveLight(light)}>
        <LightIcon color={light.color} />
      </button>
  )
}

export default Light
