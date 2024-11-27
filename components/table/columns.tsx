"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "../StatusBadge";
import { formatDateTime } from "@/lib/utils";
import { Doctors } from "@/app/constants";
import Image from "next/image";
import AppointmentModal from "../AppointmentModal";
import { Appointment } from "@/types/appwrite.types";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "patient",
    header: "Paciente",
    cell: ({ row }) => (
      <p className="text-14-medium">{row.original.patient.name}</p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="min-w-[115px]">
        <StatusBadge status={row.original.status} />
      </div>
    ),
  },
  {
    accessorKey: "schedule",
    header: "Agendamento",
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[100px]">
        {formatDateTime(row.original.schedule).dateTime}
      </p>
    ),
  },
  {
    accessorKey: "primaryPhysician",
    header: () => "Profissional",
    cell: ({ row }) => {
      const doctor = Doctors.find(
        (doctor) => doctor.name === row.original.primaryPhysician
      );
      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image}
            width={100}
            height={100}
            alt={doctor?.name}
            className="size-8 rounded-full"
          />
          <p className="whitespace-nowrapp">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },
  ,
  {
    id: "actions",
    header: () => <div className="pl-4">Ações</div>,
    cell: ({ row: { original: data } }) => {
      return (
        <div className="flex gap-1">
          <AppointmentModal
            type="schedule"
            patientId={data.patient.$id}
            userId={data.userId}
            appointment={data}
          />
          <AppointmentModal
            type="cancel"
            patientId={data.patient.$id}
            userId={data.userId}
            appointment={data}
          />
        </div>
      );
    },
  },
];
