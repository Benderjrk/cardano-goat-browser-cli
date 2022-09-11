import type { NextPage } from "next";
import Head from "next/head";
import { format } from "date-fns";
import { FormEvent, useState } from "react";
import { userAgentFromString } from "next/server";

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
        setCommand([...command, data.command]);
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

      <main className="flex flex-col gap-1 min-h-screen p-4 bg-zinc-900 cursor-text">
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
                  <div className="text-zinc-400">
                    <span className="text-green-500">$ </span>Hello {d}
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-green-500">$ </span>Welcome to the Cardano G.O.A.T. Terminal
                  </div>
                  <div className="text-zinc-400">
                    <span className="text-green-500">$ </span>To purchase a Goat. Send 25 $ADA exactly to:
                  </div>
                  <div className="text-zinc-400 text-center items-center">
                    addr1qx8j0xzjnvputf6dnfdyghmt4tguh622pmhwu69zdd8djfxkd2pzw443r70hsmrpdh4tnqelhdvssq5zm75fw8ht6psqgn4xep
                  </div>
                  <div className="text-zinc-400 text-center items-center">
                    Do not send funds from exchanges or funds can be lost. Private wallets only.
                  </div>
                </div>
              );
            if (d === "man")
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
        <div>
          {}
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
              className="w-90 bg-zinc-900 text-zinc-400"
              required
              autoComplete="off"
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
