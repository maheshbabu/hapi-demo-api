'use strict';

// Load modules

const Hapi = require('hapi');
const Hoek = require('hoek');


exports.init = function (next) {

    const server = new Hapi.Server();

    server.connection({
         port: 3000 || process.env.HTTP_PORT
    });

    server.start((err) => {

        Hoek.assert(!err, err);
        return next(server);
    });
};