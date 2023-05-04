import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TopNav from "../../Components/Shared/TopNab";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import Spinner from "../../Components/Shared/Spinner";

const SignupPage = () => {
  const { createUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // handelSignUp
  const handelSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    try {
      await createUser(email, password, displayName, photoUrl);
      form.reset();
      setLoading(false);
      // Account created successfully
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopNav />
      <div className="relative flex h-screen items-center justify-center mt-[-25px] bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          {loading ? (
            <div class="flex items-center justify-center">
              <Spinner class="mx-auto" />
            </div>
          ) : (
            ""
          )}
          <form onSubmit={handelSignUp}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="displayName"
              >
                Name
              </label>
              <input
                className="w-full p-3 rounded border border-gray-400 focus:border-blue-500"
                type="text"
                name="displayName"
                id="displayName"
                placeholder="Enter your name"
              />
            </div>
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
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="photoUrl"
              >
                Photo URL
              </label>
              <div className="relative flex items-center">
                <span className="absolute flex justify-center items-center h-full w-10 text-center text-gray-400">
                  <FontAwesomeIcon icon={faLink} />
                </span>
                <input
                  className="w-full p-3 pl-12 rounded border border-gray-400 focus:border-blue-500"
                  type="text"
                  name="photoUrl"
                  id="photoUrl"
                  placeholder="Add photo url"
                />
              </div>
            </div>
            <button className="w-full py-3 rounded-md text-white bg-blue-500 hover:bg-blue-600">
              Sign Up
            </button>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-500 text-sm">
                Already have an account?
              </span>
              <Link
                to="/login"
                className="ml-1 text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
