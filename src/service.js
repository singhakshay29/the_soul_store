import { searchList } from "./fetch";
export function service(product) {
  function getSubCategoryData(products) {
    const subCategoryData = products.map((item) => ({
      brand: item.brand,
      color: item.color,
    }));

    const uniqueBrands = [
      ...new Set(subCategoryData.map((item) => item.brand)),
    ];
    const uniqueColors = [
      ...new Set(subCategoryData.map((item) => item.color)),
    ];
    return {
      brandName: uniqueBrands,
      colorName: uniqueColors,
      itemList: products,
    };
  }
  const data = getSubCategoryData(product);
  return data;
}

function filteredResultsbrand(givenArrayBrand, targetName) {
  const result = givenArrayBrand.filter((item) => {
    return item?.toLowerCase().startsWith(targetName.toLowerCase());
  });
  return result;
}

function filteredResultscategory(givenArrayBrand, targetName) {
  const result = givenArrayBrand.filter((item) => {
    return item?.toLowerCase().startsWith(targetName.toLowerCase());
  });
  return result;
}

export function isNamePresent(namesArray, targetName) {
  const givenArrayBrand = namesArray?.uniqueBrands;
  const givenArrayCategory = namesArray?.uniqueSubCategory;
  const resultsBrand = filteredResultsbrand(givenArrayBrand, targetName);
  const resultsCategory = filteredResultscategory(
    givenArrayCategory,
    targetName
  );
  const results = [...resultsBrand, ...resultsCategory].map((item) => {
    return item;
  });
  return results;
}

