import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import { SearchField } from "@aws-amplify/ui-react";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Product from "./Product";

const Navbar = ({isOpen, setIsOpen}) => {
  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  console.log(isOpen);
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
        />
      </div>
      <div className={styles.navbar_right}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon fontSize="medium" color="action" />
        </Badge>
        <AccountCircleOutlinedIcon fontSize="large" />
        <button onClick={handleClick}>Click here</button>
      </div>
      {
       isOpen && <Product isOpen={isOpen}/>
      }
    </div>
    </div>
  );
};

export default Navbar;