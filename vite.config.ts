import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: "./dist/bundle-report.html", // 分析報表位置
      open: true, // build 完後自動開啟瀏覽器
      gzipSize: true, // 顯示 gzip 後的體積
      brotliSize: true, // 顯示 brotli 後的體積
    }),
  ],
  build: {
    outDir: "landing",
  },
});
