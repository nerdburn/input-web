import {css} from 'glamor'

export const baseFontFamily = 'sans-serif'
export const baseFontSize = '16px'
export const baseLineHeight = '1.6'

export const fontSize = (n = 1) => n * +baseFontSize.replace('px', '')

export const avenirBold = css({
  fontFamily: 'Avenir Next Cyr W00 Demi'
})

export const avenirMedium = css({
  fontFamily: 'Avenir Next Cyr W00 Regular'
})

export const avenirLight = css({
  fontFamily: 'Avenir Next Cyr W00 Ult Light'
})

export const h1 = css({
  fontSize: '3rem',
  lineHeight: '3.3rem'
})

export const h2 = css({
  fontSize: '2.5rem',
  lineHeight: '2.8rem'
})

export const h3 = css({
  fontSize: '2rem',
  lineHeight: '2.2rem'
})

export const h4 = css({
  fontSize: '1.5rem',
  lineHeight: '1.7rem'
})

export const h5 = css({
  fontSize: '1rem'
})

export const h6 = css({
  fontSize: '0.8rem'
})

/*
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
*/
