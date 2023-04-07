

const { validateMovieReqBody } = require('./verifyMovieReqBody');
const { verifyToken, isAdmin, isAdminOrClient} = require('./auth');
const {validateUserReqBody, validateUserProfile} = require('./validateUserReqBody')
const {verifyTheatreReqBody} = require('./verifyTheatreReqBody')
const { validateBookingReqBody } = require('./validateBookingReqBody')
const { validatePaymentReqBody } = require('./validatePaymentReqBody')

module.exports = {
    validateMovieReqBody,
    verifyToken,
    isAdmin,
    validateUserReqBody,
    validateUserProfile,
    verifyTheatreReqBody,
    validateBookingReqBody,
    validatePaymentReqBody,
    isAdminOrClient
}