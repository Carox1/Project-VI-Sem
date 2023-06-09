import { API } from "aws-amplify";
import {useState} from 'react'
import Product from "../component/Product";
import ProductHeader from "../component/ProductHeader";
import styles from "../styles/products.module.css";
const Products = () => {
  const [data, setData] = useState([])
  const apiName = "petPartnerAPI";
  const path = "/products";

  API.get(apiName, path)
    .then((response) => {
      console.log(response);
      setData(response)
    })
    .catch((error) => {
      console.log(error.response);
    });

  return (
    <div className={styles.productheader}>
      <ProductHeader />
      <Product data={data} />
    </div>
  );
};
export default Products;
