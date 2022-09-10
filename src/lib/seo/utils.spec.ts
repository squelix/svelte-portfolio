/* eslint-disable no-useless-escape */
import { Routes, RoutesEnum } from '$lib/routing';
import { getRobotsTxtString, getSitemapXmlString } from '$lib/seo/utils';
import { LangEnum } from '$models/langs.enum';

describe('SEO Utils', () => {
	describe('getSitemapXmlString', () => {
		test('should generate the xml string with the good enum', () => {
			expect(
				getSitemapXmlString(
					LangEnum,
					RoutesEnum,
					Routes,
					new URL('http://localhost:5678/contact')
				).replace(/\s/g, '')
			).toEqual(
				`<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
			<urlset
			xmlns=\"https://www.sitemaps.org/schemas/sitemap/0.9\"
			xmlns:xhtml=\"https://www.w3.org/1999/xhtml\"
			xmlns:mobile=\"https://www.google.com/schemas/sitemap-mobile/1.0\"
			xmlns:news=\"https://www.google.com/schemas/sitemap-news/0.9\"
			xmlns:image=\"https://www.google.com/schemas/sitemap-image/1.1\"
			xmlns:video=\"https://www.google.com/schemas/sitemap-video/1.1\"
>
			<url>
<loc>http://localhost:5678/</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/about</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/about/personal-info</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/about/personal-info/bio</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/about/personal-info/bio/looking-for</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/about/personal-info/education</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/about/personal-info/education/schools</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/about/personal-info/education/projects</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/projects</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/fr/contact</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/about</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/about/personal-info</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/about/personal-info/bio</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/about/personal-info/bio/looking-for</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/about/personal-info/education</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/about/personal-info/education/schools</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/about/personal-info/education/projects</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/projects</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>http://localhost:5678/en/contact</loc>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
</urlset>`.replace(/\s/g, '')
			);
		});
	});

	describe('getRobotsTxtString', () => {
		test('should generate the robots txt string with the good enum', () => {
			expect(
				getRobotsTxtString(
					LangEnum,
					RoutesEnum,
					Routes,
					new URL('http://localhost:5677/contact')
				).replace(/\s/g, '')
			).toEqual(
				`User-agent: *
    Allow: /
    Allow: /fr
    Allow: /en
    Allow: /fr/about
    Allow: /fr/about/personal-info
    Allow: /fr/about/personal-info/bio
    Allow: /fr/about/personal-info/bio/looking-for
    Allow: /fr/about/personal-info/education
    Allow: /fr/about/personal-info/education/schools
    Allow: /fr/about/personal-info/education/projects
    Allow: /fr/projects
    Allow: /fr/contact
    Allow: /en/about
    Allow: /en/about/personal-info
    Allow: /en/about/personal-info/bio
    Allow: /en/about/personal-info/bio/looking-for
    Allow: /en/about/personal-info/education
    Allow: /en/about/personal-info/education/schools
    Allow: /en/about/personal-info/education/projects
    Allow: /en/projects
    Allow: /en/contact
    Sitemap: http://localhost:5677/sitemap.xml`.replace(/\s/g, '')
			);
		});
	});
});
