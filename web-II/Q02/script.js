document.querySelector("#postForm").addEventListener('submit', enviar)
function criar(event){
    event.preventDefault();
    const form = new FormData(event.target);
    post = {
    userId: 1,
    id: 1,
    title: "titulo",
    body: "texto"
  }
    }
    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(objeto)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = `Post criado com sucesso! ID: ${data.id}, Título: "${data.titulo}"`;
    })
    .catch(error => {
        console.error('Erro ao criar o post:', error);
        document.getElementById('responseMessage').innerText = 'Erro ao criar o post.';
    });
   
  
