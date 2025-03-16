// lib/api.ts
export async function getAllArticles() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles = await res.json();
    return articles;
  }
  
  export async function getArticleById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const article = await res.json();
    return article;
  }
  