export default function(state = [], action) {
  switch (action.type) {
    case 'POPULATE_PRICE':
      var arr = [];
      action.payload.data.map((coin) => {
        arr.push(coin.price_usd);
      })
      console.log(arr);
      return state.concat(arr);
  }
  return state;
}
