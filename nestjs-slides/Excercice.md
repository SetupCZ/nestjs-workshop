# Robot game
### Cíl: Naviguj robota do cíle pomocí příkazů UP, DOWN, LEFT, RIGHT 
### 🤖 ---> ⚑
### POZOR! na cestě jsou překážky ⚡⚡⚡

Vašim úkolem je upravit controlls controller tak, aby robot reagoval na příkazy UP, DOWN, LEFT, RIGHT a posunul se tak do cíle.<br>
K dispozici máte 2 microservices: Game a Grid. 
<br>
<br>
Game microservice naslouchá na eventy: CREATE_GAME, UPDATE_GAME, GET_GAME a VALIDATE_GAME_STATE.
- CREATE_GAME: Vytvoří novou hru a vrátí její stav typu `IGameState`
- UPDATE_GAME __(event)__: Uloží stav hry a vyšle jeden z eventů VALIDATION_FAILED nebo GAME_SAVED
- GET_GAME: Vrátí aktuální stav hry
- VALIDATE_GAME_STATE: Zvaliduje tah hráče, a vrátí informace o validitě tahu `valid: boolean`, zprávu popisující výsledek tahu `message: string` a zda hráč úspěšně došel k cíli `success: boolean`.

Grid microservice reprezentuje UI hry. Naslouchá pouze na jeden event: GET_GRID. 
- GET_GRID: Vygeneruje herní plochu z poskytnutého herního stavu `IGameState`.

## Endpoints
Applikace Controlls vysvavuje jeden endpoint `GET /game/start/`
