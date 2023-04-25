import React from "react";
import {
  StepperField,
  Button,
  Flex,
  Heading,
  Text,
} from "@aws-amplify/ui-react";
import styles from "../styles/product.module.css";

const Product = ({isOpen}) => {
console.log(isOpen);
  return (
    <div className={styles.container}>
      <div className={`${styles.product} ${!isOpen ? '' : styles.active}`}>
      <div className={styles.productTop}>
        <div className={styles.imageset}>
          <img
            src="https://images.pexels.com/photos/4587982/pexels-photo-4587982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className={styles.headimg}
          />
        </div>
      </div>
      <div className={styles.productBottom}>
        <div className={styles.productInfo}>
          <div className={styles.productDetail}>
            <Heading level={2} fontWeight={350}> Bull Dog</Heading>
            <Text
              fontSize="1.5em"
              lineHeight="1.5em"
              fontWeight={300}
              color="secondary"
            >
              $50
            </Text>
            <Text
              fontSize="1.2em"
              lineHeight="1.5em"
              fontWeight={500}
              color="secondary"
            >
              Age: 3 Months
            </Text>
            <div className={styles.productInfoColor}>
              <div className={styles.productColor} style={{backgroundColor:'red'}}></div>
              <div className={styles.productColor} style={{backgroundColor:"black"}}></div>
              <div className={styles.productColor} style={{backgroundColor:"brown"}}></div>
            </div>
          </div>
          <div className={styles.productCart}>
            <Flex
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              alignContent="flex-start"
              wrap="nowrap"
              gap="1rem"
            >
              <StepperField max={10} min={1} step={1} size="medium" label="" />
              <Button variation="primary" size="small">
                Add to cart
              </Button>
            </Flex>
          </div>
        </div>
        <div className={styles.productDesc}>
        <Heading level={4} fontWeight={400}>Description:</Heading>

            <Text
              fontSize="1.2em"
              lineHeight="1.5em"
              fontWeight={500}
              color="secondary"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, quaerat officiis ut quidem, sint illum voluptatum animi corporis aspernatur delectus reprehenderit dicta veniam earum aliquid quam aliquam expedita. Nisi, accusamus.
            </Text>
            </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
