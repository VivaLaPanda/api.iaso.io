import mongoose, { Schema } from 'mongoose'

const settingSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  notification_type: {
    type: String
  },
  initial_notification: {
    type: String
  },
  additional_notification: {
    type: String
  }
}, {
  timestamps: true
})

settingSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      user: this.user.view(full),
      notification_type: this.notification_type,
      initial_notification: this.initial_notification,
      additional_notification: this.additional_notification,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Setting', settingSchema)

export const schema = model.schema
export default model
