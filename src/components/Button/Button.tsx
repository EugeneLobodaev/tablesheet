import css from "./Buttons.module.css";
import { ButtonProps } from "../../types/tableSheetTypes";

export const Button = (props: ButtonProps) => {
  return (
    <button className={css.button} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
