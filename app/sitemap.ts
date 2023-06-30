import { appUrl } from "./layout/components"

const sitemapRoutes = ["", "/submit", "/careers", "/privacy", "/terms"]

export default async function sitemap() {
  // const res = await fetch("https://.../posts")
  // const allPosts = await res.json()

  // const posts = allPosts.map((post) => ({
  //   url: `${appUrl}/blog/${post.slug}`,
  //   lastModified: post.publishedAt
  // }))

  const routes = sitemapRoutes.map((route) => ({
    url: `${appUrl}${route}`,
    lastModified: new Date().toISOString()
  }))

  return [...routes /* ...posts */]
}
