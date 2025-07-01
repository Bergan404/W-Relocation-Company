$(document).ready(function () {
    $(".tab-btn").on("click", function () {
        const target = $(this).data("tab");

        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        $(".tab-pane").removeClass("active");
        $("#" + target).addClass("active");
    });
});