import { Divider, Flex, Heading, MenuDivider } from "@chakra-ui/react";
import MenuOptions from "../MenuOptions";
import { admin } from "@/data/menuOptionsPermitions";
import { ReactElement } from "react";

export default function Menu({ setCurrentComponent }: any) {
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
      {admin.blog.map((option) => (
        <MenuOptions
          key={option.key}
          icon={option.icon}
          render={option.render}
          setCurrentComponent={setCurrentComponent}
          displayName={option.displayName}
        />
      ))}
    </Flex>
  );
}
