import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";

const Home = ({ exploreData }) => {
  const exploreDataNew = [
    {
      img: "https://a0.muscache.com/im/pictures/18ab1ca2-a759-48de-a55b-1cb67c25c637.jpg?im_q=medq&im_w=240",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=240",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "https://a0.muscache.com/im/pictures/da75656c-f2d5-4878-aade-f2971842365f.jpg?im_q=medq&im_w=240",
      location: "York",
      distance: "4-hour drive",
    },
    {
      img: "https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      img: "https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=240",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Newquay",
      distance: "6-hour drive",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Hove",
      distance: "2-hour drive",
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      <main>
        <section className="max-w-7xl mx-auto px-8 sm:px-16">
          <h2 className="text-4xl font-semibold pb-5 pt-6">Explore Nearby</h2>

          {exploreDataNew?.map(({ image, location, distance }, index) => (
            <SmallCard
              key={index}
              imageUrl={image}
              location={location}
              distance={distance}
            />
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

  return {
    props: {
      exploreData,
    },
  };
}
