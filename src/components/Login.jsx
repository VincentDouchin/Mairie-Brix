import { useEffect } from 'react'
import { startUi, deleteUi } from '../firebase/auth'
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