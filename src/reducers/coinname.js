export default function(state = [], action) {
  switch (action.type) {
    case 'POPULATE_COINNAME':
      var arr = [];
      action.payload.data.map((coin) => {
        arr.push(coin.symbol);
      })

      return state.concat(arr);
  }
  return state;
}
