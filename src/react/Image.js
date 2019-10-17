import React from 'react';
import './Image.css';

function Image({image}) {
  return (
    <figure className="Image">
      <img src={image.url} alt={image.title}/>
      <figcaption>{image.title}</figcaption>
    </figure>
  )
}

export default Image;