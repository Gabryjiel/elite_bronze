import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { ChangeEventHandler } from "react";
import { useState } from "react";
import { ContentContainer } from "../components/common/ContentContainer";
import { ContentContainerTitle } from "../components/common/ContentContainerTitle";
import { MainContainer } from "../components/common/MainContainer";
import { Navigation } from "../components/common/Navigation";
import { trpc } from "../utils/trpc";

const UsersIndex: NextPage = () => {
  const [search, setSearch] = useState("");
  const usersQuery = trpc.players.getUsers.useQuery({ search: search });

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Elite Bronze - Użytkownicy</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Navigation />

        <ContentContainer>
          <ContentContainerTitle text="Użytkownicy">
            <input
              className="appearance-none rounded-xl border-zinc-900 bg-zinc-500 p-2 indent-2 text-xl text-zinc-900 caret-violet-900 accent-violet-900 outline-none"
              type="text"
              placeholder="Szukaj"
              value={search}
              onChange={handleSearch}
            />
          </ContentContainerTitle>
          <div className="flex flex-1 flex-wrap items-center justify-evenly gap-4 overflow-y-auto px-8 py-2">
            {usersQuery.data?.map((user) => {
              return (
                <div
                  key={`user-index-${user.userId}`}
                  className="relative flex h-32 w-36 cursor-pointer flex-col items-center gap-1"
                  title={user.name}
                >
                  <Link href={`users/${user.userId}`}>
                    <div className="flex h-24 w-24 flex-col rounded-md border-2 border-violet-900 transition-all hover:border-4 hover:border-violet-700">
                      <Image
                        alt={user.champion ?? ""}
                        src={user.iconUrl}
                        width={200}
                        height={200}
                      />
                    </div>
                  </Link>
                  <Link href={`users/${user.userId}`}>
                    <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-zinc-50">
                      {user.name}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default UsersIndex;
