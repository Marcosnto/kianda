import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";

export type RegisterProps = {
  fullName: string;
  email: string;
  emailCheck: string;
  password: string;
  passwordCheck: string;
  bornDate: Date;
  gender: string;
  otherGender?: string;
  disabledPerson: string;
  disabledPersonDescription?: string;
  acceptTerm: boolean;
};

export type SpouseProps = {
  fullName?: string;
  bornDate?: string;
  schooling?: string;
  contact?: string;
  profession?: string;
  email?: string;
};

export type EmergencyContactProps = {
  fullName: string;
  address: string;
  contact: string;
  email: string;
};

export type TherapeuticContractProps = {
  fullName: string;
  bornDate: Date;
  rg: string;
  cpf: string;
  ethnicity: string;
  gender: string;
  sexualOrientation: string;
  otherGender?: string;
  disabledPerson: string;
  disabledPersonDescription?: string;
  needSuitability?: string;
  suitabilityDescription: string;
  religion?: string;
  schooling?: string;
  profession?: string;
  pronouns: string;
  address: string;
  contact: string;
  email: string;
  childrens: string;
  childrenQuantity: number;
  civilStatus: number;
  spouse: SpouseProps;
  firstEmergencyContact: EmergencyContactProps;
  secondEmergencyContact: EmergencyContactProps;
};

export type FormReactHooksProps = {
  errors: FieldErrors<TherapeuticContractProps>;
  register: UseFormRegister<TherapeuticContractProps>;
  watch: UseFormWatch<TherapeuticContractProps>;
};
