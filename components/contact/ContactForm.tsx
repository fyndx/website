'use client'

import type React from "react"
import Script from 'next/script'

export default function ContactForm() {

  return (
    <>
      <iframe data-tally-src="https://tally.so/embed/me4jOo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="275" frameborder="0" marginheight="0" marginwidth="0" title="Contact form"></iframe>
      <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
              Tally.loadEmbeds();
          }}
      />
    </>
  )
}
