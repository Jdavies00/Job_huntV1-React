import React, {useContext,useHistory}from 'react'
import axiosHelper from '../utilities/axiosHelper'
import AppContext from '../utilities/AppContext'

// import AppContext from '../utilities/AppContext'

export default function DeleteButton(props) {

    // const context = useContext(AppContext)
    const context = useContext(AppContext);
    
    const ClickHandle = () => {
        const history = useHistory;

        axiosHelper({
            method: 'delete',
            route: `/dashboard/${props.id}`,
        })
        .then(res => {
            context.setJobs(res.data)
            context.setJobID(res.data.id)
            console.log(res.data.id)
            history.push("/dashboard")
        })
        .catch(err => console.log('error: ', err))

    //     useEffect(() => {
    //         return () => {
    //         }
    //     }, [props.id])
    }
    return (
        <div>
            <button onClick={ClickHandle}>Delete</button>
        </div>
    )
}
