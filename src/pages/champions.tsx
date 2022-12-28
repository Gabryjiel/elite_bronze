import type { NextPage } from "next";
import Head from "next/head";
import { ContentContainer } from "../components/common/ContentContainer";
import { ContentContainerTitle } from "../components/common/ContentContainerTitle";
import { MainContainer } from "../components/common/MainContainer";
import { Navigation } from "../components/common/Navigation";

const ChampionIndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elite Bronze - Bohaterowie</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Navigation />

        <ContentContainer>
          <ContentContainerTitle text="Bohaterowie" />
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default ChampionIndexPage;
