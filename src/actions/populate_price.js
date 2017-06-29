export default function(request) {
  return {
    type: 'POPULATE_PRICE',
    payload: request
  }
}
