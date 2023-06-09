import { useForm, SubmitHandler } from "react-hook-form";

import { TherapeuticContractProps } from "@/helpers/CMS/types/forms";

import GeneralInformations from "./GeneralInformations";
import FirstEmergencyContact from "./FirstEmergencyContact";
import SecondEmergencyContact from "./SecondEmergencyContact";
import Partner from "./Partner";

import { Box, Button, Divider, Heading, Stack } from "@chakra-ui/react";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TherapeuticContractProps>({
    mode: "onChange",
  });

  function post(data: TherapeuticContractProps) {
    fetch(process.env.NEXT_PUBLIC_BASE_URL + "/terapheutic-contract" || "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: data.fullName,
        bornDate: data.bornDate,
        rg: data.rg,
        cpf: data.cpf,
        email: data.email,
        contact: data.contact,
        address: data.address,
        schooling: data.schooling,
        profession: data.profession,
        ethnicity: data.ethnicity,
        sexualOrientation: data.sexualOrientation,
        pronouns: data.pronouns,
        gender: data.gender,
        otherGender: data.otherGender,
        civilStatus: data.civilStatus,
        childrens: data.childrens,
        religion: data.religion,
        disabledPerson: data.disabledPerson,
        disabledPersonDescription: data.disabledPersonDescription,
        needSuitability: data.needSuitability,
        spouse: JSON.stringify(data.spouse),
        firstEmergencyContact: JSON.stringify(data.firstEmergencyContact),
        secondEmergencyContact: JSON.stringify(data.secondEmergencyContact),
      }),
    }).then((response) => {
      response.json().then((response) => console.log(response));
    });
  }

  const onSubmit: SubmitHandler<TherapeuticContractProps> = (data) => {
    if (!!errors) {
      post(data);
    }
  };

  const watched = watch(["civilStatus"]);

  return (
    <>
      <Heading textAlign="center" mb="10" as="h1" size="xl">
        Contrato Terapêutico
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDir="column" gap="7">
          <Divider />
          <GeneralInformations
            errors={errors}
            register={register}
            watch={watch}
          />

          {Number(watched[0]) === 2 ? (
            <>
              <Divider />
              <Partner errors={errors} register={register} watch={watch} />
            </>
          ) : null}
          <Divider />

          <FirstEmergencyContact
            errors={errors}
            register={register}
            watch={watch}
          />
          <Divider />

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
