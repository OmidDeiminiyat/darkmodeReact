import React from 'react';
import LazyLoad from 'react-lazy-load';
import style from './gallery.module.scss';
const modules = import.meta.glob('./../../public/*.{jpg,png,jpeg}');

const Gallery = () => {
    const imagePaths = Object.keys(modules);


  return (
    <>
    <div className={style.gallery}>
      {imagePaths.map((imagePath, index) => (
        <LazyLoad key={index} height={200} width={200}>
          <img src={[imagePath]} alt={`Image ${index + 1}`} />
        </LazyLoad>
      ))}
    </div>
    </>
  );
};

export default Gallery;
