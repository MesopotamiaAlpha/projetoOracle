# ProjetoOracle

## Dependencias
Para estre projeto é necessário fazer o download do [nodejs](https://nodejs.org/en/download/) , depois de ter feito o donwload e instalado abarao cmd e confira se esta instalado corretamente com estes comandos:
``` 
node -v
npm -v
```
Caso exibir a versão instalada então está correto, siga agora mais para baixo que tem o comando npm para instalar as dependencias do projeto e como rodar ele.


Este projeto vai ter 2 módulos, o primeiro módulo vai ser para o programa fazer a atualização do timezone automaticamente.
O segundo múdulo vai ser direcionado para a restauração de backup.

## Módulo timezone

Então este módulo vai ser a seguinte sequencia:

- [ ] Ter um checkbox onde pergunta se deve copiar os arquivos do timezone ou não
- [ ] Um campo para colocar o usuario e senha da instancia
- [ ] Para a instancia pelo services para copiar os arquivos caso precise
- [ ] Fazer a copia dos arquivos do timezone
- [ ] Iniciar novamente a instancia
- [ ] Ao iniciar o ajuste do timezone ele vai se conectar ao sqlplus com o usuario e senha
- [ ] Vai começar a usar todos os comandos sql para trocar o timezone de 32 para 36


## Módulo Restauração de Backup

Est módulo vamos apontar em qual caminho do computador está apontado o .dmp para ser restaurado, depois disso ele vai se conectar ao sqlplus para fazer o processo preparação da restauração, vamos poder escrever o nome da instancia pra caso tenha mais de uma na maquina.
Primeiro ele vai dropar todas as tablespaces que já existe nesta instancia, no momento de criar a tablespace vamos poder colocar o caminho de onde queremos deixar as tablespaces no computador, vamos poder escolher entre o tamanho padrão de tablespaces ou fazer o modo big.
Depois disso ele vai criar os usuarios do banco da empresa.
Para finalizar vamos direcionar o nome do EXP_DIR.

- [ ] Um campo para direcionar em qual caminho está o banco a ser restaurado
- [ ] Colocar o nome da instancia que vai ser dropada
- [ ] Campo para escrever o usuario e senha da instancia
- [ ] Inicia dropando as instancias que possue
- [ ] Checkbox para escolher entre a tablespace normal ou a big
- [ ] Começa a executar a criação de usuarios da empresa
- [ ] Cria o caminho EXP_DIR

Material de apoio para o desenvolvimento do projeto:  

Comando para instalar o projeto:
```
    npm install
```

Comando para rodar o projeto:
```
    npm start
```

Comando para compilar o executavel:
```
    npx electron-packager . teste --platform=win32 --overwrite
```

Sites usado para estudos:

https://stackabuse.com/executing-shell-commands-with-node-js/  
https://www.electronjs.org/docs/latest/api/command-line-switches   
https://stackoverflow.com/questions/6939864/what-is-the-difference-between-section-and-div    
https://www.electronjs.org/docs/latest/api/shell
