import {generateBackground} from "./index.js";

// Don't delete this, its important
window.setDestImgs = setDestImgs;
// function setDestImgs(place) {
//     const imageArray = imageArrays[place];
//     if (imageArray) {
//         setRandomImages(imageArray);
//         generateBackground(place);
//     }
// }
//
// window.setDestImgs = setDestImgs;
//
// function setRandomImages(imageArray) {
//     shuffleArray(imageArray);
//     const numImages = Math.min(imageArray.length, 4);
//     for (let i = 0; i < numImages; i++) {
//         const imageUrl = imageArray[i].imageUrl;
//         const imageId = `image${i + 1}`;
//         document.getElementById(imageId).style.backgroundImage = `url(${imageUrl})`;
//     }
// }
//
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// const costaImg = [
//     {
//         imageUrl: 'https://images.unsplash.com/photo-1580094333632-438bdc04f79f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     },
//     {
//         imageUrl: 'https://plus.unsplash.com/premium_photo-1669754898242-23079dcea728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     },
//     {
//         imageUrl: 'https://images.unsplash.com/photo-1552727131-5fc6af16796d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80',
//     },
//     {
//         imageUrl: 'https://plus.unsplash.com/premium_photo-1669261232192-6c625a80375e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     },
//     {
//         imageUrl: 'https://images.unsplash.com/photo-1552980870-139c7b393f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
//     },
//
// ]
//
// const imageArrays = {
//     costa: costaImg,
//     // panama: panamaImg,
//     // dominican: dominicanImg,
//     // brazil: brazilImg,
//     // ecuador: ecuadorImg,
//     // aruba: arubaImg,
//     // colombia: colombiaImg,
// };