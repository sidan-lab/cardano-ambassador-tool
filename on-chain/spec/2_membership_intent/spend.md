# Specification - MembershipIntent Token

## Parameter

- `oracle_nft`: The policy id of `OracleNFT`

## Datum

- `token`: `Asset` - The token bought in
- `metadata`: `Data`

## User Action

1. Process Intent

   - `MembershipIntent` token in own input is burnt

2. Update Metadata

   - 1 input user token
   - output bought in token back to person
   - `MembershipIntent` metadata is updated
   - `MembershipIntent` token sent back to `MembershipIntent` Spending Script
