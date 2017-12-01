function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [...state,{
                user: action.author,
                text: action.comment
            }];
        //
        case 'REMOVE_COMMENT':
            console.log('remvoe a comment');
            // we need to return the new state without the defeted comment
            return [
                ...state.slice(0,action.i),
                //after the defete one, to the end
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    return state;
}
function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            //take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;