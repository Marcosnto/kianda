import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormReactHooksProps } from ".";

export default function SecondEmergencyContact({
  errors,
  register,
}: FormReactHooksProps) {
  const [input, setInput] = useState();

  const handleInputChange = (e: any) => setInput(e.target.value);

  return (
    <>
      <Heading as="h2" size="md">
        Contato de Emergência 2
      </Heading>
      <Divider />

      <FormControl
        isInvalid={!!errors.secondEmergencyContact?.fullName}
        isRequired
      >
        <FormLabel id="secondEmergencyContactFullName">Nome Completo</FormLabel>
        <Input
          id="secondEmergencyContactFullName"
          type="text"
          {...register("secondEmergencyContact.fullName", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.secondEmergencyContact?.fullName &&
            errors.secondEmergencyContact?.fullName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.secondEmergencyContact?.address}>
        <FormLabel htmlFor="secondEmergencyContactAddress">Endereço</FormLabel>
        <Input
          id="secondEmergencyContactAddress"
          type="text"
          {...register("secondEmergencyContact.address", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.secondEmergencyContact?.address &&
            errors.secondEmergencyContact?.address.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.secondEmergencyContact?.contact}>
        <FormLabel htmlFor="secondEmergencyContactContact">
          Telefone de contato
        </FormLabel>
        <Input
          id="secondEmergencyContactContact"
          type="number"
          {...register("secondEmergencyContact.contact", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.secondEmergencyContact?.contact &&
            errors.secondEmergencyContact?.contact.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.secondEmergencyContact?.email}>
        <FormLabel htmlFor="secondEmergencyContactEmail">E-mail</FormLabel>
        <Input
          id="secondEmergencyContactEmail"
          type="email"
          {...register("secondEmergencyContact.email", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.secondEmergencyContact?.email &&
            errors.secondEmergencyContact?.email.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}