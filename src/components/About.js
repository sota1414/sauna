import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function About() {
  // return <h2>About</h2>;
  return (
    <div className="About">
      <>
        <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
          <h1>サウナ登録画面</h1>
          <p>
            サウナ施設名：
            <input type="text" name="text"></input>
          </p>
          <p>
            住所：<input type="text" name="text"></input>
          </p>
          <p>
            サウナの温度：
            <select name="saunaondo">
            
              <option value="80">80</option>
              <option value="81">81</option>
              <option value="82">82</option>
              <option value="83">83</option>
              <option value="84">84</option>
              <option value="85">85</option>
              <option value="86">86</option>
              <option value="87">87</option>
              <option value="88">88</option>
              <option value="89">89</option>
              <option value="90">90</option>
              <option value="91">91</option>
              <option value="92">92</option>
              <option value="93">93</option>
              <option value="94">94</option>
              <option value="95">95</option>
              <option value="96">96</option>
              <option value="97">97</option>
              <option value="98">98</option>
              <option value="99">99</option>
              <option value="100">100</option>
              <option value="101">101</option>
              <option value="102">102</option>
              <option value="103">103</option>
              <option value="104">104</option>
              <option value="105">105</option>
            </select>
            ℃
          </p>

          <p>
            水風呂の温度：
            <select name="waterondo">
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </select>
            ℃
          </p>
          <p>
            外気浴スペース：<input type="text" name="text"></input>
          </p>
          <p>
            サウナ済み
            <input type="checkbox" name="saunazumi" value="saunazumi"></input>
          </p>
          <p>
            ひとことメモ：
            <textarea
              name="textarea"
              cols="50"
              rows="5"
              placeholder="メモ"
            ></textarea>
          </p>
          <Link to="/"> <input type="submit" value="サウナ施設を登録"></input></Link>
          {/* <TodoTitle
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
                  /> */}
        </Container>
      </>
    </div>
  );
}

export default About;
