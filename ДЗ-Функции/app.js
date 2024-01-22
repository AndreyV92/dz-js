function conversionMoney(initialValue, currencyInValue) {
  const ratesEUR = 0.12;
  const ratesUSD = 0.11;
  const ratesRuble = 0.09;
  let currencyInEUR = initialValue * ratesEUR;
  let currencyInUSD = initialValue * ratesUSD;
  let currencyInRuble = initialValue * ratesRuble;
  if (!currencyInValue) {
    return null;
  }
  switch (true) {
    case currencyInValue === "EUR":
      return currencyInEUR;
    case currencyInValue === "USD":
      return currencyInUSD;
    case currencyInValue === "Ruble":
      return currencyInRuble;
    default:
      console.log("Значение на заданно");
  }
}

const myConversionMoney = conversionMoney(1000, "Ruble");

console.log(myConversionMoney);
