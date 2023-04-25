import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  Text,
  useTheme,
  Rating,
} from '@aws-amplify/ui-react';
import "../styles/cards.css";
import Product from './Product'
export const Cards = (props) => {
  const { tokens } = useTheme();
  const handleClick = () => {
    <Product/>
  }
  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
      <Card onClick={handleClick}>

        <Flex 
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap">
          <Image
            alt="Road to milford sound"
            src={props.img}
            height="75%"
            width="75%"
            objectFit="initial"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
            gap={tokens.space.xs}
          >
            <Flex>
              <Badge size="small" variation="info">
                {props.gender}
              </Badge>
              <Badge size="small" variation="success">
                {props.age} Month
              </Badge>
            </Flex>

            <Heading level={5}>
              {props.name}
            </Heading>

            <Rating
  value={props.rating}
  maxValue={5}
  fillColor="hsl(38, 100%, 62%)"
  emptyColor="hsl(210, 5%, 94%)"
  />
          </Flex>
        </Flex>
      </Card>
    </View>
  );
};