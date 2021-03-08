import React from "react";
import Boton from "./Boton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Boton",
  component: Boton,
};

export const Ejemplo = () => (
  <Boton label={"Play"} classStyle={"primary"} icono={<PlayArrowIcon />} />
);
