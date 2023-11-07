import React, { ChangeEvent, ReactNode } from "react";
import { TodoListItemType, TodoListPropType, TodoListType } from "../../Types/TodoList/TodoList";

const TodoListComponent = ({ props }: { props: TodoListPropType }) => {
  const todoList: TodoListType[] = props.todoList;
  const theme = props.theme;

  return (
    <div className="todolist">
      {/* sub header */}
      <div className="sub_header">
        <div className="current_time">
          <span>{`2023.11.01 23:03:42`}</span>
          <img
            src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/af1e74da-0cd6-4737-8dd4-214078cbaf74`}
            alt={`24 dropdown`}
          />
        </div>
        <div className="done_list-btn">
          <span>{`Done List`}</span>
          <img
            src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/171ad745-b9f8-462b-b0ce-f8ad4b77a926`}
            alt={`to done list`}
          />
        </div>
      </div>

      {/* search bar */}
      <div className="search_bar">
        <div className="seach_container">
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              return e;
            }}
            value={`a`}
            placeholder={`What will you do today...?`}
          />
          <div className="search_btn">
            <img
              src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/0afaec60-a7c0-4314-b939-1781e61dfd1b`}
              alt={`search`}
            />
          </div>
        </div>
      </div>

      {/* todo list */}
      <div className="todoList">
        {todoList.map((item: TodoListType, index: number): ReactNode => {
          return (
            <div className="todoList_card" key={`card_${index}`}>
              <div className="title">
                <span>{item.title}</span>
                <div className="remove_btn">
                  <img
                    src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/aee494bf-c4bf-4dfa-803b-43ba9f739b23`}
                    alt={`remove_btn`}
                  />
                </div>
              </div>
              <div className="degree">
                <span>{`degree of achivement`}</span>
                <span>{item.degree}%</span>
              </div>
              <div className="degree-bar">
                <div className="degree-total">
                  <div className="degree-current" />
                </div>
              </div>
              <div className="todolist-specific">
                <span>{`specific goals`}</span>
                <div className="checkAll_btn">
                  <img
                    src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/d7f12d4e-1089-4388-a0b7-42c696482d7a`}
                    alt={`checkAll_btn`}
                  />
                </div>
              </div>
              <div className="todolist-specifics">
                {item.items.map((specific: TodoListItemType, index: number): ReactNode => {
                  return (
                    <div className="specific" key={`specific_${index}`}>
                      <span>{specific.content}</span>
                      <div className="check_btn">
                        <img
                          src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/d7f12d4e-1089-4388-a0b7-42c696482d7a`}
                          alt={`check_btn`}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className="done_btn">
                  <span>{`Move to Done list`}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="theme_btn" onClick={theme.handleThemeChange}>
          {theme.theme ? (
            <img
              src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/3528137c-928b-420d-bca0-f456c7e226c3`}
              alt={`to_light_mode`}
            />
          ) : (
            <img
              src={`https://github.com/Kijun-Park/react-boilerplate/assets/35815788/3bf2ff46-2657-415c-94a1-97c600c82e79`}
              alt={`to_dark_mode`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoListComponent;
