import React from 'react'

function ProjectItem({image, name, url}) {
  const handleClick = () => {
    window.open(url, '_blank');
  }

    return (
      <div className='projectItem' onClick={handleClick}>
        <div style = {{backgroundImage : `url(${image})`}} className='bgImage' />
        <h1>{name}</h1>
      </div>
    )
  }

export default ProjectItem
