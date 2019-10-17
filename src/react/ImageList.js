import React from 'react'
import Image from './Image';

function ImageList({ images }) {

  return (
    <ul>
      {images.map(image => {
        return <li>
          <Image image={image}/>
        </li>
      })}
    </ul>
  )
}

export default ImageList