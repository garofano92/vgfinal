const SITE_URL = "https://www.vgpersonaltrainingstudio.it";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
