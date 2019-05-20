import TriviaService from "./TriviaService.js";


//private
let _trivService = new TriviaService()

function _drawTrivia() {
  let trivia = _trivService.Trivia
  let template = ''
  for (let i = 0; i < trivia.length; i++) {
    let question = trivia[i];
    template += question.Template

  }
  document.getElementById('questions').innerHTML = template
}


//public
export default class TriviaController {
  constructor() {
    _trivService.addSubscriber('trivia', _drawTrivia)
    _trivService.getApiTrivia();
  }
}