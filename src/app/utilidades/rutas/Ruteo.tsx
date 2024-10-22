import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { AdministrarArtistas } from "../../componentes/artistas/AdministrarArtistas";
import { ListarArtistas} from "../../componentes/artistas/ListarArtistas";
import { RegistrarArtistas } from "../../componentes/artistas/RegistrarArtistas";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo =()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/adminart" element={<AdministrarArtistas/>}/>
            <Route path="/listart" element={<ListarArtistas/>} />
            <Route path="/regisart" element={<RegistrarArtistas/>} />
            <Route path="/acer" element={<Acerca/>} />
            <Route path="*" element={<NoEncontrado/>} />
        </Routes>
    );
};