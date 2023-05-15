---
theme: custom
class: invert
paginate: true
backgroundColor: #000
---

# Install Nest
## With nx
```shell
yarn create nx-workspace my-workspace --preset=nest
```
<!-- 
Máme 2 možnosti inicializování nest aplikace. Přes nest CLI a přes nx.
Protože jsme v nx monorepu tak já dnes budu volit nx. 
Ale většina příkazů funguje stejně jak při použití nx, tak při použití CLI 

Příkazem nx-workspace a parametrem --preset=nest vytvoříme nx workspace s nest aplikací.
-->

## With nest CLI
```shell
npm install -g @nestjs/cli
nest new my-nest-project
```
---

# Run nest app
## With nx
```bash
cd my-workspace
nx run my-nest-app:serve:development
```
<!--
Abychom aplikaci spustili, přejdeme co složky my-workspace a spustíme příkaz.
Ten nám nastartuje aplikaci v dev prostředí a watch modu.
Tím pádem se po uložených změnách aplikace sama restartuje.
-->

## With nest CLI
```bash
nest start my-nest-app
```
<!--
nest start nastartuje aplikaci. 
Musíme přidal --watch a --debug abychom mělí přístup k hot reloadu a k debugeru.
-->

---
