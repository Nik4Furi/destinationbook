// Application Specific Stuff
const SERVER = 'http://localhost'
const PORT = 8000
const VERSION = 'v1'

// Database Specific Stuff
const MONGO_URI = "mongodb://127.0.0.1:27017/destinationbook"

// Authentication / Secret Keys Specific Stuff
const JWT_SECRET_KEY = "thissecretkeyisusedatlocaltime@notuseinproduction"

// Cloudinary Specific stuff
const CLOUDINARY_NAME = "<cloud name>"
const CLOUDINARY_API_KEY = "<cloud api key>"
const CLOUDINARY_API_SECRET = "<cloud api secret>"

// Razorpay Payment Integration
const RAZORPAY_KEY_ID = ""
const RAZORPAY_SECRET_KEY = ""

module.exports = { SERVER, PORT, VERSION, MONGO_URI, JWT_SECRET_KEY, CLOUDINARY_API_KEY, CLOUDINARY_NAME, CLOUDINARY_API_SECRET };

