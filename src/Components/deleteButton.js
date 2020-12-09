import React, { useContext } from 'react'
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'
import { Button } from 'reactstrap'

// import AppContext from '../utilities/AppContext'

export default function DeleteButton(props) {
    const context = useContext(AppContext);

    const deleteJob = (res) => {
        context.setJobs(res.data.jobs)
        console.log(res)
    }
    const ClickHandle = () => {
        axiosHelper({
            method: 'delete',
            route: `/myJobsBoard/${props.id}`,
            token: context.token,
            success: deleteJob
        })
    }
    return (
        <Button onClick={ClickHandle}>Delete</Button>
    )
}
