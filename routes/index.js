const express = require('express');

const authenticationRoutes = require('./authentication.route');
const applicationRoutes = require('./application.route');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api/auth', authenticationRoutes);
    app.use('/api/application', applicationRoutes);
    // Add more routes here
    // app.use('/users', userRoutes);
    // app.use('/posts', postRoutes);
}