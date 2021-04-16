var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const userlocationSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    username:{
        type:String
    },
   
    address:{
        type:String
    },
    loc:{
        latitude:{
            type: Number
        },
        longitude:{
            type: Number
        }

    }

}, {
    timestamps: true
}),

    UserLocation = mongoose.model('user_loc_master', userlocationSchema);

module.exports = UserLocation;
