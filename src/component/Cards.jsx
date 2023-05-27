import {
  Card,
  Image,
  View,
  Heading,
  Flex,
  Badge,
  useTheme,
  Rating,
} from "@aws-amplify/ui-react";
import "../styles/cards.css";
import { Link } from "react-router-dom";
export const Cards = ({ item }) => {
  const { tokens } = useTheme();

  return (
    <View
      backgroundColor={tokens.colors.background.secondary}
      padding={tokens.space.medium}
    >
      <Link className="link" to={`/product/${item.id}`}>
        <Card width="200px">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap"
          >
            <Image
              alt="Road to milford sound"
              src={item.img}
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
                  {item.gender}
                </Badge>
                <Badge size="small" variation="success">
                  {item.age} Month
                </Badge>
              </Flex>

              <Heading level={5}>{item.name}</Heading>

              <Rating
                value={item.rating}
                maxValue={5}
                fillColor="hsl(38, 100%, 62%)"
                emptyColor="hsl(210, 5%, 94%)"
              />
            </Flex>
          </Flex>
        </Card>
      </Link>
    </View>
  );
};
