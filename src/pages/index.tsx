import Head from "next/head";
import  type { NextPage } from "next"
import Header from "../../components/Header";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Partab Portfolio</title>
      </Head>
<Header />
{/* <Hero />
<About />

<Experience />
<Skills />
<Project /> 
<Contact Me /> */}

    </div>
  );
};

export default Home