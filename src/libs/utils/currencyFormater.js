const currencyFormater = (price) => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    compactDisplay: "short",
  })
  return USDollar.format(price)
}

export { currencyFormater }
