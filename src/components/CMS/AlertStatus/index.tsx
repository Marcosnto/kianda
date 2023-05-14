import { AlertStatusProps } from "@/helpers/CMS/types/components";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";

function AlertStatus({ type, title, description }: AlertStatusProps) {
  return (
    <Alert status={type} display="flex" flexDir="column">
      {title && (
        <Flex>
          {" "}
          <AlertIcon />
          <AlertTitle>{title}</AlertTitle>
        </Flex>
      )}
      <AlertDescription>
        <Flex>
          {!title && <AlertIcon />}
          {description}
        </Flex>
      </AlertDescription>
    </Alert>
  );
}

export default AlertStatus;
