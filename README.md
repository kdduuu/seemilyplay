# seemilyplay

Aplicação web desenvolvida com Node.js, Express.js e EJS, criada para explorar conceitos de desenvolvimento Full Stack, renderização no servidor e organização de aplicações baseadas em templates.

O projeto utiliza uma arquitetura baseada em Express.js para gerenciamento das rotas, EJS para renderização das páginas e uma separação modular entre estrutura, estilização e comportamento através de HTML, CSS e JavaScript.

O objetivo foi desenvolver uma aplicação com foco em organização de código, experiência do usuário, responsividade e boas práticas de estruturação de projetos web.

---

# Tecnologias Utilizadas

### Node.js

Ambiente de execução JavaScript utilizado para executar o servidor da aplicação.

### Express.js

Framework responsável pelo gerenciamento das rotas, configuração do servidor HTTP e entrega das páginas renderizadas.

### EJS (Embedded JavaScript Templates)

Template Engine utilizada para renderizar páginas dinamicamente no servidor e organizar a estrutura das views.

### HTML5

Utilizado para estruturação semântica do conteúdo.

### CSS3

Responsável pela estilização da interface, responsividade, animações e identidade visual do projeto.

### JavaScript (Vanilla)

Utilizado para implementar comportamentos da interface, transições entre páginas e interações com o usuário.

### Git

Ferramenta utilizada para controle de versão durante todo o desenvolvimento.

### GitHub

Plataforma utilizada para hospedagem e gerenciamento do código-fonte.

### Render

Serviço responsável pelo deploy e disponibilização da aplicação em ambiente de produção.

---

# Arquitetura do Projeto

```text
seemilyplay
│
├── public
│   ├── css
│   │   ├── archive.css
│   │   ├── loading.css
│   │   └── style.css
│   │
│   ├── js
│   │   ├── archive.js
│   │   ├── loading.js
│   │   └── script.js
│   │
│   ├── music
│   │   └── song.mp3
│   │
│   └── photos
│       ├── photo1.jpeg
│       └── photo2.jpeg
│
├── views
│   ├── archive.ejs
│   ├── loading.ejs
│   └── index.ejs
│
├── app.js
├── package.json
└── README.md
```

---

# Organização do Projeto

### public/

Contém todos os recursos estáticos utilizados pela aplicação.

- folhas de estilo
- scripts JavaScript
- imagens
- arquivos de áudio

### views/

Armazena as páginas renderizadas pelo Express utilizando EJS.

Cada página possui uma responsabilidade específica dentro do fluxo da aplicação.

### app.js

Arquivo principal responsável por:

- inicializar o servidor Express;
- configurar a Template Engine;
- disponibilizar arquivos estáticos;
- definir as rotas da aplicação.

### package.json

Arquivo responsável pelo gerenciamento das dependências, scripts e configurações do projeto.

---

# Estrutura de Navegação

A aplicação foi organizada em múltiplas páginas independentes.

```text
Archive
     │
     ▼
Loading
     │
     ▼
Home
```

Cada página possui sua própria folha de estilos e seu próprio script JavaScript, facilitando manutenção, organização e escalabilidade.

---

# Funcionalidades

- Servidor HTTP utilizando Express.js
- Renderização de páginas com EJS
- Organização modular de CSS e JavaScript
- Sistema de múltiplas rotas
- Interface responsiva
- Reprodução de áudio integrada
- Galeria de imagens
- Transições entre páginas
- Componentes reutilizáveis
- Layout inspirado em interfaces retrô
- Deploy automatizado utilizando GitHub e Render

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/kdduuu/seemilyplay.git
```

Acesse o diretório:

```bash
cd seemilyplay
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

---

# Deploy

A aplicação utiliza a variável de ambiente `PORT`, permitindo execução local e publicação em ambientes de produção sem necessidade de alterações adicionais.

```javascript
const PORT = process.env.PORT || 3000;
```

---

# Objetivos de Aprendizagem

Durante o desenvolvimento deste projeto foram praticados conceitos relacionados a:

- Node.js
- Express.js
- Template Engines
- Estruturação de aplicações web
- Organização modular de CSS e JavaScript
- Responsividade
- Gerenciamento de rotas
- Renderização no servidor
- Versionamento com Git
- Integração contínua entre GitHub e Render

---

# Boas Práticas Adotadas

- Separação entre estrutura, estilo e comportamento.
- Organização modular dos arquivos por responsabilidade.
- Comentários padronizados em todo o código.
- Estrutura preparada para expansão futura.
- Navegação organizada através de rotas independentes.
- Layout responsivo para diferentes dispositivos.

---

# Autor

**Kadu Almeida**

Projeto desenvolvido para estudo, prática de desenvolvimento Full Stack e aplicação de conceitos modernos de arquitetura web utilizando Node.js, Express.js e EJS.