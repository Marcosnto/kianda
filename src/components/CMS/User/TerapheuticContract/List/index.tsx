import { useState } from "react";
import { useQuery } from "react-query";

import setNumberOfPages from "@/utils/setNumberOfPages";
import { apiError } from "@/helpers/CMS/messages";

import TableList from "@/components/CMS/Table";
import ArticleSkeleton from "@/components/Global/ArticleSkeleton";

export default function TerapheuticContractsList() {
  const [totalPages, setTotalPages] = useState<number | undefined>(1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const tableHeaders = [
    { name: "ID", key: "TC-ID" },
    { name: "Nome", key: "TC-Name" },
    { name: "Status", key: "TC-Status" },
    { name: "Ações", key: "TC-Actions" },
  ];

  const { data, isLoading, error } = useQuery(
    ["terapheuticContractsList", currentPage],
    () =>
      fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/contracts?_page=${currentPage}` ||
          "",
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
    return <h1>{apiError}</h1>;
  }

  return (
    <TableList
      data={data}
      headers={tableHeaders}
      totalPages={totalPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}
