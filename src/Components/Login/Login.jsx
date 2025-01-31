import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  // State for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State for validation errors
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validate username
  const validateUsername = (value) => {
    // Check if username is empty
    if (!value) {
      setUsernameError('Username is required');
    }
    // Check if username starts with a number
    else if (/^[0-9]/.test(value)) {
      setUsernameError('Username cannot start with a number');
    }
    // Check if username contains only alphanumeric characters
    else if (!/^[a-zA-Z0-9]+$/.test(value)) {
      setUsernameError('Username can only contain alphanumeric characters');
    }
    // Check for minimum length (e.g., at least 5 characters)
    else if (value.length < 5) {
      setUsernameError('Username must be at least 5 characters long');
    }
    // Check if username contains spaces
    else if (/\s/.test(value)) {
      setUsernameError('Username cannot contain spaces');
    }
    // If all validations pass, clear the error
    else {
      setUsernameError('');
    }
  };
  

  // Validate password
  const validatePassword = (value) => {
    if (value === '') {
      setPasswordError('Password is required');
    } else if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername(username); // Validate username
    validatePassword(password); // Validate password

    // Submit form only if no errors
    if (!usernameError && !passwordError) {
      alert(`Form Submitted! `);
      // Username: ${username}, Password: ${password}
      // Proceed with form submission (e.g., API call)
    }
  };

  return (
    <div className="grid grid-cols-2 shadow-2xl">
      <div className="mt-44 mb-20 mx-36">
        <img
          src="https://th.bing.com/th/id/OIP.h-h_qMscTTMqZEcNXDrNiQHaHa?rs=1&pid=ImgDetMain"
          alt="Login"
        />
      </div>
      <div className="mt-56">
        <h1 className="mx-52 text-4xl font-bold text-blue-900">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-10">
            <label className="text-2xl font-medium">Username</label>
            <input
              type="text"
              className="p-2 rounded-2xl bg-gray-200 w-80 mx-6"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateUsername(e.target.value); // Validate username on change
              }}
            />
            {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
            <br />
            <br />
            <label className="text-2xl font-medium">Password</label>
            <input
              type="password"
              className="rounded-2xl p-2 bg-gray-200 w-80 mx-7"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value); // Validate password on change
              }}
            />
            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            <br />
            <br />
          </div>
          <div className="flex items-center justify-center mx-52 w-52">
            <button
              type="submit"
              className="bg-indigo-500 p-2 text-white rounded-2xl text-center w-52"
              value="login"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <u>
              <Link to="/Usersign" className="font-light">
                Not Signed Up? Signup Here
              </Link>
            </u>
          </div>
          <div className="flex justify-center">
            <u>
              <Link to="/Signup" className="font-light">
                Add Your Own Hotel? Signup Here
              </Link>
            </u>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
