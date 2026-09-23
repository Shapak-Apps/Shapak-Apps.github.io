import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages отдаёт только статику: собираем готовый HTML в out/.
  output: "export",
  // /projects/ → out/projects/index.html — адреса как у прежнего сайта.
  trailingSlash: true,
  // Оптимизатор картинок требует сервер; на Pages его нет.
  images: { unoptimized: true },
};

export default nextConfig;
