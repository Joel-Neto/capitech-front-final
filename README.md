# Projeto CapiTech
Este é um projeto de site/blog de estudos que utiliza as seguintes tecnologias:

- Vite: Um bundler e ferramenta de desenvolvimento rápida para projetos JavaScript.
React: Uma biblioteca JavaScript para construir interfaces de usuário.
React Router Dom: Para gerenciar as rotas do aplicativo.

- JWT (JSON Web Tokens): Para autenticação e segurança.

- Tailwind CSS: Um framework CSS utilitário para estilização rápida e responsiva.

- EmailJS: Para enviar e-mails diretamente do lado do cliente.

## Como usar o projeto

1 - Baixe o projeto:
- Clone o repositório do projeto ou faça o download do código-fonte.
- Abra o terminal e navegue até o diretório do projeto.

2 - Instale as dependências:
- Certifique-se de ter o Node.js instalado em sua máquina.
- Execute o seguinte comando para instalar as dependências:
```
npm install
```

3 - Configuração do EmailJS:
- Crie uma conta no EmailJS.
- Após criar a conta, adicione um novo serviço e conecte sua conta de e-mail (por exemplo, Gmail).
- Anote o “Service ID” e o “Template ID”.
- No arquivo .env na raiz do projeto, adicione as seguintes variáveis:
```
VITE_SERVICE_ID=seu_service_id
VITE_TEMPLATE_ID=seu_template_id
VITE_PUBLIC_K3Y=sua_public_key
```

4 - Inicie o servidor de desenvolvimento:
- Execute o seguinte comando:
```
npm run dev
```
- O aplicativo estará disponível em ``http://localhost:PORTA``.

5 -Acesse o aplicativo:
- Abra o navegador e acesse ``http://localhost:PORTA``.
- Você verá a página inicial do CapiTech.