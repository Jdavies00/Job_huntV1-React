import React, {useContext} from 'react'
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'

export default function DeleteButton() {

    const context = useContext(AppContext)
    const clickHandle = () => {
        axiosHelper({
            method: 'delete',
            route: "/dashboard/{id}",
            //infinite loop
            // data:{context}
        })
    }
    return (
        <div>
            <button onClick={clickHandle}>Delete</button>
        </div>
    )
}
