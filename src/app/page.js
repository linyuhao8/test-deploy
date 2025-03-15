// app/home/page.js
import { getAllArticles } from '../lib/api'; // 確保正確路徑
import Navbar from './components/Navber';
//SSR渲染
export default async function HomePage() {
  const articles = await getAllArticles();
  console.log(articles); // 用來查看在前端輸出的資料
  return (
    <div>
    <Navbar />
    <div className="bg-white text-gray-900 py-12 px-6 sm:px-8">
    <h1 className="text-4xl font-bold text-center mb-10">文章列表</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out">
          <a href={`/articles/${article.id}`} className="block p-6">
            <h3 className="text-2xl font-semibold text-black mb-4">{article.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">{article.body.substring(0, 100)}...</p>
          </a>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}

