import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import axios from "axios";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = (name, email, role, password) => {
        setIsLoading(true)
        setError(null)

        const response = axios.post('http://localhost:8080/user/signup', {
            Headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, role, password })
        })
        const json = response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // Save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // Update authcontext
            dispatch({ type: 'LOGIN', PAYLOAD: json })

            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}