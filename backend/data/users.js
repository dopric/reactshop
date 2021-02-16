import bcrypt from 'bcryptjs'

const users = [
	{ username: 'dragan', isAdmin: true, password: bcrypt.hashSync('12345'), email: 'opric.dragan@gmail.com' },
	{ username: 'danijela', password: bcrypt.hashSync('12345'), email: 'opric.danijela@gmail.com' },
	{ username: 'luka', password: bcrypt.hashSync('12345'), email: 'lukaopric@gmail.com' }
]

export default users
