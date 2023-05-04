import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
import React from "react";
import { Cards } from "./Cards";

const Category = ({ data }) => {
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
        <Heading level={4}>Medicine</Heading>
        <Button size="small" width="80px" variation='primary'>
          View All
        </Button>
      </Flex>

      <Flex direction="row" width="100%" wrap="nowrap">
        {data.map((item) => (
          <Cards item={item} />
        ))}
      </Flex>
    </View>
  );
};

export default Category;
