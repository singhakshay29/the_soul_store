export let productMen;
export let productWomen;
export let productMenTshirt;
export let ColorNameMT;
export let brandNameMT;
export let productMenShirt;
export let brandNameMS;
export let ColorNameMS;
export let productMenSweater;
export let colorNameMSW;
export let brandNameMSW;
export let productMenKurta;
export let colorNameKu;
export let brandNameKu;
export let productMenHoodie;
export let colorNameHo;
export let brandNameHo;
export let colorNameMJS;
export let brandNameMJS;
export let productMenJeans;
export let brandNameJg;
export let colorNameJg;
export let productMenJoggers;
export let brandNameTr;
export let colorNameTr;
export let productMenTracksuit;
export let productMenShorts;
export let colorNameSh;
export let brandNameSh;
export let colorNamePy;
export let brandNamePy;
export let productMenPyjamas;
export let productMenTrouser;
export let colorNameTRS;
export let brandNameTRS;
export let productWomenTshirt;
export let productWomenJoggers;
export let productWomenJeans;
export let productWomenshirts;
export let productWomenJump;
export let productWomenKurti;
export let productWhite;
export let productPink;
export let productBlack;
export let productBlue;
export let productL;
export let productBrown;
export let productGrey;
export let productOrange;
export let productGreen;
export let productYellow;
export let productKhahki;
export let productMaroon;
export let productPurple;
export let productRed;
export let colorName;
export let brandName;
export let colorNameJ;
export let brandNameJ;
export let colorNameJS;
export let brandNameJS;
export let colorNameS;
export let brandNameS;
export let colorNameJP;
export let brandNameJP;
export let colorNameK;
export let brandNameK;
export let whitebrandName;
export let pinkbrandName;
export let blackbrandName;
export let bluebrandName;
export let LbrandName;
export let brownbrandName;
export let greybrandName;
export let orangebrandName;
export let GreenbrandName;
export let RedbrandName;
export let YellowbrandName;
export let PurplebrandName;
export let KhahkibrandName;
export let MaroonbrandName;
export let productBewakoof;
export let productTOMJERRY;
export let productCARTOONNETWORK;
export let productDISNEYMERCHANDISE;
export let productCHIMPAAANZEE;
export let productCampusSutra;
export let productLoungeDreams;
export let productInstafabPlus;
export let productStyleQuotient;
export let productBewakoofAir;
export let productRICKANDMORTY;
export let productHARRYPOTTER;
export let productMARVEL;
export let productBelliskey;
export let productDRYSTATE;
export let productPEANUTS;
export let productLOONEYTUNES;
export let productGARFIELDMERCHANDISE;
export let productMINIONSMERCHANDISE;
export let productNARUTOMERCHANDISE;
export let productTALESSTORIES;
export let productDCMERCHANDISE;
export let productKotty;
export let productHubberholme;
export let productCOCACOLA;

