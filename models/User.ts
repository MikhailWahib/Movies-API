import { Schema, model, Document, Types } from 'mongoose'

interface User extends Document {
	firstName: string
	lastName: string
	email: string
	password: string
	favorites: Types.ObjectId[]
}

const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	favorites: [{ type: Types.ObjectId, ref: 'Movie' }],
})

const User = model<User>('User', UserSchema)
export default User