export function service2(productList) {
  const productMen = productList.filter((item) => {
    return item.gender === "Men";
  });

  function getAllData(product) {
    const uniqueBrands = [...new Set(product.map((item) => item.brand))];
    const uniqueSubCategory = [
      ...new Set(product.map((item) => item.subCategory)),
    ];
    return { uniqueBrands, uniqueSubCategory };
  }

  const productWomen = productList.filter((item) => {
    return item.gender === "Women";
  });

  function getSubCategoryData(products, subCategory) {
    const subCategoryData = products
      .filter((item) => item.subCategory === subCategory)
      .map((item) => ({
        brand: item.brand,
        color: item.color,
      }));
    const subCategoryDataItem = products.filter(
      (item) => item.subCategory === subCategory
    );

    const uniqueBrands = [
      ...new Set(subCategoryData.map((item) => item.brand)),
    ];
    const uniqueColors = [
      ...new Set(subCategoryData.map((item) => item.color)),
    ];

    return {
      brandName: uniqueBrands,
      colorName: uniqueColors,
      itemList: subCategoryDataItem,
    };
  }
  function getSubCategoryDataColor(products, subCategory) {
    const subCategoryDataItem = products.filter(
      (item) => item.color === subCategory
    );
    const uniqueBrands = [
      ...new Set(subCategoryDataItem.map((item) => item.brand)),
    ];

    return {
      itemList: subCategoryDataItem,
      brandName: uniqueBrands,
    };
  }
  function getSubCategoryDataBrand(products, subCategory) {
    const subCategoryDataItem = products.filter(
      (item) => item.brand === subCategory
    );
    const uniqueColor = [
      ...new Set(subCategoryDataItem.map((item) => item.color)),
    ];

    return {
      itemList: subCategoryDataItem,
      colorName: uniqueColor,
    };
  }

  return {
    productMenCollection: getAllData(productMen),
    productWomenCollection: getAllData(productWomen),
    productMenTshirtData: getSubCategoryData(productMen, "tshirt"),
    productMenShirtData: getSubCategoryData(productMen, "shirt"),
    productMenSweaterData: getSubCategoryData(productMen, "sweater"),
    productMenKurtaData: getSubCategoryData(productMen, "kurta"),
    productMenHoodieData: getSubCategoryData(productMen, "hoodie"),
    productMenJoggersData: getSubCategoryData(productMen, "jogger"),
    productMenJeansData: getSubCategoryData(productMen, "jeans"),
    productMenPyjamasData: getSubCategoryData(productMen, "pyjamas"),
    productMenShortsData: getSubCategoryData(productMen, "shorts"),
    productMenTracksuitData: getSubCategoryData(productMen, "tracksuit"),
    productMenTrouserData: getSubCategoryData(productMen, "trouser"),
    productMenBlackData: getSubCategoryDataColor(productMen, "BLACK"),
    productMenWhiteData: getSubCategoryDataColor(productMen, "WHITE"),
    productMenGreyData: getSubCategoryDataColor(productMen, "GREY"),
    productMenPinkData: getSubCategoryDataColor(productMen, "PINK"),
    productMenBlueData: getSubCategoryDataColor(productMen, "BLUE"),
    productMenBrownData: getSubCategoryDataColor(productMen, "BROWN"),
    productMenOrangeData: getSubCategoryDataColor(productMen, "ORANGE"),
    productMenGreenData: getSubCategoryDataColor(productMen, "GREEN"),
    productMenYellowData: getSubCategoryDataColor(productMen, "YELLOW"),
    productMenKhakiData: getSubCategoryDataColor(productMen, "KHAKI"),
    productMenMaroonData: getSubCategoryDataColor(productMen, "MAROON"),
    productMenPurpleData: getSubCategoryDataColor(productMen, "PURPLE"),
    productMenRedData: getSubCategoryDataColor(productMen, "RED"),
    productMenCreamData: getSubCategoryDataColor(productMen, "CREAM"),
    productMenOliveData: getSubCategoryDataColor(productMen, "OLIVE"),
    productMenCharcoalData: getSubCategoryDataColor(productMen, "CHARCOAL"),
    productMenSilverData: getSubCategoryDataColor(productMen, "SILVER"),
    productMenBeigeData: getSubCategoryDataColor(productMen, "BEIGE"),
    productWomenTshirtData: getSubCategoryData(productWomen, "tshirt"),
    productWomenJoggersData: getSubCategoryData(productWomen, "jogger"),
    productWomenJeansData: getSubCategoryData(productWomen, "jeans"),
    productWomenshirtsData: getSubCategoryData(productWomen, "shirt"),
    productWomenkurtiData: getSubCategoryData(productWomen, "kurti"),
    productWomenJumpsuitData: getSubCategoryData(productWomen, "jumpsuit"),
    productWomenWhiteData: getSubCategoryDataColor(productWomen, "WHITE"),
    productWomenPinkData: getSubCategoryDataColor(productWomen, "PINK"),
    productWomenBlackData: getSubCategoryDataColor(productWomen, "BLACK"),
    productWomenBlueData: getSubCategoryDataColor(productWomen, "BLUE"),
    productWomenLavenderData: getSubCategoryDataColor(productWomen, "LAVENDER"),
    productWomenBrownData: getSubCategoryDataColor(productWomen, "BROWN"),
    productWomenGreyData: getSubCategoryDataColor(productWomen, "GREY"),
    productWomenOrangeData: getSubCategoryDataColor(productWomen, "ORANGE"),
    productWomenGreenData: getSubCategoryDataColor(productWomen, "GREEN"),
    productWomenYellowData: getSubCategoryDataColor(productWomen, "YELLOW"),
    productWomenKhakiData: getSubCategoryDataColor(productWomen, "KHAKI"),
    productWomenMaroonData: getSubCategoryDataColor(productWomen, "MAROON"),
    productWomenPurpleData: getSubCategoryDataColor(productWomen, "PURPLE"),
    productWomenRedData: getSubCategoryDataColor(productWomen, "RED"),
    productTrueBuyWorldM: getSubCategoryDataBrand(productMen, "TrueBuyWorld"),
    productBushirtM: getSubCategoryDataBrand(productMen, "Bushirt"),
    productINDICLUBM: getSubCategoryDataBrand(productMen, "INDICLUB"),
    productKottyM: getSubCategoryDataBrand(productMen, "Kotty"),
    productBstoriesM: getSubCategoryDataBrand(productMen, "Bstories"),
    productShopolicsM: getSubCategoryDataBrand(productMen, "Shopolics"),
    productNASAM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL NASA MERCHANDISE"
    ),
    productHARRYPOTTERM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL HARRY POTTER MERCHANDISE"
    ),
    productHOUSEDRAGONM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL HOUSE OF THE DRAGON MERCHANDISE"
    ),
    productBLANCKM: getSubCategoryDataBrand(productMen, "BLANCK"),
    productBelliskeyM: getSubCategoryDataBrand(productMen, "Belliskey"),
    productThomasScottM: getSubCategoryDataBrand(productMen, "Thomas Scott"),
    productPEANUTSM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL PEANUTS MERCHANDISE"
    ),
    productDAILYOUTFITSM: getSubCategoryDataBrand(
      productMen,
      "THE DAILY OUTFITS"
    ),
    productUrbanScottishM: getSubCategoryDataBrand(
      productMen,
      "Urban Scottish"
    ),
    productBlueTygaM: getSubCategoryDataBrand(productMen, "Blue Tyga"),
    productMARVELMERCHANDISEM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL MARVEL MERCHANDISE"
    ),
    productDCMERCHANDISEM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL DC MERCHANDISE"
    ),
    productMINIONSMERCHANDISEM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL MINIONS MERCHANDISE"
    ),
    productBEWAKOOFXSTREETWEARM: getSubCategoryDataBrand(
      productMen,
      "BEWAKOOF X STREETWEAR"
    ),
    productBewakoofAmericanPimaM: getSubCategoryDataBrand(
      productMen,
      "Bewakoof American Pima"
    ),
    productSTARWARS: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL STAR WARS MERCHANDISE"
    ),
    productInstafabPlusM: getSubCategoryDataBrand(productMen, "Instafab Plus"),
    productOldGreyM: getSubCategoryDataBrand(productMen, "Old Grey"),
    productAlstyleM: getSubCategoryDataBrand(productMen, "Alstyle"),
    productKraniumM: getSubCategoryDataBrand(productMen, "Kranium"),
    productHubberholmeM: getSubCategoryDataBrand(productMen, "Hubberholme"),
    productMadOverPrintM: getSubCategoryDataBrand(productMen, "MadOverPrint"),
    productSmugglerzM: getSubCategoryDataBrand(productMen, "Smugglerz"),
    productFlynoffM: getSubCategoryDataBrand(productMen, "Flynoff"),
    productBreakbounceM: getSubCategoryDataBrand(productMen, "Breakbounce"),
    productChkokkoM: getSubCategoryDataBrand(productMen, "Chkokko"),
    productDISNEYMERCHANDISEM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL DISNEY MERCHANDISE"
    ),
    productTOMJERRYM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL TOM & JERRY MERCHANDISE"
    ),
    productCARTOONNETWORKM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL CARTOON NETWORK MERCHANDISE"
    ),
    productRodamoM: getSubCategoryDataBrand(productMen, "Rodamo"),
    productXYXXM: getSubCategoryDataBrand(productMen, "XYXX"),
    productRigoM: getSubCategoryDataBrand(productMen, "Rigo"),
    productBrownMochaM: getSubCategoryDataBrand(productMen, "Brown Mocha"),
    productBewakoofM: getSubCategoryDataBrand(productMen, "Bewakoof®"),
    productGARFIELDMERCHANDISEM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL GARFIELD MERCHANDISE"
    ),
    productNARUTOM: getSubCategoryDataBrand(
      productMen,
      "OFFICIAL NARUTO MERCHANDISE"
    ),
    productTISTABENEM: getSubCategoryDataBrand(productMen, "TISTABENE"),
    productCampusSutraM: getSubCategoryDataBrand(productMen, "Campus Sutra"),
    productShoresM: getSubCategoryDataBrand(productMen, "7 Shores"),
    productSAVVAOM: getSubCategoryDataBrand(productMen, "SAVVAO"),
    productBewakoofAirM: getSubCategoryDataBrand(
      productMen,
      "Bewakoof Air® 1.0"
    ),
    productBewakoof: getSubCategoryDataBrand(productWomen, "Bewakoof®"),
    productTOMJERRY: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL TOM & JERRY MERCHANDISE"
    ),

    productCARTOONNETWORK: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL CARTOON NETWORK MERCHANDISE"
    ),

    productDISNEYMERCHANDISE: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL DISNEY MERCHANDISE"
    ),
    productCHIMPAAANZEE: getSubCategoryDataBrand(productWomen, "CHIMPAAANZEE"),
    productCampusSutra: getSubCategoryDataBrand(productWomen, "Campus Sutra"),
    productLoungeDreams: getSubCategoryDataBrand(productWomen, "Lounge Dreams"),
    productInstafabPlus: getSubCategoryDataBrand(productWomen, "Instafab Plus"),
    productStyleQuotient: getSubCategoryDataBrand(
      productWomen,
      "Style Quotient"
    ),
    productBewakoofAir: getSubCategoryDataBrand(
      productWomen,
      "Bewakoof Air® 1.0"
    ),
    productRICKANDMORTY: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL RICK AND MORTY MERCHANDISE"
    ),
    productHARRYPOTTER: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL HARRY POTTER MERCHANDISE"
    ),
    productMARVEL: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL MARVEL MERCHANDISE"
    ),
    productBelliskey: getSubCategoryDataBrand(productWomen, "Belliskey"),
    productDRYSTATE: getSubCategoryDataBrand(productWomen, "THE DRY STATE"),
    productPEANUTS: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL PEANUTS MERCHANDISE"
    ),
    productLOONEYTUNES: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL LOONEY TUNES MERCHANDISE"
    ),
    productGARFIELDMERCHANDISE: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL GARFIELD MERCHANDISE"
    ),
    productMINIONSMERCHANDISE: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL MINIONS MERCHANDISE"
    ),
    productNARUTOMERCHANDISE: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL NARUTO MERCHANDISE"
    ),
    productTALESSTORIES: getSubCategoryDataBrand(
      productWomen,
      "TALES and STORIES"
    ),
    productDCMERCHANDISE: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL DC MERCHANDISE"
    ),
    productKotty: getSubCategoryDataBrand(productWomen, "Kotty"),
    productHubberholme: getSubCategoryDataBrand(productWomen, "Hubberholme"),
    productCOCACOLA: getSubCategoryDataBrand(
      productWomen,
      "OFFICIAL COCA COLA MERCHANDISE"
    ),
  };
}

