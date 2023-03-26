import Head from "next/head";
import type { NextPage } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-hidden z-0 " >
      <Head>
        <title>Partab Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* <Hero />
<About />

<Experience />
<Skills />
<Project /> 
<Contact Me /> */}
    </div>
  );
};

export default Home;
