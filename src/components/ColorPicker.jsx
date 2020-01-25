import React, { useState } from 'react';
import { FaEyeDropper } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ColorPicker = (props) => {
  const [inputRef] = useState(React.createRef());

  return (
    <div css={[{ cursor: 'pointer', alignSelf: 'flex-start' }, props.containerCss]}>
      <FaEyeDropper
        css={props.iconCss}
        onClick={() => { inputRef.current.click(); }}
      />
      <input
        type="color"
        id="colorpicker"
        css={{ display: 'none' }}
        value={props.value}
        onChange={props.onChange}
        ref={inputRef}
      />
    </div>
  );
};

ColorPicker.propTypes = {
  onChange: PropTypes.func,
  containerCss: PropTypes.shape({}),
  iconCss: PropTypes.shape({}),
  value: PropTypes.string.isRequired,
};

ColorPicker.defaultProps = {
  onChange: () => {},
  containerCss: {},
  iconCss: {},
};

export default ColorPicker;
