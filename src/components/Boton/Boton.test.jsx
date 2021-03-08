import React from "react";
import { findAllByRole, findByRole, render } from "@testing-library/react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import Boton from "./Boton"; // SUT (Subject Under Testing)

test("Botón render", async () => {
  //AAA
  //Arrange
  //Act
  const { findAllByRole } = render(
    <Boton label={"Play"} classStyle={"primary"} icono={<PlayArrowIcon />} />
  );
  //Assert
  const botonInstancias = await findAllByRole("button");

  expect(botonInstancias[0]).toHaveTextContent("Play");
});
