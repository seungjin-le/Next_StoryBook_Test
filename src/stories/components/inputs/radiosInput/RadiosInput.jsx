import React from 'react';

const RadiosInput = ({
  items,
  sortDirection,
  gap,
  itemGap,
  paddingY,
  paddingX,
  fontSize,
  fontWeight,
  onChange,
  value,
  id,
  ...props
}) => {
  return (
    <div
      style={{
        gap: `${gap || 10}px`,
        flexDirection: `${sortDirection || 'row'}`,
        padding: `${paddingY || 0}px ${paddingX || 0}px`,
        fontSize: `${fontSize || 16}px`,
        fontWeight: fontWeight || 500,
      }}
      className={'flex  items-center justify-start'}>
      {items?.map((item, index) => (
        <div
          key={index}
          style={{
            gap: `${itemGap || 5}px`,
          }}
          className={'flex flex-row items-center justify-start'}>
          <input
            type="radio"
            onChange={() => onChange({ id, value: item })}
            checked={value?.value === item.value || value === item.value}
            id={item.label}
          />
          <label htmlFor={item.label}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadiosInput;
