import React from 'react'

export const GifGridItem = ( {title, url} ) => {
    // console.log( props );
  return (
    <div className="card animate__animated animate__bounceInUp">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
