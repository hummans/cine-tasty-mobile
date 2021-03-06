import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#eee"/><path fill="#0052b4" d="M352.4 200.3H288l-32-55.6-32.1 55.6h-64.3l32.1 55.7-32 55.7h64.2l32.1 55.6 32.1-55.6h64.3L320.3 256l32-55.7zm-57 55.7l-19.7 34.2h-39.4L216.5 256l19.8-34.2h39.4l19.8 34.2zM256 187.6l7.3 12.7h-14.6l7.3-12.7zm-59.2 34.2h14.7l-7.4 12.7-7.3-12.7zm0 68.4l7.3-12.7 7.4 12.7h-14.7zm59.2 34.2l-7.3-12.7h14.6l-7.3 12.7zm59.2-34.2h-14.7l7.4-12.7 7.3 12.7zm-14.7-68.4h14.7l-7.3 12.7-7.4-12.7zM415.4 55.7H96.6a257.3 257.3 0 0 0-59 66.7h436.8a257.3 257.3 0 0 0-59-66.7zM96.6 456.3h318.8a257.3 257.3 0 0 0 59-66.7H37.6a257.3 257.3 0 0 0 59 66.7z"/></svg>
`;

const IsraelFlag = () => (
  <SvgXml
    xml={xml}
    width="100%"
    height="100%"
  />
);

export default IsraelFlag;
