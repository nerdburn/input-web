import {css} from 'glamor'
import {compose, withState} from 'classless-component'

import {baseFontSize, baseFontWeight, baseLineHeight} from '/styles/typography'
import {white, yellow, text, black} from '/styles/colours'
import {gutter} from '/styles/other'

import {CSSTransitionGroup} from 'react-transition-group'

css.insert(`
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-size: ${baseFontSize};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${text};
    font-weight: ${baseFontWeight};
    padding: 0 0 ${gutter} 0;
    margin: 0;
    position: relative;
  }

  a {
    color: ${black};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${yellow};
    }
  }

  ul, li, img, form,
  table, tr, td, ol, p,
  h1, h2, h3, h4, fieldset {
    position: relative;
    margin: 0;
    padding: 0;
    list-style-type: none;
    border: 0;
  }

  body {
    background-color: ${white};
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    /* Disable mobile text scaling on safari but preserve user text zoom ability */
    -webkit-text-size-adjust: 100%;
    line-height: ${baseLineHeight};
    font-weight: ${baseFontWeight};
    color: ${text};
  }

  ::selection {
    background: ${yellow}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${yellow}; /* Gecko Browsers */
  }
`)

{/* transitionName={segment === 'root' ? 'reversePageSwap' : 'pageSwap'} */}
{/* {React.cloneElement(this.props.children, { key: segment })} */}

export const Layout = ({children, ...props}) =>
  <div className='app'>
    <CSSTransitionGroup
      transitionName='pageSwap'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}>
        {children}
    </CSSTransitionGroup>
  </div>

export default Layout
