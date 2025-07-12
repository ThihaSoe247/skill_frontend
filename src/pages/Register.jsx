import { useState } from "react";

import axios from "axios";

import React from "react";

export default function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    let data = { email, password, name };
    try {
      const res = await axios.post("/api/auth/register", data);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-gray-100 flex min-h-screen justify-center items-center">
      <form
        onSubmit={handleRegister}
        className=" p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        ></input>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
