import React, { Component } from "react";
import Slide from "react-reveal";
import { List } from "antd";

const data = [
  " Panaderías",
  " Rosticerías",
  " Cafeterías",
  " Cocinas económicas",
  " Snack",
  " Peletería",
  " Cocción",
];

const data2 = [
  " Material necesario",
  " Asesoría técnica en el manejo de los equipos",
  " Personal capacitados con herramienta y equipo necesario para la ejecución",
];

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    return (
      <section id="portfolio">
        <h2 className="titulo2">Proyectos</h2>
        <p className="portfolio-pa">
          Servicios Lounge Eurodance cuenta con personal capacitado para el
          desarrollo, diseño y equipamiento de proyectos de cocinas, comedores,
          cafeterías, buffet y restaurantes, que cumplan con sus necesidades y
          expectativas, para micro y macro negocio
        </p>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Atención</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div>
                    <h3>Atención a Micro y Medianas Empresas</h3>
                    <List
                      size="small"
                      bordered
                      dataSource={data}
                      renderItem={(item) => (
                        <List.Item>
                          <span>&bull; </span>
                          {item}
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Análisis</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <h3>Análisis, Asesoría y Diseño</h3>
                <p className="info">
                  Cada proyecto presenta un reto diferente que requiere de
                  atención personalizada y especializada.
                </p>
                <p>
                  En Servicios Lounge Eurodance analizamos sus necesidades en
                  función de espacio, servicio e inversión, a su vez asesoramos
                  para llegar a un diseño y procedimientos que solucione la
                  problemática Lo anterior teniendo siempre en cuenta un enfoque
                  holístico que proporcione soluciones que integren en su
                  totalidad el funcionamiento de su empresa.
                </p>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Planos</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <h3>Planos y Guías Mecánicas</h3>
                <p className="info">
                  Proporcionamos asesoría en diseños de espacios óptimos a
                  detalle del equipamiento propuesto, así como recomendaciones y
                  canalizamos a personal capacitado para las modificaciones en
                  planos de las instalaciones (luz, gas, agua y drenaje) que
                  requieren para su correcto funcionamiento.
                </p>
                <p>
                  Señalando alturas, diámetros de tubería, alimentación de gas
                  (así como presión), voltajes, y preparaciones necesarias para
                  su instalación.
                </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Asesoría</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <h3>Asesoría y Orientación </h3>
                <p className="info">
                  Somos una empresa joven, 100% mexicana, en transformación de
                  clase mundial, con mas de 10 años de experiencia, ubicada en
                  la ciudad de Veracruz Ver, dedicados a proveer soluciones de
                  diseño, orientación y comercialización de equipos y mobiliario
                  en acero inoxidable así como de insumos y distribución de
                  materias primas para el correcto desarrollo de nuestros
                  clientes, lo cual nos permite ofrecer soluciones
                  personalizadas en base a su necesidad y espacio.
                </p>
                <p>
                  Contribuimos a la satisfacción de las necesidades de proyectos
                  e impulso de Micro y Macro negocios de una manera activa,
                  eficiente y rentable. Con precios justos y calidad en el
                  servicio.
                </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Equipo</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>
                <h3>Equipo Integral</h3>

                <p>
                  Las instalaciones serán con las medidas de seguridad
                  requeridas por el fabricante para garantizar su buen
                  funcionamiento el cual incluye:
                </p>
                <List
                  size="small"
                  bordered
                  dataSource={data2}
                  renderItem={(item) => (
                    <List.Item>
                      <span>&bull; </span>
                      {item}
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </Slide>
        <section className="timeline-img">
          <img
            src="https://images.pexels.com/photos/1367272/pexels-photo-1367272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="valores"
          />
        </section>
      </section>
    );
  }
}

export default Resume;
