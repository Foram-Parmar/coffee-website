
import React from "react";


function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-success btn-block">Register</button>
          <p className="switch-text">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
