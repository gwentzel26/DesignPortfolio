import React from 'react';
import lakePainting1 from '../../assets/lakePainting2.jpeg';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // Substitute your form ID here:
  const [state, handleSubmit] = useForm('xpwrdjdn');

  // If the form has been successfully submitted
  if (state.succeeded) {
    return (
      <section className="relative h-screen mt-24">
        {/* …same background markup… */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-gray-600 bg-opacity-75 p-10 rounded-lg text-white">
            <h2 className="text-5xl mb-4">Thanks for reaching out!</h2>
            <p>I’ll get back to you as soon as I can.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative h-screen mt-24">
      <img
        src={lakePainting1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-top rounded-lg"
      />
      <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
      <div className="relative z-10 font-arima flex items-center justify-end h-full">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-gray-600 bg-opacity-50 p-10 md:w-1/2 h-full text-white space-y-6"
        >
          <h2 className="text-7xl font-medium">Contact Me</h2>
          <p className="text-gray-300">
            Accepting show, recording, and album cover design opportunities
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xl mb-1">
                Your name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full p-2 bg-black bg-opacity-75"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xl mb-1">
                Your phone number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="w-full p-2 bg-black bg-opacity-75"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xl mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full p-2 bg-black bg-opacity-75"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full border-b-2 border-white hover:bg-orange-300 hover:text-gray-900 text-white py-2 rounded transition-colors"
            >
              {state.submitting ? 'Sending…' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}