import React from 'react'
import './ImageOverlay.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function ImageOverlay({ children, onDelete, onEdit }) {
  return (<div className="ImageOverlay">
      <div className="ImageOverlay-toolbar">
        <FontAwesomeIcon className="ImageOverlay-icon" icon={faEdit} onClick={onEdit}/>
        <FontAwesomeIcon className="ImageOverlay-icon" icon={faTrash} onClick={onDelete}/>
      </div>
      {children}
    </div>
  )
}

export default ImageOverlay