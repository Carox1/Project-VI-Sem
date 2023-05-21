import React, { useState } from "react";
import styles from "../styles/profile.module.css";
import { Auth } from "aws-amplify";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const logCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setName(user.attributes["custom:name"]);
      setEmail(user.attributes.email);
      setPhone(user.attributes["custom:phone"]);
      setGender(user.attributes["custom:gender"]);
      setAddress(user.attributes["custom:address"]);
    } catch (error) {
      console.log("Error getting current user: ", error);
    }
  };

  logCurrentUser();

  return (
    <div className={styles.profile}>
      <div className={styles.summary}>
        <div className={styles.left}>
          <img
            src="https://images.pexels.com/photos/16767753/pexels-photo-16767753/free-photo-of-woman-posing-in-black-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className={styles.img}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.name}>Vikas Singh ({gender})</div>
          <div className={styles.email}>{email}</div>
          <div className={styles.phone}>9090909090</div>
          </div>
          <div/>
      </div>
      <div className={styles.userInfo}>
      <table className={styles.table}>
            <tbody>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Address:</th>
                    <td className={styles.table_data}>Strada Vulcan 59, Brașov, România</td>
                </tr>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Phone:</th>
                    <td className={styles.table_data}>{phone}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
