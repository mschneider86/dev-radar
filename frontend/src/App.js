import React, { useEffect, useState } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("longitude: " + longitude);

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {},
      {
        timeout: 30000,
      }
    );
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                type="number"
                id="latitude"
                required
                value={latitude}
                onChange={setLatitude}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                type="number"
                id="longitude"
                required
                longitude={longitude}
                onChange={setLongitude}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/26752887?s=460&u=fa07959ea62de89ac27111f2adc00c8dad21ebab&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Diego</strong>
                <span>react js</span>
              </div>
            </header>
            <p>to da rocket</p>
            <a href="http://www.com">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/26752887?s=460&u=fa07959ea62de89ac27111f2adc00c8dad21ebab&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Diego</strong>
                <span>react js</span>
              </div>
            </header>
            <p>to da rocket</p>
            <a href="http://www.com">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/26752887?s=460&u=fa07959ea62de89ac27111f2adc00c8dad21ebab&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Diego</strong>
                <span>react js</span>
              </div>
            </header>
            <p>to da rocket</p>
            <a href="http://www.com">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/26752887?s=460&u=fa07959ea62de89ac27111f2adc00c8dad21ebab&v=4"
                alt=""
              />
              <div className="user-info">
                <strong>Diego</strong>
                <span>react js</span>
              </div>
            </header>
            <p>to da rocket</p>
            <a href="http://www.com">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
