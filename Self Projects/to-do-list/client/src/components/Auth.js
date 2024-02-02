import { useState } from "react";
import { useCookies } from "react-cookie";

function Auth() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endPoint) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      setError("Make sure confirm password match with password");
      return;
    }

    const response = await fetch(`http://localhost:3000/${endPoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.detail) setError(data.data);
    else {
      setCookie("Email", data.email);
      setCookie("AuthToken", data.token);

      window.location.reload();
    }
    console.log("date from auth on s/l", data);
    // setEmail(null);
    // setPassword(null);
    // setConfirmPassword(null);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? "Please log in" : "Please sign up"}</h2>
          <input
            type="email"
            placeholder="Enter email id"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <input
            type="submit"
            className="create"
            onClick={(e) => handleSubmit(e, isLogin ? "login" : "signup")}
          />
          {error && <p>{error}</p>}
        </form>

        <div className="auth-options">
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
