import { useState } from "react";

function Auth() {
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? "Please log in" : "Please sign up"}</h2>
          <input type="email" placeholder="Enter email id" />
          <input type="password" placeholder="Enter password" />
          {!isLogin && <input type="password" placeholder="Confirm password" />}
          <input type="submit" className="create" />
          {error && <p>{error}</p>}
        </form>

        <div className="auth-option">
          <button
            style={{
              backgroundColor: !isLogin ? "white" : "rgb(188, 188, 188)",
            }}
            onClick={() => viewLogin(false)}
          >
            Sign-up
          </button>
          <button
            style={{
              backgroundColor: isLogin ? "white" : "rgb(188, 188, 188)",
            }}
            onClick={() => viewLogin(true)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
