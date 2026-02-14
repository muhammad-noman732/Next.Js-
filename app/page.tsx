import Header from "@/components/Header";

export default async function Home() {
  return (
    <>
      <Header />
      <div className="bg-green-900 min-h-screen  p-20">
        <h1 className="text-3xl texh-gray-800 "> Home page</h1>
        <p>welcome to our website</p>
      </div>
    </>
  );
}
