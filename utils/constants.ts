type EnvConstants = {
  ProductsModule: string
  SliceCore: string
}

export const constants = {
  template:
    "https://pointed-canopy-f8d.notion.site/Job-Title-54eda4a6280542a98fb6f23ef6721261",
  ipfsGateway: "https://ipfs.io/ipfs/"
}

export const envconstants = {
  constants,
  env: {
    1: {
      ProductsModule: "0x689Bba0e25c259b205ECe8e6152Ee1eAcF307f5F",
      SliceCore: "0x21da1b084175f95285B49b22C018889c45E1820d"
    },
    5: {
      ProductsModule: "0xcA6b9D59849EC880e82210e9cb8237E1d0cAA69e",
      SliceCore: "0xAE38a794E839D045460839ABe288a8e5C28B0fc6"
    }
  }
}

export const envConstants: EnvConstants =
  envconstants.env[process.env.NEXT_PUBLIC_CHAIN_ID]
