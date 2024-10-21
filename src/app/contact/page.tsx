import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-amber-200 flex flex-col items-center p-5">
      <h1 className="text-4xl text-orange-950 font-bold mb-4">Contact Us</h1>
      <p className="text-center mb-6">We'd love to hear from you!</p>

      <form className="bg-amber-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-orange-950 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-950 text-orange-300 rounded-full h-10 w-full hover:bg-orange-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-lg text-orange-950">Email: info@coffeebar.com</p>
        <p className="text-lg text-orange-950">Phone: +1 234 567 890</p>
      </div>
    </div>
  );
};

export default Contact;
