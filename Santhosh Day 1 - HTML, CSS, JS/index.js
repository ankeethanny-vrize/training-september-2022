function increment() {
    var likeCount = document.getElementById("viewLikes").innerHTML;
    document.getElementById("viewLikes").innerHTML = ++likeCount;
}

function decrement() {
    var likeCount = document.getElementById("viewLikes").innerHTML;
    document.getElementById("viewLikes").innerHTML = --likeCount;
}