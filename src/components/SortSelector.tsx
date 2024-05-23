import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const [sortMethod, setSortMethod] = useState("Relevance");
  const allSortingMethods = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by: " + sortMethod}
      </MenuButton>
      <MenuList>
        {allSortingMethods.map((method) => (
          <MenuItem
            onClick={() => setSortMethod(method)}
            key={allSortingMethods.indexOf(method)}
          >
            {method}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
