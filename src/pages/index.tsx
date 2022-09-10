import type { NextPage } from "next";
import Head from "next/head";
import { format } from 'date-fns'
import { useState } from "react";



const Home: NextPage = () => {
  const [command, setCommand] = useState();

  return (
    <>
      <Head>
        <title>Cardano Goat Terminal</title>
        <meta name="description" content="cardano goat browser cli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start min-h-screen p-4 bg-zinc-900 cursor-text">
          <h1 className="mx-auto text-cyan-200">G.O.A.T. Terminal</h1>
          <div className="text-zinc-400">Last login: {format(new Date(), 'PPpp')} on browser</div>
          <div>{} 
            <span className="text-zinc-400">goat@browser</span>
            <span className="text-cyan-500"> ~ </span>
            <span className="text-green-500">-&gt; </span>
            <input type="text" id="terminal" name="terminal" placeholder="_" className="w-80 bg-zinc-900 text-zinc-400 " />
            
          </div>
      </main>
    </>
  );
};

export default Home;
