import Router from 'preact-router'

import {getState, subscribe} from '/store'

let {render, Component} = Preact

const Example = ({url}) =>
  <div>
    <h1>Input Logic</h1>
    <p>{url}</p>
  </div>

class Main extends Component {
  constructor () {
    super()
    this.state = getState()
  }

  componentDidMount () {
    subscribe(() => this.setState(getState()))
  }

  render (_, {...props}) {
    console.log('Main', props)
    return (
      <Router>
        <Example path='/' />
      </Router>
    )
  }
}

render(<Main />, document.body)
