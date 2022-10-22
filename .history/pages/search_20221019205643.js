import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import infoCard from "../components/infoCard";
import { capitalize } from "lodash";
import { format } from "date-fns";

function search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, guests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${capitalize(location)} | ${range} | ${guests}`} />

      <main className="flex mx-10 mt-16">
        <section>
          <p className="text-xs">
            300+ Stays - {range} - for {guests} number of guests
          </p>
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
        searchResults.map(item => (
        <infoCard />
        ))
      </main>

      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
