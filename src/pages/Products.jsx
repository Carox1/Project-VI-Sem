import { API } from "aws-amplify";
import Product from "../component/Product";
import ProductHeader from "../component/ProductHeader";
import styles from "../styles/products.module.css";
const Products = ({ data }) => {
  const apiName = "productapi";
  const path = "/pet";

  API.get(apiName, path)
    .then((response) => {
      console.log(response);
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
