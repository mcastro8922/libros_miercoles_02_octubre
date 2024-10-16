import { Route, Routes } from "react-router-dom";

import { Acerca } from "../../componentes/otros/Acerca";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { LibroCrear } from "../../componentes/libros/LibroCrear";
import { LibroAdmin } from "../../componentes/libros/LibroAdmin";
import { LibroListar } from "../../componentes/libros/LibroListar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { LibroActualizar } from "../../componentes/libros/LibroActualizar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/libcre" element={<LibroCrear />} />
      <Route path="/liblist" element={<LibroListar />} />
      <Route path="/libadm" element={<LibroAdmin />} />

      <Route path="/libact/:codigo" element={<LibroActualizar />} />

      <Route path="/acer" element={<Acerca />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
