import { useEffect, useState } from "react";
import css from "./Tablesheet.module.css";
import { fetchData } from "../../api/api";
import { TableSheetResponseType } from "../../types/tableSheetTypes";
import { Button } from "../Button";
import { Input } from "../Input/Input";

export const Tablesheet = () => {
  const [table, setTable] = useState<TableSheetResponseType[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [completed, setCompleted] = useState<string>();
  const [sorted, setSorted] = useState<string>("_sort=userId");
  const [order, setOrder] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [inputValue, setInputValue] = useState<number | string>("");
  const tableLimit = 15;
  const buttons: number[] = [];

  let url = `https://jsonplaceholder.typicode.com/todos?_limit=${tableLimit}&_page=${pageNumber}&${completed}&${sorted}&${order}&title_like=${search}`;
  // Рассматривал вариант сделать с редаксом, но потратил бы намного больше времени
  const nextPage = () => {
    setPageNumber((prev): any => {
      if (table.length < 15) {
        return setPageNumber(prev);
      }
      return Number(prev) + 1;
    });
  };
  const prevPage = () => {
    setPageNumber((prev): any => {
      if (prev === 1) {
        return setPageNumber(1);
      }
      return Number(prev) - 1;
    });
  };
  const setCompletedFalse = () => {
    return setCompleted("completed=false");
  };
  const setCompletedTrue = () => {
    return setCompleted("completed=true");
  };
  const setSortedTitle = () => {
    setSorted("_sort=title");
    setPageNumber(1);
  };
  const setSortedId = () => {
    setSorted("_sort=userId");
    setPageNumber(1);
  };
  const setOrderAZ = () => {
    setOrder("_order=asc");
    setSorted((prev) => prev);
    setPageNumber(1);
  };
  const setOrderZA = () => {
    setOrder("_order=desc");
    setSorted((prev) => prev);
    setPageNumber(1);
  };
  const setSearchValue = (e: string) => {
    setPageNumber(1);
    setOrderAZ();
    setSearch(e);
  };
  const reset = () => {
    setPageNumber(1);
    setCompleted("");
    setOrder("_order=asc");
    setSorted("_sort=userId");
    setSearch("");
    setInputValue("");
  };
  const renderButtons = () => {
    for (let i = 1; i < 15; i++) {
      buttons.push(i);
    }
  };
  renderButtons();

  useEffect(() => {
    const getTable = async () => {
      return fetchData(url).then((data) => setTable(data));
    };
    getTable();
  }, [pageNumber, url, search]);

  return (
    <div className={css.root}>
      <table className={css.table}>
        <tr>
          <th className={css.table_header}>id</th>
          <th className={css.table_header}>user</th>
          <th className={css.table_header}>title</th>
          <th className={css.table_header}>completed?</th>
        </tr>
        {table.map((data: TableSheetResponseType) => (
          <tr>
            <td className={css.table_row}>{data?.id}</td>
            <td className={css.table_row}>{data?.userId}</td>
            <td className={css.table_row}>{data?.title}</td>
            <td className={css.table_row}>{data?.completed.toString()}</td>
          </tr>
        ))}
      </table>
      <div className={css.button_wrapper}>
        <Button
          onClick={() => prevPage()}
          className={css.button}
          name={"Previous Page"}
        />
        <Button
          onClick={() => nextPage()}
          className={css.button}
          name={"Next Page"}
        />
      </div>
      <div className={css.button_wrapper}>
        {buttons.map((item, index) => (
          <Button
            className={item === pageNumber ? css.current_page : css.page}
            onClick={() => setPageNumber(item)}
            name={item}
            key={index}
          />
        ))}
      </div>
      <form action="">
        <select
          name="completed?"
          onChange={() => {
            completed === "completed=false" || ""
              ? setCompletedTrue()
              : setCompletedFalse();
          }}
        >
          <option>completed</option>
          <option>not completed</option>
        </select>
      </form>
      <form action="">
        <select
          name="sorted"
          onChange={() => {
            sorted === "_sort=title" || "" ? setSortedId() : setSortedTitle();
          }}
        >
          <option>ID</option>
          <option>Title</option>
        </select>
      </form>
      <form action="">
        <select
          name="order"
          onChange={() => {
            order === "_order=desc" ? setOrderAZ() : setOrderZA();
          }}
        >
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </form>
      <Input
        type={"search"}
        name={"search"}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setSearchValue(e.currentTarget.value)
        }
        placeholder={"search"}
        defaultValue={inputValue}
      />

      <Button onClick={() => reset()} name={"Reset"} className={css.button} />
    </div>
  );
};
