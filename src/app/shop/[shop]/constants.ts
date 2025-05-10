export enum SHOPNAME {
  Womens = "womens",
  Mens = "mens",
  Kids = "kids",
  Shoes = "shoes",
  Equipment = "equipment",
  ByActivity = "by-activity",
  GiftCards = "gift-cards",
  Sale = "sale",
}

export const SHOP_NAME: Record<SHOPNAME, string> = {
  [SHOPNAME.Womens]: "Women's",
  [SHOPNAME.Mens]: "Men's",
  [SHOPNAME.Kids]: "Kids'",
  [SHOPNAME.Shoes]: "Shoes",
  [SHOPNAME.Equipment]: "Equipment",
  [SHOPNAME.ByActivity]: "By Activity",
  [SHOPNAME.GiftCards]: "Gift Cards",
  [SHOPNAME.Sale]: "Sale",
};
