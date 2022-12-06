import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import { useNavigate, Link} from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const adminIDRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        /*
        if (adminIDRef.current.value === "") {
            return setError("Enter an Admin ID.");
        }
        */

        try {
            setError("");
            setLoading(true);
            const errorMessage = login(emailRef.current.value, passwordRef.current.value, adminIDRef.current.value);
            if (errorMessage === "") {
                navigate("/");
            } else {
                setError(errorMessage);
            }
            
        } catch {
            setError("Failed to Sign In.");
        }
        setLoading(false);        
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Admin ID</Form.Label>
                            <Form.Control type="password" ref={adminIDRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to="/forgotPassword">Forgot Password?</Link>
                    </div>  
                </Card.Body>
            </Card>
        </>
  )
}

export default Login