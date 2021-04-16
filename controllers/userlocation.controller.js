const UserLocation= require('../models/userloc.model');
const JWTHandler = require('../utils/jwt.handler');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const secret = 'hdaiu$$^%67777siojvIIUfbvheiruejwrkekdmfvdnahsrfw8urewriwjUTYt$@#@R^ewuu'
let nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'openstreetmap'
  };
   
  let geoCoder = nodeGeocoder(options);

  
module.exports = {

   


}
