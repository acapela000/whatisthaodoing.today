import Link from 'next/link'


export function Logo({ appName, url, children }: { appName: string, url: string, children?: any}) {

    return (
        <Link href={url} className="w-fit">
            <div dangerouslySetInnerHTML={{ __html: appName }} style={{ fontWeight: 'bold' }}></div>
            {children}
        </Link>
    )
}
