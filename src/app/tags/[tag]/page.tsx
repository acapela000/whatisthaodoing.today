import type { Metadata } from 'next'
import { ArticleList } from '@/components/cms/ArticleList';
import { GetArticlesMetadata } from '@/components/cms/FetchData';
import { ArticleMetadata } from '@/components/cms/ArticleMetadata';


export const generateStaticParams = async (): Promise<any[]> => {
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata();
    return articlesMetadata.map((article: ArticleMetadata) => (
        article.tags.map((tag: string) => ({ tag: tag }))
    )).flat();
};

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
    return { title: '#' + params.tag }
}

export default function Home(props: any) {
    const tag = props.params.tag;

    return (
        <>
            <div className="container mt-40 mx-auto px-4">
                <h1 className="text-4xl mb-6 text-center">
                    <samp className='text-grey-dark'>#</samp>{tag}
                </h1>
                <ArticleList tag={tag} />
            </div>
        </>
    )
}