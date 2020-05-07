import React from 'react';

interface CountButtonProps {
  count: number;
  label: string;
  onClick: () => void;
}

const CountButton: React.FC<CountButtonProps> = (props) => {
  return (
    <>
      <button type="button" onClick={props.onClick}>
        {props.label}
      </button>
      <span style={{ marginLeft: '1em' }}>{props.count}</span>
    </>
  );
};

export default CountButton;
