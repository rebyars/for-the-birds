const chirpsDefaultState = [];

export default (state=chirpsDefaultState, action) => {
    switch(action.type){
        case 'ADD_CHIRP':
            return [
                ...state,
                action.chirp
            ];
        case 'REMOVE_CHIRP':
            return state.filter((chirp) => chirp.id !== action.id);
        case 'EDIT_CHIRP':
            return state.map((chirp) => {
                if(chirp.id === action.id){
                    return {
                        ...chirp,
                        ...action.updates
                    }
                }else{
                    return{
                        ...chirp
                    };
                };
            });
        case 'SET_CHIRPS':
            return [...action.chirps]
        default:
            return state;
    };
};