---
theme: custom
class: invert
paginate: true
backgroundColor: #000
---

# Generating modules
<!--
Máme inicializovanou appikace a můžeme začít s ní pracovat.

Viděli jste, že máme vygenerovaný app module. 
Ten slouží jako entry point do aplikace.
A ten budeme postupně rozšiřovat o další moduly.
-->
---

# Modules

```bash
nx g module your-module-name
```
<!--
Modul je základní stavební jednotka aplikace.
V něm se definují všechny komponenty, které dohromady tvoří uzavřenou logiku.

Při vytváření nám pomůže nest CLI. Pomocí CLI můžeme nejen aplikaci zpouštět, ale i generovat další moduly, kontrollery, atd.
-->
```typescript
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```
<!--
Tento příkaz nám vytvoří prázdný modul, který můžeme rozšiřovat o další komponenty.
Tento modul následně přidáme jako import do app modulu.
-->

---

# Controllers

```bash
nx g controller your-module-name
```
<!--
Nest nabízí velice podobné koncepty jako spring.
Takovíto zápis controlleru určitě nikoho nepřekvapí. 

Máme definovanou controller classu, 
decorator, který nám udává pod jakou cestou bude controller dostupný 
a metodu, která bude zpracovávat get request.
-->

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```
 
---

# Controllers
## Request object

```typescript
// ...

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

// ...
```
<!-- 
Stejně jako ve springu můžeme definovat query parametry @Param decoratorem.
-->
 
---

# Controllers
## Post with body

```typescript
// ...

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

// ...
```
<!--
Post request s @Body decoratorem. Díky typescriptu máme otypovaný objekt createCatDto.
-->

---

# Controllers

<!--
Tím to samozdřejmě nekončí. 
Máme spoustu možností jak zpracovávat 
a efektivně pracovat s requesty, parametry a daty. 
-->

```typescript
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
```
 
---

# Providers

```bash
nx g service your-module-name
```

```typescript
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
```

---
# Providers
## Dependency injection

```typescript
export class CatsController {
    constructor(private catsService: CatsService) {
        // ...
    }
}
```

---
