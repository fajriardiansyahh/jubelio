 'use strict';

const Product = require('./product');
const Hapi = require('@hapi/hapi');
const { default: BaseComponent } = require('bootstrap/js/dist/base-component');

const init = async () => {
    const { Client } = require('pg')
    const CLIENT = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'react_npm',
        password: '6c0374FAJRI',
        port: 5432,
    })

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    // server.auth.strategy('session', 'cookie', {  
    //     password: 'ThisIsASecretPasswordForTheAuthCookie',
    //     redirectTo: '/login',
    //     // appends the current URL to the query param "next"
    //     // Set to a string to use a different query param name

    //     appendNext: true,  // <-- the important line :)

    //     isSecure: process.env.NODE_ENV === 'production',
    //     validateFunc: async (request, session) => {
    //         // validate the existing session
    //         const username = session.username

    //         // find the user with given username (or other data)
    //         // in your database
    //         // const user = await User.findOne()

    //         // if (!user) {
    //         // return { isValid: false }
    //         // }

    //         return { isValid: true, credentials: user }
    //     }
    // })
    
    server.route({
        method: 'GET',
        path: '/',
        options: {
            handler: (request, h) => {
                return 'Hello World!';
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/',
        options: {
            handler: (request, h) => {
                console.log(request)
                return request;
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/register',
        options: {
            handler: (request, h) => {
                var data = request.payload
                var result = '';
                CLIENT.connect()
                CLIENT.query('INSERT INTO public.users(username, email, password) VALUES ('+ 
                    data.username +', '+ 
                    data.email +', '+
                    data.password+')', (err, res) => {
                        console.log(err)
                        console.log(res)
                        if (err !== null) {
                            result = res
                            CLIENT.end()
                            return result;
                        }
                })
                return result;
            }
        }
    });
    server.route({
        method: 'GET',
        path: '/product',
        options: {
            // auth: 'session',
            handler: (request, h) => {
                CLIENT.connect()
                const RESULT = ''
                CLIENT.query('SELECT * FROM products', (err, res) => {
                    console.log(err)
                    if (err !== null) {
                        RESULT = res.rows
                        console.log(res.rows)
                        CLIENT.end()
                        return res.rows   
                    }
                })
                return RESULT
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();