const express = require('express')

const{isLoggedIn} = require('./middlewares')
const User= require('../models/user')
const db = require('../models')

const router= express.Router()

router.post('/withdraw',isLoggedIn,async(req,res,next)=>{
  const user = req.user;
  try {
    if(user){
      req.logout();
      req.session.destroy()
      await user.destroy()
      res.send('successly deleted')
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post('/change',isLoggedIn,async(req,res,next)=>{
  const {nick} = req.body;
  try {
    const user= await User.findOne({where:{id:req.user.id}})
    if(user){
      await user.update({nick:nick})
      res.redirect('/profile');
    }else{
      res.status(404).send('no user')
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.post('/:id/follow',isLoggedIn, async(req,res,next)=>{
  try {
    const user= await User.findOne({where:{id:req.user.id}})
    if(user){
      await user.addFollowing(parseInt(req.params.id,10))
      res.send('success')
    }else{
      res.status(404).send('no user')
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})
router.delete('/:id/follow',isLoggedIn,async(req,res,next)=>{
  try {
    const user = await User.findOne({where:{id:req.user.id}})
    if(user){
      await user.removeFollowing(parseInt(req.params.id,10))
      res.send('success')
    }else{
      res.status(404).send('no user')
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router;