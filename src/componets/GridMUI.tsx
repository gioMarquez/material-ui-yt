import { Container, Grid } from "@mui/material";
import React from "react";

const GridMUI = () => {
  return (
    <Container>
      <Grid container padding={5}>
        <Grid item xs={12} sm={6}>
          <p>
            "En aquel tiempo yo vivía en un planeta muy grande, y solitario.
            Allí no había más personas mayores que yo. Compraba en las tiendas
            de comestibles y en las tiendas de papelería, y despachaba todas las
            mañanas al cartero. Por las tardes me entretenía haciendo despegar o
            aterrizar un avión. Me sentía, de algún modo, más a gusto con un
            destornillador, con una escalera o con una regadera en la mano que
            con una pluma. Pero aquella vez me sentí impresionado por el absurdo
            de la vida que yo llevaba."
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>
            "Muchos años después, frente al pelotón de fusilamiento, el coronel
            Aureliano Buendía había de recordar aquella tarde remota en que su
            padre lo llevó a conocer el hielo." Este es el primer párrafo de la
            famosa novela de García Márquez, que establece el tono y el misterio
            que envolverá toda la narrativa de la saga de los Buendía en
            Macondo.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GridMUI;
