/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShanchu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M817.968553 215.897142l-169.357176 0 0-58.869782c0-25.391297-20.657482-46.048779-46.048779-46.048779l-181.125197 0c-25.391297 0-46.048779 20.657482-46.048779 46.048779l0 58.869782-169.357176 0c-25.391297 0-46.048779 20.657482-46.048779 46.048779l0 71.631434c0 25.391297 20.657482 46.048779 46.048779 46.048779l28.321022 0 0 425.947112c0 59.246359 48.200792 107.447151 107.447151 107.447151l340.40076 0c59.246359 0 107.447151-48.200792 107.447151-107.447151L789.647531 379.626133l28.321022 0c25.391297 0 46.048779-20.657482 46.048779-46.048779l0-71.631434C864.017332 236.554624 843.35985 215.897142 817.968553 215.897142zM426.553932 162.14389l170.892135 0 0 53.753251-170.892135 0L426.553932 162.14389zM738.482221 805.574269c0 31.033807-25.248034 56.281841-56.281841 56.281841L341.79962 861.85611c-31.033807 0-56.281841-25.248034-56.281841-56.281841L285.517779 379.626133l452.964442 0L738.482221 805.574269zM812.852022 328.460824l-601.704045 0 0-61.398372 203.227588 0c2.302439 0.356111 4.66116 0.542352 7.061836 0.542352l181.125197 0c2.400676 0 4.759397-0.186242 7.062859-0.542352l203.226564 0L812.852022 328.460824zM513.023306 783.320429c14.128789 0 25.582655-11.453866 25.582655-25.582655l0-288.572348c0-14.128789-11.453866-25.582655-25.582655-25.582655-14.128789 0-25.582655 11.453866-25.582655 25.582655l0 288.572348C487.440651 771.866562 498.894518 783.320429 513.023306 783.320429zM645.541459 783.320429c14.128789 0 25.582655-11.453866 25.582655-25.582655l0-288.572348c0-14.128789-11.453866-25.582655-25.582655-25.582655s-25.582655 11.453866-25.582655 25.582655l0 288.572348C619.958804 771.866562 631.41267 783.320429 645.541459 783.320429zM380.505154 783.320429c14.128789 0 25.582655-11.453866 25.582655-25.582655l0-288.572348c0-14.128789-11.453866-25.582655-25.582655-25.582655s-25.582655 11.453866-25.582655 25.582655l0 288.572348C354.922499 771.866562 366.376365 783.320429 380.505154 783.320429z"
        fill={getIconColor(color, 0, '#272636')}
      />
    </Svg>
  );
};

IconShanchu.defaultProps = {
  size: 18,
};

IconShanchu = React.memo ? React.memo(IconShanchu) : IconShanchu;

export default IconShanchu;
