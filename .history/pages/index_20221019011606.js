import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_airbnb-512.png"
        />
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
        <section className="max-w-7xl mx-auto px-8 sm:px-16">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex overflow-scroll space-x-3 scrollbar-hide p-3">
            {cardsData?.map(({ img, title }, index) => (
              <MediumCard key={index} img={img} title={title} />
            ))}
          </div>
          <LargeCard
            img="https://airbnb-pi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F4cj&w=1920&q=75"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
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
