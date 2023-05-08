import { Box } from "@chakra-ui/react";
import { OptionsProps } from "@/data/menuOptionsPermitions";

interface MenuOptionsProps extends OptionsProps {
  setCurrentComponent: (render: any) => void;
  onClose?: () => void;
}

export default function MenuOptions({
  icon,
  displayName,
  render,
  setCurrentComponent,
  onClose,
}: MenuOptionsProps): JSX.Element {
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
        setCurrentComponent(render);
        onClose && onClose();
      }}
    >
      {icon}
      {displayName}
    </Box>
  );
}
