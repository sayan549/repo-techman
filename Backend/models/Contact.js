import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  organisationName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  services: { type: String, required: true },
  briefDescription: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
