
//Code
var code = document.getElementById('code')

var input  =document.getElementById("input")

var ver_btn = document.getElementById("ver_btn")

var codetext = code.textContent

console.log(codetext);

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

codetext='';
for(var i =0; i<10; i =i+1){
 var randomNum = Math.random()
 codetext += characters.charAt(Math.floor(randomNum*characters.length))

 code.textContent= codetext;

// consol.log(input.value)
}

function VerifyBtn(){


    var showbool = "";
    showbool=false

    if(codetext ===input.value){
        showbool =tr

        alert("CAPTCHA Verified Successfully!")


    }
    else (

        alert("CAPTCHA verification Failed.Pleasse try again")
    )



}


// if ()