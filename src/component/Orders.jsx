import React from 'react'
import styles from '../styles/orders.module.css'
import { Button, Divider } from '@aws-amplify/ui-react'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
const Orders = () => {
  return (
    <div className={styles.orders}>
      <span className={styles.orderId}>#45ed45</span>
      <Divider margin={'5px 0'} />
      <span className={styles.title}>Bull Dog</span>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.quantity}><b>Quantity: </b> 2</span>
          <div className={styles.info}>
            <div className={styles.color} />
            <span className={styles.size}><b>/</b> 3 Month</span>
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.total}>$45</span>
          <Button width={'150px'} gap={'10px'} size='small'><span>Cancel Order</span> <DeleteOutlineRoundedIcon /></Button>
          <Button width={'150px'} gap={'10px'} size='small'><span>Track Order</span> <DeleteOutlineRoundedIcon /></Button>
        </div>
      </div>
    </div>
  )
}

export default Orders