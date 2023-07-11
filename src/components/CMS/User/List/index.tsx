import { useState } from "react";
import { useQuery } from "react-query";

import setNumberOfPages from "@/utils/setNumberOfPages";
import { apiError } from "@/helpers/CMS/messages";

import ArticleSkeleton from "@/components/Global/ArticleSkeleton";
import TableList from "../../Table";
import ComponentTitle from "../../Title";
import { useCookies } from "react-cookie";

export default function UsersList() {
  const [totalPages, setTotalPages] = useState<number | undefined>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cookies] = useCookies(["token"]);
  const tableHeaders = [
    { name: "ID", key: "User-ID" },
    { name: "Nome", key: "User-Name" },
    { name: "Cadastro", key: "User-Status" },
    { name: "Ações", key: "User-Actions" },
  ];

  const { data, isLoading, error } = useQuery(["usersList", currentPage], () =>
    fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/users?_page=${currentPage}` || "",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        const totalItens = res.headers.get("X-Total-Count");
        setTotalPages(setNumberOfPages(totalItens));
        return res.json();
      } else {
        throw new Error("Ocorreu um erro ao obter os dados");
      }
    })
  );

  if (isLoading) {
    return <ArticleSkeleton />;
  }

  if (error) {
    return <h1>{apiError}</h1>;
  }

  return (
    <>
      <ComponentTitle title="Pacientes" type="h1" />
      <TableList
        data={data}
        headers={tableHeaders}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
