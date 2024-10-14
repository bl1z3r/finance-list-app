import React from 'react'
import DataList from '../views/local/DataList'

export default function Stat(props) {

    const { StatData } = props

  return (
    <React.Fragment>
        <DataList data={StatData}>
        </DataList>
    </React.Fragment>
  )
}
