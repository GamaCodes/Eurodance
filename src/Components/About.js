import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="https://images.pexels.com/photos/4391479/pexels-photo-4391479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2 className="nosotros">Nosotros</h2>

              <div className="columns contact-details">
                <h2>MISIÓN</h2>
                <p className="address">
                  Proveer soluciones de comercialización de equipos y
                  mobiliario, Productos e insumos para el ramo: Restaurantero,
                  Hotelero, Panadero, Refrigeración e Industria en General. Con
                  distribución en toda la República Mexicana.
                </p>
              </div>
              <div className="columns contact-details">
                <h2>VISIÓN</h2>
                <p className="address">
                  Ser una empresa líder en clase Internacional ofreciendo la
                  mejor calidad, servicio y precio, logrando el entusiasmo y
                  satisfacción de nuestros clientes, posicionándonos como una de
                  las mejores empresas mexicanas en nuestro ramo, guiada por el
                  trabajo en equipo y participación de nuestros colaboradores.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
