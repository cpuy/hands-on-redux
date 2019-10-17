import React from 'react'
import Image from './Image';
import ImageOverlay from './ImageOverlay'
import './ImageList.css';

function ImageList({ images, onDelete, onEdit }) {

  return (
    <ul className="ImageList">
      {images.map(image => {
        return <li key={image.id}>
          <ImageOverlay onDelete={() => onDelete(image)} onEdit={() => onEdit(image)}>
            <Image image={image}/>
          </ImageOverlay>
        </li>
      })}
    </ul>
  )
}

export default ImageList