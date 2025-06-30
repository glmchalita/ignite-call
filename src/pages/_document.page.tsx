import { getCssText } from '@ignite-ui/react'
// biome-ignore lint/suspicious/noDocumentImportInPage: <>
import { Head, Html, Main, NextScript } from 'next/document'
import { useId } from 'react'

useId
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/** biome-ignore lint/nursery/useUniqueElementIds: <> */}
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <> */}
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
