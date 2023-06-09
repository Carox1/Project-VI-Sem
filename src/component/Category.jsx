import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
import React from "react";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";

const Category = ({ items, category }) => {
  console.log(items);
  return (
    <View
    as='div'
    backgroundColor='rgba(255,255,255, 0.7)'
    padding='20px 30px'
    
      direction="column"
      alignItems="flex-end"
      alignContent="flex-start"
      wrap="nowrap"
      
    >
      <Flex justifyContent="space-between" width="100%" marginBottom='20px'>
        <Heading level={4}>{category}</Heading>
        <Link to={`/category/${category}`}>
        <Button size="small" width="80px" variation='primary'>
          View All
        </Button>
        </Link>
      </Flex>

      <Flex direction="row" width="100%" wrap="nowrap">
          {items.map(item => 
            <Cards key={item.prodId} item={item}/>
            )
            }
      </Flex>
    </View>
  );
};

export default Category;
