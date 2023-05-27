import { useState } from 'react'
import styles from "../styles/navbar.module.css";
import { SearchField, Button } from "@aws-amplify/ui-react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Cart from './Cart';
import { useSelector } from 'react-redux';
import Profile from './Profile'

const Navbar = ({ signOut }) => {
  const [open, setOpen] = useState(false)
  const [profile, setProfile] = useState(false)
  const quantity = useSelector(state => state.cart.quantity)

  const handleClick = () => {
    setProfile(false)
    setOpen(!open)
  }

  const handleProfile = () => {
    setOpen(false)
    setProfile(!profile)
  }

  console.log(open);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar_left}>
          <h3 className={styles.fontlogo}>Pet Partner</h3>
        </div>
        <div className={styles.navbar_center}>
          <SearchField
            placeholder="Search here..."
            size="medium"
            hasSearchButton={false}
            hasSearchIcon={true}
            labelHidden={false}
            borderRadius='16px'
            variation='quiet'
            width='85%'
          />
        </div>
        <div className={styles.navbar_right}>
          <Badge badgeContent={quantity} color="primary" onClick={handleClick}>
            <ShoppingCartOutlinedIcon fontSize="medium" color="action" />
          </Badge >
          <Badge onClick={handleProfile}>
            <AccountCircleOutlinedIcon fontSize="large" />
          </Badge>
          <Button loadingText="Logging" onClick={signOut}>
            LogOut
          </Button>
        </div>
      </div>
      {
        open && <Cart />
      }
      {
        profile && <Profile />
      }
    </div>
  );
};

export default Navbar;
