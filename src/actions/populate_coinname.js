export default function(request) {
  return {
    type: 'POPULATE_COINNAME',
    payload: request
  }
}
