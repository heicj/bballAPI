const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema ({
    teamId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    headCoach: {
        type: String
    }
});

module.exports = mongoose.model('Team', schema);