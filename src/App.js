import Navber from "./components/Navber";
import { Routes, Route } from 'react-router-dom'
import { publicRoute } from "./routes/publicRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { themeChange } from 'theme-change'

function App() {
  useEffect(() => {
    AOS.init();
    themeChange(false)
  }, [])
  return (
    <div>
      <Navber>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route
                key={index} path={path} element={<Component />}
              ></Route>))
          }
        </Routes>
      </Navber>
    </div>
  );
}

export default App;
