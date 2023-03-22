import React from 'react';
import './images.css'

interface ImagesProps  {
  images: string[];
  limit?: number;
}

const Images: React.FC<ImagesProps> = ({ images, limit = 2 }) => {
  return (
    <div className="images">
      {images.slice(0, limit).map(image => (
        <img src={image} key={image} alt="Feed item image" />
      ))}
    </div>
  );
}

export default Images