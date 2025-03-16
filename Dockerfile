# 使用 Node.js 官方映像作為基礎映像
FROM node:23

# 設定工作目錄
WORKDIR /app

# 複製專案文件
COPY . /app

# 安裝專案依賴
RUN npm install

# 構建 Next.js 頁面
RUN npm run build

# 暴露端口
EXPOSE 3000 3000

# 啟動 Next.js 及 Express
CMD ["sh", "-c", "npm start"]
