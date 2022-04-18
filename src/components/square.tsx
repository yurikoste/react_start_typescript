import React from "react";

export interface ISquareProps {
  onClick: () => void,
  value: string,
}

const Square = (props: ISquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
