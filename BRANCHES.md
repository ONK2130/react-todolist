# 🌿 分支說明 - React Todo List

## 📌 分支結構

### 1. `main` 分支（原始版本）
- **說明**：基礎的 React Todo List 應用
- **特點**：
  - 簡單的紫色配色主題
  - 基本的 CRUD 功能
  - React Icons 圖標
  
### 2. `dynamic-island-style` 分支（風格改版）
- **說明**：採用 Dynamic Island 風格的現代化版本
- **特點**：
  - 🎨 黑色主題 + 藍紫漸層背景
  - ✨ 新增復原功能（RotateCcw 圖標）
  - 🌈 CSS 動畫與過渡效果
  - 📱 類似 iOS Dynamic Island 的視覺風格
  - 🔄 Lucide React 圖標庫

## 🔄 切換分支指令

### 切換到原始版本
```bash
git checkout main
npm install
npm run dev
```

### 切換到 Dynamic Island 風格版本
```bash
git checkout dynamic-island-style
npm install
npm run dev
```

## 📊 版本差異對照

| 功能/特性 | main 分支 | dynamic-island-style 分支 |
|----------|-----------|--------------------------|
| 背景色 | 紫色 (#3b36cc) | 藍紫漸層 |
| 容器色 | 深藍 (#1a1a40) | 純黑 (#000000) |
| 復原按鈕 | ❌ 無 | ✅ 有 (RotateCcw) |
| 動畫效果 | 基本 | 進階 (slideIn, gradientShift) |
| 圖標庫 | React Icons | React Icons + Lucide React |
| 文字顏色 | 白色 | 黃色(未完成) / 灰色(已完成) |

## 🚀 GitHub 連結

- **Repository**: https://github.com/ONK2130/react-todolist
- **Main 分支**: https://github.com/ONK2130/react-todolist/tree/main
- **Dynamic Island 分支**: https://github.com/ONK2130/react-todolist/tree/dynamic-island-style

## 💡 建議

- 如果你想學習基礎 React，請使用 `main` 分支
- 如果你想學習進階 CSS 和動畫效果，請使用 `dynamic-island-style` 分支
- 可以透過比較兩個分支來學習如何改進 UI/UX

## 📝 注意事項

兩個分支的 package.json 有些許差異：
- `dynamic-island-style` 分支額外安裝了 `lucide-react` 套件
- 切換分支後記得執行 `npm install` 確保依賴正確安裝