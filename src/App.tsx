// Open the components (e.g. Counter1) and complete the tasks
// Complete the tasks in the order they are listed below

import "./App.css";
import {Calculator1} from "./tasks/Calculator1";
import {Counter1} from "./tasks/Counter1";
import {Counter2} from "./tasks/Counter2";
import {Fetcher1} from "./tasks/Fetcher1";
import {Input1} from "./tasks/Input1";
import {Input2} from "./tasks/Input2";
import {List1} from "./tasks/List1";
import {List2} from "./tasks/List2";
import {List3} from "./tasks/List3";
import {Optimization1} from "./tasks/Optimization1";
import {Table1} from "./tasks/Table1";
import {Timer1} from "./tasks/Timer1";

const App = () => {
  return (
    <main>
      <hgroup>
        <h1>React interview</h1>
        <h2>Coding tasks</h2>
      </hgroup>

      <div className="card">
        <Counter1 />
        <Counter2 />
      </div>

      <div className="card">
        <Calculator1 />
      </div>

      <div className="card">
        <Timer1 />
      </div>

      <div className="card">
        <Fetcher1 />
      </div>

      <div className="card">
        <List1 />
        <List2 />
        <List3 />
      </div>

      <div className="card">
        <Optimization1 />
      </div>

      <div className="card">
        <Input1 />
        <Input2 />
      </div>

      <div className="card">
        <Table1 />
      </div>
    </main>
  );
};

export default App;
