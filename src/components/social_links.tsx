import Link from "next/link";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
