import Product from "../component/Product";
import ProductHeader from "../component/ProductHeader";
import { data } from "../Data/data";
import styles from "../styles/products.module.css";
const Products = () => {
  return (
    <div className={styles.productheader}>
    <ProductHeader/>
      <Product data={data} />
    </div>
  );
};
export default Products;
