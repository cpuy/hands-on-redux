import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageList from './react/ImageList';


const images = [
  {
    src: 'https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F10.2F16.2Ff184c633-9472-42ea-8f8f-c6f2f0f0edc7.2Ejpeg/1150x660/background-color/ffffff/quality/70/wildlife-photographer-of-the-year-les-plus-belles-photos-animalieres-de-lannee-2019-devoilees.jpg',
    title: 'Wolf and marmot'
  },
  {
    src: 'https://geo.img.pmdstatic.net/pad/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F10.2F16.2F1ee113a9-13fb-49d0-99fb-9ed1414b91df.2Ejpeg/650x433/quality/80/1ee113a9-13fb-49d0-99fb-9ed1414b91df-jpeg.jpeg',
    title: 'Iridescent calmar'
  }
];

function App() {
  // const [images, setImages] = useState([]);

  return (
    <div className="App">
      <ImageList images={images}/>
    </div>
  );
}

export default App;
