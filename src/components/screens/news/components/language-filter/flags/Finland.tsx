import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#eee"/><path fill="#0052b4" d="M509.8 222.6H200.3V6.1a254.3 254.3 0 0 0-66.7 25v191.5H2.2a258.2 258.2 0 0 0 0 66.8h131.4v191.5a254.3 254.3 0 0 0 66.7 25V289.4h309.5a258.6 258.6 0 0 0 0-66.8z"/></svg>`;

const FinlandFlag = () => (
  <SvgXml
    xml={xml}
    width="100%"
    height="100%"
  />
);

export default FinlandFlag;