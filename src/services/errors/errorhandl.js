const errorhandler = (error, req, res, next) => {
    console.log(error)
  return res.status(500).json({
    message:"internal server error"
});
}

module.exports = {errorhandler}