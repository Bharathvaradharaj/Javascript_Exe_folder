



const ver_btn = document.getElementById("ver_btn")


const result_div = document.getElementById("result_div")

const ans_1 = document.getElementsByName("q1")
const ans_2 = document.getElementsByName("q2")
const ans_3 = document.getElementsByName("q3")





ver_btn.addEventListener("click", function () {
    var heading = result_div.querySelector("h1");
    if (!heading) {
        heading = document.createElement("h1");
        heading.textContent = 'Interactive Quiz';
        result_div.appendChild(heading);
    }

    var heading1 = document.createElement("h2");
    heading1.textContent = "Your Quiz Result";
    result_div.appendChild(heading1);

    var score = document.createElement("p");
    var correctAnswers = 0;

    if (ans_1[2].checked) {
        correctAnswers++;
    }
    if (ans_2[0].checked) {
        correctAnswers++;
    }
    if (ans_3[1].checked) {
        correctAnswers++;
    }

    score.textContent = "Score: " + correctAnswers;
    result_div.appendChild(score);
});
