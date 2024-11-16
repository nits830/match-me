"use client"

import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

const Register: React.FC = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log('FormData', formData)
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name = "name"
              value = {formData.name}
              onChange = {handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value = {formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name='password'
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Your Password"
            />
          </div>
        

          <Button type="submit"
                className="w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition-colors">
                Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
