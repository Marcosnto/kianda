import { Flex, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps): JSX.Element {
  function paginationButton(number: number) {
    return (
      <Button
        key={`page ${number}`}
        colorScheme="orange"
        variant={currentPage === number ? "solid" : "outline"}
        onClick={(e) => setCurrentPage(+e.target.innerText)}
      >
        {number}
      </Button>
    );
  }

  return (
    <Flex gap={2} justifyContent="center" mt="3">
      {[...Array(totalPages)].map((_, index) => paginationButton(index + 1))}
    </Flex>
  );
}

export default Pagination;
