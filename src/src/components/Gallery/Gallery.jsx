import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const designs = [
    {
      title: 'Elegant Saree Draping',
      img: require('../../assets/gallery1.png'),
      tag: 'Traditional'
    },
    {
      title: 'Bridal Blouse Design',
      img: require('../../assets/gallery2.png'),
      tag: 'Bridal'
    },
    {
      title: 'Custom Men Kurta',
      img: require('../../assets/gallery3.png'),
      tag: 'Festive'
    },
    {
      title: 'Kids Wear Frock',
      img: require('../../assets/gallery4.png'),
      tag: 'Kids'
    },
    {
      title: 'Designer Gown',
      img: require('../../assets/gallery5.png'),
      tag: 'Western'
    },
    {
      title: 'Embroidered Kurti',
      img: require('../../assets/gallery6.png'),
      tag: 'Casual'
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-title">Our <span>Creations</span> ✨</h2>
      <p className="gallery-sub">A glimpse into the world of our stitches and styles 👗</p>

      <div className="gallery-grid">
        {designs.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt={item.title} className="gallery-img" />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p className="tag">{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;