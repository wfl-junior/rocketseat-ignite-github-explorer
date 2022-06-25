import { Fragment } from "react";
import { Counter } from "./components/Counter";
import { RepositoryList } from "./components/RepositoryList";
import "./styles/global.scss";

export function App() {
  return (
    <Fragment>
      <RepositoryList />
      <Counter />
    </Fragment>
  );
}
