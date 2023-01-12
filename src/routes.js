import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Sections/Home';
import Haku from "./assets/img/haku.png"
import Castelo from "./assets/img/castelo.png"
import Totoro from "./assets/img/totoro.png"
import { themeChihiro , themeCastelo, themeTotoro} from './themes';

export default function Router() {

  
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home tema={themeChihiro} imgPrincipal={Haku}/>} />
            <Route path='/Castelo' element={<Home tema={themeCastelo} imgPrincipal={Castelo}/>} />
            <Route path='/Totoro' element={<Home tema={themeTotoro} imgPrincipal={Totoro}/>} />
        </Routes>
      </BrowserRouter>
    )
  }