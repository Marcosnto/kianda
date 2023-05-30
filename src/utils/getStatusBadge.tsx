import { Badge } from "@chakra-ui/react";

export default function getStatusBadge(status: string) {
  let colorScheme = "";
  let statusName = "";

  switch (status.toLowerCase()) {
    case "publish":
      colorScheme = "blue";
      statusName = "Publicada";
      break;
    case "ativo":
      colorScheme = "blue";
      statusName = "Ativo";
      break;
    case "cancelado":
      colorScheme = "red";
      statusName = "Cancelado";
      break;
    case "pausado":
      colorScheme = "orange";
      statusName = "Pausado";
      break;
    case "draft":
      colorScheme = "gray";
      statusName = "Rascunho";
      break;
    default:
      break;
  }

  return (
    <Badge variant="subtle" colorScheme={colorScheme}>
      {statusName}
    </Badge>
  );
}
