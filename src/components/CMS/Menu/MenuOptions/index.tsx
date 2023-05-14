import { MenuOptionsProps } from "@/helpers/CMS/types/components";
import { Box } from "@chakra-ui/react";

export default function MenuOptions({
  icon,
  displayName,
  render,
  setCurrentComponent,
  onClose,
}: MenuOptionsProps) {
  return (
    <Box
      _hover={{ bg: "green.600", rounded: "8px", color: "white" }}
      as="button"
      display="flex"
      gap="11px"
      alignItems="center"
      p="3"
      ml="4"
      mr="4"
      mt="2"
      onClick={() => {
        setCurrentComponent(render || <></>);
        onClose && onClose();
      }}
    >
      {icon}
      {displayName}
    </Box>
  );
}