export const searchFetchData = async (type, searchItem) => {
  switch (type) {
    case "brand":
      return searchList(`{"brand":"${searchItem}"}`);
    case "subCategory":
      return searchList(`{"subCategory":"${searchItem}"}`);
    default:
      throw new Error(`Invalid type: ${type}`);
  }
};

const isSubCategory = (type) => {
  const subCategory = [
    "Shirt",
    "Jogger",
    "Jeans",
    "Pyjamas",
    "Shorts",
    "Trouser",
    "Hoodie",
    "Tracksuit",
    "Kurta",
    "Tshirt",
    "Sweater",
    "Jumpsuit",
    "Kurti",
  ];
  return subCategory.includes(type);
};
const isColor = (type) => {
  const colors = [
    "Black",
    "Blue",
    "Green",
    "Brown",
    "White",
    "Grey",
    "Orange",
    "Lavender",
    "Maroon",
    "Khaki",
    "Purple",
    "Yellow",
    "Pink",
    "Red",
    "Beige",
    "Khaki",
    "Charcoal",
    "Silver",
    "Cream",
    "Olive",
  ];
  return colors.includes(capitalizeFirstLetter(type));
};
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const fetchDataByType = async (type) => {
  const capitalizedType = capitalizeFirstLetter(type);

  if (capitalizedType === "Men" || capitalizedType === "Women") {
    return searchList(`{"gender":"${capitalizedType}"}`);
  } else if (isColor(capitalizedType)) {
    return searchList(`{"color":"${capitalizedType}"}`);
  } else if (isSubCategory(capitalizedType)) {
    return searchList(`{"subCategory":"${capitalizedType}"}`);
  } else {
    return `Search Results for ${type}`;
  }
};
