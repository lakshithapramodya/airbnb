import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { capitalize, truncate, replace } from "lodash";
import { format } from "date-fns";

function search() {
  const router = useRouter();

  const { location, startDate, endDate, guests } = router.query;

  const newStartDate = replace(
    truncate(startDate, { length: 10, omission: "" }, "-", ", ")
  );

  //   const formattedStartDate = format(new Date(startDate), "dd MM yyyy");
  //   const formattedEndDate = format(new Date(2014, 1, 11), "MM/dd/yyyy");
  console.log(newStartDate);

  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays for {guests} number of guests</p>
          <h1 className="font-semibold text-3xl mt-2 mb-6">
            Stays in {capitalize(location)}
          </h1>

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
