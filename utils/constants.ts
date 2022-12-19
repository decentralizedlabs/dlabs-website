type EnvConstants = {
  notionDbId: string
  slicerId: number
  slicerProducts: { productId: number; value: number }[]
  ProductsModule: string
  SliceCore: string
}

export const constants = {
  template:
    "https://pointed-canopy-f8d.notion.site/Job-Title-54eda4a6280542a98fb6f23ef6721261",
  ipfsGateway: "https://ipfs.io/ipfs/"
}

export const constantsValues: {
  constants: any
  env: { [chainId: number]: EnvConstants }
} = {
  constants,
  env: {
    1: {
      notionDbId: "da6f6e25366c45d6ad50b4ff2f06e7d8",
      slicerId: 27,
      slicerProducts: [
        { productId: 1, value: 1 },
        { productId: 2, value: 20 },
        { productId: 3, value: 100 }
      ],
      ProductsModule: "0x689Bba0e25c259b205ECe8e6152Ee1eAcF307f5F",
      SliceCore: "0x21da1b084175f95285B49b22C018889c45E1820d"
    },
    5: {
      notionDbId: "12fca9a29d8841a99b35e4136978455c",
      slicerId: 11,
      slicerProducts: [
        { productId: 1, value: 100 }, // To test
        { productId: 2, value: 20 },
        { productId: 3, value: 100 }
      ],
      ProductsModule: "0xcA6b9D59849EC880e82210e9cb8237E1d0cAA69e",
      SliceCore: "0xAE38a794E839D045460839ABe288a8e5C28B0fc6"
    }
  }
}

export const envConstants: EnvConstants =
  constantsValues.env[process.env.NEXT_PUBLIC_CHAIN_ID]

export const slicerUrl = `https://${
  process.env.NEXT_PUBLIC_CHAIN_ID === "5" ? "testnet." : ""
}slice.so/slicer/${envConstants.slicerId}`
