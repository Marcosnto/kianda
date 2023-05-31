import { useState } from "react";
import { useQuery } from "react-query";

import ButtonActions from "../../Forms/ActionsButtons";
import Pagination from "../../Pagination";
import ArticleSkeleton from "@/components/Global/ArticleSkeleton";

import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Article } from "@/helpers/CMS/types/blog";
import getStatusBadge from "@/utils/getStatusBadge";
import setNumberOfPages from "@/utils/setNumberOfPages";

export default function PostsList() {
  const [totalPages, setTotalPages] = useState<number | undefined>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data, isLoading, error } = useQuery(["blogList", currentPage], () =>
    fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/articles?_page=${currentPage}` || "",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      const totalItens = res.headers.get("X-Total-Count");
      setTotalPages(setNumberOfPages(totalItens));
      return res.json();
    })
  );

  if (isLoading) {
    return <ArticleSkeleton />;
  }

  if (error) {
    return <h1>Ocorreu um erro, entre em contato com o suporte</h1>;
  }

  return (
    <>
      {data ? (
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
                {data?.map((post: Article) => (
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
          />{" "}
        </>
      ) : (
        <h1>Não há dados para serem exibidos</h1>
      )}
    </>
  );
}
