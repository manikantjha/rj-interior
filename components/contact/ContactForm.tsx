import React from "react";

export default function ContactForm() {
  return (
    <div className="w-full p-4 bg-white rounded-lg sm:p-6 md:p-8">
      <form className="space-y-6" action="#">
        {/* <h5 className="text-xl font-bold text-gray-900">
          {"Let's get in touch!"}
        </h5> */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400 "
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your phone number
          </label>
          <input
            type="number"
            name="phone"
            id="phoner"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary placeholder-gray-400 focus:border-primary block w-full p-2.5"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your enquiry
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Enter your questions or message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-primary hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-md px-5 py-2 text-center"
        >
          Send
        </button>
      </form>
    </div>
  );
}
