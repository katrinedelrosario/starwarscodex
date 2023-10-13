import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import { LOAD_FILMS } from '../graphql/queries'



function GetFilms() {
    const {error, loading, data} = useQuery(LOAD_FILMS)
    const [films, setFilms] = useState([])

    useEffect(() => {
      if(data) {
        setFilms(data.getFilms)
      }
    }, [data])
    
  return <div>
    {" "}
    {films.map((val) => {
    return <h1>{val.title}</h1>
    })}</div>
}

export default GetFilms