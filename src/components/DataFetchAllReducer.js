import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    posts: {}
}
const reducer = (state, action) =>{
    switch (action.type){
        case 'FETCH_SUCCESS' :
            return {
                loading : false,
                posts: action.payload,
                error: ''
            }
        case 'FETCH_ERROR' :
            return{
                loading: false,
                posts: {},
                error: "Something went wrong !"
            }
        default:
            return state
    }
}

function DataFetchAllReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () =>{
        axios.get(`http://localhost:5000/`)
        .then(response =>{
            dispatch({type: 'FETCH_SUCCESS', payload: response.data })
        })
        .catch( error => {
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])


  return (
    <React.Fragment>
        {state.loading ? 'Loading' : 
        
        state.posts.map((post, index) => {
            return(
                <div key={index} >
                    <h2>lastname : {post.lastname}</h2>
                    <p>firstname : {post.firstname}</p>
                    <h2>email : {post.email}</h2>
                    <hr />
                </div>
            )
        })
        }
        {state.error ? 'error': null}
    </React.Fragment>
  )
}

export default DataFetchAllReducer