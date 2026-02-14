"use client";
import Header from "@/components/Header";

export default function About() {
  console.log("about page");

  // this will cause the hydration error as the html on the client is different from the html generated on the server
  // here window is undefined in the server file so it will return this and send this to browser and browse will paint this and now as in the browser window is the undefined it wrong so there browser will exevute the below return so this is the mismatch and bad user exprience

  // if (typeof window === "undefined") {
  //   return (
  //     <div>
  //       this is the hydration issue as this run different contnent on the client
  //       from the generated on the server
  //     </div>
  //   );
  // }

  return (
    <>
      <Header />
      <div className="bg-green-900 min-h-screen  p-20">
        <h1 className="text-3xl texh-gray-800 "> About page</h1>
        <p>we are the best </p>
        {/* <p>{Date.now()}</p> */}
        {/* <p>{Math.random()}</p> */}
      </div>
    </>
  );
}
