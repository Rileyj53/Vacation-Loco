// Don't delete this, wont work without it
window.loadIndex = loadIndex;

function loadIndex() {
    generateTestimonials()
    generateBackground()
}

function generateTestimonials() {
    const selectedTestimonials = [];
    for (let i = 0; i < 4; i++) {
        let testimonial;
        do {
            testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
        } while (selectedTestimonials.includes(testimonial));
        selectedTestimonials.push(testimonial);
    }

    document.getElementById("testimonial1").innerHTML = selectedTestimonials[0].testimonial;
    document.getElementById("author1").innerHTML = selectedTestimonials[0].author;
    document.getElementById("testimonial2").innerHTML = selectedTestimonials[1].testimonial;
    document.getElementById("author2").innerHTML = selectedTestimonials[1].author;
    document.getElementById("testimonial3").innerHTML = selectedTestimonials[2].testimonial;
    document.getElementById("author3").innerHTML = selectedTestimonials[2].author;
}

export function generateBackground(page) {
    switch (page) {
        case 'costa':
            page = '0';
            break;
        case 'panama':
            page = '1';
            break;
        case 'dominican':
            page = '2';
            break;
        case 'brazil':
            page = '3';
            break;
        case 'ecuador':
            page = '4';
            break;
        case 'aruba':
            page = '5';
            break;
        case 'colombia':
            page = '6';
            break;
        default:
            page = null;
            break;
    }

    let randomImg;
    if (!page) {
        randomImg = Math.floor(Math.random() * pictures.length);
    } else {
        randomImg = parseInt(page);
    }
    // console.log(randomImg)
    // console.log(page)

    const {imgUrl, imgLocation, slogan} = pictures[randomImg];
    // const {imgUrl, imgLocation, slogan} = pictures[0];

    document.getElementsByClassName("background-image")[0].style.backgroundImage = imgUrl;
    document.getElementsByClassName("img-location")[0].innerHTML = imgLocation;
    document.getElementsByClassName("slogan")[0].innerHTML = slogan;
}

const pictures = [ // Slowly replacing these with the images url instead of downloading them
    {
        imgUrl: 'url(https://images.unsplash.com/photo-1580094333632-438bdc04f79f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)',
        // imgUrl: 'url(assets/img/0.webp)',
        // Photo from unsplash.com
        // Photographer: Cosmic Timetraveler
        imgLocation: 'Costa Rica',
        slogan: 'Discover the Pura Vida of Costa Rica'
    },
    {
        imgUrl: 'url(https://images.unsplash.com/photo-1580756169501-a0df53f8b91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
        // imgUrl: 'url(assets/img/1.webp)',

        // Photo from unsplash.com
        // Photographer: Chema Photo
        imgLocation: 'Panama',
        slogan: 'Experience the Beauty and Adventure of Panama'
    },
    {
        imgUrl: 'url(assets/img/2.webp)',
        // Photo from unsplash.com
        // Photographer: Yi Wei
        imgLocation: 'Dominican Republic',
        slogan: 'Escape to the Sun-Soaked Beaches of the Dominican Republic'
    },
    {
        imgUrl: 'url(assets/img/3.webp)',
        // Photo from unsplash.com
        // Photographer: Raphael Nogueira
        imgLocation: 'Brazil',
        slogan: 'Uncover the Vibrant Culture of Brazil'
    },
    {
        imgUrl: 'url(assets/img/4.webp)',
        // Photo from unsplash.com
        // Photographer: Robinson Recalde
        imgLocation: 'Ecuador',
        slogan: 'Explore the Wonders of Ecuador'
    },
    {
        imgUrl: 'url(assets/img/5.webp)',
        // Photo from unsplash.com
        // Photographer: Kiril Georgiev
        imgLocation: 'Aruba',
        slogan: 'Relax and Recharge on the Beaches of Aruba'
    },
    {
        imgUrl: 'url(assets/img/6.webp)',
        // Photo from unsplash.com
        // Photographer: Saul Mercado
        imgLocation: 'Colombia',
        slogan: 'Embrace the Beauty and Diversity of Colombia'
    },
];

