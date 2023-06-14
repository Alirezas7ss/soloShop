"use client"
import React, { useState } from 'react';

const ZoomImage: React.FC<{ src: string }> = ({ src }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.pageX - e.currentTarget.offsetLeft,
      y: e.pageY - e.currentTarget.offsetTop
    });
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt="Image" className="w-full h-auto" />

      {isZoomed && (
        <div
          className="absolute border border-gray-300 shadow-lg"
          style={{
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            width: '300px',
            height: '300px',
            backgroundImage: `url(${src})`,
            backgroundPosition: `${-mousePosition.x * 2}px ${-mousePosition.y * 2}px`,
            backgroundSize: '600px',
            backgroundRepeat: 'no-repeat',
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
