import {css} from 'glamor'
import {text, black, yellow} from '/styles/colours'

export const baseFont = 'sans-serif'
export const baseFontSize = '16px'
export const baseLineHeight = '1.6'

export const fontSize = (n = 1) => n * +baseFontSize.replace('px', '')

{/* example of how to make a 'class'
export const smallTitleStyle = css({

})
*/}
{/*
.avenir(@weight) when (@weight = 'bold') {
  font-family:'Avenir Next Cyr W00 Demi';
}
.avenir(@weight) when (@weight = 'medium') {
  font-family:'Avenir Next Cyr W00 Regular';
}
.avenir(@weight) when (@weight = 'light') {
  font-family:'Avenir Next Cyr W00 Ult Light';
}
*/}
{/*
h1 {
  font-size: 3rem;
  line-height: 3.3rem;
}
h2 {
  font-size: 2.5rem;
  line-height: 2.8rem;
}
h3 {
  font-size: 2rem;
  line-height: 2.2rem;
}
h4 {
  font-size: 1.5rem;
  line-height: 1.7rem;
}
h5 {
  font-size: 1rem;
}
h6 {
  font-size: 0.8rem;
}

p {
  font-size: 0.9rem;
  line-height: 1.6rem;
  .avenir('light');
  padding: 0 0 @gutter/2 0;
}

.superscript {
  font-size: 0.45em;
  position: relative;
  top: -0.75em;
  left: 0.20em;
}

ul.social {
  display: block;
  margin-top: 1em;

  li {
    display: inline-block;
    padding-right: @gutter/2;

    &:last-of-type {
      padding-right: 0;
    }

    a {
      color: @text-light;
      &:hover {
        color: @red;
      }
    }
  }
}
*/}
