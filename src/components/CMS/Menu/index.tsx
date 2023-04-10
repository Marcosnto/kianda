import { Flex } from "@chakra-ui/react";
import MenuOptions from "../MenuOptions";
import { admin } from "@/data/menuOptionsPermitions";

export default function Menu() {
  return (
    <Flex flexDir="column" pt="4">
      {admin.options.map((option) => (
        <MenuOptions
          key={option.key}
          icon={option.icon}
          displayName={option.displayName}
        />
      ))}
    </Flex>
  );
}
