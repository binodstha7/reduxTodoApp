const initialState = {
    todo: []
};

export function todoApp(state = initialState, action){
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todo: [...state.todo, action.data]
            }
        default:
            return state;
    }
}