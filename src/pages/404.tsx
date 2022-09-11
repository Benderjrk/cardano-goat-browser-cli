import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Cardano Goat 404</title>
        <meta name="description" content="cardano goat browser cli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="gap-1 min-h-screen p-4 bg-zinc-900 cursor-text divide-dashed hover:divide-y">
        <nav className="mb-2 grid grid-cols-4">
          <div>
            <Link href="/">
              <a className="text-zinc-400">1)home</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="text-zinc-400">2)bash</a>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col pt-2">
        <h1 className="mx-auto text-indigo-300">Cardano G.O.A.T.</h1>
        <h2 className="mx-auto text-red-300">404</h2>
        <h3 className="mx-auto text-cyan-300">Where are you trying to go?</h3>
        </div>
      </main>
    </>
  );
};

export default Home;
