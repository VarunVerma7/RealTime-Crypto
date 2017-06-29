export default function populatePhotos(request) {
  var urls = ['../../assets/testimg1.jpg', '../../assets/testimg2.jpg',
    '../../assets/testimg3.jpg', '../../assets/testimg4.jpg',
    '../../assets/testimg5.jpg']

  return {
    type: 'POPULATE_PHOTOS',
    payload: request
  }
}
