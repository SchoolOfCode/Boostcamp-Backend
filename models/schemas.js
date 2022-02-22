import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskInstructions: { type: String, required: true },
  taskBenefits: { type: String, required: true },
});

export const OnScreenShort = mongoose.model('OnScreenShort', taskSchema);
export const OnScreenMedium = mongoose.model('OnScreenMedium', taskSchema);
export const OnScreenLong = mongoose.model('OnScreenLong', taskSchema);
export const OffScreenShort = mongoose.model('OffScreenShort', taskSchema);
export const OffScreenMedium = mongoose.model('OffScreenMedium', taskSchema);
export const OffScreenLong = mongoose.model('OffScreenLong', taskSchema);
