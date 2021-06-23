import React, { useState }   from 'react'
import Styled from 'styled-components'


// Styling for the ClassList page
const StyledClassListPage = Styled.div`
    border: 2px solid black;
    border-radius: 40px;
    width: 60%;
    margin: 2% auto 2% auto;
    padding: 3%;
    background-color: beige;

    /* input {
        margin: 2%;
        font-size: 120%;
    } */
`

const initialClasses = [{
    class: 'Yoga',
    time: '8 AM',
    spotsAvailable: 15
}, {
    class: 'Pilates',
    time: '11 AM',
    spotsAvailable: 8
}, {
    class: 'Ripped',
    time: '5 PM',
    spotsAvailable: 12
}]

const ClassListPage = () => {

    const [ classList, setClassList ] = useState(initialClasses)

    return (
        <StyledClassListPage>
            Class List
        </StyledClassListPage>
    )
}

export default ClassListPage