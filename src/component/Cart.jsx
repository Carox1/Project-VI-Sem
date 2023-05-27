import React from 'react'
import styles from "../styles/cart.module.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    console.log(cart);

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-Shirt",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt maiores sint ratione, perferendis labore eligendi iste nam aspernatur ad ducimus quibusdam expedita eaque eveniet cum dolorum animi iure aliquid adipisci",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt maiores sint ratione, perferendis labore eligendi iste nam aspernatur ad ducimus quibusdam expedita eaque eveniet cum dolorum animi iure aliquid adipisci",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ]
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Products in your Cart</h1>
          {data?.map(item => (
              <div className={styles.items} key={item.id}>
                  <img className={styles.img} src={item.img} alt="" />
                  <div className={styles.details}>
                      <h1 className={styles.details_title}>{item.title}</h1>
                      <p className={styles.details_desc}>{item.desc.substring(0, 100)}</p>
                      <div className={styles.price}>
                          1 x ${item.price}
                      </div>
                  </div>
                  <DeleteOutlinedIcon className="delete"/>
              </div>
          ))}
          <div className={styles.total}>
              <span>SUBTOTAL</span>
              <span>$123</span>
          </div>
          <button className={styles.button}>PROCEED TO CHECKOUT</button>
          <span className={styles.reset}>Reset Cart</span>
    </div>
  )
}

export default Cart