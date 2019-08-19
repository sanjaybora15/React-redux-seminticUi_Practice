import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POST', paylod: response})
};

// export const fetchPost = () =>{
//     return async function(dispatch, getState){
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({type: 'FETCH_POST', paylod: response})
//     }
// };


