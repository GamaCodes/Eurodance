import React from "react";
import { List, Avatar } from "antd";

const data = [
  {
    title: "Responsabilidad",
    img: "https://img.icons8.com/doodle/4x/ok.png",
  },
  {
    title: "Honestidad",
    img: "https://img.icons8.com/doodle/4x/scales.png",
  },
  {
    title: "Puntualidad",
    img: "https://img.icons8.com/doodle/4x/apple-clock.png",
  },
  {
    title: "Profesionalismo",
    img: "https://img.icons8.com/doodle/4x/graph-report.png",
  },
  {
    title: "Lealtad",
    img: "https://img.icons8.com/doodle/4x/coaching.png",
  },
  {
    title: "Trabajo en equipo",
    img: "https://img.icons8.com/doodle/4x/conference-call.png",
  },
  {
    title: "Compromiso",
    img: "https://img.icons8.com/doodle/4x/repository.png",
  },
  {
    title: "Optimismo",
    img: "https://img.icons8.com/doodle/4x/winner.png",
  },
];

export default function Values() {
  return (
    <div className="values-contain">
      <h2 className="nosotros">Valores</h2>
      <List
        itemLayout="horizontal"
        dataSource={data}
        className="list-value"
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.img} />}
              title={item.title}
            />
          </List.Item>
        )}
      />
      <section className="timeline-img">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="valores"
        />
      </section>
    </div>
  );
}
