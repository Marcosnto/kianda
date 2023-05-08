import {
  Badge,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import ButtonActions from "../../Form/ActionsButtons";
import { useEffect, useState } from "react";
import Pagination from "../../Pagination";
import ArticleSkeleton from "@/components/Global/ArticleSkeleton";

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
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    get();
  }, [currentPage]);

  function getStatusBadge(status: string) {
    let colorScheme = "";
    let statusName = "";

    switch (status.toLowerCase()) {
      case "publish":
        colorScheme = "blue";
        statusName = "Publicada";
        break;
      case "draft":
        colorScheme = "gray";
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

  function setNumberOfPages(totalPageFromResponse: string | null) {
    if (totalPageFromResponse) {
      const totalPages = Math.ceil(+totalPageFromResponse / 5);
      setTotalPages(totalPages);
    }
  }

  function get() {
    setLoading(true);
    fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/articles?_page=${currentPage}` || "",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      setNumberOfPages(response.headers.get("X-Total-Count"));
      response.json().then((response) => setPosts(response));
      setLoading(false);
    });
  }

  if (loading) {
    return <ArticleSkeleton />;
  }

  return (
    <>
      <TableContainer>
        <Table variant="striped" size="sm" colorScheme="green">
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
        </Table>
      </TableContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
