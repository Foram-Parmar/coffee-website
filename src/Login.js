import React from "react";


function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>
        <form>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <p className="switch-text">
            Don’t have an account? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
