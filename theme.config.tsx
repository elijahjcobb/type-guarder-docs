import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { ImNpm } from "react-icons/im";


const config: DocsThemeConfig = {
  logo: <span>type-guarder</span>,
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
}

export default config
