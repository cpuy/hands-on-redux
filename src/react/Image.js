import React from 'react'

function Image({image}) {
  return (
    <figure>
      <img src={image.src} alt={image.title}/>
      <figurecaption>{image.title}</figurecaption>
    </figure>
  )
}

export default Image;