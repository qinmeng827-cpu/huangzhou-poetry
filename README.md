# 诗词黄州 · 山水宋城

基于现代黄州地理骨架的山水画式交互地图。可旋转、缩放、查看文化地点，切换宋城城墙与题签，观看赤壁影像、阅读《念奴娇·赤壁怀古》，展开武元直《赤壁图》原作。

这是经过资源拆分的静态发布包，不包含建模源文件或制作缓存。模型、贴图与原画保留原始发布品质；赤壁视频为 1920×1080 H.264/AAC 网络发布副本。原文件在制作项目中保留。

## GitHub Pages

将本目录内容作为独立仓库根目录，默认分支 main。在 Settings → Pages 中选择 GitHub Actions；随包 workflow 会部署 site。网址支持 /仓库名/ 子目录，无需固定域名。不要用网页拖放上传整个包；其中视频可能超过网页上传的 25 MiB 限制，应使用 Git 或 GitHub Desktop。

## 本地预览

使用静态 HTTP 服务打开 index.html，不要直接双击 HTML。示例：python -m http.server 5188。

## 更新与权利

在制作项目完成更新后，重新运行 scripts/prepare-github-pages-v133.mjs 并替换相应发布文件。内容来源与第三方授权见 [ATTRIBUTIONS.md](ATTRIBUTIONS.md) 和 licenses/。
