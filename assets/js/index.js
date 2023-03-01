////////////////////////////////////////////
// By: Riley Jacobson
// Date: 02/28/2023
// Description: This is the main JavaScript file for the Vacation Loco website. All of the functions are labled and have short descriptions of what they do.
// Author Note: I wanted to use JavaScript because I needed a good project using JS for my portfolio. I also wanted to use JS because I wanted to learn more about it.
////////////////////////////////////////////

////////////////////////////////////////////
// Arrays Section
////////////////////////////////////////////
const pictures = [
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
        imgUrl: 'url(https://images.unsplash.com/photo-1592174887344-02ff9373ca55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80)',
        // Photo from unsplash.com
        // Photographer: Yi Wei
        imgLocation: 'Dominican Republic',
        slogan: 'Escape to the Sun-Soaked Beaches of the Dominican Republic'
    },
    {
        imgUrl: 'url(https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80)',
        // Photo from unsplash.com
        // Photographer: Raphael Nogueira
        imgLocation: 'Brazil',
        slogan: 'Uncover the Vibrant Culture of Brazil'
    },
    {
        imgUrl: 'url(https://images.unsplash.com/photo-1580918860823-f0072f5a6719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
        // Photo from unsplash.com
        // Photographer: Robinson Recalde
        imgLocation: 'Ecuador',
        slogan: 'Explore the Wonders of Ecuador'
    },
    {
        imgUrl: 'url(https://images.unsplash.com/photo-1633421332483-1aa89f0c6b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)',
        // Photo from unsplash.com
        // Photographer: Kiril Georgiev
        imgLocation: 'Aruba',
        slogan: 'Relax and Recharge on the Beaches of Aruba'
    },
    {
        imgUrl: 'url(https://images.unsplash.com/photo-1576018753502-1a55b66cc44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80)',
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

const displayImg = [
    {
        // Photo from unsplash.com
        // Photographer: Etienne Delorieux
        country: 'Costa Rica',
        imageUrl: 'https://images.unsplash.com/photo-1580259679654-9276b39fd2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Costa Rica',
        // Photo from unsplash.com
        // Photographer: Berti Benbanaste
        imageUrl: 'https://images.unsplash.com/photo-1552980870-139c7b393f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Costa Rica',
        // Photo from unsplash.com
        // Photographer: Zdeněk Macháček
        imageUrl: 'https://images.unsplash.com/photo-1552727131-5fc6af16796d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80',
    },
    {
        country: 'Costa Rica',
        // Photo from unsplash.com
        // Photographer: Zdeněk Macháček
        imageUrl: 'https://images.unsplash.com/photo-1586768019524-c6e902168263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1917&q=80',
    },
    {
        country: 'Costa Rica',
        // Photo from unsplash.com
        // Photographer: Zdeněk Macháček
        imageUrl: 'https://images.unsplash.com/photo-1550853123-b81beb0b1449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80',
    },
    {
        country: 'Costa Rica',
        // Photo from unsplash.com
        // Photographer: Atanas Malamov
        imageUrl: 'https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Costa Rica',
        // Photo from unsplash.com
        // Photographer: Adrian Eriksson
        imageUrl: 'https://images.unsplash.com/photo-1592227068146-bd177328e578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    // Costa Rica images end here

    {
        country: 'Panama',
        // Photo from unsplash.com
        // Photographer: Chema Photo
        imageUrl: 'https://images.unsplash.com/photo-1580984398689-ebe40355d404?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Panama',
        // Photo from unsplash.com
        // Photographer: Chema Photo
        imageUrl: 'https://images.unsplash.com/photo-1580108888829-2a1f82029c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Panama',
        // Photo from unsplash.com
        // Photographer: Niels van Altena
        imageUrl: 'https://images.unsplash.com/photo-1599560324079-af5f94f2c37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Panama',
        // Photo from unsplash.com
        // Photographer: Fabrice Parchet
        imageUrl: 'https://images.unsplash.com/photo-1587759301533-ae42d7065a80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Panama',
        // Photo from unsplash.com
        // Photographer: Azzedine Rouichi
        imageUrl: 'https://images.unsplash.com/photo-1581620365187-71d518c0fef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Panama',
        // Photo from unsplash.com
        // Photographer: Fabio Fistarol
        imageUrl: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    {
        country: 'Panama',
        // Photo from unsplash.com
        // Photographer: Darren Miller
        imageUrl: 'https://images.unsplash.com/photo-1582059983736-eedd5df2212b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    // Panama images end here

    {
        country: 'Dominican Republic',
        // Photo from unsplash.com
        // Photographer: Kamil Kalbarczyk
        imageUrl: 'https://images.unsplash.com/photo-1529420705456-5c7e04dd043d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
    {
        country: 'Dominican Republic',
        // Photo from unsplash.com
        // Photographer: Michelangelo Azzariti
        imageUrl: 'https://images.unsplash.com/photo-1636378163213-ded48bf09b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
    {
        country: 'Dominican Republic',
        // Photo from unsplash.com
        // Photographer: Robin Canfield
        imageUrl: 'https://images.unsplash.com/photo-1602608099803-96718a589bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Dominican Republic',
        // Photo from unsplash.com
        // Photographer: Valeriy Labushkin
        imageUrl: 'https://images.unsplash.com/photo-1555669320-429edc655c9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80',
    },
    {
        country: 'Dominican Republic',
        // Photo from unsplash.com
        // Photographer: Asael Peña
        imageUrl: 'https://images.unsplash.com/photo-1617718295766-0f839c2853e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2666&q=80',
    },
    {
        country: 'Dominican Republic',
        // Photo from unsplash.com
        // Photographer: Damian Dominguez
        imageUrl: 'https://images.unsplash.com/photo-1585573098393-e11fc82c11af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    // Dominican Republic images end here

    {
        country: 'Brazil',
        // Photo from unsplash.com
        // Photographer: Raphael Nogueira
        imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Brazil',
        // Photo from unsplash.com
        // Photographer: Agustin Diaz Gargiulo
        imageUrl: 'https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
    },
    {
        country: 'Brazil',
        // Photo from unsplash.com
        // Photographer: Jonathan Borba
        imageUrl: 'https://images.unsplash.com/photo-1551529489-5c97b567c760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        country: 'Brazil',
        // Photo from unsplash.com
        // Photographer: F Cary Snyder
        imageUrl: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    },
    {
        country: 'Brazil',
        // Photo from unsplash.com
        // Photographer: Milos Hajder
        imageUrl: 'https://images.unsplash.com/photo-1585436249848-3a8210d46a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
    },
    {
        country: 'Brazil',
        // Photo from unsplash.com
        // Photographer: Du Zaniol
        imageUrl: 'https://images.unsplash.com/photo-1662428484642-da5cdacc147f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    // Brazil images end here

    {
        country: 'Ecuador',
        // Photo from unsplash.com
        // Photographer: Mauricio Muñoz
        imageUrl: 'https://images.unsplash.com/photo-1610226977124-9fd2755d09f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Ecuador',
        // Photo from unsplash.com
        // Photographer: Azzedine Rouichi
        imageUrl: 'https://images.unsplash.com/photo-1623263704614-a3feeeceb9c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2003&q=80',
    },
    {
        country: 'Ecuador',
        // Photo from unsplash.com
        // Photographer: Kiyoshi
        imageUrl: 'https://images.unsplash.com/photo-1628004581461-13dd6f81ed07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Ecuador',
        // Photo from unsplash.com
        // Photographer: Mauricio Muñoz
        imageUrl: 'https://images.unsplash.com/photo-1642711374977-1ecf92c2370c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2352&q=80',
    },
    {
        country: 'Ecuador',
        // Photo from unsplash.com
        // Photographer: Mauricio Muñoz
        imageUrl: 'https://images.unsplash.com/photo-1623079264301-4d350346dc2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Ecuador',
        // Photo from unsplash.com
        // Photographer: Jonathan MONCK-MASON
        imageUrl: 'https://images.unsplash.com/photo-1648430721093-65cce6177901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    // Ecuador images end here

    {
        country: 'Aruba',
        // Photo from unsplash.com
        // Photographer: martin passchier
        imageUrl: 'https://images.unsplash.com/photo-1516409134144-dd775651d24d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2666&q=80',
    },
    {
        country: 'Aruba',
        // Photo from unsplash.com
        // Photographer: Lex Melony
        imageUrl: 'https://images.unsplash.com/photo-1625869209989-058821f6c125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Aruba',
        // Photo from unsplash.com
        // Photographer: Lex Melony
        imageUrl: 'https://images.unsplash.com/photo-1629971459025-2c73de204a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80',
    },
    {
        country: 'Aruba',
        // Photo from unsplash.com
        // Photographer: Darice de Cuba
        imageUrl: 'https://images.unsplash.com/photo-1637169144626-c0c647453f76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Aruba',
        // Photo from unsplash.com
        // Photographer: Lex Melony
        imageUrl: 'https://images.unsplash.com/photo-1625487942175-a32f610ae846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1545&q=80',
    },
    {
        country: 'Aruba',
        // Photo from unsplash.com
        // Photographer: Marvin Maduro
        imageUrl: 'https://images.unsplash.com/photo-1623893189618-750aa9a2950e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    },
    // Aruba images end here

    {
        country: 'Colombia',
        // Photo from unsplash.com
        // Photographer: Flavia Carpio
        imageUrl: 'https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80',
    },
    {
        country: 'Colombia',
        // Photo from unsplash.com
        // Photographer: Leandro Loureiro
        imageUrl: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Colombia',
        // Photo from unsplash.com
        // Photographer: Flavia Carpio
        imageUrl: 'https://images.unsplash.com/photo-1533699224246-6dc3b3ed3304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80',
    },
    {
        country: 'Colombia',
        // Photo from unsplash.com
        // Photographer: Dawin Rizzo
        imageUrl: 'https://images.unsplash.com/photo-1587468388656-0013fb7dd1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    },
    {
        country: 'Colombia',
        // Photo from unsplash.com
        // Photographer: Ricardo Gomez Angel
        imageUrl: 'https://images.unsplash.com/photo-1534413340928-7bd74b65196f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    },
    {
        country: 'Colombia',
        // Photo from unsplash.com
        // Photographer: Kobby Mendez
        imageUrl: 'https://images.unsplash.com/photo-1551282643-392c82ebb909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        country: 'Colombia',
        // Photo from unsplash.com
        // Photographer: Random Institute
        imageUrl: 'https://images.unsplash.com/photo-1568632234165-47bb34c35708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    // Colombia images end here

    // The following images aren't assigned to a country but are used for the home page
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Tom Podmore
        imageUrl: 'https://images.unsplash.com/photo-1656845088161-948c617420d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Leslie Cross
        imageUrl: 'https://images.unsplash.com/photo-1587493513878-d68611233b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Ricardo Arce
        imageUrl: 'https://images.unsplash.com/photo-1580829185826-4b78b69ccc69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Dana Fallentine
        imageUrl: 'https://images.unsplash.com/photo-1578444872448-a2d5ca6dd61d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Selina Bubendorfer
        imageUrl: 'https://images.unsplash.com/photo-1602190629358-31a50de315e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Mike Swigunski
        imageUrl: 'https://images.unsplash.com/photo-1590047301995-bba02b030fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Samuel Charron
        imageUrl: 'https://images.unsplash.com/photo-1519177827-eaba5b224092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Etienne Delorieux
        imageUrl: 'https://images.unsplash.com/photo-1580676875879-f20086f1e729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Juan Marin
        imageUrl: 'https://images.unsplash.com/photo-1581352624136-84b3c9a7df3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Rikin Katyal
        imageUrl: 'https://images.unsplash.com/photo-1641176716788-d4816a66dc6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Ángel López
        imageUrl: 'https://images.unsplash.com/photo-1566956031644-74266ac466f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Angel Silva
        imageUrl: 'https://images.unsplash.com/photo-1517154868524-c6b5fbd62a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Damian Dominguez
        imageUrl: 'https://images.unsplash.com/photo-1571197450530-4977e25429d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Iana Andreeva
        imageUrl: 'https://images.unsplash.com/photo-1585573098393-e11fc82c11af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Robin Canfield
        imageUrl: 'https://images.unsplash.com/photo-1590268878495-2dca8f550d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Thomas Lefebvre
        imageUrl: 'https://images.unsplash.com/photo-1421284621639-884f4129b61d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Kseniia Lobko
        imageUrl: 'https://images.unsplash.com/photo-1635432931242-5d18fe4f47c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2350&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Paltiel De Oliveira
        imageUrl: 'https://images.unsplash.com/photo-1638735780286-2848aa78b0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Kalea Morgan
        imageUrl: 'https://images.unsplash.com/photo-1602088414617-d78f7a0faef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2346&q=80',
    },
    {
        country: 'Index',
        // Photo from unsplash.com
        // Photographer: Abner Valero
        imageUrl: 'https://images.unsplash.com/photo-1498259787149-407ab89f3abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },

];

const imageArrays = {
    costa: displayImg.filter((img) => img.country === 'Costa Rica').map((img) => ({imageUrl: img.imageUrl})),
    panama: displayImg.filter((img) => img.country === 'Panama').map((img) => ({imageUrl: img.imageUrl})),
    dominican: displayImg.filter((img) => img.country === 'Dominican Republic').map((img) => ({imageUrl: img.imageUrl})),
    brazil: displayImg.filter((img) => img.country === 'Brazil').map((img) => ({imageUrl: img.imageUrl})),
    ecuador: displayImg.filter((img) => img.country === 'Ecuador').map((img) => ({imageUrl: img.imageUrl})),
    aruba: displayImg.filter((img) => img.country === 'Aruba').map((img) => ({imageUrl: img.imageUrl})),
    colombia: displayImg.filter((img) => img.country === 'Colombia').map((img) => ({imageUrl: img.imageUrl})),
};

const allImageUrls = [...displayImg].map(img => ({imageUrl: img.imageUrl}));

// I would have put these in a separate file, but I wanted the HTML files to me loadable without a functioning server

////////////////////////////////////////////
// End of arrays Section
////////////////////////////////////////////

////////////////////////////////////////////
// Actual Code starts here
////////////////////////////////////////////

// The shuffleArray function Shuffles the passed array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// The setRandomImages function is used to set the random images in the grid section of each page
function setRandomImages(imageArray, amount) {
    shuffleArray(imageArray);
    const numImages = Math.min(imageArray.length, amount);
    for (let i = 0; i < numImages; i++) {
        const imageUrl = imageArray[i].imageUrl;
        const imageId = `image${i + 1}`;
        document.getElementById(imageId).style.backgroundImage = `url(${imageUrl})`;
    }
}

// The generateTestimonials function "generates" random testimonials from the array of testimonials for the index page
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

// The generateBackground function generates a random background image if the page is not specified
function generateBackground(page) {
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

// The formSend function creates a popup using the form information that is entered by the user
function formSend() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let people = document.getElementById('people');
    let days = document.getElementById('days');

    alert(`Thank you ${name.value} for your inquiry about a trip for ${people.value} people and ${days.value} nights. We will be in touch with you shortly at ${email.value} with more information about your trip.`)
}

// The setDestImgs function is used to set the images on the destination pages including the background and the grid images
function setDestImgs(place, num) {
    const imageArray = imageArrays[place];
    if (imageArray) {
        setRandomImages(imageArray, num);
        generateBackground(place);
    } else {
        generateBackground(place);
    }
    // generateBackground(place);
}

// The loadIndex function is used to load the index page with the random testimonials, background image, and grid images
function loadIndex() {
    generateTestimonials()
    generateBackground()
    setRandomImages(allImageUrls, 8)
}

////////////////////////////////////////////
// Actual Code ends here
////////////////////////////////////////////