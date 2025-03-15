const express = require("express");
const router = express.Router();

// 使用 async/await 處理異步操作
router.get("/", async (req, res) => {
  try {
    // 發送請求到外部 API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // 確保請求成功
    if (!response.ok) {
      throw new Error("Failed to fetch data from external API");
    }

    // 解析返回的 JSON 資料
    const data = await response.json();

    // 返回陣列資料給客戶端
    res.json(data);
  } catch (error) {
    // 處理錯誤
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});
// 使用 async/await 處理異步操作
router.get("/:id", async (req, res) => {
  try {
    const{ id } = req.params;
    console.log(id);
    // 發送請求到外部 API
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    // 確保請求成功
    if (!response.ok) {
      throw new Error("Failed to fetch data from external API");
    }

    // 解析返回的 JSON 資料
    const data = await response.json();

    // 返回單個物件資料給客戶端
    res.json(data);
  } catch (error) {
    // 處理錯誤
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});
module.exports = router;
