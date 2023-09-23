const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const audio = document.getElementById('myaudio');

let answer = 0;

function generate_aquation() {
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);

    let allanswers = [];
    let switchAnswers = [];

    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    let dummyanswer1 = Math.floor(Math.random() * 20);
    let dummyanswer2 = Math.floor(Math.random() * 20);
    answer = num1 - num2;
    allanswers = [answer, dummyanswer1, dummyanswer2];
    for(let i = allanswers.length; i--;) {
        switchAnswers.push(
            allanswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
        );
    };
    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];

}

option1.addEventListener('click', () => {
    if(parseInt(option1.innerHTML) === answer) {
        alert('Correct!');
        generate_aquation();
    } else {
        audio.play();
    }
}); 

option2.addEventListener('click', () => {
    if(parseInt(option2.innerHTML) === answer) {
        alert('Correct!');
        generate_aquation();
    } else {
        audio.play();
    }
});

option3.addEventListener('click', () => {
    if(parseInt(option3.innerHTML) === answer) {
        alert('Correct!');
        generate_aquation();
    } else {
        audio.play();
    }
})
generate_aquation();