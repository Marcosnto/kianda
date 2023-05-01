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
import ButtonActions from "../../Form/ButtonActions";
import { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  author: string;
  description: string;
  content: string;
  status: string;
  image: any;
  imageDescription: string;
  imageSub: string;
};

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    get();
  }, []);

  function getStatusBadge(status: string) {
    let colorScheme = "";
    let statusName = "";

    switch (status.toLowerCase()) {
      case "publish":
        colorScheme = "green";
        statusName = "Publicada";
        break;
      case "draft":
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

  function get(data: Article) {
    fetch(process.env.NEXT_PUBLIC_BASE_URL + "/articles" || "", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.headers.get("X-Total-Count"));
      response.json().then((response) => setPosts(response));
    });
  }

  return (
    <TableContainer>
      <Table variant="striped" size="sm" colorScheme="orange">
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
          {posts?.map((post: Article) => (
            <Tr key={post.id}>
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
