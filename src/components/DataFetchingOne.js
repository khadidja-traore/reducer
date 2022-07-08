import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/form/62bab52c87d3cadcb55519d6`)
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
    console.log(post);
  return (
    <React.Fragment>
        {loading ? 'Loading' : "Lastname : " + post.lastname}
        {error ? 'error': null}
    </React.Fragment>
  )
}

export default DataFetchingOne