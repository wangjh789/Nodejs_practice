const jwt= require('jsonwebtoken')
const RateLimit = require('express-rate-limit')
const {User,Domain} = require('../models')
const url = require('url')
exports.isLoggedIn = (req,res,next)=>{
  if(req.isAuthenticated()){
    next()
  }else{
    res.status(403).send('로그인 필요')
  }
}

exports.isNotLoggedIn = (req,res,next)=>{
  if(!req.isAuthenticated()){
    next();
  }else{
    const message = encodeURIComponent('로그인한 상태입니다.');
    res.redirect(`/?error=${message}`)
  }
}

exports.verifyToken = (req,res,next)=>{
  try {
    req.decoded = jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
    return next()
  } catch (error) {
    if(error.name === 'TokenExpiredError'){
      return res.status(419).json({
        code:419,
        message:'토큰이 만료되었습니다. '
      })
    }
    return res.status(401).json({
      code:401,
      message:'유효하지 않은 토큰입니다.'
    })
  }
}

// exports.apiLimiter = async (req,res,next) => {
//   const user = await User.findOne({
//     where:{id:req.decoded.id},
//     include:{
//       model:Domain,
//       attributes:['type','host']
//     }
//   })
//   const type = user.getDomains({
//     where:{host:url.parse(req.get('origin')).host}
//   }).type;
//   if(type === 'free'){
//     new RateLimit({
//       windowMs:60*1000,
//       max:1,
//       handler(req,res){
//         res.status(this.statusCode).json({
//         code:this.statusCode, //기본값 429
//         message:'1분에 한번만 요청할수 있습니다.'
//       })
//     }
//     })(req,res,next)
//   }else{
//     new RateLimit({
//       windowMs:60*1000,
//       max:1,
//       handler(req,res){
//         res.status(this.statusCode).json({
//         code:this.statusCode, //기본값 429
//         message:'프리리엄 1분에 한번만 요청할수 있습니다.'
//       })
//     }
//     })(req,res,next)
//   }
// }

exports.apiLimiter = new RateLimit({
  windowMs: 60*1000,
  max:1,
  handler(req,res){
    res.status(this.statusCode).json({
      code:this.statusCode, //기본값 429
      message:'1분에 한번만 요청할수 있습니다.'
    })
  }
})

exports.deprecated = (req,res)=>{
  res.status(410).json({
    code:419,
    message:'새로운 버전이 나왔습니다. 새로운 버전을 이용해주세요'
  })
}