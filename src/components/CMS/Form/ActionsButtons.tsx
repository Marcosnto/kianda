import { IconButton, Stack } from "@chakra-ui/react";
import {
  IoArchiveOutline,
  IoCreateOutline,
  IoTrashOutline,
} from "react-icons/io5";

export default function ButtonActions() {
  function getIconButton(
    ariaLabel: string,
    icon: React.ReactElement,
    onClick: () => void
  ) {
    return (
      <IconButton
        w="8"
        h="8"
        fontSize="18"
        variant="outline"
        aria-label={ariaLabel}
        icon={icon}
        onClick={onClick}
        border="solid 1px #35481E"
        _hover={{ bg: "green.600", rounded: "8px", color: "white" }}
      />
    );
  }

  return (
    <Stack spacing={2} direction="row">
      {getIconButton("Criar Artigo", <IoCreateOutline />, () =>
        console.log("icon1")
      )}
      {getIconButton("Remover Artigo", <IoTrashOutline />, () =>
        console.log("icon2")
      )}
      {getIconButton("Arquivar artigo", <IoArchiveOutline />, () =>
        console.log("icon3")
      )}
    </Stack>
  );
}