export function service(productList) {
  console.log(productList);
  productMen = productList.filter((item) => {
    return item.gender === "Men";
  });
  console.log(productMen);
  productWomen = productList.filter((item) => {
    return item.gender === "Women";
  });
  productMenTshirt = productMen.filter((item) => {
    return item.subCategory === "tshirt";
  });
  const MenTshirtCategory = productMenTshirt?.map((item) => {
    return item.brand;
  });
  const MenColorCategory = productMenTshirt?.map((item) => {
    return item.color;
  });
  ColorNameMT = [...new Set(MenColorCategory)];
  brandNameMT = [...new Set(MenTshirtCategory)];
  productMenShirt = productMen?.filter((item) => {
    return item.subCategory === "shirt";
  });
  const MenShirtCategory = productMenShirt?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryS = productMenShirt?.map((item) => {
    return item.color;
  });
  ColorNameMS = [...new Set(MenColorCategoryS)];
  brandNameMS = [...new Set(MenShirtCategory)];

  productMenSweater = productMen?.filter((item) => {
    return item.subCategory === "sweater";
  });

  const MenSweaterCategory = productMenSweater?.map((item) => {
    return item.brand;
  });

  const MenColorCategorySweater = productMenSweater?.map((item) => {
    return item.color;
  });
  colorNameMSW = [...new Set(MenColorCategorySweater)];
  brandNameMSW = [...new Set(MenSweaterCategory)];
  productMenKurta = productMen?.filter((item) => {
    return item.subCategory === "kurta";
  });

  const MenKurtaCategory = productMenKurta?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryKurta = productMenKurta?.map((item) => {
    return item.color;
  });
  colorNameKu = [...new Set(MenColorCategoryKurta)];
  brandNameKu = [...new Set(MenKurtaCategory)];
  productMenHoodie = productMen?.filter((item) => {
    return item.subCategory === "hoodie";
  });

  const MenHoodieCategory = productMenHoodie?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryHoodie = productMenHoodie?.map((item) => {
    return item.color;
  });
  colorNameHo = [...new Set(MenColorCategoryHoodie)];
  brandNameHo = [...new Set(MenHoodieCategory)];
  productMenTracksuit = productMen?.filter((item) => {
    return item.subCategory === "tracksuit";
  });

  const MentracksuitCategory = productMenTracksuit?.map((item) => {
    return item.brand;
  });

  const MenColorCategorytracksuit = productMenTracksuit?.map((item) => {
    return item.color;
  });
  colorNameTr = [...new Set(MenColorCategorytracksuit)];
  brandNameTr = [...new Set(MentracksuitCategory)];

  productMenJoggers = productMen?.filter((item) => {
    return item.subCategory === "jogger";
  });

  const MenJoggersCategory = productMenJoggers?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryJoggers = productMenJoggers?.map((item) => {
    return item.color;
  });
  colorNameJg = [...new Set(MenColorCategoryJoggers)];
  brandNameJg = [...new Set(MenJoggersCategory)];
  productMenJeans = productMen?.filter((item) => {
    return item.subCategory === "jeans";
  });

  const MenJeansCategory = productMenJeans?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryJeans = productMenJeans?.map((item) => {
    return item.color;
  });
  colorNameMJS = [...new Set(MenColorCategoryJeans)];
  brandNameMJS = [...new Set(MenJeansCategory)];
  productMenShorts = productMen?.filter((item) => {
    return item.subCategory === "shorts";
  });

  const MenShortsCategory = productMenShorts?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryShorts = productMenShorts?.map((item) => {
    return item.color;
  });
  colorNameSh = [...new Set(MenColorCategoryShorts)];
  brandNameSh = [...new Set(MenShortsCategory)];

  productMenPyjamas = productMen?.filter((item) => {
    return item.subCategory === "pyjamas";
  });
  const MenPyjamasCategory = productMenPyjamas?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryPyjamas = productMenPyjamas?.map((item) => {
    return item.color;
  });
  colorNamePy = [...new Set(MenColorCategoryPyjamas)];
  brandNamePy = [...new Set(MenPyjamasCategory)];
  productMenTrouser = productMen?.filter((item) => {
    return item.subCategory === "trouser";
  });

  const MenTrouserCategory = productMenTrouser?.map((item) => {
    return item.brand;
  });

  const MenColorCategoryTrouser = productMenTrouser?.map((item) => {
    return item.color;
  });
  colorNameTRS = [...new Set(MenColorCategoryTrouser)];
  brandNameTRS = [...new Set(MenTrouserCategory)];
  //
  productWomenTshirt = productWomen?.filter((item) => {
    return item.subCategory === "tshirt";
  });
  productWomenJoggers = productWomen?.filter((item) => {
    return item.subCategory === "jogger";
  });
  productWomenJeans = productWomen?.filter((item) => {
    return item.subCategory === "jeans";
  });
  productWomenshirts = productWomen?.filter((item) => {
    return item.subCategory === "shirt";
  });
  productWomenJump = productWomen?.filter((item) => {
    return item.subCategory === "jumpsuit";
  });
  productWomenKurti = productWomen?.filter((item) => {
    return item.subCategory === "kurti";
  });

  productWhite = productWomen?.filter((item) => {
    return item.color === "WHITE";
  });
  productPink = productWomen?.filter((item) => {
    return item.color === "PINK";
  });
  productBlack = productWomen?.filter((item) => {
    return item.color === "BLACK";
  });
  productBlue = productWomen?.filter((item) => {
    return item.color === "BLUE";
  });
  productL = productWomen?.filter((item) => {
    return item.color === "LAVENDER";
  });
  productBrown = productWomen?.filter((item) => {
    return item.color === "BROWN";
  });
  productGrey = productWomen?.filter((item) => {
    return item.color === "GREY";
  });
  productOrange = productWomen?.filter((item) => {
    return item.color === "ORANGE";
  });
  productGreen = productWomen?.filter((item) => {
    return item.color === "GREEN";
  });
  productYellow = productWomen?.filter((item) => {
    return item.color === "YELLOW";
  });
  productKhahki = productWomen?.filter((item) => {
    return item.color === "KHAKI";
  });
  productMaroon = productWomen?.filter((item) => {
    return item.color === "MAROON";
  });
  productPurple = productWomen?.filter((item) => {
    return item.color === "PURPLE";
  });
  productRed = productWomen?.filter((item) => {
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
  colorName = [...new Set(womenTshirtColor)];
  brandName = [...new Set(womenTshirtCategory)];
  colorNameJ = [...new Set(womenJoggersColor)];
  brandNameJ = [...new Set(womenJoggersCategory)];
  colorNameJS = [...new Set(womenJeansColor)];
  brandNameJS = [...new Set(womenJeansCategory)];
  colorNameS = [...new Set(womenShirtsColor)];
  brandNameS = [...new Set(womenShirtsCategory)];
  colorNameJP = [...new Set(womenJumpColor)];
  brandNameJP = [...new Set(womenJumpCategory)];
  colorNameK = [...new Set(womenKurtiColor)];
  brandNameK = [...new Set(womenKurtiCategory)];
  whitebrandName = [...new Set(womenProductWhiteBrand)];
  pinkbrandName = [...new Set(womenProductPinkBrand)];
  blackbrandName = [...new Set(womenProductBlackBrand)];
  bluebrandName = [...new Set(womenProductBlueBrand)];
  LbrandName = [...new Set(womenProductLBrand)];
  brownbrandName = [...new Set(womenProductBrownBrand)];
  greybrandName = [...new Set(womenProductGreyBrand)];
  orangebrandName = [...new Set(womenProductOrangeBrand)];
  GreenbrandName = [...new Set(womenProductGreenBrand)];
  RedbrandName = [...new Set(womenProductRedBrand)];
  YellowbrandName = [...new Set(womenProductYellowBrand)];
  PurplebrandName = [...new Set(womenProductPurpleBrand)];
  KhahkibrandName = [...new Set(womenProductKhahkiBrand)];
  MaroonbrandName = [...new Set(womenProductMaroonBrand)];
  productBewakoof = productWomen?.filter((item) => {
    return item.brand === "Bewakoof®";
  });

  // const productBewakoofColor = productBewakoof?.map((item) => {
  //   return item.color;
  // });

  productTOMJERRY = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL TOM & JERRY MERCHANDISE";
  });
  productCARTOONNETWORK = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL CARTOON NETWORK MERCHANDISE";
  });
  productDISNEYMERCHANDISE = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL DISNEY MERCHANDISE";
  });
  productCHIMPAAANZEE = productWomen?.filter((item) => {
    return item.brand === "CHIMPAAANZEE";
  });
  productCampusSutra = productWomen?.filter((item) => {
    return item.brand === "Campus Sutra";
  });
  productLoungeDreams = productWomen?.filter((item) => {
    return item.brand === "Lounge Dreams";
  });
  productInstafabPlus = productWomen?.filter((item) => {
    return item.brand === "Instafab Plus";
  });
  productStyleQuotient = productWomen?.filter((item) => {
    return item.brand === "Style Quotient";
  });
  productBewakoofAir = productWomen?.filter((item) => {
    return item.brand === "Bewakoof Air® export let .";
  });
  productRICKANDMORTY = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL RICK AND MORTY MERCHANDISE";
  });
  productHARRYPOTTER = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL HARRY POTTER MERCHANDISE";
  });
  productMARVEL = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL MARVEL MERCHANDISE";
  });
  productBelliskey = productWomen?.filter((item) => {
    return item.brand === "Belliskey";
  });
  productDRYSTATE = productWomen?.filter((item) => {
    return item.brand === "THE DRY STATE";
  });
  productPEANUTS = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL PEANUTS MERCHANDISE";
  });
  productLOONEYTUNES = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL LOONEY TUNES MERCHANDISE";
  });
  productGARFIELDMERCHANDISE = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL GARFIELD MERCHANDISE";
  });
  productMINIONSMERCHANDISE = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL MINIONS MERCHANDISE";
  });
  productNARUTOMERCHANDISE = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL NARUTO MERCHANDISE";
  });
  productTALESSTORIES = productWomen?.filter((item) => {
    return item.brand === "TALES and STORIES";
  });
  productDCMERCHANDISE = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL DC MERCHANDISE";
  });
  productKotty = productWomen?.filter((item) => {
    return item.brand === "Kotty";
  });
  productHubberholme = productWomen?.filter((item) => {
    return item.brand === "Hubberholme";
  });
  productCOCACOLA = productWomen?.filter((item) => {
    return item.brand === "OFFICIAL COCA COLA MERCHANDISE";
  });
}
