import React, { useState } from "react";
import {
  StepperField,
  Button,
  Flex,
  Heading,
  Text,
} from "@aws-amplify/ui-react";
import styles from "../styles/product.module.css";
import { API } from "aws-amplify";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({});
  const handleCart = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  const location = useLocation().pathname.split("/")[2];


  API.get('petPartnerAPI', `/products/${location}`)
    .then((response) => {
      setProduct(response);
    })
    .catch((error) => {
      console.log(error.response);
    });

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.productLeft}>
          <div className={styles.imageset}>
            <img
              src={product.img}
              alt=""
              className={styles.headimg}
            />
          </div>
        </div>
        <div className={styles.productRight}>
          <div className={styles.productInfo}>
            <div className={styles.productDetail}>
              <Heading level={2} fontWeight={350}>
                {" "}
                {product.title}
              </Heading>
              <Text
                fontSize="1.5em"
                lineHeight="1.5em"
                fontWeight={300}
                color="secondary"
              >
                ${parseInt(product.price)}
              </Text>
              <Text
                fontSize="1.2em"
                lineHeight="1.5em"
                fontWeight={500}
                color="secondary"
              >
                Age: {product.age} Months
              </Text>
              <div className={styles.productInfoColor}>
                <div
                  className={styles.productColor}
                  style={{ backgroundColor: "red" }}
                ></div>
                <div
                  className={styles.productColor}
                  style={{ backgroundColor: "black" }}
                ></div>
                <div
                  className={styles.productColor}
                  style={{ backgroundColor: "brown" }}
                ></div>
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
                <StepperField
                  max={10}
                  min={1}
                  step={1}
                  size="medium"
                  label=""
                  width="150px"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Button
                  variation="primary"
                  size="small"
                  width="150px"
                  onClick={handleCart}
                >
                  Add to cart
                </Button>
              </Flex>
            </div>
          </div>
          <div className={styles.productDesc}>
            <Heading level={4} fontWeight={400}>
              Description:
            </Heading>

            <Text
              fontSize="1.2em"
              lineHeight="1.5em"
              fontWeight={500}
              color="secondary"
            >
              {product.desc}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
