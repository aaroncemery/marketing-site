import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: 'ojWrGVxCd',
    entry: './src/App.tsx',
  },
  vite: {
    server: {
      port: 4321,
      fs: {
        allow: [
          '../../', // relative path from apps/sanity-apps to monorepo root
          '/Users/aaron.emery/Development/marketing-site', // absolute path as a fallback
        ],
      },
    },
  },
})
