import React, {useContext,useHistory}from 'react'
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'

// import AppContext from '../utilities/AppContext'

export default function DeleteButton(props) {

 
    
    const ClickHandle = () => {
        axiosHelper({
            method: 'delete',
            route: `/myJobsBoard/${props.id}`,
        })
        .then(res => { 
        })
        .catch(err => console.log('error: ', err))
    }
    return (
        <div>
            <button onClick={ClickHandle}>Delete</button>
        </div>
    )
}
