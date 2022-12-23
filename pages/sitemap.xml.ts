import { appUrl } from "app/layout/components/DefaultHead/DefaultHead"

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${appUrl}</loc>
      </url>
      <url>
        <loc>${appUrl}/submit</loc>
      </url>
   </urlset>
 `
}

function SiteMap() {
  return generateSiteMap()
}

export default SiteMap
