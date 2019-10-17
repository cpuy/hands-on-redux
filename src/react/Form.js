import React, { useState, useEffect } from 'react';

import './Form.css'

function Form({ onSubmit, image }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (image.title || image.url) {
      setTitle(image.title);
      setUrl(image.url)
    }
  }, [image.title]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ ...image, title, url });
    setTitle('');
    setUrl('');
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
        Url:
        <input type="text" value={url} onChange={e => setUrl(e.target.value)}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Form;