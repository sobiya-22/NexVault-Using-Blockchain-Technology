import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaUserAlt, FaTimes } from 'react-icons/fa';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './signup.css';

export default function SignUp({ onClose }) {
    const [activeTab, setActiveTab] = useState('signUp');
    const [showRoleOptions, setShowRoleOptions] = useState(false);
    const [userId, setUserId] = useState(null);

    // Form state
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle Google Sign-In success
    const handleGoogleSuccess = (response) => {
        console.log("Google login successful:", response);
        const token = response.credential;
        console.log("Google Token:", token);
        // Here you can send the token to your backend to verify the user and log them in
    };

    const handleGoogleFailure = (error) => {
        setErrorMessage("Google login failed. Please try again.");
        console.error("Google login failed:", error);
    };

    // Handle Sign-Up submission
    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    surname,
                    email,
                    password,
                }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.status === 201) {
                setUserId(data.userId);
                setShowRoleOptions(true);
            } else {
                setErrorMessage(data.msg || 'Sign-up failed. Please try again.');
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage(`Fetch error: ${error.message}`);
        }
    };

    // Handle Sign-In submission
    const handleSignInSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.status === 200) {
                console.log('Sign in successful. JWT token:', data.token);
                // Store JWT token (localStorage/sessionStorage)
            } else {
                setErrorMessage(data.msg || 'Sign-in failed. Please try again.');
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage(`Fetch error: ${error.message}`);
        }
    };

    // Handle Role Selection
    const handleRoleSelection = async (selectedRole) => {
        setRole(selectedRole);
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch(`http://localhost:5000/set-role/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ role: selectedRole }),
            });

            const data = await response.json();
            setLoading(false);

            if (response.status === 200) {
                console.log("Role set successfully:", selectedRole);
            } else {
                setErrorMessage(data.msg || 'Failed to set role.');
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage(`Fetch error: ${error.message}`);
        }
    };

    return (
        <GoogleOAuthProvider clientId="74189254595-8v6js61o4ru2jadh6t35v0s3c8k9334i.apps.googleusercontent.com">
            <div className="signup-modal">
                <button onClick={onClose} className="close-button">
                    <FaTimes />
                </button>
                <h3>{activeTab === 'signUp' ? 'Sign Up' : 'Sign In'}</h3>

                {/* Tab header for switching between Sign In and Sign Up */}
                <div className="tab-header">
                    <button
                        className={activeTab === 'signIn' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('signIn')}
                    >
                        Sign In
                    </button>
                    <button
                        className={activeTab === 'signUp' ? 'active-tab' : ''}
                        onClick={() => setActiveTab('signUp')}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Show error messages */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                {/* Show loading spinner when waiting for responses */}
                {loading && <div className="loading">Loading...</div>}

                {/* Sign-Up Form */}
                {activeTab === 'signUp' && !showRoleOptions && (
                    <form onSubmit={handleSignUpSubmit}>
                        <div className="form-group">
                            <i><FaUserAlt /></i>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <i><FaUser /></i>
                            <input
                                type="text"
                                placeholder="Surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <i><FaEnvelope /></i>
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <i><FaLock /></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                )}

                {/* Role Selection after Sign-Up */}
                {showRoleOptions && (
                    <div className="role-selection">
                        <h4>Select your role:</h4>
                        <div className="role-options">
                            <button onClick={() => handleRoleSelection('Client')}>Client</button>
                            <button onClick={() => handleRoleSelection('Lawyer')}>Lawyer</button>
                            <button onClick={() => handleRoleSelection('Judge')}>Judge</button>
                        </div>
                    </div>
                )}

                {/* Sign-In Form */}
                {activeTab === 'signIn' && (
                    <form onSubmit={handleSignInSubmit}>
                        <div className="form-group">
                            <i><FaEnvelope /></i>
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <i><FaLock /></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="forgot-password">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                )}

                <div className="or-divider">or</div>

                {/* Google Sign-In */}
                <div className="social-login">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                        useOneTap
                        text="continue_with"
                    />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}
