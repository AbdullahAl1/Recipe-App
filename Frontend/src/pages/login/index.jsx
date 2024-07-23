import React, { useState } from 'react';
import "./style.css"
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost/recipe app/auth/signin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.text();
            console.log(data);

            if (data.status === 'success') {
                setMessage('Login successful!');
                console.log(data);
                // Store the token or user data if needed
                // For example: localStorage.setItem('user', JSON.stringify(data.user));
            } else {
                setMessage(data.error || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

  return (
    <div className="login-container">
            <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button onClick={handleSubmit} >Login</button>
            {/* {message && <p>{message}</p>} */}
        </div>
  )
}
export default Login