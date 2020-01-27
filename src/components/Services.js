import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "free cocktails",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.A, dolor."
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.A, dolor."
        },
        {
          icon: <FaShuttleVan />,
          title: "free shuttle",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.A, dolor."
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.A, dolor."
        }
      ]
    };
  }

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="service-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
