import { Box } from "@chakra-ui/react";
import { OptionsProps } from "@/data/menuOptionsPermitions";

export default function MenuOptions({
  icon,
  displayName,
  render,
}: OptionsProps): JSX.Element {
  return (
    <Box
      as="button"
      display="flex"
      gap="11px"
      alignItems="center"
      p="3"
      ml="4"
      mr="4"
    >
      {icon}
      {displayName}
    </Box>
  );
}
