const pollBtn = document.querySelector('.poll');
const pollQuestion = document.querySelector('.question');
const optionsList1 = document.querySelector('.optionsList');
const pollValue = document.querySelector('.input');
const displayResBtn = document.querySelector('.display');

const poll = {
    question: 'What is your favouite programming language',
    options: ['0:JavaScript', '1:Python', '2:Rust', '3:C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question} \n ${this.options}.join('\n')
            \n(write your number)\n`));
        console.log(answer, typeof answer, answer === 'number');

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        // console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type ==='string') {
            console.log(`Poll results are ${this.answers}`);
        } else {
            console.log(poll.answers);
        }
    },
}



pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 4, 1] }, 'string');
poll.displayResults.call({ answers: [1,2,5, 4, 1] }, 'string');