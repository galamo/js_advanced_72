const enemies = ["https://img.mako.co.il/2019/03/04/960448_I.jpg",
    "https://www.ynet.co.il/PicServer5/2017/12/14/8218463/82135250582550640360no.jpg",
    "https://pbs.twimg.com/profile_images/854795613686386688/cxby2Mr3_400x400.jpg"]




$(document).ready(init)
let value = Math.ceil(Math.random() * 999)
function init() {


    $("#draggable").draggable({
        drag: function (event, ui) {
            console.log(event.pageX, event.pageY)
            if (event.pageX === 400 || event.pageY === 400) {
                console.log("Inisde the event restriction")
                document.getElementById("draggable").style.left = 0;
                document.getElementById("draggable").style.top = 0;
                document.getElementById("draggable").style.position = "absolute";
            }


        }
    });


    enemies.forEach(function (e) {

        $(".content").append(`<img src='${e}' height='200' widths='200' />`).css({
            position: "absolute",
            top: value, left: value
        })

    })
}