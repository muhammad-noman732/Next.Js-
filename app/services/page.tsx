import Header from "@/components/Header";

// making dynamic to the static page
export const dynamic = "force-dynamic";
export default async function Services() {
  console.log("server is dynamic");
  const timestamp = new Date().toISOString();

  return (
    <>
      <Header />
      <div className="bg-green-500 min-h-screen  p-20">
        <h1 className="text-3xl texh-gray-800 "> Services page</h1>
        <p>we provide the services of the web and mobile </p>
        <p>timestams :{timestamp}</p>
      </div>
    </>
  );
}
