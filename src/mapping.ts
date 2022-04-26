import {
  Transfer as TransferEvent,
  Token as TokenContract
} from '../generated/Token/Token'

import {
  Token, User
} from '../generated/schema'

import { ipfs, json, Value } from '@graphprotocol/graph-ts'

const ipfshash = "QmSr3vdMuP2fSxWD7S26KzzBWcAN1eNhm4hk1qaR3x3vmj"

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
    token.tokenID = event.params.tokenId;
    token.tokenURI = "/" + event.params.tokenId.toString() + ".json";

    let metadata = ipfs.cat(ipfshash + token.tokenURI);
    if (metadata) {
      const value = json.fromBytes(metadata).toObject();
      if (value) {
        const name = value.get('name');
        const image = value.get('image');
        const description = value.get('description');
        const externalURL = value.get('external_url');
        if (name && image && description && externalURL) {
          token.name = name.toString();
          token.image = image.toString();
          token.description = description.toString();
          token.externalURL = externalURL.toString();
        }
        
        const coven = value.get('coven');
        if (coven) {
          let covenData = coven.toObject();
          const type = covenData.get('type');
          if (type) {
            token.type = type.toString();
          }

          const birthChart = covenData.get('birthChart');
          if (birthChart) {
            const birthChartData = birthChart.toObject();
            const sun = birthChartData.get('sun');
            const moon = birthChartData.get('moon');
            const rising = birthChartData.get('rising');
            if (sun && moon && rising) {
              token.sun = sun.toString();
              token.moon = moon.toString();
              token.rising = rising.toString();
            }
          }
        }
        
        const attributes = value.get('attributes');
        if (attributes) {
          const attributesArr = attributes.toArray();
          for (let i = 0; i < attributesArr.length; i++) {
            const attributeData = attributesArr[i].toObject();
            const traitType = attributeData.get('trait_type');
            const traitValue = attributeData.get('value');
            if (traitType && traitValue) {
              if (traitType.toString() == "Archetype of Power") {
                token.archetypeOfPower = traitValue.toString();
              } else if (traitType.toString() == "Back Item") {
                token.backItem = traitValue.toString();
              } else if (traitType.toString() == "Background") {
                token.background = traitValue.toString();
              } else if (traitType.toString() == "Body Shape") {
                token.bodyShape = traitValue.toString();
              } else if (traitType.toString() == "Earrings") {
                token.earrings = traitValue.toString();
              } else if (traitType.toString() == "Eye Color") {
                token.eyeColor = traitValue.toString();
              } else if (traitType.toString() == "Eye Style") {
                token.eyeStyle = traitValue.toString();
              } else if (traitType.toString() == "Eyebrows") {
                token.eyebrows = traitValue.toString();
              } else if (traitType.toString() == "Face Markings") {
                token.faceMarkings = traitValue.toString();
              } else if (traitType.toString() == "Facewear") {
                token.facewear = traitValue.toString();
              } else if (traitType.toString() == "Forehead Jewelry") {
                token.foreheadJewelry = traitValue.toString();
              } else if (traitType.toString() == "Hair (Back)") {
                token.hairBack = traitValue.toString();
              } else if (traitType.toString() == "Hair (Front)") {
                token.hairFront = traitValue.toString();
              } else if (traitType.toString() == "Hair (Middle)") {
                token.hairMiddle = traitValue.toString();
              } else if (traitType.toString() == "Hair Color") {
                token.hairColor = traitValue.toString();
              } else if (traitType.toString() == "Hair Topper") {
                token.hairTopper = traitValue.toString();
              } else if (traitType.toString() == "Hat") {
                token.hat = traitValue.toString();
              } else if (traitType.toString() == "Mask") {
                token.mask = traitValue.toString();
              } else if (traitType.toString() == "Mouth") {
                token.mouth = traitValue.toString();
              } else if (traitType.toString() == "Necklace") {
                token.necklace = traitValue.toString();
              } else if (traitType.toString() == "Outerwear") {
                token.outerwear = traitValue.toString();
              } else if (traitType.toString() == "Skin Tone") {
                token.skinTone = traitValue.toString();
              } else if (traitType.toString() == "Top") {
                token.top = traitValue.toString();
              }
            }
          }
        }
      }
    }
  }
  token.updatedAtTimestamp = event.block.timestamp;
  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}