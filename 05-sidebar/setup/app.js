const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function () {
    console.log(sidebar.classList);

    // Using add and remove class method.....

    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else {
    //     sidebar.classList.add('show-sidebar');
    // }

    // Using toggle class method.....

    sidebar.classList.toggle('show-sidebar');

    console.log(sidebar.classList);
});

closeBtn.addEventListener('click', function () {
    console.log(sidebar.classList);
    sidebar.classList.remove('show-sidebar');
    console.log(sidebar.classList);
})