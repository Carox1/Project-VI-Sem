import { TabItem, Tabs } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import styles from "../styles/profile.module.css";
import UserInfo from './UserInfo';
import Orders from './Orders';
import { API, Auth } from 'aws-amplify';

const Profile = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const getOrders = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);

      const response = await API.get('petPartnerAPI', `/orders/${currentUser.attributes.sub}`);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className={styles.profile}>
      <Tabs marginBottom={'20px'}>
        <TabItem title="User Info">
          <UserInfo />
        </TabItem>
        <TabItem title="My Orders">
          {data.length !== 0 ? 
            data.map((item) => (
              <Orders item={item} key={item.orderId} fetch={getOrders}/>
            ))
            :
            <span>No Orders to show</span>
          }
        </TabItem>
      </Tabs>
    </div>
  );
};

export default Profile;
