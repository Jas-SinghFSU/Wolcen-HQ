import React from "react";
import Particles from "react-particles-js";

const Fireflies = () => {
  return (
    <Particles
      className="gofFireflies"
      height={"100%"}
      width={"100%"}
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffd0a9",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            image: {
              src: "img/github.svg",
              width: 150,
              height: 150,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable_auto: false,
            distance: 0,
            color: "#fff",
            opacity: 1,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Fireflies;
