import express from "express";



  const posts = [
    {
        id: 1,
        descricao: "Uma foto Teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "gato comendo panqueca",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "gato surfando",
        imagem: "https://placecats.com/millie/300/150"
    },
  
];




const app = express();

app.use(express.json());

app.listen(3000, () => { 
  console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
res.status(200).json(posts[0]);
});


function buscaPost(id){
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscaPost(req.params.id)
  res.status(200).json(posts[index]);
});

