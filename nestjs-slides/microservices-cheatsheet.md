# Microservices Cheatsheet
## Server 
- Generate new App `nx g application Owners`
- Install microservices package `npm i @nestjs/microservices`
- Update NestFactory to call `.createMicroservice()` instead of `.create()`
- Include options for microservice.
    - Transport
    - Options
        - Host 
        - Port
        - Password
- Install redis `npm i redis`
- Import ConfigModule into AppModule `ConfigModule.forRoot()`
- Show off @MessagePattern() and @EventPattern()

## Client
- Generate new module "nx g module redis-client"
- Inject ConfigService 
- Create __provider__ `ClientProxyFactory.create({ /* redis options */ })`
- Inject ClientProxy to cats service `@Inject('REDIS_CLIENT') private redisClient: ClientProxy`
- Call send and emit functions to demonstrate the differences between event and request-response communication
- Show off timeout and error handling
