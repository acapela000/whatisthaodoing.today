import { ArticleList } from '@/components/cms/ArticleList';


export const metadata = {
    title: 'My posts',
};

export default function Home() {
    return (
        <>
            <div className="container mt-40 mx-auto px-4">
                <h1 className="text-4xl mb-6 text-center">
                    My Posts
                </h1>
                <ArticleList />
            </div>
        </>
    )
}
