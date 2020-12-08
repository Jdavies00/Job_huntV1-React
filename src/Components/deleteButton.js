import React, {useContext,useHistory}from 'react'
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'

// import AppContext from '../utilities/AppContext'

export default function DeleteButton(props) {

    const createJob = (res) => {
        context.setJobFromInput(res.data)
        console.log(res)
      }    
    
    const ClickHandle = () => {
        axiosHelper({
            method: 'delete',
            route: `/myJobsBoard/${props.id}`,
            token: context.token,
            success: createJob

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
