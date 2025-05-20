import React, { useState, useEffect } from "react";
import "./Slideshow.css";

export default function Slideshow({ images, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slideshow">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide${index === current ? " active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}