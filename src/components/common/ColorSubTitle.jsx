/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

function ColorSubTitle({title, color}) {
  const style = css`
    color: ${color};
    font-size: 1.3rem;
    font-weight: bold;
    margin: 1rem 0;
  `;

  return (
    <h3 css={style}>{title}</h3>
  );
}

export default ColorSubTitle;