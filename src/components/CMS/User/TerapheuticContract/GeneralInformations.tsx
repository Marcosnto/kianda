import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  RadioGroup,
  Stack,
  Radio,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { FormReactHooksProps } from ".";

export default function GeneralInformations({
  errors,
  register,
  watch,
}: FormReactHooksProps) {
  return (
    <>
      <Heading as="h2" size="md">
        Informações Gerais
      </Heading>
      <Divider />
      <FormControl isInvalid={!!errors.fullName} isRequired>
        <FormLabel htmlFor="fullName">Nome Completo</FormLabel>

        <Input
          id="fullName"
          type="text"
          {...register("fullName", {
            required: "Esse Campo é obrigatório",
          })}
        />

        <FormErrorMessage>
          {errors.fullName && errors.fullName.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.bornDate} isRequired>
        <FormLabel htmlFor="bornDate">Data de Nascimento</FormLabel>
        <Input
          id="bornDate"
          type="date"
          {...register("bornDate", {
            required: "Esse Campo é obrigatório",
          })}
        />

        <FormErrorMessage>
          {errors.bornDate && errors.bornDate.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.rg} isRequired>
        <FormLabel htmlFor="rg">RG</FormLabel>
        <Input
          id="rg"
          type="number"
          {...register("rg", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>{errors.rg && errors.rg.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.cpf} isRequired>
        <FormLabel htmlFor="cpf">CPF</FormLabel>
        <Input
          id="cpf"
          type="number"
          {...register("cpf", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>{errors.cpf && errors.cpf.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.ethnicity} isRequired>
        <FormLabel htmlFor="ethnicity">Cor ou Raça/Etnia</FormLabel>
        <Input
          id="ethnicity"
          type="text"
          {...register("ethnicity", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.ethnicity && errors.ethnicity.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.gender} isRequired>
        <FormLabel htmlFor="gender">Gênero</FormLabel>
        <RadioGroup id="gender">
          <Stack direction="row">
            <Radio
              value="1"
              {...register("gender", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Cis
            </Radio>
            <Radio
              value="2"
              {...register("gender", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Trans
            </Radio>
            <Radio
              value="3"
              {...register("gender", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Outro
            </Radio>
          </Stack>
        </RadioGroup>

        {/* <Input type="text" /> */}
        <FormErrorMessage>
          {errors.gender && errors.gender.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.disabledPerson} isRequired>
        <FormLabel htmlFor="disabledPerson">
          É uma pessoa com deficiência?
        </FormLabel>
        <RadioGroup id="disabledPerson">
          <Stack direction="row">
            <Radio
              value="1"
              {...register("disabledPerson", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Sim
            </Radio>
            <Radio
              value="2"
              {...register("disabledPerson", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Não
            </Radio>
          </Stack>
        </RadioGroup>

        {/* <Input type="text" /> */}
        <FormErrorMessage>
          {errors.disabledPerson && errors.disabledPerson.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.needSuitability} isRequired>
        <FormLabel htmlFor="needSuitability">
          Precisa de adequações quanto a infraestrutura online?
        </FormLabel>
        <RadioGroup id="needSuitability">
          <Stack direction="row">
            <Radio
              value="1"
              {...register("needSuitability", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Sim
            </Radio>
            <Radio
              value="2"
              {...register("needSuitability", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Não
            </Radio>
          </Stack>
        </RadioGroup>

        {/* <Input type="text" /> */}
        <FormErrorMessage>
          {errors.needSuitability && errors.needSuitability.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.religion}>
        <FormLabel htmlFor="religion">Religião</FormLabel>
        <Input
          id="religion"
          type="text"
          {...register("religion", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.religion && errors.religion.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.schooling}>
        <FormLabel htmlFor="schooling">Escolaridade</FormLabel>
        <Select
          id="schooling"
          placeholder="Select option"
          {...register("schooling", {
            required: "Esse Campo é obrigatório",
          })}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <FormErrorMessage>
          {errors.schooling && errors.schooling.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.profession}>
        <FormLabel htmlFor="profession">Profissão</FormLabel>
        <Input
          id="profession"
          type="text"
          {...register("profession", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.profession && errors.profession.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.address}>
        <FormLabel htmlFor="address">Telefone de contato</FormLabel>
        <Input
          id="address"
          type="number"
          {...register("address", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.address && errors.address.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.childrens} isRequired>
        <FormLabel htmlFor="childrens">Filho/a/e(s)</FormLabel>
        <RadioGroup id="childrens">
          <Stack direction="row">
            <Radio
              value="1"
              {...register("childrens", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Sim
            </Radio>
            <Radio
              value="2"
              {...register("childrens", {
                required: "Esse Campo é obrigatório",
              })}
            >
              Não
            </Radio>
          </Stack>
        </RadioGroup>

        {/* <Input type="text" /> */}
        <FormErrorMessage>
          {errors.childrens && errors.childrens.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.civilStatus}>
        <FormLabel htmlFor="civilStatus">Estado Civil</FormLabel>
        <Input
          id="civilStatus"
          type="text"
          {...register("civilStatus", {
            required: "Esse Campo é obrigatório",
          })}
        />
        <FormErrorMessage>
          {errors.civilStatus && errors.civilStatus.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}
