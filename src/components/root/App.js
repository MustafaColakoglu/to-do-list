import { Switch, Route } from "react-router-dom";
import ActionBar from "../actionBar/ActionBar";
import CreateTodo from "../todo/CreateTodo";
import TodoList from "../todo/TodoList";
import "./app.css"
function App() {
  return (
    <div>
      
        <ActionBar></ActionBar>
     
      <div className="get-center">
        <Switch>
          <Route path="/" exact component={TodoList}></Route>
          <Route path="/newtodo" exact component={CreateTodo}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
