



//public
export default class Trivia {
  constructor(data) {
    this.question = data.question
    this.answer = data.answer
    this.value = data.value
    this.category = data.category
  }
  get Template() {
    return `
       <div class="offset-2 col-8">
         <div class="card cardbg">
           <img src="assets/jep-logo.jpg" class="card-img-top" alt="question">
              <div class="card-body">
              <p class="card-text"><b>Value: ${this.value}</b></p>
              <p class="card-text"><b>Clue: ${this.category.title}</b</p>
                <p class="card-text"><b>Answer: ${this.question}</b</p>
                <p class="card-text"><b>What is?: ${this.answer}</b</p>
                 <audio controls>
                 <source src="assets/Jeopardy-theme-song.mp3">
                 <!--<source src=""> -->
                 </audio>

              </div>
           </div>

         </div>
    `


  }
}


