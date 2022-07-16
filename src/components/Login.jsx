import { useEffect } from 'react'
import { startUi, deleteUi } from '../auth'
export default function Login() {
    useEffect(() => {
        startUi()

        return () => {
            deleteUi()
        }
    }, [])



    return (
        <div id="firebaseui-auth-container"></div>
    )
}