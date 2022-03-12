$(document).ready(function () {
    var currentTime = moment().format("MMMM Do YYYY, H:mm:ss a");
    var currentHour = moment().hour();
    var currentDay = moment().format("MMMM Do, YYYY");
    console.log(currentHour)
    console.log(currentTime)
    console.log(currentDay)
    currentDay = moment().format("MMMM Do YYYY, H:mm:ss a");
    $("#currentDay").text("Today's Date: " + currentDay)

    $(".saveBtn").on("click", function () {
        var timeBlock = $(this).attr('data-value');
        var userInput = $("#" + timeBlock).val();
        localStorage.setItem("#" + timeBlock, userInput);
        console.log(timeBlock)
        console.log(userInput)
    });
    let Time = ["#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17"];
    let milTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]

    for (let i = 0; i < Time.length; i++) {
    
        if (localStorage.getItem(Time[i])) {
            $(Time[i]).val(localStorage.getItem(Time[i]))
        };

    };


    function colorChanger() {
        var currentHour = moment().hour();
        for (let i = 0; i < Time.length; i++)

            if (milTime[i] === currentHour) {
                $(Time[i]).addClass("present");
            }
            else if (milTime[i] >= currentHour) {
                $(Time[i]).addClass("future");
            } else {
                $(Time[i]).addClass("past")
            };
    }
    colorChanger();
})