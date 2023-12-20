import { ButtonProps } from "../../types/tableSheetTypes";

export const Button = (props: ButtonProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
