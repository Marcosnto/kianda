import getStatusBadge from "@/utils/getStatusBadge";
import { TableListProps } from "@/helpers/CMS/types/user";
import { noDataToShow } from "@/helpers/CMS/messages";

import ButtonActions from "../Forms/ActionsButtons";
import Pagination from "../Pagination";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function TableList({
  data,
  headers,
  totalPages,
  currentPage,
  setCurrentPage,
}: TableListProps) {
  return (
    <>
      {data ? (
        <>
          <TableContainer>
            <Table variant="striped" size="sm" colorScheme="green">
              <Thead>
                <Tr>
                  {headers.map((header) => (
                    <Th key={header.key}>{header.name}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {data.map((user) => (
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
                  {headers.map((header) => (
                    <Th key={header.key}>{header.name}</Th>
                  ))}
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />{" "}
        </>
      ) : (
        <h1>{noDataToShow}</h1>
      )}
    </>
  );
}