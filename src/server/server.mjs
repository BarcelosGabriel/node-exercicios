import http from 'http';

// Criar o servidor
const server = http.createServer((req, res) => {
  // Configurar o cabeçalho de resposta com o tipo de conteúdo
  res.setHeader('Content-Type', 'text/plain');
  
  // Enviar uma resposta de "Hello, World!"
  res.end('Hello, World!\n');
});

// Escolha a porta na qual o servidor escutará
const port = 3000;

// Iniciar o servidor e ouvir na porta especificada
server.listen(port, () => {
  console.log(`Servidor HTTP rodando em http://localhost:${port}/`);
});


// node --experimental-modules src\server\server.mjs