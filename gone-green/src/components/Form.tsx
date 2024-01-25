import React from 'react';
import './form.css'; // Import the CSS file

export default function ContactForm() {
  return (
    <div className="contact-page">
      <section className="text-green-600 body-font relative">
        <div className="absolute inset-0 flex items-center justify-center"></div>
        <div className="container px-5 py-24 mx-auto flex-container">
          <aside className="bg-gray-200 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-3">Contact info</h2>
            <p>
              <strong>Email: GoneGreen@gmail.com</strong>
            </p>
            <p>
              <strong>Phone: (123) 456-7890</strong>
            </p>
            <h2 className="text-lg font-semibold mt-4 mb-3">Our Locations</h2>
            <div className="fake-location">
              <div className="location-section">
                <p>
                  <strong className="location-title">Location 1:</strong>
                </p>
                <p>123 Main Street</p>
                <p>Abuja, Nigeria</p>
              </div>
              <div className="location-section">
                <p>
                  <strong className="location-title">Location 2:</strong>
                </p>
                <p>456 Oak Avenue</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </aside>

          <div className="form-container w-[50%]">
            <h1 className="text-2xl font-semibold mb-4">Contact Form</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="textarea"
                  required
                />
              </div>
              <button type="button" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}



// export default function Form() {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
// }
