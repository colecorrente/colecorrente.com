import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const arrows = keyframes`
 0% {
    transform: rotate(-45deg) translate(20px, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
`;

const ScrollArrow = styled.div`
  width: 5vw;
  height: 5vw;
  max-width: 26px;
  max-height: 26px;
  border-left: 1px solid ${(props) => props.color || 'black'};
  border-bottom: 1px solid ${(props) => props.color || 'black'};
  transform: rotate(-45deg);
  animation: ${arrows} 1.5s infinite ease-out;
`;

const ScrollArrows = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      roll="button"
      onClick={() => props.onClick()}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 22px;
        cursor: pointer;
        align-self: flex-end;
      `}
    >
      <ScrollArrow color={props.color} />
      <ScrollArrow color={props.color} />
      <ScrollArrow color={props.color} />
    </div>
  );
};

ScrollArrows.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
};

ScrollArrows.defaultProps = {
  onClick: () => {},
  color: 'black',
};

export default ScrollArrows;
