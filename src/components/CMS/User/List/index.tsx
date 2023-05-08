import users from "@/data/usersMock";

import {
  Badge,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import ButtonActions from "../../Form/ActionsButtons";

export default function UsersList() {
  function getStatusBadge(status: string) {
    let colorScheme = "";

    switch (status.toLowerCase()) {
      case "ativo":
        colorScheme = "blue";
        break;
      case "cancelado":
        colorScheme = "red";
        break;
      case "pausado":
        colorScheme = "orange";
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
      <Table variant="striped" size="sm" colorScheme="green">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Título</Th>
            <Th>Cadastro</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{getStatusBadge(user.status)}</Td>
              <Td>
                <ButtonActions />
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>ID</Th>
            <Th>Nome</Th>
            <Th>Situação</Th>
            <Th>Ações</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
