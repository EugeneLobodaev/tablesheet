import { useEffect, useState } from "react";
import { fetchData } from "../../api/api";
import { PagiProps } from "../../types/tableSheetTypes";
import css from "./Pagination.module.css";
import { Button } from "../Button";

export const Pagination = (props: PagiProps) => {
  const url = `https://jsonplaceholder.typicode.com/todos`;
  const getTable = async () => {
    return fetchData(url).then((data) => setPagiButtons(data));
  };
  const [pagiButtons, setPagiButtons] = useState([]);
  useEffect(() => {
    getTable();
  }, []);

  const buttonsAmount = pagiButtons.length / props.limit;
  console.log(buttonsAmount);
  const buttons: any[] = [];
  const renderButtons = () => {
    for (let i = 0; i < buttonsAmount; i++) {
      buttons.push(i);
    }
  };

  renderButtons();
  return (
    <div className={css.root}>
      {buttons.map((item) => (
        <Button
          onClick={undefined}
          name={buttons[item]}
          key={buttons[item] + 1}
        />
      ))}
    </div>
  );
};
