import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  res.locals.currentUser = req.session.user;
  res.locals.jwt = req.session.jwt;
  next();
});

router.get('/', async (req, res) => {
  res.render('home');
});

export default router;
