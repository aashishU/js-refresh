// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    console.log(links.classList);
    console.log(links.classList.contains("show-links"));
    // console.log(links.classList.contains("links"));

    // Using add and remove method.....

    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    // Using toggle method.....

    links.classList.toggle("show-links");

    console.log(links.classList.contains("show-links"));
});