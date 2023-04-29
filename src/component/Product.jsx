import { Flex } from '@aws-amplify/ui-react';
import { Cards } from './Cards';


const Product = ({data}) => {
    console.log(data);
  return (
    <Flex direction="row" marginTop='5px' wrap="wrap">
        {data.map((item)=>
        <Cards key={item.id} item={item}/>)
        }
      
    </Flex>
  )
}

export default Product
