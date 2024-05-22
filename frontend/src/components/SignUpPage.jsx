import React, { useState } from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

function SignupPage() { 
	const [fullName, setFullName] = useState(''); 
	const [email, setEmail] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [confirmPassword, setConfirmPassword] = useState(''); 
	const [role, setRole] = useState('ROLE_CUSTOMER'); 
	const [mobile, setMobileNumber] = useState(''); 
	const [error, setError] = useState(''); 
	const navigate = useNavigate(); 

	const handleSignup = async () => { 
		try { 
			if (!fullName || !email || !password || !confirmPassword || !mobile) { 
				setError('Please fill in all fields.'); 
				return; 
			} 

			if (password !== confirmPassword) { 
				throw new Error("Passwords do not match"); 
			} 

			const response = await axios.post('http://localhost:8081/auth/signup', { 
				fullName, 
				email, 
				password, 
				role, 
				mobile 
			}); 
			console.log(response.data); 
			navigate('/home'); 
		} catch (error) { 
			console.error('Signup failed:', error.response ? error.response.data : error.message); 
			setError(error.response ? error.response.data : error.message); 
		} 
	}; 

	return ( 
		<div className="d-flex justify-content-center align-items-center vh-100 m-5"> 
			<div className="border rounded-lg p-4" style={{ width: '600px' }}> 
				<div className="p-3"> 
					<h2 className="mb-4 text-center">Sign Up</h2> 
					{error && <div className="alert alert-danger">{error}</div>}
					<form>

						<div className="mb-3">
							<label htmlFor="email" className="form-label">Email Address</label>
							<input 
								type="email" 
								className="form-control" 
								id="email" 
								placeholder="Email Address" 
								value={email} 
								onChange={(e) => setEmail(e.target.value)} 
							/>
						</div>
						<div className="mb-3">
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
						<div className="mb-3">
							<label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
							<input 
								type="password" 
								className="form-control" 
								id="confirmPassword" 
								placeholder="Confirm Password" 
								value={confirmPassword} 
								onChange={(e) => setConfirmPassword(e.target.value)} 
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="role" className="form-label">Role</label>
							<select 
								className="form-select" 
								id="role" 
								value={role} 
								onChange={(e) => setRole(e.target.value)}
							>
								<option value="ROLE_CUSTOMER">User</option> 
								<option value="ROLE_ADMIN">Admin</option> 
							</select>
						</div>
						<button 
							type="button" 
							className="btn btn-primary w-100" 
							onClick={handleSignup}
						>
							Sign Up
						</button>
					</form>
					<div className="text-center mt-3"> 
						<p>Already Registered? <a href="/">Login</a></p> 
					</div> 
				</div> 
			</div> 
		</div> 
	); 
} 

export default SignupPage;
