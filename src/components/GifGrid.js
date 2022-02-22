// import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  //
  const { data:images, loading } = useFetchGifs(category);

  //   getGifs();

  return (
    <>
      <h3 className='card animate__animated animate__bounceInUp' >{category}</h3>

        {/* {loading ? <p> Cargando </p> : null} */}
        {loading && <p className = 'card animate__animated animate__flash' > Cargando </p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            // img={img}
            {...img}
          />
        ))}
      </div>
    </>
  );
};
