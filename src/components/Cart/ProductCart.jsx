import React, { useState } from 'react';
import './cart.css';

const ProductCart = (props) => {
  const { images, title, description, price } = props.data;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='cart'>
      <div className="cart-imag" onClick={showNextImage}>
        {
          price < 20 ? <span>For Sale</span> : <span style={{ backgroundColor: 'green' }}>New Arrival</span>
        }
        <img src={images[currentImageIndex]} alt="" />
      </div>
      <div className="cart-content">
        <h5>{title}</h5>
        <p onClick={toggleDescription}>
          {showFullDescription ? description : description.slice(0, 50) + '...'}
        </p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCart;
