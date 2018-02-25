import React from 'react'
import { string } from 'prop-types'
import styled from 'react-emotion'
import Link from './_Link'

const Item = props => (
  <ListItem>
    <Link
      url={props.itemsData}
      title={props.itemsData.slice(1)}
      text={props.itemsData.slice(1)}
    >
      {props.itemsData.slice(1)}
    </Link>
  </ListItem>
)

Item.propTypes = {
  itemsData: string,
}

Item.defaultProps = {
  itemsData: '',
}

const ListItem = styled('li')`
  font-size: 14px;
  letter-spacing: 0.6px;
  font-weight: 400;
  margin: 0;
`

export default Item
