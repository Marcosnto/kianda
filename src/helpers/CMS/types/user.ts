import { Dispatch, SetStateAction } from "react";

export type UserProps = {
  id: number;
  type?: number;
  name: string;
  registerStatus: string;
};

export type TableHeadersProps = {
  name: string;
  key: string;
};

export type TableListProps = {
  data: Array<UserProps>;
  headers: Array<TableHeadersProps>;
  totalPages: number | undefined;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
