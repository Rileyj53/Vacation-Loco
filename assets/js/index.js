import { pictures } from './pictures';
import { testimonials } from './data'

function generateContent(page) {
    const pageMap = {
        costa: '0',
        panama: '1',
        dominican: '2',
        brazil: '3',
        ecuador: '4',
        aruba: '5',
        colombia: '6'
    };

    let selectedImg = pictures[pageMap[page] || Math.floor(Math.random() * pictures.length)];
    const {imgUrl, imgLocation, slogan} = selectedImg;

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

    document.getElementsByClassName("background-image")[0].style.backgroundImage = imgUrl;
    document.getElementsByClassName("img-location")[0].innerHTML = imgLocation;
    document.getElementsByClassName("slogan")[0].innerHTML = slogan;
}
