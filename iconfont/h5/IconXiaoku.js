/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconXiaoku = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1130 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1016.52649 496.083849c0 67.224351-6.045355 134.025527-30.226776 192.423659-25.148678 60.453553-71.395646 109.541838-117.038079 155.18427a485.321122 485.321122 0 0 1-160.504182 103.98011c-58.398132 24.181421-119.879395 52.41323-187.043293 52.413231s-131.305117-21.642372-189.763702-45.884247c-60.453553-25.088224-111.476351-65.531651-157.179237-111.174084a489.673778 489.673778 0 0 1-108.816395-158.267401c-24.181421-58.458586-45.09835-121.451188-45.09835-188.675538a503.578095 503.578095 0 0 1 38.025284-191.577309c25.088224-60.453553 68.372968-111.355444 114.015401-157.179237s97.995209-84.937242 158.509215-110.025466A495.719133 495.719133 0 0 1 521.472346 0.001995c67.163897 0 129.431057 18.136066 187.829189 42.619755 60.453553 25.088224 121.753455 52.655044 167.395887 98.297476s70.488843 107.909592 95.577067 168.423599c24.241875 58.458586 44.252001 119.879395 44.252001 186.741024z"
        fill={getIconColor(color, 0, '#FFD635')}
      />
      <path
        d="M629.442392 936.427528c-63.415777 0-123.86933-20.372847-179.00297-43.224291-57.068154-23.697793-105.128728-61.843984-148.171658-104.886914a460.897886 460.897886 0 0 1-102.347865-149.259822c-22.851443-55.13364-42.317487-114.559483-42.317487-177.914805A475.164925 475.164925 0 0 1 193.451369 280.446026C216.846894 223.317419 257.592588 175.317298 300.695972 132.395276S392.948093 52.112957 450.197608 28.475618A462.953307 462.953307 0 0 1 541.422019 1.45288c-6.045355 0-12.513885-0.483628-18.801055-0.483628A495.719133 495.719133 0 0 0 332.49454 38.269094C272.040988 63.357318 219.688211 102.773035 173.985325 148.475921s-88.866723 96.362963-113.954947 157.179237a503.880362 503.880362 0 0 0-37.964831 191.637762c0 67.163897 20.856476 130.216953 45.09835 188.615085a489.008788 489.008788 0 0 0 108.816395 158.267401c45.642432 45.642432 96.725684 86.085859 157.179237 111.234537 58.398132 24.181421 122.539351 45.884247 189.763703 45.884247s128.584707-28.171356 187.043292-52.413231a508.656193 508.656193 0 0 0 131.426024-77.743268c-11.486175 5.743088-23.214164 11.183907-35.244422 16.141098-55.435908 22.609629-113.350411 49.148738-176.705734 49.148739z"
        fill={getIconColor(color, 1, '#F7B523')}
      />
      <path
        d="M443.003635 117.946876s3.506306-2.780863 9.974836-7.193972a255.476714 255.476714 0 0 1 27.989995-16.201552 230.751211 230.751211 0 0 1 43.345197-16.50382 214.731019 214.731019 0 0 1 53.985023-7.496241h13.662503c4.292202 0 9.18894 0.362721 13.602049 0.664989s8.886672 0.906803 13.178875 1.511339 8.584404 1.571792 12.816153 2.418142a175.315303 175.315303 0 0 1 23.516432 7.31488 146.720773 146.720773 0 0 1 20.010126 9.733022 120.907106 120.907106 0 0 1 26.841377 20.796022 82.156378 82.156378 0 0 1 6.46853 7.556694 31.738115 31.738115 0 0 1 2.115875 2.901771 124.05069 124.05069 0 0 1-13.299782 1.511339c-4.110842 0.362721-8.886672 0.483628-14.327492 0.664989s-11.425721 0-17.773344 0-13.118421-0.604536-20.131033-1.148618-14.387946-1.329978-21.94464-2.236781l-11.486175-1.571793c-3.808574-0.725443-7.738055-1.269525-11.667536-1.87406s-7.556694-1.390432-12.09071-2.055421l-6.045356-1.148617C580.354107 114.863745 577.935965 114.863745 576.061904 114.863745a432.907891 432.907891 0 0 0-89.410804 0l-31.375394 2.72041-9.068033 0.664989z"
        fill={getIconColor(color, 2, '#FFEF57')}
      />
      <path
        d="M265.995632 355.89206s0.483628-0.664989 1.269525-1.934514 2.176328-3.083131 3.808574-5.380366c3.324945-4.473563 8.100776-10.821186 14.267038-18.136066s13.662503-15.294749 22.065547-23.697792c4.352656-4.050388 8.644858-8.463497 13.420689-12.513886s9.551661-8.282137 14.629759-12.09071 10.095743-7.858962 15.294749-11.425722 10.398011-7.012612 15.536563-10.277104 10.277104-6.045355 15.173842-8.765765l7.073066-3.808574 6.952158-3.204038c4.413109-2.055421 8.463497-4.050388 12.090711-5.561727l9.551661-3.808574 8.463498-3.204038A21.219197 21.219197 0 0 1 440.88776 272.042982l-2.236781 0.66499-1.390432 0.362721-7.435787 1.934514-8.644858 2.176327c-3.264492 0.906803-6.952159 2.236781-11.002546 3.56676l-6.045356 2.055421-6.589437 2.72041c-4.534016 1.813607-9.370301 3.687667-14.206585 6.045355s-9.914383 4.654924-14.81112 7.496241-10.095743 5.561727-14.992481 8.705311-9.793476 6.045355-14.508853 9.551662-9.18894 6.770798-13.662503 9.974836c-8.584404 6.831251-16.50382 13.481142-22.911896 19.526497s-11.546629 11.365268-14.992482 15.113388l-3.869027 4.292203-1.390432 1.571792a9.974836 9.974836 0 0 1-15.83883-12.09071z"
        fill={getIconColor(color, 3, '#E59D0E')}
      />
      <path
        d="M263.57749 427.287706l1.209071-2.841317a65.229383 65.229383 0 0 1 4.534017-9.007579 100.171537 100.171537 0 0 1 23.15371-26.418203 122.237084 122.237084 0 0 1 19.345137-12.876607 147.748483 147.748483 0 0 1 23.455979-10.277104 183.899708 183.899708 0 0 1 26.297295-6.64989 193.451369 193.451369 0 0 1 27.808634-2.418143h6.831252c2.418142 0 4.896738 0 7.193973 0.423175q6.952159 0.423175 13.78341 1.450886a160.685543 160.685543 0 0 1 26.357749 6.045355 139.043171 139.043171 0 0 1 43.526558 21.642372 89.289897 89.289897 0 0 1 24.181421 26.539109 61.964892 61.964892 0 0 1 4.413109 9.18894l1.269525 3.445853A10.760732 10.760732 0 0 1 497.895461 435.267575l-0.664989-0.967257-1.511339-1.934514c-1.02771-1.329978-2.599503-3.143585-4.654924-5.440819A88.14128 88.14128 0 0 0 470.328641 411.086154a167.09362 167.09362 0 0 0-16.32246-7.435787 198.650374 198.650374 0 0 0-19.647404-6.045355 218.600047 218.600047 0 0 0-21.823733-3.808574c-3.74812-0.483628-7.556694-0.785896-11.365268-0.967257h-11.607082a150.408439 150.408439 0 0 0-22.790989 1.571792 160.383276 160.383276 0 0 0-21.581919 4.171295A148.050751 148.050751 0 0 0 325.965557 405.040799a125.441122 125.441122 0 0 0-16.141099 8.100776 98.055663 98.055663 0 0 0-20.735569 16.50382c-2.176328 2.539049-3.56676 3.929481-4.77583 5.501273l-1.813607 2.539049a10.88164 10.88164 0 0 1-18.921962-10.518918z"
        fill={getIconColor(color, 4, '#943436')}
      />
      <path
        d="M886.430444 367.620049l-1.329978-1.571792-3.869027-4.292202c-3.506306-3.74812-8.523951-9.068033-15.052935-15.113388s-14.267038-12.695246-22.851443-19.526498c-4.473563-3.204038-8.826219-6.831251-13.662503-9.974836s-9.551661-6.589437-14.569306-9.551661-9.914383-6.045355-14.932027-8.705312-9.974836-5.138552-14.871574-7.496241-9.612115-4.292202-14.146132-6.045355l-6.589437-2.72041-6.045355-2.055421c-4.050388-1.329978-7.677601-2.659956-11.002547-3.566759l-8.584404-2.176328-7.496241-1.934514-1.329978-0.362721a21.219197 21.219197 0 0 1 10.518918-41.108416l2.297235 0.725443 8.463497 3.204038 9.672569 3.74812c3.687667 1.511339 7.738055 3.506306 12.09071 5.561727L779.850831 247.861561l7.193973 3.929481c4.896738 2.659956 10.095743 5.44082 15.113388 8.765765s10.458465 6.46853 15.597016 10.277104 10.458465 7.254426 15.294749 11.365268 9.914383 8.040323 14.569307 12.090711 9.128486 8.463497 13.481142 12.513885c8.403044 8.403044 15.959738 16.443366 22.065547 23.697793s10.942093 13.541596 14.206584 18.136066l3.808574 5.380366 1.269525 1.934514a9.914383 9.914383 0 0 1-15.838831 12.09071z"
        fill={getIconColor(color, 5, '#E59D0E')}
      />
      <path
        d="M885.946816 437.806624l-1.813607-2.539049c-1.209071-1.571792-2.599503-2.962224-4.836284-5.501273a94.972531 94.972531 0 0 0-20.856476-16.50382 124.473865 124.473865 0 0 0-15.959737-8.221683 151.133882 151.133882 0 0 0-19.345137-6.468531 161.290079 161.290079 0 0 0-21.642372-4.171295 149.622543 149.622543 0 0 0-22.730536-1.571792H767.216038c-3.808574 0-7.617148 0.483628-11.365268 0.967257a218.600047 218.600047 0 0 0-21.823732 3.808574 193.874544 193.874544 0 0 0-19.647405 6.045355 168.484052 168.484052 0 0 0-16.322459 7.435787 87.597198 87.597198 0 0 0-20.675115 15.597016c-2.055421 2.297235-3.687667 4.110842-4.654924 5.44082l-1.511338 2.055421-0.725443 0.967257a10.760732 10.760732 0 0 1-18.740601-10.03529s0.423175-1.209071 1.269524-3.445852a61.964892 61.964892 0 0 1 4.413109-9.18894 88.443548 88.443548 0 0 1 24.181422-26.53911 139.043171 139.043171 0 0 1 43.466104-21.642372 163.52686 163.52686 0 0 1 26.357749-6.045355c4.59447-0.664989 9.18894-1.148618 13.843864-1.450886 2.236781 0 4.715377-0.302268 7.133519-0.423174s3.929481 0 6.831251 0a192.484112 192.484112 0 0 1 27.808635 2.418142 182.690637 182.690637 0 0 1 26.357749 6.649891 150.166625 150.166625 0 0 1 23.455978 10.277103 118.912138 118.912138 0 0 1 19.284683 12.876607 99.506548 99.506548 0 0 1 23.214165 26.418203 82.881821 82.881821 0 0 1 4.534016 9.007579l1.148618 2.841317a10.88164 10.88164 0 0 1-18.861509 10.518918z"
        fill={getIconColor(color, 6, '#943436')}
      />
      <path
        d="M927.115685 634.764299c8.886672 24.66505 8.765765 55.496361 30.226777 76.534198s61.723077 28.59453 92.977564 21.158743c33.793536-8.040323 44.91699-26.660017 56.040443-45.763339a90.136247 90.136247 0 0 0-2.720409-88.201734C1063.982529 546.381205 991.438266 517.423953 921.312144 468.758843c0 37.239389-3.687667 72.544263-6.045355 106.095985a285.038501 285.038501 0 0 0 11.848896 59.909471z"
        fill={getIconColor(color, 7, '#02BEFF')}
      />
      <path
        d="M1117.786191 620.618168a150.408439 150.408439 0 0 0-14.146131-22.126001 90.136247 90.136247 0 0 1 2.659956 87.899466c-11.123454 19.103323-22.246907 37.723017-56.040444 45.76334-31.254487 7.435787-70.912017 0.423175-92.977564-21.158744s-21.279651-51.869148-30.226776-76.534198a285.038501 285.038501 0 0 1-12.090711-59.667656c-3.687667 53.078219-4.171295 100.89698 17.168809 142.005395 28.110902 54.045476 92.373029 76.352837 143.516735 49.753274s70.247028-91.828947 42.136126-145.934876z"
        fill={getIconColor(color, 8, '#0083EF')}
      />
      <path
        d="M246.166867 668.497382c-10.700279 29.803602-10.518918 67.04299-36.272132 92.433482s-74.539231 34.639886-112.322701 25.632306c-40.806148-9.793476-54.408198-32.221744-67.707979-55.375454-18.861508-32.403104-14.62976-80.282318 3.204038-106.156439 48.362842-63.053056 135.899587-97.995209 220.292747-156.816516 0 44.977443 4.473563 87.839012 7.254426 128.221986a341.743934 341.743934 0 0 1-14.448399 72.060635z"
        fill={getIconColor(color, 9, '#02BEFF')}
      />
      <path
        d="M15.778377 651.751747a180.816576 180.816576 0 0 1 17.108356-26.72047c-17.833798 25.874121-22.065547 73.753334-3.204039 106.156439 13.420689 23.153711 26.901831 45.581979 67.70798 55.375454 37.78347 9.007579 85.662684 0.483628 112.322701-25.632306s25.753213-62.629881 36.272131-92.433482a341.743934 341.743934 0 0 0 14.267039-72.060635c4.413109 64.141219 5.017645 121.874362-20.796022 171.567182C205.542079 833.293766 128.101078 860.256051 66.498908 828.215668s-84.634974-111.174084-50.720531-176.463921z"
        fill={getIconColor(color, 10, '#0083EF')}
      />
      <path
        d="M856.808204 597.645818a47.758307 47.758307 0 0 0-15.597017 2.297235 825.43281 825.43281 0 0 1-252.51449 25.209131 825.070088 825.070088 0 0 1-247.859566-54.408197 46.911957 46.911957 0 0 0-15.234296-4.110842c-14.932028-0.84635-19.103323 11.304814-18.136066 23.637339a202.096227 202.096227 0 0 0 3.264492 21.340104 239.516976 239.516976 0 0 0 11.244361 38.569367 254.690818 254.690818 0 0 0 24.181421 48.362842 274.64049 274.64049 0 0 0 44.735629 53.682755A286.731201 286.731201 0 0 0 465.492356 802.522908a301.905043 301.905043 0 0 0 223.678146 12.997514 291.748846 291.748846 0 0 0 79.435968-41.047962 278.086343 278.086343 0 0 0 51.022799-48.362843 260.312998 260.312998 0 0 0 30.226776-45.279711 246.287774 246.287774 0 0 0 15.838831-37.058027 204.393462 204.393462 0 0 0 6.045355-20.735569c2.72041-12.090711 0-24.66505-14.871574-25.571853z"
        fill={getIconColor(color, 11, '#943436')}
      />
      <path
        d="M614.812632 928.326751C578.600954 1008.850884 477.583067 1045.848458 394.278071 1010.724944s-121.269827-128.766067-85.058149-209.2902c24.906864-55.375454 62.025345-95.516613 121.813909-97.995209 57.068154-2.357689 81.128668 38.388006 81.128668 38.388006s46.79105-10.942093 82.398193 24.181421c37.78347 37.058028 45.461072 106.337799 20.25194 162.317789z"
        fill={getIconColor(color, 12, '#F74F5C')}
      />
    </svg>
  );
};

IconXiaoku.defaultProps = {
  size: 18,
};

export default IconXiaoku;
