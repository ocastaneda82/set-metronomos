import React from "react";
import "typeface-roboto";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const Boton = ({ label, classStyle, icono }) => {
  return (
    <Button variant="contained" color={classStyle} startIcon={icono}>
      {label}
    </Button>
  );
};

Boton.propTypes = {
  label: PropTypes.string.isRequired,
  classStyle: PropTypes.string.isRequired,
  icono: PropTypes.string.isRequired,
};

export default Boton;
