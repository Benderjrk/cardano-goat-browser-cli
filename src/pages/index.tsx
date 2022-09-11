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
    if (
      data.command.includes("<script>") ||
      data.command.includes("</script>")
    ) {
      data.command = "What are you doing?";
      alert("dork!");
    }
    if (command !== undefined) {
      data.command = data.command.toLowerCase();
      if (data.command === "clear" && command[0] !== undefined) {
        setCommand([command[0]]);
      } else {
        if (command.length > 2) {
          setCommand([
            ...command.slice(0, 1),
            ...command.slice(-2),
            data.command,
          ]);
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

      <main className="gap-1 min-h-screen p-4 bg-zinc-900 cursor-text divide-dashed hover:divide-y">
        <nav className="mb-2 grid grid-cols-3">
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
          <div>
            <Link href="/">
              <a className="text-zinc-400">2)vim</a>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col pt-2">
          <h1 className="mx-auto text-indigo-300">G.O.A.T. Terminal</h1>
          <div className="text-zinc-400">
            Last Command: {format(new Date(), "PPpp")} :{" "}
            {userAgentFromString(undefined).os.name} :{" "}
            {userAgentFromString(undefined).browser.name}
          </div>
          <div className="text-zinc-400">
            <span className="text-green-500">$ </span>
            Please enter your name.
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
                      <span className="text-green-500">$ </span>Welcome to the
                      Cardano G.O.A.T. Terminal
                    </div>
                    <div className="text-zinc-400 mb-2">
                      <span className="text-green-500">$ </span>type: `man` for
                      the manual
                    </div>
                  </div>
                );
              if (d === "man")
                return (
                  <>
                    <div className="text-zinc-400 mb-2">
                      <span className="text-green-500">$ </span>Command: man
                    </div>
                    <div
                      key={idx}
                      className="text-zinc-400 text-center items-center"
                    >
                      <div className="text-green-500">$ </div>
                      <div className="mb-2">
                        <span className="text-indigo-300">
                          Goat Terminal Manual
                        </span>
                      </div>
                      <div>
                        <div className="mb-2">
                          Check back to the manual if you forget what commands
                          you can use.
                        </div>
                        <div className="mb-2">
                          <span className="text-indigo-400">man</span> -
                          terminal manual
                        </div>
                        <div className="mb-2">
                          <span className="text-indigo-400">clear</span> - clear
                          terminal screen
                        </div>
                        <div className="mb-2">
                          <span className="text-indigo-400 decoration-wavy decoration-2">
                            buy goat
                          </span>{" "}
                          - info on how to purchase Cardano G.O.A.T. NFT
                        </div>
                        <div className="mb-2">
                          <span className="text-indigo-400">social links</span>{" "}
                          - print out links to social media
                        </div>
                      </div>
                    </div>
                  </>
                );
              if (d === "buy goat")
                return (
                  <div key={idx} className="text-zinc-400">
                    <div className="text-zinc-400 mb-2">
                      <span className="text-green-500">$ </span>Command: {d}
                    </div>
                    <div className="text-zinc-400 mb-2">
                      <span className="text-green-500">$ </span>
                      <span className="text-cyan-400">
                        To purchase a Goat. Send 25 $ADA exactly to:
                      </span>
                    </div>
                    <div className="text-zinc-400 text-center items-center mb-2 break-words">
                      <span className="text-indigo-400 select-all">
                        addr1qx8j0xzjnvputf6dnfdyghmt4tguh622pmhwu69zdd8djfxkd2pzw443r70hsmrpdh4tnqelhdvssq5zm75fw8ht6psqgn4xep
                      </span>
                    </div>
                    <div className="text-zinc-400 text-center items-center mb-2">
                      <span className="text-red-400">
                        Do not send funds from exchanges or funds can be lost.
                        Private wallets only.
                      </span>
                    </div>
                  </div>
                );
              if (d === "social links")
                return (
                  <div key={idx} className="text-zinc-400">
                    <div className="text-zinc-400 mb-2">
                      <span className="text-green-500">$ </span>Command: {d}
                    </div>
                    <nav className="mb-2 grid md:grid-cols-4 grid-cols-2 gap-6">
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://twitter.com/Cardano_G_O_A_T">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="twitter"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-cyan-700 hover:border-cyan-600 bg-cyan-800 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              Twitter
                            </a>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://medium.com/@cardanogoat">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="medium"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-zinc-700 hover:border-zinc-600 bg-zinc-800 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              Medium
                            </a>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://www.youtube.com/channel/UCMCdR29yI956BEDUHpBoggA?sub_confirmation=1">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="youtube"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-red-700 hover:border-red-600 bg-red-600 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              Youtube
                            </a>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://www.twitch.tv/cardanogoat">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="twitch"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-indigo-700 hover:indigo-zinc-600 bg-indigo-800 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              Twitch
                            </a>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://github.com/CardanoGoat-io">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="twitter"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-orange-700 hover:border-orange-600 bg-orange-800 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              GitHub
                            </a>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://discord.com/invite/ghc2vp8XEn">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="discord"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-indigo-500 hover:border-indigo-600 bg-indigo-500 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              Discord
                            </a>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://pool.pm/$goatgames">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="poolpm wallet one"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-pink-700 hover:border-pink-600 bg-pink-700 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              Pool.PM #1
                            </a>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span
                          className={
                            "group rounded-xl outline-none text-white disabled:opacity-40 ml-3 mt-5 bg-indigo-800"
                          }
                        >
                          <Link href="https://pool.pm/$cardanogoat.io">
                            <a
                              rel="noreferrer"
                              target="_blank"
                              aria-label="poolpm wallet two"
                              className={
                                "px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-pink-700 hover:indigo-pink-600 bg-pink-700 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
                              }
                            >
                              Pool.PM #2
                            </a>
                          </Link>
                        </span>
                      </div>
                    </nav>
                  </div>
                );
              return (
                <div key={idx} className="text-zinc-400 break-words">
                  <span className="text-green-500">$ </span>Command: {d} - to
                  check the manual type &apos;man&apos;
                </div>
              );
            })}
        </div>
        <div className="flex flex-col mt-2 pt-2">
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
              className="bg-zinc-900 text-zinc-400 min-w-[40%]"
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
