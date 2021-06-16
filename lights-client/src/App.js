import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Light from "./Light";
import { ChromePicker } from "react-color";
import { getMqttClient } from "./lib/mqttClient";
import NewLight from "./NewLight";

const defaultLights = [
  // {
  //   id: 1,
  //   color: "#000000",
  // },
];

let client;
getMqttClient().then((res) => (client = res));

function App() {
  const [lights, setLights] = useState(defaultLights);
  const [activeLight, setActiveLight] = useState({});
  const [newColor, setNewColor] = useState("#000000");

  function handleChangeComplete(color, event) {
    if (color.hex === "#000000")
      client.publish(`iot/lights/${activeLight.id}`, "off");
    else {
      if (activeLight.color === "#000000")
        client.publish(`iot/lights/${activeLight.id}`, "on");
      client.publish(`iot/lights/${activeLight.id}`, color.hex);
    }
  }

  useEffect(() => {
    setNewColor(activeLight.color);
  }, [activeLight, setNewColor]);

  useEffect(() => {
    client.on("connect", function () {
      client.subscribe("iot/lightsWarning");
    });

    client.on("message", function (topic, message) {
      toast(`Light bulb ${message.toString()} has been on for too long`, {
        icon: "⚡",
      });
    });

    return () => client.end();
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="lights-container">
        {lights.map((light, index, arr) => (
          <Light
            key={light.id}
            light={light}
            setLights={setLights}
            setActiveLight={setActiveLight}
            isLastAdded={index === arr.length - 1}
          />
        ))}
        <NewLight lights={lights} setLights={setLights} />
      </div>
      <ChromePicker
        color={newColor}
        onChange={setNewColor}
        onChangeComplete={handleChangeComplete}
        disableAlpha={true}
      />
    </>
  );
}

export default App;
