import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function search() {
  const router = useRouter();
  router.query;
  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for 5 number of guests</p>
          <h1 className="font-semibold text-3xl mt-2 mb-6">Stay in London</h1>

          <div className="space-x-6 hidden md:inline-flex mb-5 text-gray-800 whitespace-nowrap">
            <p className="btn">Cancelation Flexibility</p>
            <p className="btn">Type of place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default search;
