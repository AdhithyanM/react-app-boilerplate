# GraphQL Directory Structure and Type Definitions

## Overview

This directory is dedicated to organizing GraphQL operations and the corresponding TypeScript type definitions. It includes the setup for the Apollo Client and stores the GraphQL operations (queries, mutations) as well as the generated types.

## Operations (`*.graphql`)

GraphQL operation files such as `locations.graphql` contain the queries and mutations related to specific entities like locations.

## Generated Types (`*.generated.ts`)

For each `.graphql` file, a corresponding `.generated.ts` file exists. These are auto-generated and contain TypeScript types specific to the GraphQL operations defined in the `.graphql` files. They facilitate type-safe interaction with the GraphQL server for those specific operations.

## Base Types (`graphql-types.ts`)

The `graphql-types.ts` file acts as a comprehensive type reference for the entire GraphQL schema. It encompasses types for all objects, queries, mutations, subscriptions, etc. Think of it as the dictionary for the GraphQL schema, outlining the structure and capabilities of the GraphQL server.

## Apollo Client (`apolloClient.ts`)

Configures and initializes the Apollo Client instance which is used to interact with the GraphQL server.

## Schema Introspection (`graphql.schema.json`)

The `graphql.schema.json` file contains the introspected schema, a JSON representation of the GraphQL server's type system. It's useful for tooling, such as code generation, API exploration, and client-side schema validation or mocking.

## Contribution Guide

When contributing to this project:

- Update `.graphql` files with new or modified operations.
- Run the code generator to update `.generated.ts` and `graphql-types.ts` files.
- Avoid manually editing `.generated.ts` files as they are overwritten during code generation.
- Refer to `graphql-types.ts` for base type definitions when working on GraphQL operations.
