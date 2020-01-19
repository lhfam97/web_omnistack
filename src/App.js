import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./global.css";
import "./app.css";
import "./Sidebar.css";
import "./main.css";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componentne (Lembrar: imutabilidade)

// navigator.geolocation.getCurrentPosition; Localizador

function App() {
  const [devs, setDevs] = useState([]);
  // const [github_username, setGithubUsername] = useState("");
  // const [techs, setTechs] = useState("");
  // const [latitude, setLatitude] = useState(0);
  // const [longitude, setLongitude] = useState(0);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    setGithubUsername("");
    setTechs("");
    setDevs([...devs, response.data]);
    console.log(response.data);
  }
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  }, []);
  return (
    <div id="app">
      <aside>
        <strong className="">Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
