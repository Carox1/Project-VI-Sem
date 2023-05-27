import { TabItem, Tabs } from '@aws-amplify/ui-react'
import styles from "../styles/profile.module.css";
import React from 'react'
import UserInfo from './UserInfo';
import Orders from './Orders';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Tabs marginBottom={'20px'}>
        <TabItem title="User Info">
          <UserInfo />
        </TabItem>
        <TabItem title="My Orders">
          <Orders />
          <Orders />
        </TabItem>
      </Tabs>
    </div>
  )
}

export default Profile