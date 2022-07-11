import axios from 'axios';
import React, {useEffect, useState} from 'react';

function DataFetchingAll() {


    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState('')
    const [posts, setPost] = useState({})

    useEffect(() => {

        axios.get(`http://localhost:5000/`)
        .then(response =>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error =>{
            setLoading(false)
            setPost({})
            setError('Something Went Wrong !')
        })
}, [])
console.log(posts);


  return (

    <React.Fragment>

       
        {loading ? 'Loading' : 
            posts.map( (post, index) => {
                return (<div key={index}>

                    <h2> Lastname : {post.lastname} </h2>
                    <h2> Firstname : {post.firstname} </h2>
                    <h2> Email : {post.email} </h2>

                    <hr/>

                </div>)
            })
            
            
        }
        {error ? 'error': null}

    </React.Fragment>
    
  )
}

export default DataFetchingAll