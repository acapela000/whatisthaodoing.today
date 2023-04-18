import Link from 'next/link';
import { format } from 'date-fns'
import { ArticleMetadata } from './ArticleMetadata';
import { GetArticlesMetadata } from './FetchData';


export function ArticleList(props: any) {
    const tags: string = props.tag ?? "";
    const articlesMetadata: ArticleMetadata[] = GetArticlesMetadata(props.limit, tags);

    const articlesPreview = articlesMetadata.map((article) => {
        const date = format(new Date(article.date), 'dd LLL yyyy');

        return (
            <Link href={`/post/${article.slug}`} key={article.slug} className="group flex items-start space-x-6 p-6">
                <img src={article.thumbnail} alt=""className="object-cover w-[150px] h-[150px] flex-none rounded-md bg-slate-100" />
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-blue-900 pr-20 group-hover:text-blue-700">{article.title}</h2>
                    <p className='line-clamp-3'>
                        {article.summary}
                    </p>
                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium text-gray-400">
                        <div className="ml-2">
                            <dt className="sr-only">Date</dt>
                            <dd>{date}</dd>
                        </div>
                    </dl>
                </div>
            </Link>

        )
    });

    return (
        <>
            <ul className="divide-y divide-slate-100">
                {articlesPreview}
            </ul>
        </>
    );
}
