import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ContentContainer } from "../components/common/ContentContainer";
import { ContentContainerTitle } from "../components/common/ContentContainerTitle";
import { MainContainer } from "../components/common/MainContainer";
import { Navigation } from "../components/common/Navigation";

const TournamentIndex: NextPage = () => {
  const tournaments = Array.from({ length: 5 }).map((_, index) => ({
    tournamentId: index + 1,
    name: `Elite Bronze ${index + 1}`,
  }));

  return (
    <>
      <Head>
        <title>Elite Bronze - Turnieje</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Navigation />

        <ContentContainer>
          <ContentContainerTitle text="Turnieje" />
          <div className="flex h-full w-full flex-wrap items-center justify-center gap-16 overflow-y-auto overflow-x-hidden px-16">
            {tournaments.map((tournament) => {
              return (
                <Link
                  key={`tournament-index-${tournament.tournamentId}`}
                  href={`tournaments/${tournament.tournamentId}`}
                >
                  <div className="relative flex h-96 w-64 cursor-pointer flex-col rounded-lg border-4 border-violet-900 bg-violet-900 transition-all ease-in-out hover:border-violet-700 hover:bg-violet-700">
                    <div className="bg-violet-inherit absolute right-0 rounded-bl-xl border-l-4 border-b-4 border-inherit bg-inherit px-8">
                      <span className="text-zinc-50">Zakończony</span>
                    </div>

                    <picture className="flex-1 bg-zinc-900">
                      <img
                        className="h-full object-contain px-2"
                        src="/ebIlogo.png"
                        alt="Elite Bronze I Logo"
                      />
                    </picture>

                    <div className="flex flex-1 flex-col border-inherit bg-inherit">
                      <div className="w-full border-t-4 border-b-4 border-inherit bg-inherit py-2 text-center">
                        <span className="text-3xl text-slate-300">
                          {tournament.name}
                        </span>
                      </div>

                      <div className="flex flex-1 bg-zinc-900 px-4 text-zinc-50">
                        <div className="flex flex-1 flex-col justify-center gap-2">
                          <div>
                            <span className="">🏆</span> iiri
                          </div>
                          <div>
                            <span className="">🏆</span> iRaD
                          </div>
                          <div>
                            <span className="">🏆</span> TimeWinner
                          </div>
                        </div>

                        <div className="flex w-20 flex-col justify-center gap-2">
                          <div className="grid place-items-center rounded-xl border-2 border-violet-900 p-1 hover:border-violet-700">
                            G: 12
                          </div>
                          <div className="grid place-items-center rounded-xl border-2 border-violet-900 p-1 hover:border-violet-700">
                            M: 26
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default TournamentIndex;
