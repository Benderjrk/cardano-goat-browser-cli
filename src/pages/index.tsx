import type { NextPage } from "next";
import Head from "next/head";
import { format } from "date-fns";
import { FormEvent, useState } from "react";
import { userAgentFromString } from "next/server";
import Link from "next/link";

const Home: NextPage = () => {
  const [command, setCommand] = useState<string[] | undefined>();
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement;

    // Get data from the form.
    const data = {
      command: form.terminal.value as string,
    };
    console.log(data);
    if (
      data.command.includes("<script>") ||
      data.command.includes("</script>")
    ) {
      data.command = "What are you doing?";
      alert("dork!");
    }
    if (command !== undefined) {
      if (data.command === 'clear' && command[0] !== undefined) {
        setCommand([command[0]]);
      } else {
        if (command.length > 20) {
          setCommand([...command.slice(1,-1), data.command]);
        } else {
          setCommand([...command, data.command]);
        }
        
      }
      
    } else {
      setCommand([data.command]);
    }

    form.terminal.value = "";
  };

  return (
    <>
      <Head>
        <title>Cardano Goat Terminal</title>
        <meta name="description" content="cardano goat browser cli" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="gap-1 min-h-screen p-4 bg-zinc-900 cursor-text divide-dashed divide-y-2">
        <nav className="divide-y-4 mb-2">
          <Link href="/">
            <a className="text-zinc-400">1)home</a>
          </Link>
        </nav>
        <div className="flex flex-col pt-2">
        <h1 className="mx-auto text-cyan-200">G.O.A.T. Terminal</h1>
        <div className="text-zinc-400">
          Last login: {format(new Date(), "PPpp")} :{" "}
          {userAgentFromString(undefined).os.name} :{" "}
          {userAgentFromString(undefined).browser.name}
        </div>
        <div className="text-zinc-400">
        <span className="text-green-500">$ </span>
          Please enter your name. We hold no data. So we ask you every time. 
        </div>
        {command &&
          command.map(function (d, idx) {
            if (idx === 0)
              return (
                <div key={idx} className="text-zinc-400">
                  <div className="text-zinc-400 mb-2">
                    <span className="text-green-500">$ </span>Hello {d}
                  </div>
                  <div className="text-zinc-400 mb-2">
                    <span className="text-green-500">$ </span>Welcome to the Cardano G.O.A.T. Terminal
                  </div>
                  
                </div>
              );
            if (d === 'man')
              return (
                <div key={idx} className="text-zinc-400 text-center items-center">
                  <div className="text-green-500">$ </div>
                  <div className="mb-2">
                    Goat Terminal Manual
                  </div>
                  <div>
                    <div className="mb-2">Check back to the manual if you forget what commands you can use.</div>
                    <div className="mb-2">man - terminal manual</div>
                    <div className="mb-2">clear - clear terminal screen</div>
                    <div className="mb-2">buy goat - info on how to purchase Cardano G.O.A.T. NFT</div>
                    <div className="mb-2">learn cardano - start a lesson on how to use Cardano</div>
                  </div>
                </div>
              );
            if (d === 'buy goat')
            return (
              <div key={idx} className="text-zinc-400">
                <div className="text-zinc-400 mb-2">
                <span className="text-green-500">$ </span>To purchase a Goat. Send 25 $ADA exactly to:
                </div>
                <div className="text-zinc-400 text-center items-center mb-2">
                addr1qx8j0xzjnvputf6dnfdyghmt4tguh622pmhwu69zdd8djfxkd2pzw443r70hsmrpdh4tnqelhdvssq5zm75fw8ht6psqgn4xep
                </div>
                <div className="text-zinc-400 text-center items-center mb-2">
                Do not send funds from exchanges or funds can be lost. Private wallets only.
                </div>
              </div>
            );
            return (
              <div key={idx} className="text-zinc-400">
                <span className="text-green-500">$ </span>Command: {d} - to
                check the manual type &apos;man&apos;
              </div>
            );
          })}
          </div>
          <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
              <span className="text-green-500">$ </span>
              <span className="text-zinc-400">goat@browser</span>
              <span className="text-cyan-500"> ~ </span>
              <span className="text-green-500">-&gt; </span>
              <label htmlFor="terminal" hidden>
                Terminal Simulation
              </label>
              <input
                type="text"
                id="terminal"
                name="terminal"
                placeholder="_"
                className="bg-zinc-900 text-zinc-400 min-w-[80%]"
                required
                autoComplete="off"
                maxLength={50}
              />
              <button type="submit" hidden>
                Submit
              </button>
            </form>
          </div>
      </main>
    </>
  );
};

export default Home;
