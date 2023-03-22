import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../Context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { setAuthData } = useAuthContext();

    const login = (email, password) => {
        setLoading(true);
        setError(null);
        axios
            .post('', { email, password })
            .then((res) => {
                setLoading(false);
                setAuthData(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.response.data.message);
            });
    };

    return { login, loading, error };
}

export default useLogin;