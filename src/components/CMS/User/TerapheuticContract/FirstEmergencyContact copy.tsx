import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { FormReactHooksProps } from ".";

export default function FirstEmergencyContact({
  errors,
  register,
}: FormReactHooksProps) {
  return (
    <>
      <Heading as="h2" size="md">
        Contato de Emergência 1
      </Heading>
      <Divider />

      <FormControl
        isInvalid={!!errors.firstEmergencyContact?.fullName}
        isRequired
      >
        <FormLabel id="firstEmergencyContactFullName">Nome Completo</FormLabel>
        <Input
          id="firstEmergencyContactFullName"
          type="text"
          {...register("firstEmergencyContact.fullName", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.firstEmergencyContact?.fullName &&
            errors.firstEmergencyContact?.fullName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.firstEmergencyContact?.address}>
        <FormLabel htmlFor="firstEmergencyContactAddress">Endereço</FormLabel>
        <Input
          id="firstEmergencyContactAddress"
          type="text"
          {...register("firstEmergencyContact.address", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.firstEmergencyContact?.address &&
            errors.firstEmergencyContact?.address.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.firstEmergencyContact?.contact}>
        <FormLabel htmlFor="firstEmergencyContactContact">
          Telefone de contato
        </FormLabel>
        <Input
          id="firstEmergencyContactContact"
          type="number"
          {...register("firstEmergencyContact.contact", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.firstEmergencyContact?.contact &&
            errors.firstEmergencyContact?.contact.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.firstEmergencyContact?.email}>
        <FormLabel htmlFor="firstEmergencyContactEmail">E-mail</FormLabel>
        <Input
          id="firstEmergencyContactEmail"
          type="email"
          {...register("firstEmergencyContact.email", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.firstEmergencyContact?.email &&
            errors.firstEmergencyContact?.email.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}
