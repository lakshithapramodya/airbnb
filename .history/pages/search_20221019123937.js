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
          <h1 className="font-semibold text-3xl mt-2 mb-6">Stay in London</h1>

          <div className="space-x-6 hidden md:inline-flex">
            <p className="border rounded-full px-4 py-1 hover:shadow-md active:scale-105 transition transform duration-150 ease-out cursor-pointer">
              Cancelation Flexibility
            </p>
            <p className="border rounded-full px-4 py-1 hover:shadow-md active:scale-105 transition transform duration-150 ease-out cursor-pointer">
              Type of place
            </p>
            <p className="border rounded-full px-4 py-1 hover:shadow-md active:scale-105 transition transform duration-150 ease-out cursor-pointer">
              Price
            </p>
            <p className="border rounded-full px-4 py-1 hover:shadow-md active:scale-105 transition transform duration-150 ease-out cursor-pointer">
              Rooms and Beds
            </p>
            <p className="border rounded-full px-4 py-1 hover:shadow-md active:scale-105 transition transform duration-150 ease-out cursor-pointer">
              More filters
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default search;
