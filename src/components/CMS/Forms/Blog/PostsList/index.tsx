import posts from "@/data/postsMocks";

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
import ButtonActions from "../../ButtonActions";

export default function PostsList() {
  function getStatusBadge(status: string) {
    let colorScheme = "";
    let statusName = "";

    switch (status.toLowerCase()) {
      case "1":
        colorScheme = "green";
        statusName = "Publicada";
        break;
      case "2":
        colorScheme = "blue";
        statusName = "Rascunho";
        break;
      default:
        break;
    }

    return (
      <Badge variant="subtle" colorScheme={colorScheme}>
        {statusName}
      </Badge>
    );
  }

  return (
    <TableContainer>
      <Table variant="striped" size="sm" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Título</Th>
            <Th>Descrição</Th>
            <Th>Situação</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post: any) => (
            <Tr
              key={post.id}
              onClick={() =>
                console.log("its me, hi, all the problem its me", post)
              }
            >
              <Td>{post.id}</Td>
              <Td>{post.title}</Td>
              <Td overflow="hidden" maxW="30ch" textOverflow="ellipsis">
                {post.description}
              </Td>
              <Td>{getStatusBadge(post.status)}</Td>
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
