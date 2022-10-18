import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      <main>
        <section className="max-w-7xl mx-auto px-8 sm:px-16 ">
          <h2 className="text-4xl font-semibold pb-5 pt-6">Explore Nearby</h2>
          <div
            className="grid grid-cols-1 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {exploreData?.map(({ img, location, distance }, index) => (
              <SmallCard
                key={index}
                imageUrl={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto p-8 sm:px-16">
          <h2 className="text-4xl font-semibold">Live Anywhere</h2>
          {cardsData.map((item) => (
            <h1>{item.title}</h1>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
