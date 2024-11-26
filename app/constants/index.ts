export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
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
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/elon-musk.png",
    name: "Elon Musk",
  },
  {
    image: "/assets/images/steve-jobs.png",
    name: "Steve Jobs",
  },
  {
    image: "/assets/images/linus-torvalds.png",
    name: "Linus Torvalds",
  },
  {
    image: "/assets/images/barack-obama.png",
    name: "Barack Obama",
  },
  {
    image: "/assets/images/bill-gates.png",
    name: "Bill Gates",
  },
  {
    image: "/assets/images/mark-zuckerberg.png",
    name: "Mark Zuckerberg",
  },
  {
    image: "/assets/images/jeff-bezos.png",
    name: "Jeff Bezos",
  },
  {
    image: "/assets/images/sundar-pichai.png",
    name: "Sundar Pichai",
  },
  {
    image: "/assets/images/tim-cook.png",
    name: "Tim Cook",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};