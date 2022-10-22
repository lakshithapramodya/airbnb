import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function search() {
  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="font-semibold text-3xl">Stay in London</h1>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default search;