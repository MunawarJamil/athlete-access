'use client'
import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToSignup = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-slate-900 to-slate-600">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="flex w-full">
          
        </div>

        <div className="relative flex items-center justify-between  mt-8 mb-4 border border-gray-300 rounded-full">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={handleSwitchToLogin}
            className="hidden"
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={handleSwitchToSignup}
            className="hidden"
          />
          <label
            htmlFor="login"
            className={`cursor-pointer w-1/2 text-center py-3 font-medium transition-colors duration-500 ${isLogin ? 'text-white z-10' : 'text-black'}`}
            onClick={handleSwitchToLogin}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={`cursor-pointer w-1/2 text-center py-3 font-medium transition-colors duration-500 ${!isLogin ? 'text-white z-10' : 'text-black'}`}
            onClick={handleSwitchToSignup}
          >
            Signup
          </label>
          <div className={`absolute w-1/2 h-full bg-gradient-to-r from-blue-800 to-blue-600 rounded-full transition-transform duration-500 ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}></div>
        </div>

        <div className="flex w-full transform transition-transform duration-500" style={{ transform: `translateX(${isLogin ? '0' : '-1%'})` }}>
          <form action="#" className="w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email Address"
                required
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {isLogin && (
              <div className="mb-4 text-right">
                <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
              </div>
            )}
            <div className="relative">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-800 to-blue-600 rounded-full transition-all duration-300 ease-in-out hover:left-0"></div>
              <input
                type="submit"
                value={isLogin ? 'Login' : 'Signup'}
                className="relative z-10 w-full p-3 font-medium text-white bg-transparent rounded-full cursor-pointer focus:outline-none"
              />
            </div>
            {isLogin ? (
              <div className="mt-4 text-center">
                Not a member? <a href="#" onClick={handleSwitchToSignup} className="text-blue-500 hover:underline">Signup now</a>
              </div>
            ) : (
              <div className="mt-4 text-center">
                Already a member? <a href="#" onClick={handleSwitchToLogin} className="text-blue-500 hover:underline">Login now</a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
