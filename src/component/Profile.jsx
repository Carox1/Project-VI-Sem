import { TabItem, Tabs } from '@aws-amplify/ui-react'
import {useState} from 'react'
import styles from "../styles/profile.module.css";
import UserInfo from './UserInfo';
import Orders from './Orders';
import { API } from 'aws-amplify';

const Profile = () => {
const [data, setData] = useState([])

  const getOrders = () => {
    API.get('petPartnerApi', '/orders').then((response) => (
      setData(response)
    ))
  }

  console.log(data);

  return (
    <div className={styles.profile}>
      <Tabs marginBottom={'20px'}>
        <TabItem title="User Info">
          <UserInfo />
        </TabItem>
        <TabItem title="My Orders">
          {data.map((item) => {
            <Orders item={item}/>
          })}
        </TabItem>
      </Tabs>
    </div>
  )
}

export default Profile