export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Carteira de Identidade",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Carteira de Identidade",
  "Carteira de Motorista",
  "Certidão de Nascimento",
  "Passaporte",
  "Carteira de Registro de Estrangeiro (RNE)",
  "Cartão/Apólice de Seguro de Saúde",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Elon Musk",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Mark Zuckerberg",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Bill Gates",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Jeff Bezos",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Larry Page",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Sergey Brin",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Tim Cook",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Satya Nadella",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Sundar Pichai",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};