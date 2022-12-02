import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "../components/common/Navigation";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Elite Bronze - Strona główna</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-900 h-full w-full flex">
        <Navigation />

        <section className="w-11/12 h-full py-6 pr-6">
          <div className="bg-zinc-800 shadow-2xl h-full rounded-xl"></div>
        </section>
      </main>
    </>
  );
};

export default Home;
