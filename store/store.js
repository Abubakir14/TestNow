import {createStore} from 'redux';

const initialState = {
  todos: [
    {id: 31.57758812353345435839, userText: 'Сдать тестовое'},
    {id: 31.577588123533452315839, userText: 'Начать зарабатывать 🙌'},
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_text':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'delete':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
