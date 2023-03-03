// task-21//

var element = $('<h1>', {
    text: "jQuery",
    class: "test"
});

$('#output').text(element.get(0).outerHTML);

//task-22//
$(document).ready(function () {
    $("#myInput").on("input", function () {
        // Print entered value in a div box
        $("#result").text($(this).val());
    });
});

// task-23//
var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
var arr = ["GFG", "GeeksForGeeks", "Geek", "Geeks"];
var remEl = "Geek";
el_up.innerHTML = "Click on the button to perform "
    + "the operation.<br>Array - [" + arr + "]";

function gfg_Run() {
    var arr2 = $(arr).not([remEl]).get();
    el_down.innerHTML = "[" + arr2 + "]";
}

// task-24//
$(document).ready(function () {
    $("button").click(function () {
        $("p").text("Hello world!");
        $("p1").text("Hello javascript!");
    });
});

//Task-25//
function myFunction() {
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = "Kiwi";
    option.text = "apple";
    option.text = "jsj";
    option.text = "tsk";
    x.add(option);
}

//   task-26//
$(document).ready(function () {
    // Change background image of a div by clicking on the button
    $("button").click(function () {
        var imageUrl =
            "https://www.geeksforgeeks.org/wp-content/uploads/jquery-banner-768x256.png";
        $(".box").css("background-image", "url(" + imageUrl + ")");
    });
});

// task-27//
$(document).ready(function () {
    $('#btn').click(function () {
        $("#rTable").find("tr:gt(0)").remove();
    });
});

// task-28//
$(document).ready(function () {
    $("#submit").click(function () {
        alert($("#myselection").val());
    });
});

// task-29//
$(document).ready(function () {
    $('#button1').click(function () {
        $("a").removeAttr('href');
    });
});

// task-30//
$(document).ready(function(){ 
    $('#button1').click(function(){   $('#pid').removeClass('center').addClass('large');       
     });
  });