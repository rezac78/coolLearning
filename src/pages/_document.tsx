import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
        render() {
                return (
                        <Html lang="en">
                                <Head>
                                        <title>Cool Learning - Programming Training Website</title>
                                        <meta name="description" content="Learn programming with Cool Learning" />
                                        <meta charSet="utf-8" />
                                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                                        <link rel="icon" href="/favicon.ico" />
                                        <link
                                                href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                                                rel="stylesheet"
                                        />
                                </Head>
                                <body>
                                        <Main />
                                        <NextScript />
                                </body>
                        </Html>
                );
        }
}

export default MyDocument;
