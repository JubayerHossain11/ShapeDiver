import React, { useState } from 'react';
import { debug } from 'util';

// Login component
const Login = () => {
  // State to store user input
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
    const url = 'http://localhost:5093/api/Common/GetAuthenticate'; // Replace with your actual API endpoint

  // Function to handle form submission
  const handleSubmit = async (e) => {
      e.preventDefault();
      debugger;
      const requestBody = credentials;

      try {
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  // You can include additional headers if required
                  // 'Authorization': 'Bearer your_access_token',
              },
              body: JSON.stringify(requestBody),
          });

          // Check if the request was successful (status code 2xx)
          if (response.ok) {
              debugger;
              const data = await response.json();
              console.log(data)
              //console.log('Submitted credentials:', credentials);
              localStorage.setItem("userToken", data);
              window.location.reload();
          } else {
              console.error('Error:', response.statusText);
          }
      } catch (error) {
          console.error('Error:');
      }


    // You can add authentication logic here, for now, let's log the credentials
  
    };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center">Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
