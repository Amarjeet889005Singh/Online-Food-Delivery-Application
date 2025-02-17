import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

// eslint-disable-next-line react/prop-types
const FoodItem = ({id,name,price,description,image}) => {
    
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);

  return (
    <div className='food-item'>
       <div className='food-item-image-container'>
           <img className='food-item-image' src={image}></img>
           {!cartItems[id]
                ?<img className='add'  onClick={()=> addToCart(id)} src={assets.add_icon_white}></img>
                :<div className='food-item-counter'>
                     <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}></img>
                     <p>{cartItems[id]}</p>
                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green}></img>
                </div>
           }
       </div>
       <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts}></img>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
       </div>
    </div>
  )
}

export default FoodItem
