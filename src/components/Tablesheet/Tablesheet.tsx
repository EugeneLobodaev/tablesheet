import { useEffect, useState } from "react";
import css from "./Tablesheet.module.css";
import { fetchData } from "../../api/api";
import { TableSheetResponseType } from "../../types/tableSheetTypes";
import { Button } from "../Button";

export const Tablesheet = () => {
  const [table, setTable] = useState<TableSheetResponseType[]>([]);
  const [pageNumber, setPageNumber] = useState<string>("1");
  const [completed, setCompleted] = useState<string>();
  const [sorted, setSorted] = useState<string>("_sort=title");
  const [order, setOrder] = useState<string>("_order=asc");
  const [search, setSearch] = useState<string>("");
  const pageLimit = 15;
  let url = `https://jsonplaceholder.typicode.com/todos?_limit=${pageLimit}&_page=${pageNumber}&${completed}&${sorted}&${order}&title_like=${search}`;

  const nextPage = () => {
    setPageNumber((prev): any => {
      if (table.length < 15) {
        return setPageNumber(prev);
      }
      return (Number(prev) + 1).toString();
    });
  };
  const prevPage = () => {
    setPageNumber((prev): any => {
      if (prev === "1") {
        return setPageNumber("1");
      }
      return (Number(prev) - 1).toString();
    });
  };
  const setCompletedFalse = () => {
    return setCompleted("completed=false");
  };
  const setCompletedTrue = () => {
    return setCompleted("completed=true");
  };
  const setOrderAZ = () => {
    setOrder("_order=asc");
  };
  const setOrderZA = () => {
    setOrder("_order=desc");
  };
  const setSortedTitle = () => {
    setSorted("_sort=title");
  };
  const setSortedId = () => {
    setSorted("_sort=userId");
  };
  const setSearchValue = (e: string) => {
    setPageNumber("1");
    setSearch(e);
  };

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
            sorted === "_sort=userId" || "" ? setSortedTitle() : setSortedId();
          }}
        >
          <option>Title</option>
          <option>ID</option>
        </select>
      </form>
      <form action="">
        <select
          name="order"
          onChange={() => {
            order === "_order=desc" || "" ? setOrderAZ() : setOrderZA();
          }}
        >
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </form>
      <form action="">
        <input
          type="search"
          placeholder="Search"
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};
