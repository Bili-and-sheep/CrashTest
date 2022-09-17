const btn = document.querySelector('input');

btn.addEventListener("click", (e) => {
    if (btn.checked == true) {
        document.body.setAttribute("data-theme", "dark");
    }
    else {
        document.body.setAttribute("data-theme", "");
    }
})