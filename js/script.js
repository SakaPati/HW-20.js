const gallery = document.querySelector(".gallery")
window.addEventListener("keydown", onScrollGallery)



function onScrollGallery(event) {
    // console.log(event);
    if (event.code === "KeyD") {
        gallery.scrollLeft += 100
    } else if (event.code === "KeyA") {
        gallery.scrollLeft -= 100;
    }
}