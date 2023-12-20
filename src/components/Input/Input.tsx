import { InputType } from "../../types/tableSheetTypes";

export const Input = (props: InputType) => {
  return (
    <form>
      <input
        defaultValue={props.defaultValue}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
    </form>
  );
};
