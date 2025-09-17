const carousel = document.querySelector('.carousel');
if (carousel) {
    const imgs = carousel.querySelectorAll('img');
    const prev = carousel.querySelector('#prev');
    const next = carousel.querySelector('#next');
    let index = 0;

    function showImage(i) {
        imgs.forEach(img => img.classList.remove('active'));
        imgs[i].classList.add('active');
    }

    prev.addEventListener('click', () => {
        index = (index === 0) ? imgs.length - 1 : index - 1;
        showImage(index);
    });

    next.addEventListener('click', () => {
        index = (index === imgs.length - 1) ? 0 : index + 1;
        showImage(index);
    });

    setInterval(() => {
        index = (index === imgs.length - 1) ? 0 : index + 1;
        showImage(index);
    }, 5000);
}
