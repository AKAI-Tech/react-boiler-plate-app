import React, {useState} from 'react'
import axios from 'axios'
import requests from '../Requests'

const Main = () => {
    const [data, setData]= useState([])

    useEffect(() => {
      axios.get(requests.requestData).then((response)=> {
        setData(response.data)
      })
    }, [])
    

  return (
    <div>Main</div>
  )
}

export default Main