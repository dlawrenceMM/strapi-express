// import express from 'express';
// import apiRequest from '../utils/api';
// import _ from 'lodash';

// const authRouter = express.Router();

// // GET /auth/login
// authRouter.get('/login', (req, res, next) => {
//   res.render('auth/login', { title: 'Sign in' });
// });

// // POST /auth/local
// router.post('/login', (req, res, next) => {
//   apiRequest.post('/auth/local', { form: req.body }, (err, response, body) => {
//     if (err) return next(err);
//     req.session.user = _.pick(body.user, ['id', 'username', 'email']);
//     req.session.jwt = body.jwt;
//     res.redirect('/');
//   });
// });

// // GET /auth/register
// authRouter.get('/register', (req, res, next) => {
//   res.render('auth/register', { title: 'Sign in' });
// });

// // POST /auth/register
// authRouter.post('/register', (req, res, next) => {
//   apiRequest.post('/auth/local/register', { form: req.body }, (err, response, body) => {
//     if (err) return next(err);
//     req.session.user = _.pick(body.user, ['id', 'username', 'email']);
//     req.session.jwt = body.jwt;
//     res.redirect('/');
//   });
// });

// // POST /auth/logout
// authRouter.post('/logout', (req, res, next) => {
//   req.session = null;
//   res.redirect('/');
// });

// export default authRouter;
