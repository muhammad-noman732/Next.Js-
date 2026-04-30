import React from "react";

function ServiceItem({ serviceName }: { serviceName: string }) {
  if (typeof window === "undefined") {
    console.log("Running ServiceItem as a server component");
  } else {
    console.log("Running ServiceItem as a client component");
  }
  return (
    <li>
      <p>ServiceItem (server component)</p>
      {serviceName}
    </li>
  );
}

export default ServiceItem;
