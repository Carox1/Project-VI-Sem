import React from "react";
import styles from "../styles/footer.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_left}>
          <div className={styles.left_logo}>
          <h3 className={styles.fontlogo}>Pet Partner</h3>
          </div>
        </div>
        <div className={styles.footer_center}>
          <span className={styles.footerTitle}>Useful Links</span>
          <ul className={styles.list}>
            <li className={styles.underList}>Home</li>
            <li className={styles.underList}>Products</li>
            <li className={styles.underList}>Cart</li>
            <li className={styles.underList}>Whislist</li>
            <li className={styles.underList}>Track Orders</li>
            <li className={styles.underList}>My Profile</li>
          </ul>
        </div>
        <div className={styles.footer_right}>
          <span className={styles.footerTitle}>Contact Us</span>
          <div className={styles.contact}>
            <LocationOnIcon />
            <span>Solvenahalli,bangalore</span>
          </div>
          <div className={styles.contact}>
            <LocalPhoneIcon />
            <span>7355722358</span>
          </div>
          <div className={styles.contact}>
            <MailIcon />
            <span>petpartner@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>&copy; All Rights Reserved</div>
    </div>
  );
};

export default Footer;
