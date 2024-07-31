import mongoose from 'mongoose';
const courseSchema = new mongoose.Schema({
  number: { type: String },
  name: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date},
  department: { type: String},
  credits: { type: Number },
  description: { type: String, required: true }
}, { collection: 'courses' });
export default courseSchema;