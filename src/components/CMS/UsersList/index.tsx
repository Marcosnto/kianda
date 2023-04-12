import users from "@/data/usersMock";

import {
  Badge,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function UsersList() {
  function getStatusBadge(status: string) {
    let colorScheme = "";

    switch (status.toLowerCase()) {
      case "ativo":
        colorScheme = "green";
        break;
      case "cancelado":
        colorScheme = "red";
        break;
      case "pausado":
        colorScheme = "purple";
        break;
      default:
        break;
    }

    return (
      <Badge variant="subtle" colorScheme={colorScheme}>
        {status}
      </Badge>
    );
  }

  return (
    <TableContainer>
      <Table variant="striped" size="sm" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Situação</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr>
              <Td>{user.name}</Td>
              <Td>{getStatusBadge(user.status)}</Td>
              <Td>Botoes</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nome</Th>
            <Th>Situação</Th>
            <Th>Ações</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
