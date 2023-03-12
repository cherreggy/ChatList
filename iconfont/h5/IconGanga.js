/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconGanga = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1133 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M1019.417296 507.946688c0 68.831868-6.189916 137.230442-30.949581 197.025032-25.688152 61.899162-73.041011 112.161281-119.836778 158.895148a496.926471 496.926471 0 0 1-164.342274 106.466559c-59.79459 24.759665-122.684139 53.666573-191.516007 53.666573s-134.444979-22.1599-194.301469-46.981464c-61.899162-25.688152-114.142054-67.098691-160.93782-113.832558a500.392824 500.392824 0 0 1-111.418491-162.052006C21.41711 641.277483 0 576.778556 0 507.946688a515.620018 515.620018 0 0 1 38.872674-196.158444c25.750051-61.899162 70.007952-114.018256 116.741819-160.93782s100.338541-86.968322 162.361501-112.656475A507.077933 507.077933 0 0 1 512.52506 0.002166c68.831868 0 132.526105 18.569749 192.320695 43.63891 61.899162 25.688152 124.664912 53.91417 171.398779 100.648037s72.174423 110.490004 97.862575 172.451064c24.821564 59.856489 45.310186 122.746038 45.310187 191.206511z"
        fill={getIconColor(color, 0, '#FFD635')}
      />
      <path
        d="M621.900879 957.891695c-64.870322 0-126.831383-20.921917-183.221519-44.3198-58.494708-24.264471-107.704542-63.260943-151.776745-107.395045a471.91921 471.91921 0 0 1-104.795281-152.829031c-23.397883-56.390136-43.329413-117.237012-43.329413-182.169233a486.775008 486.775008 0 0 1 36.396707-185.016595c24.264471-58.494708 66.232103-107.518844 110.118609-151.591047S379.937055 52.430757 438.369864 28.166285A469.133747 469.133747 0 0 1 531.837598 0.559259C525.461984 0.002166 519.024472 0.002166 512.52506 0.002166a507.077933 507.077933 0 0 0-194.549066 38.191783c-61.899162 25.750051-115.627634 66.108305-162.361501 112.842172s-90.991768 99.038659-116.741819 160.937821A515.620018 515.620018 0 0 0 0 507.946688c0 68.831868 21.41711 133.330795 46.238674 193.187284a499.773832 499.773832 0 0 0 111.418491 162.052006c46.733867 46.733867 99.038659 88.144406 160.937821 113.832558 59.856489 24.759665 125.5315 46.981464 194.301469 46.981464s131.721416-28.845009 191.516006-53.666573a517.848388 517.848388 0 0 0 134.568778-79.540423c-11.760841 5.818521-23.769278 11.389446-36.087211 16.527076-56.761531 23.397883-115.813332 50.571615-180.993149 50.571615z"
        fill={getIconColor(color, 1, '#F7B523')}
      />
      <path
        d="M431.003864 132.156877s3.652051-2.847361 10.27526-7.304101a240.168748 240.168748 0 0 1 28.659312-16.650875 235.712008 235.712008 0 0 1 44.3198-16.836572A217.513655 217.513655 0 0 1 569.472288 83.689833h14.05111c4.39484 0 9.408673 0.309496 13.927312 0.618992s9.099177 0.990387 13.555916 1.609378 8.789681 1.547479 13.060723 2.475967a168.613317 168.613317 0 0 1 24.078774 7.489798 140.139702 140.139702 0 0 1 20.488623 9.903866 123.798324 123.798324 0 0 1 27.483228 21.293312 74.278994 74.278994 0 0 1 6.62321 7.737395 27.607026 27.607026 0 0 1 2.16647 3.033059s-5.19953 0.928487-13.617815 1.547479c-4.147244 0.309496-9.099177 0.433294-14.670101 0.680891s-11.637042 0-18.136455 0-13.432118-0.618992-20.67432-1.114185-14.732001-1.361782-22.469396-2.352168l-11.698941-1.609379-12.008438-1.918874c-4.085345-0.680891-7.737395-1.423681-12.379832-2.042672l-6.189916-1.237983a55.214052 55.214052 0 0 0-5.818521-0.74279 438.988855 438.988855 0 0 0-91.548861 0l-32.125665 2.723563-9.222975 0.680891z"
        fill={getIconColor(color, 2, '#FFEF57')}
      />
      <path
        d="M527.628455 438.929123l-2.97116-3.590152c-1.795076-2.414067-4.766235-5.818521-8.10879-10.275261s-7.737395-9.718168-12.379832-15.969983-10.027664-12.936925-15.53669-20.488623l-18.569748-23.769278c-6.189916-8.294488-13.679715-16.588975-20.73622-24.759665A194.363368 194.363368 0 0 0 427.104216 317.668665a42.586623 42.586623 0 0 0-10.27526-6.68511c-2.909261-1.361782-4.147244-0.990387-3.528253-0.866588h1.176084-1.733176 0.557092-0.371395a10.894252 10.894252 0 0 0-2.661664 1.795076A45.495884 45.495884 0 0 0 402.344552 321.320715c-2.537866 4.023446-5.13763 8.542084-7.737396 13.184522s-4.890034 9.656269-7.056504 14.670101c-4.209143 10.089563-8.480185 20.179127-12.379832 30.021094S368.176214 398.632768 365.205055 407.36055s-6.189916 17.022269-8.665883 24.326371-4.951933 13.617816-6.870807 18.879244-3.590151 9.408673-4.642437 12.379833l-1.733177 4.332941a4.766235 4.766235 0 0 1-6.189916 2.661664 5.013832 5.013832 0 0 1-2.90926-3.342555s-0.371395-1.671277-0.866589-4.766235-1.299882-7.675496-1.795075-13.370219-1.237983-12.813126-1.361782-20.798119a263.319034 263.319034 0 0 1 0-26.988034c0-5.013832 0.618992-10.151463 0.928487-15.53669s1.299882-10.832353 2.104572-16.527076A266.166396 266.166396 0 0 1 340.44539 332.153069a185.697485 185.697485 0 0 1 6.189916-19.25064 137.787534 137.787534 0 0 1 9.656269-20.117227 92.848743 92.848743 0 0 1 16.217581-20.921917 67.408187 67.408187 0 0 1 13.494017-9.903866 37.139497 37.139497 0 0 1 4.147244-2.104571l2.22837-0.990387 2.847361-1.052286 3.033059-0.990386 1.671277-0.433294h1.114185l1.609378-0.371395h1.671278a60.970674 60.970674 0 0 1 35.530119 6.189916 94.148625 94.148625 0 0 1 21.602807 15.227194A136.178156 136.178156 0 0 1 476.623546 293.713689 194.23957 194.23957 0 0 1 489.003378 309.497975a264.247522 264.247522 0 0 1 17.888858 32.125665 266.166396 266.166396 0 0 1 12.379832 29.525901c3.590151 9.222975 6.189916 17.950757 8.418286 25.626253s3.775849 14.608202 5.013832 20.241025 1.856975 10.213362 2.414068 13.30832 0.618992 4.766235 0.618991 4.766236a4.704336 4.704336 0 0 1-4.332941 5.13763 4.766235 4.766235 0 0 1-3.775849-1.299882zM651.612476 435.153274l0.804689-4.704336c0.618992-2.97116 1.423681-7.489799 2.909261-13.060724s3.094958-12.379832 5.632824-19.86963 5.19953-16.155681 8.975378-25.254859a288.202497 288.202497 0 0 1 13.060723-29.092606 253.353269 253.353269 0 0 1 18.569749-31.444774c3.590151-5.323328 7.551698-10.708555 11.884639-16.093782a121.569954 121.569954 0 0 1 14.855799-15.846185 99.471953 99.471953 0 0 1 20.67432-14.484404 56.390136 56.390136 0 0 1 33.23985-6.189916H786.057456l1.547479 0.433294 2.785462 0.928487c2.042672 0.680891 3.404454 1.299882 4.704336 1.856975a38.686976 38.686976 0 0 1 3.899647 2.042672 64.313229 64.313229 0 0 1 12.379833 9.346774 98.23397 98.23397 0 0 1 15.660488 20.117227 116.865617 116.865617 0 0 1 9.59437 19.622035c2.537866 6.189916 4.642437 12.751227 6.499412 18.941143a248.525135 248.525135 0 0 1 7.923092 35.530119 283.498161 283.498161 0 0 1 3.590152 31.75427c0.866588 9.780068 0.928487 18.569749 0.928487 26.802337s-0.371395 14.917698-0.74279 20.612421-0.928487 10.275261-1.237983 13.30832l-0.680891 4.766235a4.704336 4.704336 0 0 1-5.323328 4.023446 4.890034 4.890034 0 0 1-3.65205-2.661664v-0.371395l-1.918874-4.271042c-1.176084-2.847361-3.156857-6.932706-5.19953-12.379833s-4.828135-11.513244-7.551697-18.569748-6.189916-15.350992-9.346774-24.140673l-5.385227-13.494018c-1.733177-4.642437-3.590151-9.470572-5.447126-14.360605-3.837748-9.718168-8.294488-19.745833-12.751228-29.587799-2.290269-4.890034-4.580538-9.718168-7.056504-14.360606s-5.13763-8.85158-7.675496-12.689328a49.519329 49.519329 0 0 0-7.242202-8.418286 7.056504 7.056504 0 0 0-1.856975-1.299882h1.423681-1.733177c-1.361782 0 1.609378 0.371395 1.299883 0.309495 1.609378 0 1.237983-0.495193-1.237983 0.680891a44.196002 44.196002 0 0 0-9.532471 6.189916 193.063486 193.063486 0 0 0-22.283699 21.41711c-7.180303 8.10879-14.484404 16.27948-21.107614 24.450169s-12.936925 15.969984-18.569748 23.274085-11.327547 14.113009-16.217581 20.117228-9.284874 11.265647-12.875025 15.598588-6.685109 7.675496-8.665883 10.027665l-3.156857 3.528252a4.766235 4.766235 0 0 1-6.68511 0 4.642437 4.642437 0 0 1-1.547479-3.033059zM600.421869 611.627784a865.47408 865.47408 0 0 1-324.723002-50.757313c6.189916 168.303821 154.747904 299.777641 333.079389 293.649624s317.914095-147.505703 312.157473-315.685725A865.350282 865.350282 0 0 1 600.421869 611.627784z"
        fill={getIconColor(color, 3, '#943436')}
      />
      <path
        d="M711.283268 630.816524a1021.769464 1021.769464 0 0 1-108.57113 10.213362h-2.847361a1023.874035 1023.874035 0 0 1-109.004424-2.723563A831.429541 831.429541 0 0 1 391.078904 625.183701c-16.155681-3.280656-31.816169-7.242202-47.600455-12.070337 0.557092 2.22837 1.237983 4.518639 1.918874 6.747009a226.612831 226.612831 0 0 0 11.265647 29.5259 535.42775 535.42775 0 0 0 489.374773-17.207967 242.520916 242.520916 0 0 0 9.099177-29.773497c0.495193-2.352168 0.990387-4.642437 1.423681-6.932706-15.47479 6.189916-30.949581 10.956152-46.671968 15.289093a826.910902 826.910902 0 0 1-98.605365 20.055328z"
        fill={getIconColor(color, 4, '#FFFFFF')}
      />
      <path
        d="M946.00489 300.089303c-3.775849 27.792724-19.003043 56.947229-9.037278 87.463515s44.381699 57.504321 77.683448 65.798809c36.025312 9.037278 55.709246-3.094958 75.702675-15.784286 27.978421-17.826959 44.196002-57.071027 40.729648-84.616154-12.379832-69.203263-66.665397-132.278509-108.942524-212.871217-18.569749 35.220623-39.367867 67.160591-57.937616 97.676877a303.305893 303.305893 0 0 0-18.198353 62.332456z"
        fill={getIconColor(color, 5, '#02BEFF')}
      />
      <path
        d="M1133.683148 380.867709a160.937821 160.937821 0 0 0-2.599765-27.916522c3.466353 27.545127-12.751227 66.789196-40.729648 84.616154-19.93153 12.379832-39.677363 24.759665-75.702675 15.784286-33.301749-8.294488-67.408187-34.477833-77.683448-65.798809s5.261429-59.670792 9.037278-87.463515a303.305893 303.305893 0 0 1 18.198353-62.332456c-29.649698 48.528943-53.604674 93.591533-53.604674 143.110862 0 65.056019 49.952624 117.608407 111.418491 117.608407s111.666088-52.799985 111.666088-117.608407z"
        fill={getIconColor(color, 6, '#0090F2')}
      />
    </svg>
  );
};

IconGanga.defaultProps = {
  size: 18,
};

export default IconGanga;