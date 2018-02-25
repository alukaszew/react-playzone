import React from 'react'
import Item from './_Item'

const LinkList = (props) => {
  if (!props.data) { return null }

  // The index in array is antipattern BUT!
  // in this place it not generating any problem
  // because the list has been generated from basic data

  return (
    props.data.map((item, idx) =>
      <Item key={idx} itemsData={item} />
    )
  )
}

export default LinkList
