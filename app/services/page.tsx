import ServiceItem from "@/components/ServiceItem";
import ServicesList from "@/components/ServicesList";
import ServicesListFromData from "@/components/ServicesListFromData";

// making dynamic to the static page
export const dynamic = "force-dynamic";
export default async function Services() {
  console.log("server is dynamic");
  // const timestamp = new Date().toISOString();

  const services: string[] = [
    "web development",
    "mobile app development",
    "consulting marketing ",
    "digital marketing",
  ];

  return (
    <>
      <div className="bg-green-500 min-h-screen  p-20">
        <h1 className="text-3xl texh-gray-800 "> Services page</h1>
        <p>we provide the services of the web and mobile </p>
        {/* <ServicesList /> */}

        <h2 className="text-xl font-semibold mt-6">
          Server-mapped list (server children inside client wrapper)
        </h2>
        <ServicesList>
          {services.map((service) => (
            <ServiceItem key={service} serviceName={service} />
          ))}
        </ServicesList>

        <ServicesListFromData services={services} />

        {/* <p>timestams :{timestamp}</p> */}
      </div>
    </>
  );
}
