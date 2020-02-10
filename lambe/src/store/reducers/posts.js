import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Márcio H. Brufatto',
        email: 'mhbrufatto@gmail.com',
        image: null,
        comments: [{
            nickname: 'John Wick',
            comment: 'Stunning'
        }, {
            nickname: 'Julia Gostosa',
            comment: 'Linda foto'
        }] 
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case ADD_COMMENT: 
            return {
                ...state,
                posts: state.posts.map( post => {
                    if(post.id === action.payload.postId) {
                        if(post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                })
            }
        default:
            state
    }
}

export default reducer