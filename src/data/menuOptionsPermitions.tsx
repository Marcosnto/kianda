import { userOptions } from "@/helpers/CMS/types/mocks";

import Post from "@/components/CMS/Forms/Blog/Post";
import PostsList from "@/components/CMS/Blog/List";
import UserForm from "@/components/CMS/Forms/User/TerapheuticContract";
import UsersList from "@/components/CMS/User/List";

import { Icon } from "@chakra-ui/react";
// eslint-disable-next-line import/named
import { IconType } from "react-icons";
import {
  IoPeopleOutline,
  IoBookOutline,
  IoDocumentTextOutline,
  IoFolderOutline,
  IoBodyOutline,
} from "react-icons/io5";
import TerapheuticContractsList from "@/components/CMS/User/TerapheuticContract/List";
import UserRegister from "@/components/CMS/Forms/User/Register";

function getIcon(iconName: IconType) {
  return <Icon as={iconName} w="5" h="5" />;
}

export const admin: userOptions = {
  type: "admin",
  users: [
    {
      key: "user-admin-01",
      icon: getIcon(IoBodyOutline),
      displayName: "Cadastrar Paciente",
      render: <UserRegister />,
    },
    {
      key: "user-admin-02",
      icon: getIcon(IoPeopleOutline),
      displayName: "Listar Pacientes",
      render: <UsersList />,
    },
    {
      key: "user-admin-03",
      icon: getIcon(IoBookOutline),
      displayName: "Contratos Terapéuticos",
      render: <TerapheuticContractsList />,
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
      displayName: "Listar Artigos",
      render: <PostsList />,
    },
  ],
};
