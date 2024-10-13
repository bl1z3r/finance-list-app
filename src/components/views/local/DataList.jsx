import React, { useState } from 'react'
import css from '../../../styles/datalist.css'

const { DatalistContainer, DatalistLine, DatalistCell, FilterInput, FilterContainer } = css

export default function DataList(props) {

    const { data = [] } = props
    const [ minSum, setMinSum ] = useState(10);

    const filteredData = data.filter((item) => {
        const sum = parseInt(item.split('::'[0], 10))
        return sum >= minSum;
    }) 

  return (
    <React.Fragment>
      <DatalistContainer>
            <FilterContainer>
            <label>Фильтр по минимальной сумме: </label>
                <FilterInput 
                    type="number" 
                    value={minSum} 
                    onChange={(e) => setMinSum(parseInt(e.target.value, 10))} 
                />
            </FilterContainer>
           {filteredData.map((item, index) => {
            return (
                <DatalistLine key={index}>
                <DatalistCell>{item.split('::')[0]}</DatalistCell>
                <DatalistCell>{item.split('::')[1]}</DatalistCell>
                <DatalistCell>{item.split('::')[2]}</DatalistCell>
                </DatalistLine>
            )
           })}
        
      </DatalistContainer>
    </React.Fragment>
  )
}
