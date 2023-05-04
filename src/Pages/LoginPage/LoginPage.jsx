import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner from "../../Components/Shared/Spinner";
import TopNav from "../../Components/Shared/TopNab";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      console.log(error);
    }
  };
  // Github
  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, gitProvider);
      const user = result.user;
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        setLoading(false);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <>
      <TopNav />
      <div className="flex h-screen items-center justify-center mt-[-25px] bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {loading ? (
            <div className="flex items-center justify-center">
              <Spinner className="mx-auto" />
            </div>
          ) : (
            ""
          )}
          {/* Form */}
          <form onSubmit={handleForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative flex items-center">
                <span className="absolute flex justify-center items-center h-full w-10 text-center text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <input
                  className="w-full p-3 pl-12 rounded border border-gray-400 focus:border-blue-500"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <span className="absolute flex justify-center items-center h-full w-10 text-center text-gray-400">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input
                  className="w-full p-3 pl-12 rounded border border-gray-400 focus:border-blue-500"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            {/* Button */}
            <div className="mb-4">
              <div className="relative flex items-center">
                <input
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold p-3 rounded border border-gray-400 cursor-pointer"
                  type="submit"
                  name="submit"
                  id="submit"
                />
              </div>
            </div>
          </form>
          {/* Form */}

          <h4 className="text-center font-bold text-orange-500 border-b-2 mb-3">
            Or login with
          </h4>
          <div className="space-y-4">
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center w-full py-3 rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign in with Google
            </button>
            <button
              onClick={signInWithGithub}
              className="flex items-center justify-center w-full py-3 rounded-md text-white bg-gray-700 hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Sign in with GitHub
            </button>
            <div className="flex items-center justify-center">
              <span className="text-gray-500 text-sm">
                Don't have an account?
              </span>
              <Link
                to="/signup"
                className="ml-1 text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
