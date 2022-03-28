// import React from 'react';
import MyPosts from './MyPosts' 
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     debugger;

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action);
//     }

//     return ( <MyPosts updateNewPostText={onPostChange} 
//                       addPost={addPost} 
//                       posts={state.profilePage.posts} 
//                       newPostText={state.profilePage.newPostText} /> 
//     )
// }
 
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts, 
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;