import React from "react";
import { Timeline } from "antd";

export default function Timelinee() {
  return (
    <div id="resume" className="timeline-contain">
      <h2 className="titulo2">Historia</h2>
      <Timeline mode="alternate" className="timeline-box">
        <Timeline.Item label="2002">
          Nace Servicios Lounge Eurodance como micronegocio.
        </Timeline.Item>
        <Timeline.Item label="2006">
          Servicios Lounge Eurodance cambia de lugar físicamente, incrementa
          infraestructura.
        </Timeline.Item>
        <Timeline.Item label="2011">
          Cambia a nueva dirección Alberto Calderon 17 Col. Francisco Ferrer
          Guardia
        </Timeline.Item>
        <Timeline.Item label="2012">
          La empresa es conformada por más 17 trabajadores
        </Timeline.Item>
        <Timeline.Item label="2015">
          Comenzamos una nueva etapa expandiéndonos a Ofreciendo nuestros
          Servicios a mas estados en la República Mexicana.
        </Timeline.Item>
        <Timeline.Item label="2019">
          Cambió de persona física a persona moral: Servicios Lounge Eurodance
          S.A. de C.V..
        </Timeline.Item>
        <Timeline.Item label="Actualidad">
          Servicios Lounge Eurodance cuenta con más de 34 colaboradores, y
          distribuidores de las mejores marcas, contamos con reconocimiento y
          posicionamiento entre las mejores empresas, brindando el mejor
          servicio y atención personalizada.
        </Timeline.Item>
      </Timeline>
      <section className="timeline-img">
        <img
          src="https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="eurodance"
        />
      </section>
    </div>
  );
}
