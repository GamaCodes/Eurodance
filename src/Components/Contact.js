import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { List } from "antd";

const data = [
  " SHORT FOCUS TRAINING “SERVICIO AL CLIENTE Y ATENCIÓN AL CLIENTE VAN DE LA MANO",
  " DESARROLLO DE HABILIDADES DE SUPERVISIÓN",
  " ACTITUD DE SERVICIO, ENFOQUE A VENTAS",
  " CURSO - TIGRES DE VENTAS",
];

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <h2 className="nosotros">Respaldo Profesional</h2>
        </Fade>

        <Slide left duration={1000}>
          <p className="portfolio-pa">
            Somos una <span>MARCA REGISTRADA.</span>
          </p>
        </Slide>

        <Slide right duration={1000}>
          <p className="portfolio-pa">
            <span>Servicios Lounge Eurodance </span> cuenta con personal
            capacitado para asesorarle en cualquier cuestión relacionada con su
            negocio en el momento en que usted así lo desee sin costo alguno.
          </p>
        </Slide>

        <Slide left duration={1000}>
          <p className="portfolio-pa">
            <span>Servicios Lounge Eurodance </span>, es una empresa donde
            trabajamos con la política principal de servir al cliente dando todo
            para seguir trabajando con eficiencia en el servicio, en la calidad
            y con precios competitivos.
          </p>
        </Slide>

        <Slide right duration={1000}>
          <p className="portfolio-pa">
            Cada decisión es evaluada por nuestro equipo de expertos y
            directivos que provee soluciones de acuerdo a las{" "}
            <span>necesidades y presupuesto </span> de nuestros clientes.
          </p>
        </Slide>

        <Slide left duration={1000}>
          <p className="portfolio-pa">
            Nuestra área administrativa está conformada por personal
            responsable, integro y con deseo de proporcionar su conocimiento
            para la mejora constante de nuestra empresa.
          </p>
        </Slide>

        <Slide right duration={1000}>
          <p className="portfolio-pa">
            Asimismo nuestro personal ha realizado{" "}
            <span>Diplomados, Cursos y Certificados </span> en:
          </p>
        </Slide>

        <Slide left duration={1000}>
          <List
            size="small"
            bordered
            className="slide-listt"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <span>&bull; </span>
                {item}
              </List.Item>
            )}
          />
        </Slide>
      </section>
    );
  }
}

export default Contact;
