import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true, // Allows the generator to overwrite existing files
  schema: 'http://localhost:4000', // Points to the GraphQL schema available at this endpoint
  documents: 'src/lib/graphql/**/*.graphql', // Indicates where to find GraphQL documents in the project
  generates: {
    // Configuration for generating types for GraphQL operations
    'src/lib/graphql/**/': {
      // preset allows us to generate type definitions and/or hooks in files that are colocated with our GraphQL operation files
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '../graphql-types.ts', // relative path from the generated files
      },
      plugins: [
        'typescript', // Generates TypeScript types for our GraphQL schema
        'typescript-operations', // Generates TypeScript types for our operations (queries, mutations, subscriptions)
      ],
    },
    'src/lib/graphql/graphql-types.ts': {
      plugins: ['typescript'],
    },
    // Configuration for generating an introspection file
    'src/lib/graphql/graphql.schema.json': {
      plugins: ['introspection'], // Generates a JSON file with the GraphQL schema introspection result
    },
  },
}

export default config
