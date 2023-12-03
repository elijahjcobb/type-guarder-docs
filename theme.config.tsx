import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ImNpm } from "react-icons/im";
import Image from 'next/image';
import icon from "./public/icon.svg";


const config: DocsThemeConfig = {
  logo: <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }}>
    <Image src={icon} alt="icon" width={32} />
    <span>type-guarder</span>
  </div>,
  chat: {
    link: 'https://www.npmjs.com/package/type-guarder',
    icon: <ImNpm size={24} color="#CC3534" />
  },
  project: {
    link: 'https://github.com/elijahjcobb/type-guarder',
  },
  docsRepositoryBase: 'https://github.com/elijahjcobb/type-guarder-docs',
  footer: {
    text: 'type-guarder',
  },
  head: (
    <>
      <title>type-guarder</title>
      <link href="https://type-guarder.com/icon.svg" rel="icon" type="image/svg+xml" />
      <meta property="og:title" content="type-guarder" />
      <meta property="description" content="A simple, powerful and flexible runtime type checker for TypeScript." />
      <meta property="og:description" content="A simple, powerful and flexible runtime type checker for TypeScript." />
      <meta property="og:url" content="type-guarder.com" />
    </>

  )
}

export default config
