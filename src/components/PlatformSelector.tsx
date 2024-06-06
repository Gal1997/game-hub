import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platformId?: number) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {data?.results.find((platform) => platform.id === selectedPlatformId)
          ?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem key={0} onClick={() => onSelectPlatform(undefined)}>
          All Platforms
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
