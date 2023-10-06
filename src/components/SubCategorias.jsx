import React from 'react'
import { useParams } from 'react-router-dom'
import ListPost from './ListPost'

const SubCategorias = () => {
    const { subcategoria } = useParams()



  return (
    <ListPost url={`/posts?subcategoria=${subcategoria}`} />
  )
}

export default SubCategorias