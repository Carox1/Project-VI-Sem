import Product from "../component/Product";
import ProductHeader from "../component/ProductHeader";
import styles from "../styles/products.module.css";
const Products = ({data}) => {
  return (
    <div className={styles.productheader}>
    <ProductHeader/>
      <Product data={data} />
    </div>
  );
};
export default Products;
