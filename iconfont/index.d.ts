/* eslint-disable */
import React, { FunctionComponent } from 'react';

interface Props {
  name: 'shanchu' | 'ganga' | 'kaixin' | 'ku' | 'xiaoku' | 'nanguo';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
