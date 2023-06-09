import React, { useState, useEffect } from "react";
import styles from "../styles/categorypage.module.css";
import { Cards } from "../component/Cards";
import { API } from "aws-amplify";
import { useLocation } from "react-router-dom";

const CategoryPage = ({ items }) => {
  const category = useLocation().pathname.split("/")[2];
  console.log(category);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiName = "petPartnerAPI";
        const path = "/products";
        const myInit = {
          queryStringParameters: {
            category: category, // OPTIONAL
          },
        };

        const response = await API.get(apiName, path, myInit);
        setData(response);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>{category}</span>
      </div>
      <div className={styles.bottom}>
        {data.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
