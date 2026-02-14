import Header from "@/components/Header";

function DynamicMain() {
  console.log("this is the dynamic page ");

  return (
    <>
      <Header />
      <div>this is the main page</div>
    </>
  );
}

export default DynamicMain;
