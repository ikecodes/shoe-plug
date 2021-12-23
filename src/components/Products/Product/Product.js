import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Product.module.css';
import { addToCart } from '../../../actions/items';

const Product = ({ product: { image, name, price, id } }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.product}>
      <div className={classes.image__container}>
        <img src={image} alt='kfk' className={classes.product__image} />
      </div>
      <div className={classes.product__footer}>
        <h1>{name}</h1>
        <div className={classes.bottom}>
          <div>
            <button className={classes.btn} onClick={() => dispatch(addToCart(id))}>
              Add to Cart
            </button>
          </div>
          <div className={classes.price}>${price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
{
  /* image__container */
}