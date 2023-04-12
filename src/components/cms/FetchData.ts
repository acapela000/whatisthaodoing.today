import fs from 'fs';

import matter from 'gray-matter';
const emoji = require('emoji-dictionary');

import { ArticleMetadata } from './ArticleMetadata';

const config: { [key: string]: any } = require('../../../my.config.js');


function GetFileBySlug(slug: string) {
    const folder = config.ARTICLES_LOCATION ?? 'content/post';
    const files = fs.readdirSync(folder);
    const mdArticles = files.filter((file) => file.endsWith('.md'));

    const article = mdArticles.map((fileName) => {
        const raw = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
        const article = matter(raw);
        return {
            fileName: fileName,
            slug: article.data.slug ?? fileName.replace(".md", ""),
            content: article
        };
    })
    .find((a) => a.slug == slug);

    return article?.content;
}

export function GetArticleContent(slug: string) {
    try {
        const article = GetFileBySlug(slug);
        if (!article) return null;

        article.content = article.content.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name));
        article.data.title = article.data.title.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name));

        return article;
    } catch (error) {
        return null;
    }
}

export function GetArticlesMetadata(limit: number = Infinity): ArticleMetadata[] {
    const folder = config.ARTICLES_LOCATION ?? 'content/post';
    const files = fs.readdirSync(folder);
    const mdArticles = files.filter((file) => file.endsWith('.md'));

    const articles = mdArticles.map((fileName) => {
        const raw = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
        const article = matter(raw);
        const title = article.data.title.replace(/:\w+:/gi, (name: string) => emoji.getUnicode(name));

        return {
            slug: article.data.slug ?? fileName.replace(".md", ""),
            title: title,
            date: article.data.date,
            author: article.data.author,
            categories: article.data.categories,
            tags: article.data.tags,
            toc: article.data.toc,
            summary: article.data.summary,
            thumbnail: article.data.thumbnail,
            draft: article.data.draft ?? false,
        };
    })
    .filter((article) => !article.draft)
    .sort(
        (a, b) => { return new Date(b.date).getTime() - new Date(a.date).getTime(); }
    ).slice(0, limit);

    return articles;
}
