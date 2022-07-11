import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/form/62bad770b70c020b4b16da1a`)
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

  return (
    <div>
        {loading ? 'Loading' : "title : " + post.lastname}
        {error ? 'error': null}
    </div>
  )
}

export default DataFetchingOne