"use client";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../lib/api";
import Navbar from '../components/Navber';

// CSR 渲染 
export default function CSRHomePage() {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading] =useState(true);
  async function fetchArticles() {
    try {
      const response = await getAllArticles();
      const data = await response;  // 確保從 response 解析 JSON
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  }
  useEffect(() => {
    fetchArticles();
  }, []);
  useEffect(() => {
    console.log(posts); // 觀察 posts 更新後的數據
  }, [posts]);
  if (loading) {
    // Display a loading message while waiting for the data to be fetched
    return <div className="flex justify-center items-center min-h-screen">
    <div className="flex items-center space-x-2">
      <div className="w-5 h-5 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      <span className="text-xl text-gray-700">Loading...</span>
    </div>
  </div>
  ;
  }
  return (
    <div>
        <Navbar />
    <div className="bg-white text-gray-900 py-12 px-6 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-10">文章列表</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out"
          >
            <a href={`/articles/${article.id}`} className="block p-6">
              <h3 className="text-2xl font-semibold text-black mb-4">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {article.body.substring(0, 100)}...
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
