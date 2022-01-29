var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    // document.getElementById()
    var separatorIconBefore = document.createElement("I");
    separatorIconBefore.classList.add("bi", "bi-diamond-fill", "iconBefore");
    var separatorIconAfter = document.createElement("I");
    separatorIconAfter.classList.add("bi", "bi-diamond-fill", "iconAfter", "d-none", "d-md-block");

    // add separator icon to the beginning of each header list element
    var nodeList = document.querySelectorAll("header li");
    for (const nodeLi of nodeList) {
        nodeLi.insertBefore(separatorIconBefore.cloneNode(), nodeLi.children[0]);
    }

    // add separator icon to the end of last header list element
    nodeList = document.querySelectorAll("header li");
    console.log(nodeList)
    for (const nodeLi of nodeList) {
        console.log(nodeLi);
        nodeLi.insertBefore(separatorIconAfter.cloneNode(), nodeLi.children[0]);
    }
    // document.querySelector(".header").style.height = window.innerHeight + "px";
})