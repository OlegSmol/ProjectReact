import './App.css';
import { Biblio } from './component/Biblio';
import { Sity } from './component2/Sity'
import { Sity1 } from './component2/Sity1'
import { Sity2 } from './component2/Sity2'
import { SityFoto } from './component2/SityFoto'

import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="App">
      {/* <h2>Шекспир</h2>
      <Biblio></Biblio> */}

      <nav>
        <Link to="/Sity">Город</Link>
        <Link to="/Sity1">Достопримечательность</Link>
        <Link to="/Sity2">Другие достопримечательности</Link>
        <Link to="/SityFoto">Фото</Link>
      </nav>

      <main>
        <Routes>
          <Route
            path='/Sity'
            element={<Sity></Sity>}
          />

          <Route
            path='/Sity1'
            element={<Sity1></Sity1>}
          />

          <Route
            path='/Sity2'
            element={<Sity2></Sity2>}
          />

          <Route
            path='/SityFoto'
            element={<SityFoto></SityFoto>}
          />

        </Routes>
      </main>


    </div>


  );
}



export default App;
