import Trivia from "../models/Trivia.js";

//private

let _api = new axios.create({
  baseURL: 'http://jservice.io/api/random/'
})

let _state = {
  trivia: []
}
let _subscribers = {
  trivia: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}




//public

export default class TriviaService {
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }
  get Trivia() {
    return _state.trivia.map(t => new Trivia(t))
  }
  getApiTrivia() {
    _api.get('')
      .then(response => {
        console.log({ response })
        let data = response.data.map(rawData => new Trivia(rawData))
        setState('trivia', data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}



