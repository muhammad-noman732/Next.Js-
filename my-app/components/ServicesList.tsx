"use client";

function ServicesList({ children }: { children: React.ReactNode }) {
  //   const services: string[] = [
  //     "web development",
  //     "mobile app development",
  //     "consulting marketing ",
  //     "digital marketing",
  //   ];

  return (
    <>
      <h1>All Services</h1>
      <ul>
        {/* {services.map((service) => (
          <ServiceItem key={service} serviceName={service} />
        ))} */}

        {children}
      </ul>
    </>
  );
}

export default ServicesList;
