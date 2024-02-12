import React from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ bg, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={`text-white py-[10px] px-[20px] rounded-[10px] disabled:opacity-50`}
      style={{ backgroundColor: bg || '#3b82f6' }}
      {...props}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  bg: '#3b82f6',
  size: 'lg',
  disabled: false,
  onClick: undefined,
};
