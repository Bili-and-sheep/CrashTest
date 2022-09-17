let button = document.getElementById('button');

button.onclick = function () {
    button.classList.add('active');
    active = true

    setTimeout(function () {
        button.classList.add('success');
    }, 3500);

    setTimeout(function () {
        button.classList.remove('active');
        button.classList.remove('success');
    }, 5000);
}