import Link from "next/link";

const Nav = () => {
  return (
    <nav className="mb-2 grid grid-cols-3">
      <div>
        <Link href="/">
          <a className="text-zinc-400">1)home</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className="text-zinc-400">2)Oura</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className="text-zinc-400">2)vim</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
