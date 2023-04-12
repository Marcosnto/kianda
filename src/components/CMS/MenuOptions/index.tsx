import { Box } from "@chakra-ui/react";
import { OptionsProps } from "@/data/menuOptionsPermitions";

interface MenuOptionsProps extends OptionsProps {
  setCurrentComponent: (render: any) => void;
}

export default function MenuOptions({
  icon,
  displayName,
  render,
  setCurrentComponent,
}: MenuOptionsProps): JSX.Element {
  return (
    <Box
      as="button"
      display="flex"
      gap="11px"
      alignItems="center"
      p="3"
      ml="4"
      mr="4"
      onClick={() => setCurrentComponent(render)}
    >
      {icon}
      {displayName}
    </Box>
  );
}
