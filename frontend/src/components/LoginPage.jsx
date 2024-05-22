import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

function LoginPage() { 
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [error, setError] = useState(''); 
	const navigate = useNavigate(); 

	const handleLogin = async () => { 
		try { 
			if (!username || !password) { 
				setError('Please enter both username and password.'); 
				return; 
			} 

			const response = await axios.post('http://localhost:8081/auth/signin', { username, password }); 
			console.log('Login successful:', response.data); 
			navigate('/home'); 
		} catch (error) { 
			console.error('Login failed:', error.response ? error.response.data : error.message); 
			setError('Invalid username or password.'); 
		} 
	}; 

	return ( 
		<div className="d-flex justify-content-center align-items-center vh-100"> 
			<div className="border rounded-lg p-4" style={{ width: '500px' }}> 
				<div className="p-3"> 
					<h2 className="mb-4 text-center">Login</h2> 
					{error && <div className="alert alert-danger">{error}</div>}
					<div className="mb-4">
						<label htmlFor="email" className="form-label">Email address</label>
						<input 
							type="email" 
							className="form-control" 
							id="email" 
							placeholder="Email address" 
							value={username} 
							onChange={(e) => setUsername(e.target.value)} 
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="form-label">Password</label>
						<input 
							type="password" 
							className="form-control" 
							id="password" 
							placeholder="Password" 
							value={password} 
							onChange={(e) => setPassword(e.target.value)} 
						/>
					</div>
					<button 
						className="btn btn-primary w-100 mb-4" 
						onClick={handleLogin}
					>
						Sign in
					</button>
					<div className="text-center"> 
						<p>Not a member? <a href="/signup">Register</a></p> 
					</div> 
				</div> 
			</div> 
		</div> 
	); 
} 

export default LoginPage;
