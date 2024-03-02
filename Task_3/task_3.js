
var img_div = document.querySelector(".img_div")

var imglist = img_div.querySelectorAll('img')

var img_div_1 = document.getElementById("img_div_1");
var img_1 = document.getElementById("img_1");

var closelist = img_div.querySelectorAll('p')

for (count = 0; count < imglist.length; count = count + 1) {

    (function (count) {
        imglist[count].addEventListener("click", function () {
            // close_btn.style.display = "block";
            imglist[count].classList.add('large');
            closelist[count].classList.remove("close_btn_dis")

        });



        closelist[count].addEventListener('click', function () {


            imglist[count].classList.remove('large')
            closelist[count].classList.add("close_btn_dis")
        })

    })(count)



}
















