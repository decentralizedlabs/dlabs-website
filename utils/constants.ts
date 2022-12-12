import envConstants from "constants.json"

type Addresses = {
  ProductsModule: string
  SliceCore: string
}
type Constants = {
  ipfsGateway: string
}

export const constants: Constants = envConstants.values

export const addresses: Addresses =
  envConstants.addresses[process.env.NEXT_PUBLIC_CHAIN_ID]

export default constants
