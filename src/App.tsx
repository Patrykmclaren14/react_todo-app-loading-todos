/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useTodoContext } from './context/TodosProvider';
import { TodoList } from './components/TodoList/TodoList';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  const {
    query,
    setQuery,
    messageError,
    setMessageError,
    handleSubmitSent,
  } = useTodoContext();

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <header className="todoapp__header">
          <button
            type="button"
            className="todoapp__toggle-all active"
            data-cy="ToggleAllButton"
          />

          <form onSubmit={(event) => handleSubmitSent(event)}>
            <input
              data-cy="NewTodoField"
              type="text"
              className="todoapp__new-todo"
              placeholder="What needs to be done?"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
        </header>

        <TodoList />

        <Footer />
      </div>

      <div
        data-cy="ErrorNotification"
        className={`notification is-danger is-light has-text-weight-normal ${messageError ? '' : 'hidden'}`}
      >
        <button
          data-cy="HideErrorButton"
          type="button"
          className="delete"
          onClick={() => setMessageError('')}
        />
        {messageError}
      </div>
    </div>
  );
};
