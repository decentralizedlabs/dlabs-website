import envConstants from "constants.json"

type Addresses = {
  ProductsModule: string
  SliceCore: string
}
export const constants: any = envConstants.values

export const addresses: Addresses =
  envConstants.addresses[process.env.NEXT_PUBLIC_CHAIN_ID]

export default constants
