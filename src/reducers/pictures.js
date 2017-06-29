export default function(state = [], action) {
  switch (action.type) {
    case 'POPULATE_PHOTOS':
      var arr = [];
      var currPrice;
      var pastPrice;
      var pastpastPrice;
      action.payload.data.map((coin) => {
        currPrice = coin.price_usd;
        pastPrice = coin.price_usd * (1 + (coin.percent_change_24h / 100))
        pastpastPrice = coin.percent_change_7d;
        arr.push({
          pastPrice: pastPrice,
          currPrice: currPrice,
          pastpastPrice: pastpastPrice
        })
      })

      return state.concat(arr);

  }
  return state;
}
