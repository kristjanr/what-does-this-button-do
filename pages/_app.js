import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import YouTubeComponent from '../components/YouTube'
import '../styles/main.css'

const components = {
    youtube: YouTubeComponent,
};

export default function Nextra({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title="RSS"
                    href="/feed.xml"
                />
                <link
                    rel="preload"
                    href="/fonts/Inter-roman.latin.var.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </Head>
            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </>
    )
}
