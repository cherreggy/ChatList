/* eslint-disable */

import React from 'react';

import IconShanchu from './IconShanchu';
import IconGanga from './IconGanga';
import IconKaixin from './IconKaixin';
import IconKu from './IconKu';
import IconXiaoku from './IconXiaoku';
import IconNanguo from './IconNanguo';
export { default as IconShanchu } from './IconShanchu';
export { default as IconGanga } from './IconGanga';
export { default as IconKaixin } from './IconKaixin';
export { default as IconKu } from './IconKu';
export { default as IconXiaoku } from './IconXiaoku';
export { default as IconNanguo } from './IconNanguo';

let IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'shanchu':
      return <IconShanchu key="1" {...rest} />;
    case 'ganga':
      return <IconGanga key="2" {...rest} />;
    case 'kaixin':
      return <IconKaixin key="3" {...rest} />;
    case 'ku':
      return <IconKu key="4" {...rest} />;
    case 'xiaoku':
      return <IconXiaoku key="5" {...rest} />;
    case 'nanguo':
      return <IconNanguo key="6" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
