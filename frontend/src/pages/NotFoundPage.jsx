import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const NotFoundPage = () => {
  const { isAuthenticated, user } = useAuthStore();
  const isLoggedIn = isAuthenticated && user?.isVerified;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
    >
      {/* Icon + 404 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            delay: 0.1,
          }}
          className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <AlertTriangle className="h-8 w-8 text-green-400" />
        </motion.div>

        <h1 className="text-8xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
          404
        </h1>
      </motion.div>

      {/* Message box */}
      <motion.div
        className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-green-400 mb-3">
          Page Not Found
        </h3>
        <p className="text-gray-300">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        {isLoggedIn && (
          <p className="text-gray-400 text-sm mt-2">
            Logged in as{" "}
            <span className="text-green-400 font-semibold">{user.name}</span>
          </p>
        )}
      </motion.div>

      {/* Buttons — conditional based on auth state */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-3"
      >
        {isLoggedIn ? (
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
              font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
              focus:ring-offset-gray-900 flex items-center justify-center gap-2"
            >
              <Home size={18} /> Go to Home
            </motion.button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                focus:ring-offset-gray-900 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Back to Login
              </motion.button>
            </Link>

            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-4 bg-gray-800 text-green-400 font-bold rounded-lg 
                shadow-lg border border-gray-700 hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                focus:ring-offset-gray-900 flex items-center justify-center gap-2 mt-3"
              >
                Create an Account
              </motion.button>
            </Link>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;
