import { Badge } from "@chakra-ui/react";

export default function getStatusBadge(status: string) {
  let colorScheme = "";
  let statusName = "";

  switch (status.toLowerCase()) {
    /** Articles */
    case "publish":
      colorScheme = "blue";
      statusName = "Publicada";
      break;
    case "draft":
      colorScheme = "gray";
      statusName = "Rascunho";
      break;

    /** User Status */
    case "ativo":
      colorScheme = "blue";
      statusName = "Ativo";
      break;
    case "suspenso":
      colorScheme = "red";
      statusName = "Suspenso";
      break;
    case "aguardando aprovação":
      colorScheme = "orange";
      statusName = "Aguardando Aprovação";
      break;

    /** Contract Status */
    case "complete":
      colorScheme = "blue";
      statusName = "Completo";
      break;
    case "incomplete":
      colorScheme = "red";
      statusName = "Incompleto";
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
