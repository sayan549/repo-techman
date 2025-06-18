import { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisationName: '',
    phoneNumber: '',
    email: '',
    services: '',
    briefDescription: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contacts`, formData);
      alert(response.data.message);
      setFormData({
        fullName: '',
        organisationName: '',
        phoneNumber: '',
        email: '',
        services: '',
        briefDescription: ''
      });
    } catch (error) {
      alert('Error: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4 border rounded shadow">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="organisationName"
        placeholder="Organisation Name"
        value={formData.organisationName}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <select
        name="services"
        value={formData.services}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      >
        <option value="" disabled>
          Select Service
        </option>
        <option value="Web Development">Web Development</option>
      </select>
      <textarea
        name="briefDescription"
        placeholder="Brief Description"
        value={formData.briefDescription}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </form>
  );
}
