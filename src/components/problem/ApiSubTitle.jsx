/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const style = css`
  display: inline-block;
  margin-top: 4rem;
  margin-bottom: 1rem;
  padding: 0.3rem 0.5rem;
  background-color: rgba(135 131, 120, 0.15);
  color:#eb5757;
  font-size: 1.3rem;
  font-weight: bold;
`;

function ApiSubTitle({title}) {
  return (
    <h3 css={style}>[{title}]</h3>
  );
}

export default ApiSubTitle;