const testimonials = [
    {
        author: 'The Johnson Family',
        testimonial: 'My trip to Brazil with Vacation Loco was nothing short of amazing. The food, culture, and people were all incredible. The accommodations were top-notch and the excursions were well planned and incredibly fun. I felt safe the entire time and would definitely recommend this trip to anyone looking for an unforgettable experience in South America.',
    },
    {
        author: 'David Lee',
        testimonial: 'I recently took a trip to Aruba with Vacation Loco and it was the trip of a lifetime. The beaches were stunning and the activities were so much fun. I also loved getting to try the local cuisine and learning about the culture. I felt well taken care of throughout the entire trip and would definitely recommend this destination and travel agency to anyone.',
    },
    {
        author: 'Rachel Davis',
        testimonial: 'I was skeptical about taking a trip to an unfamiliar place, but my experience with Vacation Loco in Panama was nothing short of fantastic. The culture and people were so welcoming and the excursions were amazing. The accommodations were comfortable and I felt safe the entire time. I would highly recommend Vacation Loco to anyone looking for an authentic and memorable travel experience.',
    },
    {
        author: 'The Smith Family',
        testimonial: 'I recently took a trip to Costa Rica with Vacation Loco and it was one of the best trips I\'ve ever taken. The natural beauty of the country was breathtaking and the activities were so much fun. The local cuisine was delicious and I loved getting to immerse myself in the culture. I would definitely recommend this trip and travel agency to anyone looking for an adventure in South America.',
    },
    {
        author: 'Jessica Chen',
        testimonial: 'I was so impressed with my trip to the Dominican Republic with Vacation Loco. The accommodations were luxurious and the excursions were well planned and enjoyable. The local food was delicious and I loved getting to experience the culture. I felt safe the entire time and would highly recommend this destination and travel agency to anyone.',
    },
    {
        author: 'James Rodriguez',
        testimonial: 'My trip to Colombia with Vacation Loco was a dream come true. The culture, food, and people were all amazing. The excursions were well planned and incredibly fun. I felt safe the entire time and would definitely recommend this destination and travel agency to anyone looking for an authentic and unforgettable travel experience in South America.',
    },
    {
        author: 'The Doe Family',
        testimonial: 'The trip to Aruba with Vacation Loco was a mixed bag. The beaches were stunning and the activities were great, but the accommodations were a little disappointing. Despite that, I still had a great time and would recommend the destination and travel agency to others looking for a fun-filled vacation.',
    },
    {
        author: 'Karen Brown',
        testimonial: 'My experience in Colombia was eye-opening. The culture and food were fantastic, but the excursions were a little disorganized. However, I still felt safe and would recommend Vacation Loco to others looking for a unique and memorable travel experience.',
    },
    {
        author: 'Tom Wilson',
        testimonial: 'My trip to Costa Rica with Vacation Loco was an adventure. The natural beauty of the country was breathtaking, but the accommodations were basic and the food was just okay. Despite these negatives, I would still recommend the destination and travel agency to others looking for an immersive travel experience.',
    },
    {
        author: 'Emily Davis',
        testimonial: 'The excursions in Panama were the highlight of my trip with Vacation Loco. However, the food was a little underwhelming and the accommodations were basic. Nevertheless, I would still recommend this destination and travel agency to others looking for a unique travel experience.',
    },
]

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
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
//
// function setRandomImages(imageArray) {
//     shuffleArray(imageArray);
//     for (let i = 0; i < Math.min(imageArray.length, 4); i++) {
//         document.getElementById(`image${i + 1}`).style.backgroundImage = `url(${imageArray[i].imageUrl})`;
//     }
// }
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
//
// function setDestImgs(place) {
//     const imageArray = imageArrays[place];
//     if (imageArray) {
//         setRandomImages(imageArray);
//         generateBackground(place);
//     }
// }
//
//
// function testFuck(place) {
//     console.log(place + "Img")
// }
//
// console.log(typeof (imageArrays['costa']))