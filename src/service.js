import mystore from "./store";

const store = mystore.getState();

const productWomen = store.app.productsList.stock.filter((item) => {
  return item.gender === "Women";
});
export const productWomenTshirt = productWomen.filter((item) => {
  return item.subCategory === "tshirt";
});
export const productWomenJoggers = productWomen.filter((item) => {
  return item.subCategory === "jogger";
});
export const productWomenJeans = productWomen.filter((item) => {
  return item.subCategory === "jeans";
});
export const productWomenshirts = productWomen.filter((item) => {
  return item.subCategory === "shirt";
});
export const productWomenJump = productWomen.filter((item) => {
  return item.subCategory === "jumpsuit";
});
export const productWomenKurti = productWomen.filter((item) => {
  return item.subCategory === "kurti";
});
export const productWhite = productWomen.filter((item) => {
  return item.color === "WHITE";
});
export const productPink = productWomen.filter((item) => {
  return item.color === "PINK";
});
export const productBlack = productWomen.filter((item) => {
  return item.color === "BLACK";
});
export const productBlue = productWomen.filter((item) => {
  return item.color === "BLUE";
});
export const productL = productWomen.filter((item) => {
  return item.color === "LAVENDER";
});
export const productBrown = productWomen.filter((item) => {
  return item.color === "BROWN";
});
export const productGrey = productWomen.filter((item) => {
  return item.color === "GREY";
});
export const productOrange = productWomen.filter((item) => {
  return item.color === "ORANGE";
});
export const productGreen = productWomen.filter((item) => {
  return item.color === "GREEN";
});
export const productRed = productWomen.filter((item) => {
  return item.color === "RED";
});
export const productYellow = productWomen.filter((item) => {
  return item.color === "YELLOW";
});
export const productPurple = productWomen.filter((item) => {
  return item.color === "PURPLE";
});
export const productKhahki = productWomen.filter((item) => {
  return item.color === "KHAKI";
});
export const productMaroon = productWomen.filter((item) => {
  return item.color === "MAROON";
});
export const productBewakoof = productWomen.filter((item) => {
  return item.brand === "Bewakoof®";
});
export const productTOMJERRY = productWomen.filter((item) => {
  return item.brand === "OFFICIAL TOM & JERRY MERCHANDISE";
});
export const productCARTOONNETWORK = productWomen.filter((item) => {
  return item.brand === "OFFICIAL CARTOON NETWORK MERCHANDISE";
});
export const productDISNEYMERCHANDISE = productWomen.filter((item) => {
  return item.brand === "OFFICIAL DISNEY MERCHANDISE";
});
export const productCHIMPAAANZEE = productWomen.filter((item) => {
  return item.brand === "CHIMPAAANZEE";
});
export const productCampusSutra = productWomen.filter((item) => {
  return item.brand === "Campus Sutra";
});
export const productLoungeDreams = productWomen.filter((item) => {
  return item.brand === "Lounge Dreams";
});
export const productInstafabPlus = productWomen.filter((item) => {
  return item.brand === "Instafab Plus";
});
export const productStyleQuotient = productWomen.filter((item) => {
  return item.brand === "Style Quotient";
});
export const productBewakoofAir = productWomen.filter((item) => {
  return item.brand === "Bewakoof Air® 1.0";
});
export const productRICKANDMORTY = productWomen.filter((item) => {
  return item.brand === "OFFICIAL RICK AND MORTY MERCHANDISE";
});
export const productHARRYPOTTER = productWomen.filter((item) => {
  return item.brand === "OFFICIAL HARRY POTTER MERCHANDISE";
});
export const productMARVEL = productWomen.filter((item) => {
  return item.brand === "OFFICIAL MARVEL MERCHANDISE";
});
export const productBelliskey = productWomen.filter((item) => {
  return item.brand === "Belliskey";
});
export const productDRYSTATE = productWomen.filter((item) => {
  return item.brand === "THE DRY STATE";
});
export const productPEANUTS = productWomen.filter((item) => {
  return item.brand === "OFFICIAL PEANUTS MERCHANDISE";
});
export const productLOONEYTUNES = productWomen.filter((item) => {
  return item.brand === "OFFICIAL LOONEY TUNES MERCHANDISE";
});
export const productGARFIELDMERCHANDISE = productWomen.filter((item) => {
  return item.brand === "OFFICIAL GARFIELD MERCHANDISE";
});
export const productMINIONSMERCHANDISE = productWomen.filter((item) => {
  return item.brand === "OFFICIAL MINIONS MERCHANDISE";
});
export const productNARUTOMERCHANDISE = productWomen.filter((item) => {
  return item.brand === "OFFICIAL NARUTO MERCHANDISE";
});
export const productTALESSTORIES = productWomen.filter((item) => {
  return item.brand === "TALES and STORIES";
});
export const productDCMERCHANDISE = productWomen.filter((item) => {
  return item.brand === "OFFICIAL DC MERCHANDISE";
});
export const productKotty = productWomen.filter((item) => {
  return item.brand === "Kotty";
});
export const productHubberholme = productWomen.filter((item) => {
  return item.brand === "Hubberholme";
});
export const productCOCACOLA = productWomen.filter((item) => {
  return item.brand === "OFFICIAL COCA COLA MERCHANDISE";
});
