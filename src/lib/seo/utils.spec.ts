/* eslint-disable no-useless-escape */
import { RoutesEnum, SEORoutes } from '$lib/routing';
import { getRobotsTxtString, getSitemapXmlString } from '$lib/seo/utils';
import { LangEnum } from '$models/langs.enum';

describe('SEO Utils', () => {
	describe('getSitemapXmlString', () => {
		test('should generate the xml string with the good enum', () => {
			expect(
				getSitemapXmlString(
					LangEnum,
					RoutesEnum,
					SEORoutes,
					new URL('http://localhost:5678/contact')
				).replace(/\s/g, '')
			).toEqual(
				`<?xmlversion=\"1.0\"encoding=\"UTF-8\"?><urlsetxmlns=\"https://www.sitemaps.org/schemas/sitemap/0.9\"xmlns:xhtml=\"https://www.w3.org/1999/xhtml\"xmlns:mobile=\"https://www.google.com/schemas/sitemap-mobile/1.0\"xmlns:news=\"https://www.google.com/schemas/sitemap-news/0.9\"xmlns:image=\"https://www.google.com/schemas/sitemap-image/1.1\"xmlns:video=\"https://www.google.com/schemas/sitemap-video/1.1\"><url><loc>http://localhost:5678/fr</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/personal-info/bio</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/personal-info/bio/looking-for</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/personal-info/education/schools</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/personal-info/hobbies</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/personal-info/education/projects</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/professional-info/skills</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/professional-info/languages</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/about/professional-info/experiences</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/projects</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/fr/contact</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/personal-info/bio</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/personal-info/bio/looking-for</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/personal-info/education/schools</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/personal-info/hobbies</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/personal-info/education/projects</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/professional-info/skills</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/professional-info/languages</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/about/professional-info/experiences</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/projects</loc><changefreq>weekly</changefreq><priority>1.0</priority></url><url><loc>http://localhost:5678/en/contact</loc><changefreq>weekly</changefreq><priority>1.0</priority></url></urlset>`.replace(
					/\s/g,
					''
				)
			);
		});
	});

	describe('getRobotsTxtString', () => {
		test('should generate the robots txt string with the good enum', () => {
			expect(
				getRobotsTxtString(
					LangEnum,
					RoutesEnum,
					SEORoutes,
					new URL('http://localhost:5677/contact')
				).replace(/\s/g, '')
			).toEqual(
				`User-agent:*Allow:/Allow:/frAllow:/enAllow:/fr/about/personal-info/bioAllow:/fr/about/personal-info/bio/looking-forAllow:/fr/about/personal-info/education/schoolsAllow:/fr/about/personal-info/hobbiesAllow:/fr/about/personal-info/education/projectsAllow:/fr/about/professional-info/skillsAllow:/fr/about/professional-info/languagesAllow:/fr/about/professional-info/experiencesAllow:/fr/projectsAllow:/fr/contactAllow:/en/about/personal-info/bioAllow:/en/about/personal-info/bio/looking-forAllow:/en/about/personal-info/education/schoolsAllow:/en/about/personal-info/hobbiesAllow:/en/about/personal-info/education/projectsAllow:/en/about/professional-info/skillsAllow:/en/about/professional-info/languagesAllow:/en/about/professional-info/experiencesAllow:/en/projectsAllow:/en/contactSitemap:http://localhost:5677/sitemap.xml`.replace(
					/\s/g,
					''
				)
			);
		});
	});
});
