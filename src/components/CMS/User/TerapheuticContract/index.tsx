import {
  useForm,
  SubmitHandler,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import GeneralInformations from "./GeneralInformations";
import Partner from "./Partner";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import FirstEmergencyContact from "./FirstEmergencyContact copy";
import SecondEmergencyContact from "./SecondEmergencyContact";

type SpouseProps = {
  fullName?: string;
  bornDate?: string;
  schooling?: string;
  contact?: string;
  profession?: string;
  email?: string;
};

type EmergencyContactProps = {
  fullName: string;
  address: string;
  contact: string;
  email: string;
};

type TherapeuticContractProps = {
  fullName: string;
  bornDate: Date;
  rg: string;
  cpf: string;
  ethnicity: string;
  gender: string;
  disabledPerson: boolean;
  needSuitability?: boolean;
  religion?: string;
  schooling?: string;
  profession?: string;
  address: string;
  contact: string;
  email: string;
  childrens: number;
  civilStatus: string;
  spouse: SpouseProps;
  firstEmergencyContact: EmergencyContactProps;
  secondEmergencyContact: EmergencyContactProps;
};

export type FormReactHooksProps = {
  errors: FieldErrors<TherapeuticContractProps>;
  register: UseFormRegister<TherapeuticContractProps>;
  watch: UseFormWatch<TherapeuticContractProps>;
};

export default function UserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TherapeuticContractProps>();
  const onSubmit: SubmitHandler<TherapeuticContractProps> = (data) =>
    console.log(data);

  return (
    <>
      <Heading textAlign="center" mb="10" as="h1" size="xl">
        Contrato Terapêutico
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDir="column" gap="7">
          <GeneralInformations
            errors={errors}
            register={register}
            watch={watch}
          />
          <Partner errors={errors} register={register} watch={watch} />
          <FirstEmergencyContact
            errors={errors}
            register={register}
            watch={watch}
          />
          <SecondEmergencyContact
            errors={errors}
            register={register}
            watch={watch}
          />
          <Stack
            direction="row"
            spacing={4}
            align="center"
            justifyContent="space-around"
            mt="6"
            mb="8"
          >
            <Button colorScheme="green" variant="outline" type="reset">
              Cancelar
            </Button>
            <Button colorScheme="green" variant="solid" type="submit">
              Salvar
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
}
