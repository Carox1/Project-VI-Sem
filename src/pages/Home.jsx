import Category from "../component/Category";
import styles from "../styles/home.module.css";
import { Slider } from "../component/Slider";

const Home = ({ data }) => {
  const categories = [...new Set(data.map((item) => item.category))];
  
  return (
    <div className={styles.home}>
      <Slider />
      {categories.map((category) => {
        const categoryData = data.filter((item) => item.category === category);
        return (
          <Category className={styles.category} key={category} items={categoryData} category={category}/>
        );
      })}
    </div>
  );
};

export default Home;
