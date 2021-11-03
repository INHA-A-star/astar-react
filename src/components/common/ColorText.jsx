/** @jsxImportSource @emotion/react */
import React from 'react';

function ColorText({content, color}) {
  const style = {
    color: `${color}`
  };

  return (
    <span css={style}>{content}</span>
  );
}

export default ColorText;