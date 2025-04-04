import mongoose from 'mongoose';

const medical_recordSchema = new mongoose.Schema({}, { timestamps: true });

export const Medical_records = mongoose.model(
  'Medical_records',
  medical_recordSchema
);
