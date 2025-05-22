import React, { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=jasmeetings@gmail.com&su=Portfolio Contact: ${encodeURIComponent(
      formData.name
    )}&body=Name: ${encodeURIComponent(
      formData.name
    )}%0DEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(gmailLink, "_blank");

    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div id="Contact" className="min-h-auto w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-700 to-orange-800 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="mt-4 text-xl text-center text-gray-400 font-semibold">
            Let's connect
          </p>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto bg-[#121212] p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-3"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-600 rounded bg-gray-600 p-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-3"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="placeholder@gmail.com"
                value={formData.email}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-600 bg-gray-600 rounded p-3"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-300 mb-3"
              >
                Message:
              </label>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="message..."
                rows="4"
                value={formData.message}
                onChange={handlechange}
                required
                className="mt-1 block w-full border border-gray-600 bg-gray-600 rounded p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-700 via-purple-700 to-yellow-700 text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
