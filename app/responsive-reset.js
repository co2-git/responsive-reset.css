'use strict';

import { Stylesheet, MediaQuery, Declaration } from 'cassis';

const D = Declaration;

const style = {
  line : {
    height : '1.3em'
  },
  font : {
    size : {
      text : {
        desktop : '16px',
        mobile : '32px'
      },
      input : {
        desktop : '22px',
        mobile : '54px'
      },
      h1 : '300%',
      h2 : '250%',
      h3 : '200%',
      h4 : '150%',
      h5 : '90%'
    }
  }
}

const mobile = new MediaQuery({ maxDeviceWidth : 600, screen : true });

export default new Stylesheet('html { font-size : 100% }')

  .add('body',
    new D('font-size', style.font.size.text.desktop),
    new D('line-height', style.line.height)
  )

  .add('body',
    new D('font-size', style.font.size.text.mobile),
    new D('line-height', style.line.height),
    mobile
  )

  .add('input, button, select',
    new D('font-size', style.font.size.input.desktop),
    new D('line-height', style.line.height)
  )

  .add('input, button, select',
    new D('font-size', style.font.size.input.mobile),
    new D('line-height', style.line.height),
    mobile
  )

  .add('h1',
    new D('font-size', style.font.size.h1),
    new D('line-height', style.line.height)
  )

  .add('h2',
    new D('font-size', style.font.size.h2),
    new D('line-height', style.line.height)
  )

  .add('h3',
    new D('font-size', style.font.size.h3),
    new D('line-height', style.line.height)
  )

  .add('h4',
    new D('font-size', style.font.size.h4),
    new D('line-height', style.line.height)
  )

  .add('h5',
    new D('font-size', style.font.size.h5),
    new D('line-height', style.line.height)
  );
