import { Flex } from '@aws-amplify/ui-react';
import { Cards } from '../component/Cards';
import {data} from '../Data/data'

const Products = () => {
    console.log(data);
  return (
    <Flex direction="row" marginTop='5px'>
        {data.map((item)=>
        <Cards key={item.id} id={item.id} name={item.name} age={item.age} img={item.img} desc={item.description} gender={item.gender} rating={item.rating}/>)
        }
      
    </Flex>
  )
}

export default Products
