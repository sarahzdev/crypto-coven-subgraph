# Crypto Coven Subgraph

This subgraph indexes data from [Crypto Coven](https://etherscan.io/address/0x5180db8F5c931aaE63c74266b211F580155ecac8#readContract) smart contract transaction events. When deployed, one can query the subgraph's entities using [The Graph Query API](https://thegraph.com/docs/en/developer/graphql-api/).

## Example Queries

### Querying tokens
```graphql
{
  tokens(first: 5) {
    id
    tokenID
    tokenURI
    externalURL
    image 
    name 
    description
    type 
    sun 
    moon 
    rising
    archetypeOfPower
    backItem
    background
    bodyShape
    earrings
    eyeColor
    eyeStyle
    eyebrows
    faceMarkings
    facewear
    foreheadJewelry
    hairBack
    hairFront
    hairMiddle
    hairColor
    hairTopper
    hat
    mask
    mouth
    necklace
    outerwear
    skinTone
    top 
    updatedAtTimestamp 
    owner {
      id 
    }
  }
}
```

### Filtering tokens
```graphql
{
  tokens(
    where: {
      sun_contains: "pisces"
    }
  ) {
    id
    image
    name 
    sun 
    moon 
    rising
  }
}
```

### Full text search
```graphql
{
  covenSearch(
    text: "'chaos'"
  ) {
    id
    image
    name
    description
  }
}
```

## Resources
To learn how to create and publish your own subgraph, check out
- [The Graph Quick Start](https://thegraph.com/docs/en/developer/quick-start/)
- [Crypto Coven Subgraph Workshop](https://github.com/dabit3/custom-nft-subgraph-workshop)