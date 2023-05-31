import { userOptions } from "@/helpers/CMS/types/mocks";

import Post from "@/components/CMS/Forms/Blog/Post";
import PostsList from "@/components/CMS/Blog/List";
import UserForm from "@/components/CMS/Forms/User/TerapheuticContract";
import UsersList from "@/components/CMS/User/List";

import { Icon } from "@chakra-ui/react";
import {
  IoPeopleOutline,
  IoBookOutline,
  IoDocumentTextOutline,
  IoFolderOutline,
} from "react-icons/io5";

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
