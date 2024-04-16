// Default to internal key, and fallback to public
export const alchemyId = process.env.INTERNAL_ALCHEMY_ID
  ? String(process.env.INTERNAL_ALCHEMY_ID)
  : String(process.env.NEXT_PUBLIC_ALCHEMY_ID)

export const networkUrl = (chain = "base", network = "mainnet") =>
  `https://${chain}-${network}.g.alchemy.com/v2/${alchemyId}`
