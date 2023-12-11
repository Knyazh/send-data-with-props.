import React, { useState } from 'react';
import './cart.css';

const ProductCart = (props) => {
  const { id, image, title, description, price } = props.data;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className='cart'>
      <div className="cart-imag">
        {
            price < 20 ? <span>For Sale</span> : <span style={{ backgroundColor: 'green' }}>New Arrival</span>
        }
        <img src={image} alt="" />
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
