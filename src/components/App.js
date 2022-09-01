import React, { useRef } from "react";

import { Container } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";

import { useTodo } from "../hooks/useTodo";

import { TodoTitle } from "./TodoTitle";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Detail from "./Detail";
import Edit from "./Edit";

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Detail">Detail</Link>
          </li>
          <li>
            <Link to="/Edit">Edit</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Container
                  centerContent
                  p={{ base: "4", md: "6" }}
                  maxWidth="3xl"
                >
                  <TodoTitle
                    title="サウナ施設"
                    as="h1"
                    fontSize={{ base: "2xl", md: "3xl" }}
                  />
                  <TodoAdd
                    placeholder="ADD TODO"
                    leftIcon={<AddIcon />}
                    buttonText="サウナを追加"
                    inputEl={inputEl}
                    handleAddTodoListItem={handleAddTodoListItem}
                  />
                  <TodoList
                    todoList={inCompletedList}
                    toggleTodoListItemStatus={toggleTodoListItemStatus}
                    deleteTodoListItem={deleteTodoListItem}
                    title="サウナ施設(未)"
                    as="h2"
                    fontSize={{ base: "xl", md: "2xl" }}
                  />
                  <TodoList
                    todoList={completedList}
                    toggleTodoListItemStatus={toggleTodoListItemStatus}
                    deleteTodoListItem={deleteTodoListItem}
                    title="サウナ施設"
                    as="h2"
                    fontSize={{ base: "xl", md: "2xl" }}
                  />
                </Container>
              </>
            }
          />
          {/* <Link to="/about">About</Link> */}
          {/* <Switch>
          
          <Route path="/about">
            <About />
            </Route>
            </Switch> */}
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
          {/* <Route path="/products" element={<Products/>} />
      <Route path="/*" element={<NotFound/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
