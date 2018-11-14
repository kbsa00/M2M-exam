import React from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines' 

export default function chart(props) {
  return (
    <div>
        <div>
            <Sparklines height={120} width={180} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg"/>
            </Sparklines>
        </div>
      
    </div>
  )
}
