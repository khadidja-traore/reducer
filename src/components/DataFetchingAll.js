import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingAll() {
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState('')
    const [posts, setPost] = useState({})
    useEffect(()=>{
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
    console.log(posts)
  return (
    <React.Fragment>
        {loading ? 'Loading' : 
        
        posts.map((post, index) => {
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
        {error ? 'error': null}
    </React.Fragment>
  )
}

export default DataFetchingAll