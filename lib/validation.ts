import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome deve conter pelo menos 2 caracteres")
    .max(50, "O nome deve conter no máximo 50 caracteres"),
  email: z.string().email("Endereço de email inválido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido"
    ),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome deve conter pelo menos 2 caracteres")
    .max(50, "O nome deve conter no máximo 50 caracteres"),
  email: z.string().email("Endereço de email inválido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido"
    ),
  birthDate: z.coerce.date(),
  gender: z.enum(["male", "female", "other"]),
  address: z
    .string()
    .min(5, "O endereço deve conter pelo menos 5 caracteres")
    .max(500, "O endereço deve conter no máximo 500 caracteres"),
  occupation: z
    .string()
    .min(2, "A ocupação deve conter pelo menos 2 caracteres")
    .max(500, "A ocupação deve conter no máximo 500 caracteres"),
  emergencyContactName: z
    .string()
    .min(
      2,
      "O nome do contato deve conter pelo menos 2 caracteres"
    )
    .max(
      50,
      "O nome do contato de emergência deve conter no máximo 50 caracteres"
    ),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Número de telefone inválido"
    ),
  primaryPhysician: z.string().min(1, "Selecione pelo menos um médico"),
  insuranceProvider: z
    .string()
    .min(2, "Seguro deve conter pelo menos 2 caracteres")
    .max(50, "Seguro deve conter no máximo 50 caracteres"),
  insurancePolicyNumber: z
    .string()
    .min(2, "O número da apólice deve conter pelo menos 2 caracteres")
    .max(50, "O número da apólice deve conter no máximo 50 caracteres"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Você deve aceitar o tratamento para prosseguir",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Você deve aceitar a divulgação para prosseguir",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Você deve aceitar a privacidade para prosseguir",
    }),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(1, "Selecione pelo menos um médico"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "O motivo deve conter pelo menos 2 caracteres")
    .max(500, "O motivo deve conter no máximo 500 caracteres"),
  note: z.string().optional(),
  cancelationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(1, "Selecione pelo menos um médico"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancelationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(1, "Selecione pelo menos um médico"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancelationReason: z
    .string()
    .min(2, "O motivo deve conter pelo menos 2 caracteres")
    .max(500, "O motivo deve conter no máximo 500 caracteres"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}
