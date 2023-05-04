
let likeCount = 0;
let dislikeCount = 0;

let hasVoted = getCookie("hasVoted");
if (hasVoted) {
    disableButtons();
}
function like() {
    likeCount++;
    document.getElementById("likeCount").innerHTML = likeCount;
    document.getElementById("totalLikes").innerHTML = likeCount + dislikeCount;
    setCookie("hasVoted", true, 1);
    disableButtons();
}
function dislike() {
    dislikeCount++;
    document.getElementById("dislikeCount").innerHTML = dislikeCount;
    document.getElementById("totalDislikes").innerHTML = likeCount + dislikeCount;
    setCookie("hasVoted", true, 1);
    disableButtons();
}

function disableButtons() {
    document.getElementsByClassName("like")[0].disabled = true;
    document.getElementsByClassName("dislike")[0].disabled = true;
}

function setCookie(name, value, days) { // got the conecpt from https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    }
  }