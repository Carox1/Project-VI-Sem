import {
  SelectField,
  Menu,
  MenuButton,
  MenuItem,
  Icon,
  Flex,
} from "@aws-amplify/ui-react";
import React from "react";

const ProductHeader = () => {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      alignContent="flex-end"
      wrap="nowrap"
      gap="1rem"
    >
      <SelectField defaultValue="All" width="170px">
        <option value="All" disabled>
          All Categories
        </option>
        <option value="Gromming">Gromming</option>
        <option value="Medicine">Medicine</option>
        <option value="Dogs">Dogs</option>
      </SelectField>

      <Menu
        trigger={
          <MenuButton variation="primary" size="medium" width="120px">
             <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      alignContent="flex-end"
      wrap="nowrap"
      gap="1rem"
    >
            <Icon
              viewBox={{
                width: 12,
                height: 12,
              }}
              ariaLabel="Thumbs up"
              pathData="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
            <span>Filter</span>
            </Flex>
          </MenuButton>
        }
      >
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
      </Menu>
    </Flex>
  );
};

export default ProductHeader;
