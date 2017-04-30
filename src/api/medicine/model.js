import mongoose, { Schema } from 'mongoose'

const medicineSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  med_name: {
    type: String
  },
  description: {
    type: String
  },
  dosage: {
    type: String
  },
  prev_dose_taken: {
    type: String
  },
  instructions: {
    type: String
  },
  next_dose_days: {
    type: String
  },
  next_dose_hours: {
    type: String
  },
  next_dose_minutes: {
    type: String
  },
  nextDose: {
    type: String
  },
  dosage_times: {
    type: String
  },
  doses_per_day: {
    type: String
  },
  main_usage: {
    type: String
  }
}, {
  timestamps: true
})

medicineSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      user: this.user.view(full),
      med_name: this.med_name,
      description: this.description,
      dosage: this.dosage,
      prev_dose_taken: this.prev_dose_taken,
      instructions: this.instructions,
      next_dose_days: this.next_dose_days,
      next_dose_hours: this.next_dose_hours,
      next_dose_minutes: this.next_dose_minutes,
      nextDose: this.nextDose,
      dosage_times: this.dosage_times,
      doses_per_day: this.doses_per_day,
      main_usage: this.main_usage,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Medicine', medicineSchema)

export const schema = model.schema
export default model
