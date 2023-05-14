import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { OptionsProps } from "./mocks";

export type AvatarMenuProps = {
  icon: React.ReactElement;
  content: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type AlertStatusProps = {
  type: "info" | "warning" | "success" | "error" | "loading";
  title?: string;
  description: string;
};

export type HeaderCMSProps = {
  setCurrentComponent: Dispatch<SetStateAction<JSX.Element>>;
};

export type DrawnerMenu = {
  onClose: () => void;
  isOpen: boolean;
  setCurrentComponent: Dispatch<SetStateAction<JSX.Element>>;
};

export type MenuProps = {
  setCurrentComponent: Dispatch<SetStateAction<JSX.Element>>;
  onClose?: () => void;
};

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export interface MenuOptionsProps extends OptionsProps {
  setCurrentComponent: Dispatch<SetStateAction<JSX.Element>>;
  onClose?: () => void;
}

export type LogoImage = {
  pathRedirect: string;
};
