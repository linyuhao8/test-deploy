const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const articleRoutes = require("./routes/article");

app.prepare().then(() => {
  const server = express();
  server.use("/api/articles", articleRoutes);
  // Express API 路由
  server.get("/api/hello", (req, res) => {
    res.json({ message: "This is form backend message!" });
  });
  server.get("/api/jj", (req, res) => {
    res.json({ message: "jj" });
  });

  // 讓 Next.js 處理所有前端請求
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // 監聽 PORT
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
