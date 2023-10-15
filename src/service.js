import mystore from "./store";
const store = mystore.getState();
console.log(store);

const productWomen = store.app.productsList?.stock?.filter((item) => {
  return item.gender === "Women";
});
console.log(store.app);
const productMen = store.app.productsList?.stock?.filter((item) => {
  return item.gender === "Men";
});

export const productMenTshirt = productMen?.filter((item) => {
  return item.subCategory === "tshirt";
});
const MenTshirtCategory = productMenTshirt?.map((item) => {
  return item.brand;
});

const MenColorCategory = productMenTshirt?.map((item) => {
  return item.color;
});
export const ColorNameMT = [...new Set(MenColorCategory)];
export const brandNameMT = [...new Set(MenTshirtCategory)];
console.log(ColorNameMT);
console.log(brandNameMT);
export const productMenShirt = productMen?.filter((item) => {
  return item.subCategory === "shirt";
});

const MenShirtCategory = productMenShirt?.map((item) => {
  return item.brand;
});

const MenColorCategoryS = productMenShirt?.map((item) => {
  return item.color;
});
export const ColorNameMS = [...new Set(MenColorCategoryS)];
export const brandNameMS = [...new Set(MenShirtCategory)];

export const productMenSweater = productMen?.filter((item) => {
  return item.subCategory === "sweater";
});

const MenSweaterCategory = productMenSweater?.map((item) => {
  return item.brand;
});

const MenColorCategorySweater = productMenSweater?.map((item) => {
  return item.color;
});
export const colorNameMSW = [...new Set(MenColorCategorySweater)];
export const brandNameMSW = [...new Set(MenSweaterCategory)];

export const productMenKurta = productMen?.filter((item) => {
  return item.subCategory === "kurta";
});

const MenKurtaCategory = productMenKurta?.map((item) => {
  return item.brand;
});

const MenColorCategoryKurta = productMenKurta?.map((item) => {
  return item.color;
});
export const colorNameKu = [...new Set(MenColorCategoryKurta)];
export const brandNameKu = [...new Set(MenKurtaCategory)];

export const productMenHoodie = productMen?.filter((item) => {
  return item.subCategory === "hoodie";
});

const MenHoodieCategory = productMenHoodie?.map((item) => {
  return item.brand;
});

const MenColorCategoryHoodie = productMenHoodie?.map((item) => {
  return item.color;
});
export const colorNameHo = [...new Set(MenColorCategoryHoodie)];
export const brandNameHo = [...new Set(MenHoodieCategory)];
//
export const productMenTracksuit = productMen?.filter((item) => {
  return item.subCategory === "tracksuit";
});

const MentracksuitCategory = productMenTracksuit?.map((item) => {
  return item.brand;
});

const MenColorCategorytracksuit = productMenTracksuit?.map((item) => {
  return item.color;
});
export const colorNameTr = [...new Set(MenColorCategorytracksuit)];
export const brandNameTr = [...new Set(MentracksuitCategory)];
//

export const productMenJoggers = productMen?.filter((item) => {
  return item.subCategory === "jogger";
});

const MenJoggersCategory = productMenJoggers?.map((item) => {
  return item.brand;
});

const MenColorCategoryJoggers = productMenJoggers?.map((item) => {
  return item.color;
});
export const colorNameJg = [...new Set(MenColorCategoryJoggers)];
export const brandNameJg = [...new Set(MenJoggersCategory)];

export const productMenJeans = productMen?.filter((item) => {
  return item.subCategory === "jeans";
});

const MenJeansCategory = productMenJeans?.map((item) => {
  return item.brand;
});

const MenColorCategoryJeans = productMenJeans?.map((item) => {
  return item.color;
});
export const colorNameMJS = [...new Set(MenColorCategoryJeans)];
export const brandNameMJS = [...new Set(MenJeansCategory)];

export const productMenShorts = productMen?.filter((item) => {
  return item.subCategory === "shorts";
});

const MenShortsCategory = productMenShorts?.map((item) => {
  return item.brand;
});

const MenColorCategoryShorts = productMenShorts?.map((item) => {
  return item.color;
});
export const colorNameSh = [...new Set(MenColorCategoryShorts)];
export const brandNameSh = [...new Set(MenShortsCategory)];

export const productMenPyjamas = productMen?.filter((item) => {
  return item.subCategory === "pyjamas";
});

const MenPyjamasCategory = productMenPyjamas?.map((item) => {
  return item.brand;
});

