import Post from "@/components/CMS/Forms/Blog/Post";
import PostsList from "@/components/CMS/Forms/Blog/PostsList";
import UserForm from "@/components/CMS/Forms/User";
import UsersList from "@/components/CMS/UsersList";
import { Icon } from "@chakra-ui/react";
import {
  IoPeopleOutline,
  IoBookOutline,
  IoDocumentTextOutline,
  IoFolderOutline,
} from "react-icons/io5";

export type OptionsProps = {
  key: string;
  icon: JSX.Element;
  displayName: string;
  render?: JSX.Element;
};

export type userOptions = {
  type: string;
  users: Array<OptionsProps>;
  blog: Array<OptionsProps>;
};

function getIcon(iconName: any) {
  return <Icon as={iconName} w="5" h="5" />;
}

export const admin: userOptions = {
  type: "admin",
  users: [
    {
      key: "user-admin-01",
      icon: getIcon(IoBookOutline),
      displayName: "Cadastrar Paciente",
      render: <UserForm />,
    },
    {
      key: "user-admin-02",
      icon: getIcon(IoPeopleOutline),
      displayName: "Listar Pacientes",
      render: <UsersList />,
    },
  ],
  blog: [
    {
      key: "blog-admin-01",
      icon: getIcon(IoDocumentTextOutline),
      displayName: "Escrever Artigo",
      render: <Post />,
    },
    {
      key: "blog-admin-02",
      icon: getIcon(IoFolderOutline),
      displayName: "Lista de Artigos",
      render: <PostsList />,
    },
  ],
};
