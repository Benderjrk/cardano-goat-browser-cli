import type { NextPage } from "next";
import Head from "next/head";
import { format } from 'date-fns'
import { FormEvent, useState } from "react";
import { userAgentFromString } from "next/server";



const Home: NextPage = () => {
  const [command, setCommand] = useState(); 
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      command: form.terminal.value as string
    }
    console.log(data);
    form.terminal.value = '';
  }

  return (
    <>
      <Head>
        <title>Cardano Goat Terminal</title>
        <meta name="description" content="cardano goat browser cli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-start min-h-screen p-4 bg-zinc-900 cursor-text">
          <h1 className="mx-auto text-cyan-200">G.O.A.T. Terminal</h1>
          <div className="text-zinc-400">Last login: {format(new Date(), 'PPpp')} : {userAgentFromString(undefined).os.name} : {userAgentFromString(undefined).browser.name}</div>
          <div>{} 
          <form onSubmit={handleSubmit}>
            <span className="text-zinc-400">goat@browser</span>
            <span className="text-cyan-500"> ~ </span>
            <span className="text-green-500">-&gt; </span>
              <label htmlFor="terminal" hidden>Terminal Simulation</label>
              <input type="text" id="terminal" name="terminal" placeholder="_" className="w-80 bg-zinc-900 text-zinc-400" required autoComplete="off"/>
              <button type="submit" hidden>Submit</button>
            </form>
          </div>
      </main>
    </>
  );
};

export default Home;
