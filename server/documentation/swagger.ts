export const swaggerJSDOC = require('swagger-jsdoc')
export const swaggerUI = require('swagger-ui-express')

export const options = {
    definition: {
        openapi: "3.1.0",
        info: { title: "Server", version: "1.0.0" }
    },
    apis: ["server/routes/HomeWorkRoutes.ts"]
};

export const swaggerSpec = swaggerJSDOC(options);
