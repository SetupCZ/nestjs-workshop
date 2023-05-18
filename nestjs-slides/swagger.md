---
theme: custom
class: invert
paginate: true
backgroundColor: #000
---

# Swagger
<!-- 
Podařilo se nám definovat a otestovat několik endpointů.
To by nám stačilo pro osobní projekt, ale pro komerční aplikace bychom chtěli něco sofistikovanějšího.
-->

```bash
npm install --save @nestjs/swagger
npm install --save swagger-ui-express class-validator class-transformer
```
<!--
Nainstalujeme si swagger do projektu podle dokumentace. 
Co ale v dokumentaci nezmiňovali je swagger-ui-express a class-validator class-transformer.
Swagger-ui-express potřebujeme ke správnmu zobrazení webového ui rozhraní 
a class-validator a class-transformer pro to aby nám nespadl build. 
Já s tím měl problém, je možné že to je ale lokální problém a vás e nebude týkat. 
Pro jistotu to ale zmiňuji.
-->

---

# Swagger
```typescript
// ...
const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('swagger', app, document);

await app.listen(port);
```
<!--
V main.ts si přidáme swagger do aplikace.
Nejdříve si vytvoříme konfiguraci dokumentu.
Nastavíme si název, popis, verzi a tagy.

'swagger' v setup funkci je cesta na které bude swagger dostupný.
Taky máme automaticky dostupný endpoint "swagger-json", který nám vrátí json s definicí swagger dokumentu.
"swagger" ve "swagger-json" odpovídá tomu co jsme nastavili v setup funkci.
-->
