import * as Types from '../graphql-types';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Location = {
  __typename?: 'Location';
  /** A short description about the location */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The name of the location */
  name: Scalars['String']['output'];
  /** The calculated overall rating based on all reviews */
  overallRating?: Maybe<Scalars['Float']['output']>;
  /** The location's main photo as a URL */
  photo: Scalars['String']['output'];
  /** All submitted reviews about this location */
  reviewsForLocation: Array<Maybe<Review>>;
};

export type LocationReviewInput = {
  /** Written text */
  comment: Scalars['String']['input'];
  /** Location Id */
  locationId: Scalars['String']['input'];
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  submitReview?: Maybe<SubmitReviewResponse>;
};


export type MutationSubmitReviewArgs = {
  locationReview?: InputMaybe<LocationReviewInput>;
};

export type Query = {
  __typename?: 'Query';
  /** The three latest reviews submitted for FlyBy's locations */
  latestReviews: Array<Review>;
  /** The details of a specific location */
  location?: Maybe<Location>;
  /** The full list of locations presented by the Interplanetary Space Tourism department */
  locations: Array<Location>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  /** Written text */
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The location the review is about */
  location?: Maybe<Location>;
  /** A number from 1 - 5 with 1 being lowest and 5 being highest */
  rating?: Maybe<Scalars['Int']['output']>;
};

export type SubmitReviewResponse = {
  __typename?: 'SubmitReviewResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Newly created review */
  locationReview?: Maybe<Review>;
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type GetAllLocationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllLocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: string, name: string, description: string, photo: string, overallRating?: number | null }> };

export type GetLocationQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetLocationQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id: string, name: string, description: string, photo: string } | null };

export type GetLocationWithReviewsQueryVariables = Types.Exact<{
  locationId: Types.Scalars['ID']['input'];
}>;


export type GetLocationWithReviewsQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id: string, name: string, description: string, photo: string, overallRating?: number | null, reviewsForLocation: Array<{ __typename?: 'Review', id: string, comment?: string | null, rating?: number | null } | null> } | null };

export type GetLatestReviewsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLatestReviewsQuery = { __typename?: 'Query', latestReviews: Array<{ __typename?: 'Review', id: string, comment?: string | null, rating?: number | null, location?: { __typename?: 'Location', id: string, name: string } | null }> };

export type SubmitReviewMutationVariables = Types.Exact<{
  locationReview: Types.LocationReviewInput;
}>;


export type SubmitReviewMutation = { __typename?: 'Mutation', submitReview?: { __typename?: 'SubmitReviewResponse', code: number, success: boolean, message: string, locationReview?: { __typename?: 'Review', id: string, comment?: string | null, rating?: number | null } | null } | null };
