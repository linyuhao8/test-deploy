// app/articles/[id]/page.tsx
import { getArticleById,getAllArticles } from "../../../lib/api"; // 假設這是獲取單篇文章的函數
import Navbar from '../../components/Navber';

export default async function ArticlePage({ params }) {
    const article = await getArticleById(params.id);
  return (
    <div className="bg-gray-100">
      <Navbar />
    <main className="flex w-full h-screen  items-start justify-center">
    <div className="flex flex-col items-start justify-start h-screen max-w-[600px] p-4">
      <h1 className="text-3xl">{article.title}</h1>
      <button className="bg-gray-500 px-5 rounded-lg text-xl mt-2 mb-3 text-white">
        {article.id}
      </button>
      <p>{article.body}</p>
    </div>
  </main>
  </div>
  );
}

// generateStaticParams 用來生成所有文章頁面的路由
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    id: String(article.id), // 每篇文章的 ID 會對應到動態路由參數
  }));
}


