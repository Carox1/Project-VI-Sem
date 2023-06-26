import React from 'react';
import styles from "../styles/cart.module.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, resetCart } from '../redux/cartRedux';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const redirect = useNavigate()
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    console.log(cart);

    const deleteItem = (productId) => {
        dispatch(removeProduct({ productId }));
    };

    const handleCheckout = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            console.log(user);
            const amount = cart.total;

            const data = await fetch('http://localhost:5555/razorpay', {
                method: 'POST',
                body: JSON.stringify({ amount }), // Pass amount in the request body
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((t) => t.json());

            console.log(data);

            const options = {
                // key: 'rzp_live_UTxAbdghList7p',
                key: 'rzp_test_JKF1DFL4zhVRpb',
                currency: data.currency,
                amount: data.amount,
                description: 'Wallet Transaction',
                img: 'https://i.imgur.com/G6sWWqH.png',
                order_id: data.id,
                customer: {
                    name: 'Gaurav',
                    email: 'test@razorpay.com',
                },
                handler: function (response) {
                    const orderData = {
                        body: {
                            orderId: response.razorpay_order_id,
                            custId: user.attributes.sub,
                            custName: user.attributes.name,
                            custPhone: user.attributes.phone_number,
                            cart: cart,
                            status: 'Pending',
                            address: user.attributes['custom:address'],
                            paymentId: response.razorpay_payment_id,
                        },
                    };

                    API.post('petPartnerAPI', '/orders', orderData)
                        .then((response) => {
                            console.log(response);
                            redirect('/');
                            dispatch(resetCart());
                        })
                        .catch((error) => {
                            console.log(error.response);
                        });
                },
                name: 'Vikas Singh',
                email: 'test@razorpay.com',
                contact: '123456789',
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.log(error);
        }
    };

    const handleResetCart = () => {
        dispatch(resetCart());
    };

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Products in your Cart</h1>
            {cart.products?.map((item) => (
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
            <button className={styles.button} onClick={handleCheckout}>
                PROCEED TO CHECKOUT
            </button>
            <span className={styles.reset} onClick={handleResetCart}>
                Reset Cart
            </span>
        </div>
    );
};

export default Cart;
