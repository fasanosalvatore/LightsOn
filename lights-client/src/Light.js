import { useEffect } from "react";
import toast from "react-hot-toast";
import { getMqttClient } from "./lib/mqttClient";
import LightIcon from "./LightIcon";

function Light({ light, setLights, setActiveLight, isLastAdded }) {
  let client;
  getMqttClient().then((res) => (client = res));

  useEffect(() => {
    client.on("connect", function () {
      client.subscribe(`iot/lights/${light.id}`);
    });

    client.on("message", function (topic, message) {
      const stringMessage = message.toString();
      let color;
      switch (stringMessage) {
        case "off": {
          color = "#000000";
          break;
        }
        case "on": {
          color = "#ffffed";
          break;
        }
        case "#f0f0ff": {
          //First message of homebridge for confirm
          color = "#000000";
          client.publish(`iot/lights/${light.id}`, "off");
          if (isLastAdded) {
            toast(`Light bulb ${light.id} is now available!`, {
              icon: "💡",
            });
          }
          break;
        }
        default:
          color = stringMessage;
      }
      setLights((oldLights) =>
        oldLights.map((oldLight) => {
          if (oldLight.id === light.id) oldLight.color = color;
          return oldLight;
        })
      );
    });

    return () => client.end();
  }, [light, setLights, client, isLastAdded]);

  return (
    // <div className="light" style={{backgroundColor: light.color}} />
    <button className="light" onClick={() => setActiveLight(light)}>
      <LightIcon color={light.color} />
    </button>
  );
}

export default Light;
