# 使用 Node.js 18
FROM node:23

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製整個專案
COPY . .

# 建立 Next.js 應用
RUN npm run build

# 設定環境變數（Cloud Run 預設 PORT=8080）
ENV PORT=8080
    
# 啟動應用
CMD ["npm", "start"]
