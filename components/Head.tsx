import { default as NextHead } from 'next/head'

type Props = {
    title: string;
    content: string;
}

export const Head = ({ title, content }: Props) => {
    return (
    <NextHead>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    )
}