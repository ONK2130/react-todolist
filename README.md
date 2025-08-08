# react-todolist
React practise - Todo List Application

## 功能
- 新增待辦事項
- 刪除待辦事項
- 標記完成/未完成（✓ 完成 / ↻ 復原）
- 編輯待辦事項

## 技術棧
- React + Vite
- React Hooks (useState)
- React Icons
- Lucide React (復原圖標)

## 安裝與執行
```bash
npm install
npm run dev
```

## 🆕 最新更新 - 完整 Dynamic Island 配色方案

### 配色更新
- **背景**：藍紫色漸層 - 從天藍到紫色的優美過渡
  - sky-500 (#0ea5e9)
  - blue-500 (#3b82f6)  
  - indigo-500 (#6366f1)
  - violet-500 (#8b5cf6)
  - purple-500 (#a855f7)
- **容器色**：純黑 (#000000) - Dynamic Island 風格
- **邊框色**：半透明白色 - 細緻的玻璃感邊界
- **文字色**：
  - 未完成：黃色 (#eab308) 
  - 已完成：灰色 (#6b7280)
  - 圖標：淺灰 (#9ca3af)

### 新增功能 - 復原按鈕
- **完成狀態**：顯示 ✓ (Check) 圖標，點擊標記為完成
- **已完成狀態**：顯示 ↻ (RotateCcw) 圖標，點擊復原為未完成
- 使用 Lucide React 圖標庫，與範例保持一致

## CSS 學習要點 - Dynamic Island 風格改造

### 🎨 原始樣式功能
以下是原本就有的 CSS 功能：
- **基礎重置** (`* { }`) - 清除預設樣式
- **Flexbox 佈局** - 用於元素置中和排列
- **基本顏色設定** - 背景色、文字色
- **簡單的圓角** - `border-radius: 5px`
- **完成狀態樣式** - 透明度和刪除線效果

### ✨ 新增的進階 CSS 功能

#### 1. **漸層背景 (Gradient Background)**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
- 學習重點：使用 `linear-gradient` 創建漸層效果
- 參數說明：135deg 是角度，後面是顏色停止點

#### 2. **多層陰影效果 (Multiple Box Shadows)**
```css
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 120px rgba(255, 255, 255, 0.1);
```
- 學習重點：使用逗號分隔多個陰影層
- 效果：創造深度感和發光效果

#### 3. **CSS 動畫 (Animations)**
```css
animation: slideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

@keyframes slideIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}
```
- 學習重點：`@keyframes` 定義動畫步驟
- `cubic-bezier` 創造彈性效果

#### 4. **焦點狀態樣式 (Focus States)**
```css
.create-form:focus-within {
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.1);
}
```
- 學習重點：`:focus-within` 偽類選擇器
- 效果：當內部元素獲得焦點時改變父元素樣式

#### 5. **過渡效果 (Transitions)**
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
- 學習重點：平滑的狀態變化
- `cubic-bezier` 控制動畫曲線

#### 6. **Transform 變換效果**
```css
.todo:hover {
    transform: translateY(-2px);
}
.todo svg:hover {
    transform: scale(1.1);
}
```
- 學習重點：
  - `translateY()` - 垂直移動
  - `scale()` - 縮放效果
  - 結合 `:hover` 創造互動感

#### 7. **自定義滾動條 (Custom Scrollbar)**
```css
.wrapper::-webkit-scrollbar {
    width: 6px;
}
.wrapper::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 3px;
}
```
- 學習重點：使用 `::-webkit-scrollbar` 系列偽元素
- 注意：僅支援 Webkit 瀏覽器

#### 8. **響應式設計 (Responsive Design)**
```css
@media (max-width: 500px) {
    .wrapper {
        width: 90%;
    }
}
```
- 學習重點：使用 `@media` 查詢適配不同螢幕

#### 9. **現代字體堆疊 (System Font Stack)**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```
- 學習重點：使用系統原生字體，提升效能和一致性

#### 10. **偽元素選擇器應用**
```css
.create-form > input::placeholder {
    color: #666666;
}
```
- 學習重點：`::placeholder` 控制佔位符樣式

### 🔥 進階技巧總結

1. **動畫性能優化**
   - 使用 `transform` 和 `opacity` 進行動畫（GPU 加速）
   - 避免動畫 `width`、`height` 等屬性

2. **視覺層次**
   - 使用不同的背景色創造深度
   - 邊框和陰影增加層次感

3. **互動反饋**
   - Hover 效果提供即時反饋
   - Active 狀態模擬按壓感

4. **顏色系統**
   - 統一的深色主題
   - 使用 HSL 或 RGB 的 alpha 通道控制透明度

### 📚 學習建議

1. 嘗試修改 `cubic-bezier` 參數，觀察動畫效果變化
2. 實驗不同的漸層角度和顏色
3. 添加更多的 `@keyframes` 動畫
4. 嘗試使用 CSS 變數優化顏色管理

### 🎯 挑戰練習

1. 添加深色/淺色主題切換
2. 實現拖拽排序的視覺效果
3. 添加載入動畫
4. 創建更複雜的 hover 效果組合