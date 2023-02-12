export const AddTodoAction = (todo) => (dispatch, getState) => {
    //nested arrow function is done using redux-thunk
    const { Todo: { todos }, } = getState();

    const hasTodo = todos.find(i => i.todo === todo);
    if (!hasTodo && todo !== "") {

        //dispatch:basically it will trigger a action specified and change the state through reducers
        dispatch({
            type: "ADD_TODO",
            payload: [{ id: todo, todo }, ...todos],
        });
    }

};


//Creating action when a todo is removed
export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const { Todo: { todos }, } = getState();
    //dispatch:basically it will trigger a action specified and change the state through reducers
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter(t => t.id !== todo.id),
    });


};