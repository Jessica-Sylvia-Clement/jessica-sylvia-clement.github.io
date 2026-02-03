import React from "react";
import { Helmet } from "react-helmet-async";
import About from "./About";


function Home() {
  return (
    <>
      <main className="w-full mx-auto">
        <section aria-label="About Section">
          <About />
        </section>
      </main>
    </>
  );
}

export default Home;
