import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Get in Touch
        </h2>

        {/* Quick Links */}
        <p className="text-lg text-gray-700 mb-8">
          I welcome professional inquiries and collaborations. Reach out via{" "}
          <a
            href="mailto:agneshkalaiselvan@gmail.com"
            className="text-blue-700 font-semibold hover:underline"
          >
            email
          </a>{" "}
          or connect with me on these platforms:
        </p>

        <div className="flex justify-center gap-8 mb-14">
          <a
            href="https://github.com/Agnesh12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-800 shadow hover:bg-gray-200 transition font-semibold border border-gray-200"
            aria-label="GitHub Profile"
          >
            <svg width="20" height="20" fill="currentColor" className="inline-block"><path d="M10 .3a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.3 9.3 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5A10 10 0 0010 .3"></path></svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/agnesh123"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-800 shadow hover:bg-gray-200 transition font-semibold border border-gray-200"
            aria-label="LinkedIn Profile"
          >
            <svg width="20" height="20" fill="currentColor" className="inline-block"><path d="M16.5 16.5h-2.7v-4c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v3.9H8V8.5h2.6v1.1c.4-.7 1.1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5v4.7zM5.2 7.4a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zm1.3 9.1H3.9V8.5h2.6v8zM18 2H2C1.4 2 1 2.4 1 3v14c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z"></path></svg>
            LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="max-w-xl mx-auto bg-gray-50 p-10 rounded-2xl shadow-lg border border-gray-200"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
