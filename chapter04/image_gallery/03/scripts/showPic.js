function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function showImage(whichImage) {
    var source = whichImage.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichImage.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}