const MenColorCategoryPyjamas = productMenPyjamas?.map((item) => {
  return item.color;
});
export const colorNamePy = [...new Set(MenColorCategoryPyjamas)];
export const brandNamePy = [...new Set(MenPyjamasCategory)];

export const productMenTrouser = productMen?.filter((item) => {
  return item.subCategory === "trouser";
});

const MenTrouserCategory = productMenTrouser?.map((item) => {
  return item.brand;
});

const MenColorCategoryTrouser = productMenTrouser?.map((item) => {
  return item.color;
});
export const colorNameTRS = [...new Set(MenColorCategoryTrouser)];
export const brandNameTRS = [...new Set(MenTrouserCategory)];
//
export const productWomenTshirt = productWomen?.filter((item) => {
  return item.subCategory === "tshirt";
});
console.log(productWomenTshirt);
export const productWomenJoggers = productWomen?.filter((item) => {
  return item.subCategory === "jogger";
});
export const productWomenJeans = productWomen?.filter((item) => {
  return item.subCategory === "jeans";
});
export const productWomenshirts = productWomen?.filter((item) => {
  return item.subCategory === "shirt";
});
export const productWomenJump = productWomen?.filter((item) => {
  return item.subCategory === "jumpsuit";
});
export const productWomenKurti = productWomen?.filter((item) => {
  return item.subCategory === "kurti";
});
export const productWhite = productWomen?.filter((item) => {
  return item.color === "WHITE";
});
export const productPink = productWomen?.filter((item) => {
  return item.color === "PINK";
});
export const productBlack = productWomen?.filter((item) => {
  return item.color === "BLACK";
});
export const productBlue = productWomen?.filter((item) => {
  return item.color === "BLUE";
});
export const productL = productWomen?.filter((item) => {
  return item.color === "LAVENDER";
});
export const productBrown = productWomen?.filter((item) => {
  return item.color === "BROWN";
});
export const productGrey = productWomen?.filter((item) => {
  return item.color === "GREY";
});
export const productOrange = productWomen?.filter((item) => {
  return item.color === "ORANGE";
});
export const productGreen = productWomen?.filter((item) => {
  return item.color === "GREEN";
});
export const productYellow = productWomen?.filter((item) => {
  return item.color === "YELLOW";
});
export const productKhahki = productWomen?.filter((item) => {
  return item.color === "KHAKI";
});
export const productMaroon = productWomen?.filter((item) => {
  return item.color === "MAROON";
});
export const productPurple = productWomen?.filter((item) => {
  return item.color === "PURPLE";
});
export const productRed = productWomen?.filter((item) => {
  return item.color === "RED";
});
const womenTshirtCategory = productWomenTshirt?.map((item) => {
  return item.brand;
});
const womenTshirtColor = productWomenTshirt?.map((item) => {
  return item.color;
});
const womenJoggersCategory = productWomenJoggers?.map((item) => {
  return item.brand;
});
const womenJoggersColor = productWomenJoggers?.map((item) => {
  return item.color;
});
const womenJeansCategory = productWomenJeans?.map((item) => {
  return item.brand;
});
const womenJeansColor = productWomenJeans?.map((item) => {
  return item.color;
});
const womenShirtsCategory = productWomenshirts?.map((item) => {
  return item.brand;
});
const womenShirtsColor = productWomenshirts?.map((item) => {
  return item.color;
});
const womenJumpCategory = productWomenJump?.map((item) => {
  return item.brand;
});
const womenJumpColor = productWomenJump?.map((item) => {
  return item.color;
});
const womenKurtiCategory = productWomenKurti?.map((item) => {
  return item.brand;
});
const womenKurtiColor = productWomenKurti?.map((item) => {
  return item.color;
});
const womenProductWhiteBrand = productWhite?.map((item) => {
  return item.brand;
});
const womenProductPinkBrand = productPink?.map((item) => {
  return item.brand;
});
const womenProductBlackBrand = productBlack?.map((item) => {
  return item.brand;
});
const womenProductBlueBrand = productBlue?.map((item) => {
  return item.brand;
});
const womenProductBrownBrand = productBrown?.map((item) => {
  return item.brand;
});

const womenProductGreyBrand = productGrey?.map((item) => {
  return item.brand;
});

const womenProductOrangeBrand = productOrange?.map((item) => {
  return item.brand;
});
const womenProductLBrand = productL?.map((item) => {
  return item.brand;
});
const womenProductGreenBrand = productGreen?.map((item) => {
  return item.brand;
});
const womenProductRedBrand = productRed?.map((item) => {
  return item.brand;
});
const womenProductYellowBrand = productYellow?.map((item) => {
  return item.brand;
});

