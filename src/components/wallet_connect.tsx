import Link from "next/link";
import useCardanoWallet, { WalletName } from "@asterium-dev/use-cardano-wallet";

const WalletConnectButtons = () => {
  const {
    connect,
    isConnecting,
    isConnected,
    lovelaceBalance,
    address,
    network,
    selectedWallet,
    connectedWallet,
    api,
    disconnect,
    isRefetchingBalance,
    refetchBalance,
  } = useCardanoWallet();

  return (
    <>
      <div
        className="mb-2 grid md:grid-cols-4 grid-cols-2 gap-6"
        style={{
          padding: "10%",
          fontFamily: "Arial",
        }}
      >
        {Object.values(WalletName).map((walletName) => (
          <button
            onClick={() => connect(walletName)}
            className="px-3 mx-auto mb-1 mr-[0.8px] ml-[0.8px] text-lg tracking-tight uppercase text-center italic rounded-xl border-2 font-normal py-3 flex flex-row items-center justify-center border-indigo-700 hover:border-indigo-600 bg-indigo-800 hover:shadow-inner hover:shadow-4xl hover:shadow-zinc-800/80"
            style={{ margin: ".5em" }}
            key={walletName}
          >
            {isConnecting && selectedWallet === walletName
              ? "Connecting..."
              : `Connect ${walletName}`}
          </button>
        ))}
      </div>
      <ul className="">
        <li className="break-words my-2">Address: {address}</li>
        <li className="my-2">Network: {network}</li>
        <li className="my-2">
          Balance:{" "}
          {typeof lovelaceBalance === "number" &&
            `${lovelaceBalance / 1000000}ADA`}
        </li>
        <li className="my-2">Selected wallet: {selectedWallet}</li>
        <li className="my-2">Connected wallet: {connectedWallet}</li>
      </ul>
    </>
  );
};

export default WalletConnectButtons;
