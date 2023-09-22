$(document).ready(function () {
    let clickedRating = null;
    $("a.rate-btn").on("click", function(e) {
        e.preventDefault();
        clickedRating = $(this).data("rating");
        $(this).addClass("checked");
    });

    $("form").on("submit", function(e){
        e.preventDefault();
        if(clickedRating !== null){
            sessionStorage.setItem("clickedRating", clickedRating);
            window.location.href="./thanks.html";
        } else {
            alert("Please select a rating before submitting");
        }
    });
});



$(document).ready(function() {
    const clickedRating = sessionStorage.getItem("clickedRating");
    if(clickedRating) {
        $(".rate-txt").text(`You selected ${clickedRating} out of 5`);
    } else {
        $(".rate-txt").text("No rating selected");
    }
});
