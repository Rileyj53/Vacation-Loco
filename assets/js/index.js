function generateContent() {
    const pictures = [
        {
            imgUrl: 'url(assets/img/0.webp)',
            // Photo from unsplash.com
            // Photographer: Cosmic Timetraveler
            imgLocation: 'Costa Rica',
            slogan: 'Explore the Best of South America & Mexico'
        },
        {
            imgUrl: 'url(assets/img/1.webp)',
            // Photo from unsplash.com
            // Photographer: Angel Silva
            imgLocation: 'Panama',
            slogan: 'Unlock the Secrets of South American & Mexican Culture'
        },
        {
            imgUrl: 'url(assets/img/2.webp)',
            // Photo from unsplash.com
            // Photographer: Yi Wei
            imgLocation: 'Dominican Republic',
            slogan: 'Live the Adventure in South America & Mexico'
        },
        {
            imgUrl: 'url(assets/img/3.webp)',
            // Photo from unsplash.com
            // Photographer: Raphael Nogueira
            imgLocation: 'Brazil',
            slogan: 'Dive into the Beauty of South American & Mexican Destinations'
        },
        {
            imgUrl: 'url(assets/img/4.webp)',
            // Photo from unsplash.com
            // Photographer: Robinson Recalde
            imgLocation: 'Ecuador',
            slogan: 'Embrace the Spirit of South America & Mexico'
        },
        {
            imgUrl: 'url(assets/img/5.webp)',
            // Photo from unsplash.com
            // Photographer: Kiril Georgiev
            imgLocation: 'Aruba',
            slogan: 'Journey Beyond the Ordinary in South America & Mexico'
        },
        {
            imgUrl: 'url(assets/img/6.webp)',
            // Photo from unsplash.com
            // Photographer: Saul Mercado
            imgLocation: 'Colombia',
            slogan: 'Discover the Beauty of South America & Mexico'
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


    const randomImg = Math.floor(Math.random() * pictures.length);
    const {imgUrl, imgLocation, slogan} = pictures[randomImg];

    const selectedTestimonials = [];
    for (let i = 0; i < 4; i++) {
        let testimonial;
        do {
            testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
        } while (selectedTestimonials.includes(testimonial));
        selectedTestimonials.push(testimonial);
    }

    const {testimonial: testimonial1, author: author1} = selectedTestimonials[0];
    const {testimonial: testimonial2, author: author2} = selectedTestimonials[1];
    const {testimonial: testimonial3, author: author3} = selectedTestimonials[2];

    document.getElementById("testimonial1").innerHTML = testimonial1;
    document.getElementById("author1").innerHTML = author1;
    document.getElementById("testimonial2").innerHTML = testimonial2;
    document.getElementById("author2").innerHTML = author2;
    document.getElementById("testimonial3").innerHTML = testimonial3;
    document.getElementById("author3").innerHTML = author3;


    document.getElementsByClassName("background-image")[0].style.backgroundImage = imgUrl;
    document.getElementsByClassName("img-location")[0].innerHTML = imgLocation;
    document.getElementsByClassName("slogan")[0].innerHTML = slogan;
}