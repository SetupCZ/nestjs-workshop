# Swagger cheatsheet
- Install packages
    - `npm install --save @nestjs/swagger`
    - `npm install --save swagger-ui-express class-validator class-transformer`
- Add swagger to main.ts 
    - `new DocumentBuilder().build()`
    - `SwaggerModule.createDocument(app, config);`
    - `SwaggerModule.setup('swagger', app, document);`
- Navigate to `http://localhost:3000/swagger`
- Generate JSON from `http://localhost:3000/swagger-json`

