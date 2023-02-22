export const blockchains = [
  {
    group: "finance",
    groupLabel: "Finance",
    item: "Mantle",
    slug: "mantle-testnet",
    apiSlug: "mantle-testnet",
    icon: "/blockchains/mantle.svg",
    placeholder: "0x... address",
    coin: "BIT",
    hide: false,
    contractAddress: "0xc3a9766e07754cC1894E5c0A2459d23A676dDD0D",
    chainId: 5001,
    networkData: {
      chainId: "0x1389",
      chainName: "Mantle Testnet",
      nativeCurrency: {
        name: "BIT",
        symbol: "BIT",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.testnet.mantle.xyz"],
      blockExplorerUrls: ["https://explorer.testnet.mantle.xyz"],
    },
  },
];
