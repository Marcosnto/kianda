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

export default function Partner({ errors, register }: FormReactHooksProps) {
  return (
    <>
      <Heading as="h2" size="md">
        Em caso de Cônjuge
      </Heading>
      <Divider />
      <FormControl isInvalid={!!errors.spouse?.fullName}>
        <FormLabel id="spouseFullName">Nome Completo</FormLabel>
        <Input
          id="spouseFullName"
          type="text"
          {...register("spouse.fullName", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.spouse?.fullName && errors.spouse?.fullName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.spouse?.bornDate}>
        <FormLabel htmlFor="spouseBornDate">Data de Nascimento</FormLabel>
        <Input
          id="spouseBornDate"
          type="date"
          {...register("spouse.bornDate", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.spouse?.bornDate && errors.spouse?.bornDate.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.spouse?.schooling}>
        <FormLabel htmlFor="spouseSchooling">Escolaridade</FormLabel>
        <Select
          id="spouseSchooling"
          placeholder="Select option"
          {...register("spouse.schooling", {
            required: "Esse Campo é obrigatório",
          })}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <FormErrorMessage>
          {errors.spouse?.schooling && errors.spouse?.schooling.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.spouse?.profession}>
        <FormLabel htmlFor="spouseProfession">Profissão</FormLabel>
        <Input
          id="spouseProfession"
          type="text"
          {...register("spouse.profession", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.spouse?.profession && errors.spouse?.profession.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.spouse?.contact}>
        <FormLabel htmlFor="spouseContact">Telefone de contato</FormLabel>
        <Input
          id="spouseContact"
          type="number"
          {...register("spouse.contact", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.spouse?.contact && errors.spouse?.contact.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.spouse?.email}>
        <FormLabel htmlFor="spouseEmail">E-mail</FormLabel>
        <Input
          id="spouseEmail"
          type="email"
          {...register("spouse.email", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.spouse?.email && errors.spouse?.email.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}
