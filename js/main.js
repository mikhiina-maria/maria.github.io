document.addEventListener("click", (e) => {
  const target = e.target;
  console.log(target);
  if (target.closest(".menu__link")) {
    manipulate(target);
  }

  if (target.closest(".menu_home")) {
    const homeLink = document.querySelector(".menu .menu_home");
    manipulate(homeLink);
  }

  if (target.closest(".move_to_parent_link")) {
    const parentNode = target.parentNode.parentNode;
    console.log(parentNode);
  }
});

function manipulate(link) {
  clearActiveMenuLink();
  link.classList.toggle("_active");
}

function clearActiveMenuLink() {
  const activeLink = document.querySelector(".menu li a._active");
  if (activeLink) return activeLink.classList.remove("_active");
}