const womenProductPurpleBrand = productPurple?.map((item) => {
  return item.brand;
});
const womenProductKhahkiBrand = productKhahki?.map((item) => {
  return item.brand;
});
const womenProductMaroonBrand = productMaroon?.map((item) => {
  return item.brand;
});

export const colorName = [...new Set(womenTshirtColor)];
export const brandName = [...new Set(womenTshirtCategory)];
export const colorNameJ = [...new Set(womenJoggersColor)];
export const brandNameJ = [...new Set(womenJoggersCategory)];
export const colorNameJS = [...new Set(womenJeansColor)];
export const brandNameJS = [...new Set(womenJeansCategory)];
export const colorNameS = [...new Set(womenShirtsColor)];
export const brandNameS = [...new Set(womenShirtsCategory)];
export const colorNameJP = [...new Set(womenJumpColor)];
export const brandNameJP = [...new Set(womenJumpCategory)];
export const colorNameK = [...new Set(womenKurtiColor)];
export const brandNameK = [...new Set(womenKurtiCategory)];
export const whitebrandName = [...new Set(womenProductWhiteBrand)];
export const pinkbrandName = [...new Set(womenProductPinkBrand)];
export const blackbrandName = [...new Set(womenProductBlackBrand)];
export const bluebrandName = [...new Set(womenProductBlueBrand)];
export const LbrandName = [...new Set(womenProductLBrand)];
export const brownbrandName = [...new Set(womenProductBrownBrand)];
export const greybrandName = [...new Set(womenProductGreyBrand)];
export const orangebrandName = [...new Set(womenProductOrangeBrand)];
export const GreenbrandName = [...new Set(womenProductGreenBrand)];
export const RedbrandName = [...new Set(womenProductRedBrand)];
export const YellowbrandName = [...new Set(womenProductYellowBrand)];
export const PurplebrandName = [...new Set(womenProductPurpleBrand)];
export const KhahkibrandName = [...new Set(womenProductKhahkiBrand)];
export const MaroonbrandName = [...new Set(womenProductMaroonBrand)];

export const productBewakoof = productWomen?.filter((item) => {
  return item.brand === "Bewakoof®";
});
export const productTOMJERRY = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL TOM & JERRY MERCHANDISE";
});
export const productCARTOONNETWORK = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL CARTOON NETWORK MERCHANDISE";
});
export const productDISNEYMERCHANDISE = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL DISNEY MERCHANDISE";
});
export const productCHIMPAAANZEE = productWomen?.filter((item) => {
  return item.brand === "CHIMPAAANZEE";
});
export const productCampusSutra = productWomen?.filter((item) => {
  return item.brand === "Campus Sutra";
});
export const productLoungeDreams = productWomen?.filter((item) => {
  return item.brand === "Lounge Dreams";
});
export const productInstafabPlus = productWomen?.filter((item) => {
  return item.brand === "Instafab Plus";
});
export const productStyleQuotient = productWomen?.filter((item) => {
  return item.brand === "Style Quotient";
});
export const productBewakoofAir = productWomen?.filter((item) => {
  return item.brand === "Bewakoof Air® 1.0";
});
export const productRICKANDMORTY = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL RICK AND MORTY MERCHANDISE";
});
export const productHARRYPOTTER = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL HARRY POTTER MERCHANDISE";
});
export const productMARVEL = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL MARVEL MERCHANDISE";
});
export const productBelliskey = productWomen?.filter((item) => {
  return item.brand === "Belliskey";
});
export const productDRYSTATE = productWomen?.filter((item) => {
  return item.brand === "THE DRY STATE";
});
export const productPEANUTS = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL PEANUTS MERCHANDISE";
});
export const productLOONEYTUNES = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL LOONEY TUNES MERCHANDISE";
});
export const productGARFIELDMERCHANDISE = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL GARFIELD MERCHANDISE";
});
export const productMINIONSMERCHANDISE = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL MINIONS MERCHANDISE";
});
export const productNARUTOMERCHANDISE = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL NARUTO MERCHANDISE";
});
export const productTALESSTORIES = productWomen?.filter((item) => {
  return item.brand === "TALES and STORIES";
});
export const productDCMERCHANDISE = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL DC MERCHANDISE";
});
export const productKotty = productWomen?.filter((item) => {
  return item.brand === "Kotty";
});
export const productHubberholme = productWomen?.filter((item) => {
  return item.brand === "Hubberholme";
});
export const productCOCACOLA = productWomen?.filter((item) => {
  return item.brand === "OFFICIAL COCA COLA MERCHANDISE";
});
