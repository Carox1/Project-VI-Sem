import React from 'react';
import styles from '../styles/orders.module.css';
import { Button, Divider } from '@aws-amplify/ui-react';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { API } from 'aws-amplify';

const Orders = ({ item, fetch }) => {

  const onDelete = (id) => {
    API.del('petPartnerAPI', `/orders/${id}`)
    .then((response) => {
      console.log('Deleted Successfully');
      fetch()
    })
    .catch((error) => {
      console.log(error.response);
    });
  };

  return (
    <div className={styles.orders}>
      <span className={styles.orderId}>#{item.orderId}</span>
      <Divider margin={'5px 0'} />
      <>
        {item.cart &&
          item.cart.products.map((prod) => (
            <div key={prod.id}>
              <span className={styles.title}>{prod.title}</span>
              <div className={styles.wrapper}>
                <div className={styles.left}>
                  <span className={styles.quantity}>
                    <b>Quantity: </b> {prod.quantity}
                  </span>
                  <div className={styles.info}>
                    <div className={styles.color} />
                    <span className={styles.size}>
                      <b>/</b> {prod.age} Month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className={styles.right}>
          <span className={styles.total}>${item.cart.total}</span>
          <Button
            width={'150px'}
            gap={'10px'}
            size="small"
            onClick={() => onDelete(item.orderId)}
          >
            <span>Cancel Order</span> <DeleteOutlineRoundedIcon />
          </Button>
        </div>
      </>
    </div>
  );
};

export default Orders;
