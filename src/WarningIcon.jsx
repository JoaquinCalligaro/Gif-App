import * as React from 'react';

const WarningIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Capa_1"
    version="1.1"
    viewBox="0 0 50 50"
    {...props} // Permite pasar propiedades como `className` o `style`
  >
    <circle cx="25" cy="25" r="25" fill="#D75A4A"></circle>
    <path
      fill="none"
      stroke="#FFF"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="m16 34 9-9 9-9M16 16l9 9 9 9"></path>
  </svg>
);

export default WarningIcon;
