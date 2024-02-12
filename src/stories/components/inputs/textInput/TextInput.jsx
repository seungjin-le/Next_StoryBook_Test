import React from 'react';

const TextInput = ({
  border,
  borderWidth,
  borderStyle,
  rounded,
  paddingY,
  paddingX,
  fontSize,
  fontWeight,
  ...props
}) => {
  return (
    <input
      type="text"
      autoComplete="off"
      style={{
        borderColor: `${border || '#3b82f6'}`,
        borderWidth: `${borderWidth || 1}px`,
        borderStyle: `${borderStyle || 'solid'}`,
        padding: `${paddingY || 10}px ${paddingX || 20}px`,
        borderRadius: `${rounded || 5}px`,
        fontSize: `${fontSize || 16}px`,
        fontWeight: fontWeight || 500,
      }}
      className={'focus:outline-none w-full'}
      {...props}
    />
  );
};

export default TextInput;

TextInput.defaultProps = {
  border: '#3b82f6',
  onChange: undefined,
};
