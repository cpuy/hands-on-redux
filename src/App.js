import React, { useState } from 'react';
import uuidv1 from 'uuid/v1';

import ImageList from './react/ImageList';
import Form from './react/Form';

import './App.css';

// https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1506031836469-0c356b620b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1518467166778-b88f373ffec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1506506447188-78e2a1051d9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

const initialImages = [
  {
    id: uuidv1(),
    url: 'https://images.unsplash.com/photo-1536146021566-627ce3c4d813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Selective focus photography of brow monkey sitting on brick pavement'
  },
  {
    id: uuidv1(),
    url: 'https://images.unsplash.com/photo-1520552159191-e28a1d9f0d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Blue and green bird on top of brown branch during daytime'
  },
  {
    id: uuidv1(),
    url: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Elephant on grass during daytime'
  }
];

function App() {
  const [images, setImages] = useState(initialImages);
  const [selected, setSelected] = useState({});

  function updateImage(image) {
    setImages(images.map(img => img.id === image.id ? image : img))
  }

  function addImage(image) {
    setImages([...images, { ...image, id: uuidv1() }])
  }

  function deleteImage(image) {
    setImages(images.map(img => img.id === image.id ? null : img).filter(Boolean))
  }

  function handleSubmit(image) {
    if (image.id) {
      updateImage(image);
    } else {
      addImage(image)
    }

    setSelected({})
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} image={selected}/>
      <ImageList images={images} onEdit={image => setSelected(image)} onDelete={deleteImage}/>
    </div>
  );
}

export default App;
