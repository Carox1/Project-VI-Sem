import { useEffect } from 'react';
import Category from '../component/Category';
import styles from '../styles/home.module.css';
import { Slider } from '../component/Slider';
import { API } from 'aws-amplify';

const Home = ({ data }) => {
  useEffect(() => {
    const apiName = 'productapi';
    const path = '/pet';

    const getfunc = () => {
      API.get(apiName, path)
        .then((response) => {
          console.log(response);
          // Add your code here
        })
        .catch((error) => {
          console.log(error.response);
        });
    };

    getfunc();
  }, []);

  return (
    <div className={styles.home}>
      <Slider />
      <Category className={styles.category} data={data} />
      <Category className={styles.category} data={data} />
      <Category className={styles.category} data={data} />
    </div>
  );
};

export default Home;
