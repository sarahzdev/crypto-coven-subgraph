// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("externalURL", Value.fromString(""));
    this.set("ipfsURI", Value.fromString(""));
    this.set("image", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("description", Value.fromString(""));
    this.set("type", Value.fromString(""));
    this.set("sun", Value.fromString(""));
    this.set("moon", Value.fromString(""));
    this.set("rising", Value.fromString(""));
    this.set("archetypeOfPower", Value.fromString(""));
    this.set("backItem", Value.fromString(""));
    this.set("background", Value.fromString(""));
    this.set("bodyShape", Value.fromString(""));
    this.set("earrings", Value.fromString(""));
    this.set("eyeColor", Value.fromString(""));
    this.set("eyeStyle", Value.fromString(""));
    this.set("eyebrows", Value.fromString(""));
    this.set("faceMarkings", Value.fromString(""));
    this.set("facewear", Value.fromString(""));
    this.set("foreheadJewelry", Value.fromString(""));
    this.set("hairBack", Value.fromString(""));
    this.set("hairFront", Value.fromString(""));
    this.set("hairMiddle", Value.fromString(""));
    this.set("hairColor", Value.fromString(""));
    this.set("hairTopper", Value.fromString(""));
    this.set("hat", Value.fromString(""));
    this.set("mask", Value.fromString(""));
    this.set("mouth", Value.fromString(""));
    this.set("necklace", Value.fromString(""));
    this.set("outerwear", Value.fromString(""));
    this.set("skinTone", Value.fromString(""));
    this.set("top", Value.fromString(""));
    this.set("updatedAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get externalURL(): string {
    let value = this.get("externalURL");
    return value!.toString();
  }

  set externalURL(value: string) {
    this.set("externalURL", Value.fromString(value));
  }

  get ipfsURI(): string {
    let value = this.get("ipfsURI");
    return value!.toString();
  }

  set ipfsURI(value: string) {
    this.set("ipfsURI", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get sun(): string {
    let value = this.get("sun");
    return value!.toString();
  }

  set sun(value: string) {
    this.set("sun", Value.fromString(value));
  }

  get moon(): string {
    let value = this.get("moon");
    return value!.toString();
  }

  set moon(value: string) {
    this.set("moon", Value.fromString(value));
  }

  get rising(): string {
    let value = this.get("rising");
    return value!.toString();
  }

  set rising(value: string) {
    this.set("rising", Value.fromString(value));
  }

  get archetypeOfPower(): string {
    let value = this.get("archetypeOfPower");
    return value!.toString();
  }

  set archetypeOfPower(value: string) {
    this.set("archetypeOfPower", Value.fromString(value));
  }

  get backItem(): string {
    let value = this.get("backItem");
    return value!.toString();
  }

  set backItem(value: string) {
    this.set("backItem", Value.fromString(value));
  }

  get background(): string {
    let value = this.get("background");
    return value!.toString();
  }

  set background(value: string) {
    this.set("background", Value.fromString(value));
  }

  get bodyShape(): string {
    let value = this.get("bodyShape");
    return value!.toString();
  }

  set bodyShape(value: string) {
    this.set("bodyShape", Value.fromString(value));
  }

  get earrings(): string {
    let value = this.get("earrings");
    return value!.toString();
  }

  set earrings(value: string) {
    this.set("earrings", Value.fromString(value));
  }

  get eyeColor(): string {
    let value = this.get("eyeColor");
    return value!.toString();
  }

  set eyeColor(value: string) {
    this.set("eyeColor", Value.fromString(value));
  }

  get eyeStyle(): string {
    let value = this.get("eyeStyle");
    return value!.toString();
  }

  set eyeStyle(value: string) {
    this.set("eyeStyle", Value.fromString(value));
  }

  get eyebrows(): string {
    let value = this.get("eyebrows");
    return value!.toString();
  }

  set eyebrows(value: string) {
    this.set("eyebrows", Value.fromString(value));
  }

  get faceMarkings(): string {
    let value = this.get("faceMarkings");
    return value!.toString();
  }

  set faceMarkings(value: string) {
    this.set("faceMarkings", Value.fromString(value));
  }

  get facewear(): string {
    let value = this.get("facewear");
    return value!.toString();
  }

  set facewear(value: string) {
    this.set("facewear", Value.fromString(value));
  }

  get foreheadJewelry(): string {
    let value = this.get("foreheadJewelry");
    return value!.toString();
  }

  set foreheadJewelry(value: string) {
    this.set("foreheadJewelry", Value.fromString(value));
  }

  get hairBack(): string {
    let value = this.get("hairBack");
    return value!.toString();
  }

  set hairBack(value: string) {
    this.set("hairBack", Value.fromString(value));
  }

  get hairFront(): string {
    let value = this.get("hairFront");
    return value!.toString();
  }

  set hairFront(value: string) {
    this.set("hairFront", Value.fromString(value));
  }

  get hairMiddle(): string {
    let value = this.get("hairMiddle");
    return value!.toString();
  }

  set hairMiddle(value: string) {
    this.set("hairMiddle", Value.fromString(value));
  }

  get hairColor(): string {
    let value = this.get("hairColor");
    return value!.toString();
  }

  set hairColor(value: string) {
    this.set("hairColor", Value.fromString(value));
  }

  get hairTopper(): string {
    let value = this.get("hairTopper");
    return value!.toString();
  }

  set hairTopper(value: string) {
    this.set("hairTopper", Value.fromString(value));
  }

  get hat(): string {
    let value = this.get("hat");
    return value!.toString();
  }

  set hat(value: string) {
    this.set("hat", Value.fromString(value));
  }

  get mask(): string {
    let value = this.get("mask");
    return value!.toString();
  }

  set mask(value: string) {
    this.set("mask", Value.fromString(value));
  }

  get mouth(): string {
    let value = this.get("mouth");
    return value!.toString();
  }

  set mouth(value: string) {
    this.set("mouth", Value.fromString(value));
  }

  get necklace(): string {
    let value = this.get("necklace");
    return value!.toString();
  }

  set necklace(value: string) {
    this.set("necklace", Value.fromString(value));
  }

  get outerwear(): string {
    let value = this.get("outerwear");
    return value!.toString();
  }

  set outerwear(value: string) {
    this.set("outerwear", Value.fromString(value));
  }

  get skinTone(): string {
    let value = this.get("skinTone");
    return value!.toString();
  }

  set skinTone(value: string) {
    this.set("skinTone", Value.fromString(value));
  }

  get top(): string {
    let value = this.get("top");
    return value!.toString();
  }

  set top(value: string) {
    this.set("top", Value.fromString(value));
  }

  get updatedAtTimestamp(): BigInt {
    let value = this.get("updatedAtTimestamp");
    return value!.toBigInt();
  }

  set updatedAtTimestamp(value: BigInt) {
    this.set("updatedAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}
