// DEPENDENCIES =============================================
const mongoose = require('mongoose');

// SCHEMA ===================================================
const feedSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    isActive: { type: Boolean },
}, { timestamps: true });

// EXPORTS ===================================================
module.exports = mongoose.model('Feed', feedSchema);