import React from 'react';
import styles from "../styles/cart.module.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, resetCart } from '../redux/cartRedux';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

console.log(cart);

    const deleteItem = (productId) => {
        dispatch(removeProduct({ productId }));
    };

    const handleResetCart = () => {
        dispatch(resetCart());
    };

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Products in your Cart</h1>
            {cart.products?.map(item => (
                <div className={styles.items} key={item.id}>
                    <img className={styles.img} src={item.img} alt="" />
                    <div className={styles.details}>
                        <h1 className={styles.details_title}>{item.title}</h1>
                        <p className={styles.details_desc}>{item.desc}</p>
                        <div className={styles.price}>
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <button onClick={() => deleteItem(item.id)}>
                        <DeleteOutlinedIcon className="delete" />
                    </button>
                </div>
            ))}
            <div className={styles.total}>
                <span>SUBTOTAL</span>
                <span>${cart.total}</span>
            </div>
            <button className={styles.button}>PROCEED TO CHECKOUT</button>
            <span className={styles.reset} onClick={handleResetCart}>Reset Cart</span>
        </div>
    );
}

export default Cart;
