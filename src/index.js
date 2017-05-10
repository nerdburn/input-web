import Router from 'preact-router'
import {compose} from 'classless-component'

import {getState, subscribe} from '/store'

import {Layout} from '/components/elements/layout'

import {Home} from '/components/pages/home'

let {render, Component, h} = Preact

const Main = compose(Component, h,
  {state: getState()},
  function componentDidMount () {
    subscribe(() => this.setState(getState()))
  },
  function render ({...props}) {
    console.log('Main', props)
    return (
      <Layout {...props}>
        <Router>
          <Home path='/' />
          <Error type='404' default />
        </Router>
      </Layout>
    )
  }
)

render(<Main />, document.body)
