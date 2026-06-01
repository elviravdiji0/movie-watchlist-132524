// TODO: import and use AuthContext to call login() when the button is clicked
// TODO: after login, navigate to /movies
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => {
          login();
          navigate("/movies");
        }}
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage
