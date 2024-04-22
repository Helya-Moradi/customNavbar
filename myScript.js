var list = document.querySelectorAll(".list");

list.forEach((item, index) => item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    list[index].classList.add("active");
}));