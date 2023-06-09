import { MenuProps } from "@/helpers/CMS/types/components";

import MenuOptions from "./MenuOptions";
import { Divider, Flex, Heading } from "@chakra-ui/react";

import { admin } from "@/data/menuOptionsPermitions";

export default function Menu({ setCurrentComponent, onClose }: MenuProps) {
  return (
    <Flex flexDir="column" pt="4">
      {admin.users ? (
        <Heading as="h3" size="sm" noOfLines={1} ml="3" mt="8">
          Pacientes
        </Heading>
      ) : null}

      {admin.users?.map((option) => (
        <MenuOptions
          key={option.key}
          icon={option.icon}
          render={option.render}
          setCurrentComponent={setCurrentComponent}
          onClose={onClose}
          displayName={option.displayName}
        />
      ))}

      {admin.users ? (
        <>
          <Divider mt="8" />
          <Heading as="h3" size="sm" noOfLines={1} ml="3" mt="8">
            Blog
          </Heading>
        </>
      ) : null}
      {admin.blog?.map((option) => (
        <MenuOptions
          key={option.key}
          icon={option.icon}
          render={option.render}
          setCurrentComponent={setCurrentComponent}
          onClose={onClose}
          displayName={option.displayName}
        />
      ))}
    </Flex>
  );
}
