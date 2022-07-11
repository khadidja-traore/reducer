import axios from 'axios'
import React, {useEffect, useReducer} from 'react'


const initialState = {
    loading : true, 
    error : '', 
    posts: {}
}

const reducer = (state, action) => {

    switch(action.type){
        case 'FETCH_SUCCESS': 
            return {
                loading : false,
                posts: action.payload,
                error : ''
            }

        case 'FETCH_ERROR':
            return {
                loading : false, 
                posts : {}, 
                error : 'Error ! '
            }
        default: 
            return state 
    }
}

function DataFetchingAllReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {

        axios.get(`http://localhost:5000/`)
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})

        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'})
        } )
    }, []);

  return (

        <React.Fragment>

            {state.loading ? 'Loading ' : 
            
            state.posts.map((post, index) => {

                return(
                    <div key={index}>

                    <h2> Lastname : {post.lastname} </h2>
                    <h2> Firstname : {post.firstname} </h2>
                    <h2> Email : {post.email} </h2>

                    <hr/>

                    </div>
                )
            })}



        </React.Fragment>
  )
}

export default DataFetchingAllReducer