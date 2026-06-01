# seemilyplay

Uma aplicação web desenvolvida com Node.js, Express.js e EJS, criada para explorar conceitos de desenvolvimento Full Stack, renderização no servidor e publicação de aplicações web em ambiente de produção.

O projeto utiliza uma arquitetura simples baseada em rotas Express e templates EJS, permitindo a construção de páginas dinâmicas e organização eficiente dos recursos estáticos da aplicação.

---

## Tecnologias Utilizadas

### Node.js

Ambiente de execução JavaScript utilizado para executar o servidor da aplicação.

### Express.js

Framework responsável pelo gerenciamento de rotas, configuração do servidor HTTP e entrega das páginas ao usuário.

### EJS (Embedded JavaScript Templates)

Template Engine utilizada para renderizar páginas HTML no servidor e separar a estrutura visual da lógica da aplicação.

### HTML5

Utilizado na estruturação do conteúdo das páginas.

### CSS3

Responsável pela estilização da interface, layout responsivo e elementos visuais do projeto.

### Git

Ferramenta utilizada para controle de versão durante todo o desenvolvimento.

### GitHub

Plataforma utilizada para hospedagem e gerenciamento remoto do código-fonte.

### Render

Serviço de hospedagem responsável pelo deploy e disponibilização da aplicação na web.

---

## Arquitetura do Projeto

```text
seemilyplay
│
├── public
│   ├── css
│   │   └── style.css
│   ├── music
│   │   └── song.mp3
│   └── photos
│       ├── photo1.jpg
│       └── photo2.jpg
│
├── views
│   └── index.ejs
│
├── app.js
├── package.json
└── README.md
```

### public/

Contém todos os arquivos estáticos da aplicação, como folhas de estilo, imagens e arquivos de áudio.

### views/

Armazena os templates EJS responsáveis pela renderização das páginas.

### app.js

Arquivo principal responsável pela inicialização do servidor Express, configuração das rotas e disponibilização dos recursos estáticos.

### package.json

Arquivo de configuração do projeto contendo dependências, scripts e metadados da aplicação.

---

## Funcionalidades

* Servidor web utilizando Express.js
* Renderização de páginas utilizando EJS
* Organização de recursos estáticos
* Layout responsivo para desktop e dispositivos móveis
* Reprodução de conteúdo de áudio
* Galeria de imagens
* Interface inspirada em layouts retrô da web
* Deploy automatizado via GitHub e Render

---

## Instalação e Execução

Clone o repositório:

```bash
git clone https://github.com/kdduuu/seemilyplay.git
```

Acesse o diretório do projeto:

```bash
cd seemilyplay
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

---

## Deploy

O projeto está configurado para execução local e em ambientes de hospedagem através da utilização da variável de ambiente PORT.

```javascript
const PORT = process.env.PORT || 3000;
```

Isso permite que a aplicação seja executada localmente e publicada em serviços como Render sem alterações adicionais no código.

---

## Objetivos de Aprendizagem

Este projeto foi desenvolvido com o objetivo de praticar:

* Desenvolvimento de aplicações com Node.js
* Criação de servidores utilizando Express.js
* Utilização de Template Engines
* Estruturação de projetos web
* Responsividade com CSS
* Controle de versão utilizando Git
* Hospedagem e deploy de aplicações web
* Integração entre GitHub e Render

---

## Autor

**Kadu Almeida**

Projeto desenvolvido para estudo, experimentação e prática de tecnologias voltadas ao desenvolvimento web moderno.
