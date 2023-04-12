import {
  useForm,
  SubmitHandler,
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import GeneralInformations from "./GeneralInformations";
import Partner from "./Partner";
import EmergencyContact from "./EmergencyContact";

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
  emergencyContact: EmergencyContactProps;
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
    formState: { errors, isSubmitting },
  } = useForm<TherapeuticContractProps>();
  const onSubmit: SubmitHandler<TherapeuticContractProps> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GeneralInformations errors={errors} register={register} watch={watch} />
      <Partner errors={errors} register={register} watch={watch} />
      <EmergencyContact
        formNumber={1}
        errors={errors}
        register={register}
        watch={watch}
      />
      <EmergencyContact
        formNumber={2}
        errors={errors}
        register={register}
        watch={watch}
      />
    </form>
  );
}
