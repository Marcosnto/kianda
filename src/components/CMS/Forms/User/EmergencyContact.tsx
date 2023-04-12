import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormReactHooksProps } from ".";

interface EmergencyContact extends FormReactHooksProps {
  formNumber: number;
}

export default function EmergencyContact({
  formNumber,
  errors,
  register,
}: EmergencyContact) {
  const [input, setInput] = useState();

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  return (
    <>
      <Heading as="h1" size="lg">
        Contato de Emergência {`(${formNumber})`}
      </Heading>
      <Divider />

      <FormControl isInvalid={!!errors.emergencyContact?.fullName} isRequired>
        <FormLabel id="emergencyContactFullName">Nome Completo</FormLabel>
        <Input
          id="emergencyContactFullName"
          type="text"
          {...register("emergencyContact.fullName", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.emergencyContact?.fullName &&
            errors.emergencyContact?.fullName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.emergencyContact?.address}>
        <FormLabel htmlFor="emergencyContactAddress">
          Telefone de contato
        </FormLabel>
        <Input
          id="emergencyContactAddress"
          type="number"
          {...register("emergencyContact.address", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.emergencyContact?.address &&
            errors.emergencyContact?.address.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.emergencyContact?.contact}>
        <FormLabel htmlFor="emergencyContactContact">
          Telefone de contato
        </FormLabel>
        <Input
          id="emergencyContactContact"
          type="number"
          {...register("emergencyContact.contact", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.emergencyContact?.contact &&
            errors.emergencyContact?.contact.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.emergencyContact?.email}>
        <FormLabel htmlFor="emergencyContactEmail">E-mail</FormLabel>
        <Input
          id="emergencyContactEmail"
          type="email"
          {...register("emergencyContact.email", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.emergencyContact?.email &&
            errors.emergencyContact?.email.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}
