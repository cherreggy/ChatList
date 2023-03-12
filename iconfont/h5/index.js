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

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'shanchu':
      return <IconShanchu {...rest} />;
    case 'ganga':
      return <IconGanga {...rest} />;
    case 'kaixin':
      return <IconKaixin {...rest} />;
    case 'ku':
      return <IconKu {...rest} />;
    case 'xiaoku':
      return <IconXiaoku {...rest} />;
    case 'nanguo':
      return <IconNanguo {...rest} />;

  }

  return null;
};

export default IconFont;
