import {useState} from 'react'
import styles from "../styles/navbar.module.css";
import { SearchField, Button } from "@aws-amplify/ui-react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Cart from './Cart';

const Navbar = ({signOut}) => {
  const [open, setOpen] = useState(false)

const handleClick = ()=> {
  setOpen(!open)
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
          <Badge badgeContent={4} color="primary" onClick={handleClick}>
            <ShoppingCartOutlinedIcon fontSize="medium" color="action" />
          </Badge>
          <AccountCircleOutlinedIcon fontSize="large" />
          <Button loadingText="Logging" onClick={signOut}>
            LogOut
          </Button>
        </div>
      </div>
        {
          open && <Cart/>
        }
    </div>
  );
};

export default Navbar;
