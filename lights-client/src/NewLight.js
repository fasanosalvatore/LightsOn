import axios from 'axios';

function NewLight({lights, setLights}) {
  async function handleClick() {
    const token = await axios.post("/api/auth/login", {
      username: "admin",
      password: "admin"
    })
    const homebridgeConfig = await axios.get("/api/config-editor/plugin/homebridge-mqttthing", {
      headers: {
        'Authorization': `Bearer ${token.data.access_token}`
      }
    })
    const newId = lights.length + 1
    const newTopic = `iot/lights/${newId}`
    const newLight = {
      type: "lightbulb-RGB",
      name: `MyLight${newId}`,
      username: "guest",
      password: "guest",
      topics: {
          getRGB: newTopic,
          setRGB: newTopic,
          getOn: newTopic,
          setOn: newTopic
      },
      onValue: "on",
      offValue: "off",
      hex: true,
      hexPrefix: "#",
      accessory: "mqttthing"
    }
    homebridgeConfig.data.push(newLight)
    await axios.post("/api/config-editor/plugin/homebridge-mqttthing", homebridgeConfig.data, {
      headers: {
        'Authorization': `Bearer ${token.data.access_token}`
      }
    })

    await axios.put("/api/server/restart", {}, {
      headers: {
        'Authorization': `Bearer ${token.data.access_token}`
      }
    })

    setLights(oldLights => [...oldLights, {id: oldLights.length + 1, color: "black"}])
  }
  return (
    <button className="new-light" onClick={handleClick}>New Light</button>
  )
}

export default NewLight
