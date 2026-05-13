export const serviceIds = [
  "clinical-examination",
  "therapy",
  "vaccination",
  "sample-collection",
  "surgery",
  "dentistry",
  "microchipping",
  "radiology",
  "laboratory-diagnostics",
  "instrumental-diagnostics",
  "ultrasound",
  "veterinary-passport",
] as const;

export type ServiceId = (typeof serviceIds)[number];

type ServiceGroupDefinition = {
  id: string;
  serviceIds: ServiceId[];
};

export const serviceGroups: ServiceGroupDefinition[] = [
  {
    id: "everyday-care",
    serviceIds: ["clinical-examination", "vaccination"],
  },
  {
    id: "diagnostics",
    serviceIds: [
      "sample-collection",
      "laboratory-diagnostics",
      "instrumental-diagnostics",
      "radiology",
      "ultrasound",
    ],
  },
  {
    id: "treatment-procedures",
    serviceIds: ["therapy", "surgery", "dentistry"],
  },
  {
    id: "documents-registration",
    serviceIds: ["microchipping", "veterinary-passport"],
  },
];

export function isServiceId(value?: string | null): value is ServiceId {
  return serviceIds.includes(value as ServiceId);
}

export function getServiceIndex(value?: string | null) {
  return serviceIds.findIndex((serviceId) => serviceId === value);
}

export function getServiceGroupIndex(value?: string | null) {
  if (!isServiceId(value)) {
    return -1;
  }

  return serviceGroups.findIndex((group) => group.serviceIds.includes(value));
}

export function getServicesForGroup(groupIndex: number) {
  return serviceGroups[groupIndex]?.serviceIds ?? [];
}
