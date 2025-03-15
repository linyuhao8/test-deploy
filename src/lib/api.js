// lib/api.ts
export async function getAllArticles() {
    const res = await fetch("http://localhost:3000/api/articles");
    const articles = await res.json();
    return articles;
  }
  
  export async function getArticleById(id) {
    const res = await fetch(`http://localhost:3000/api/articles/${id}`);
    const article = await res.json();
    return article;
  }
  