import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Alert } from 'react-bootstrap'
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
    const user = useSelector(state => state.user.account);

    if (user && !user.auth) {
        return <>

            <Alert variant="danger" className="mt-3">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Ban chua Login!!!
                </p>
            </Alert>
        </>
    }
    console.log("jnkfbksjbfs");
    return (
        <>
            {props.children}
        </>
    )
}

export default PrivateRoute;