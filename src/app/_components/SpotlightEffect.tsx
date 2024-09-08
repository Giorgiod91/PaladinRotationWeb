import { ReactEventHandler, useEffect, useState } from "react";

const SpotlightEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="spotlight"
      style={{
        left: mousePosition.x - 250 + "px",
        top: mousePosition.y - 140 + "px",
        width: "200px",
        height: "200px",
      }}
    ></div>
  );
};

export default SpotlightEffect;
