import { ServicesPage } from "@/components/services/ServicesPage";

type ServicesRouteProps = {
  searchParams?: Promise<{
    service?: string | string[];
  }>;
};

export default async function Services({ searchParams }: ServicesRouteProps) {
  const params = searchParams ? await searchParams : undefined;
  const serviceParam = Array.isArray(params?.service)
    ? params.service[0]
    : params?.service;

  return (
    <ServicesPage
      initialService={serviceParam ?? null}
      key={serviceParam ?? "all-services"}
    />
  );
}
