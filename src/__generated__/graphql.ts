/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** Date custom scalar type */
  Date: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  abbr: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type CategoryFeed = {
  __typename?: 'CategoryFeed';
  categoryFeed?: Maybe<Array<Category>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type City = {
  __typename?: 'City';
  coord?: Maybe<Coord>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CityInfo = {
  __typename?: 'CityInfo';
  country?: Maybe<Scalars['String']['output']>;
  lat?: Maybe<Scalars['String']['output']>;
  lon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Coord = {
  __typename?: 'Coord';
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

export type CurrentWeather = {
  __typename?: 'CurrentWeather';
  cityInfo?: Maybe<CityInfo>;
  id: Scalars['Int']['output'];
  weather?: Maybe<Weather>;
};

export type DailyForecast = {
  __typename?: 'DailyForecast';
  cityInfo?: Maybe<CityInfo>;
  forecastList?: Maybe<Array<Maybe<Forecast>>>;
  id: Scalars['Int']['output'];
};

export type Forecast = {
  __typename?: 'Forecast';
  condition?: Maybe<Scalars['String']['output']>;
  dt: Scalars['Int']['output'];
  humidity?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  rain?: Maybe<Scalars['Float']['output']>;
  sunrise?: Maybe<Scalars['Int']['output']>;
  sunset?: Maybe<Scalars['Int']['output']>;
  temperature?: Maybe<Temperature>;
  wind?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']['output']>;
  createCategory?: Maybe<Category>;
  createSubCategory?: Maybe<SubCategory>;
  createTopic?: Maybe<Topic>;
  deleteCategory?: Maybe<Category>;
  deleteSubCategory?: Maybe<SubCategory>;
  deleteTopic?: Maybe<Topic>;
  updateCategory?: Maybe<Category>;
  updateSubCategory?: Maybe<SubCategory>;
  updateTopic?: Maybe<Topic>;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreateSubCategoryArgs = {
  input?: InputMaybe<CreateSubCategoryInput>;
};


export type MutationCreateTopicArgs = {
  input?: InputMaybe<CreateTopicInput>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSubCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCategoryInput;
};


export type MutationUpdateSubCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateSubCategoryInput;
};


export type MutationUpdateTopicArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTopicInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']['output']>;
  categoryAll?: Maybe<Array<Category>>;
  categoryById: Category;
  cities?: Maybe<Array<Maybe<City>>>;
  currentWeatherByCity?: Maybe<CurrentWeather>;
  dailyForecast?: Maybe<DailyForecast>;
  subCategoryAll?: Maybe<Array<SubCategory>>;
  subCategoryByCategory?: Maybe<Array<SubCategory>>;
  subCategoryById?: Maybe<SubCategory>;
  topicAll?: Maybe<Array<Topic>>;
  topicByCategory?: Maybe<Array<Topic>>;
  topicByCategoryAbbr?: Maybe<Array<Topic>>;
  topicById: Topic;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCitiesArgs = {
  city: Scalars['String']['input'];
};


export type QueryCurrentWeatherByCityArgs = {
  city: Scalars['String']['input'];
  unit?: InputMaybe<Units>;
};


export type QueryDailyForecastArgs = {
  city: Scalars['String']['input'];
  unit?: InputMaybe<Units>;
};


export type QuerySubCategoryByCategoryArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySubCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTopicByCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type QueryTopicByCategoryAbbrArgs = {
  abbr: Scalars['String']['input'];
};


export type QueryTopicByIdArgs = {
  id: Scalars['ID']['input'];
};

export type SubCategory = {
  __typename?: 'SubCategory';
  category?: Maybe<Category>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type SubCategoryFeed = {
  __typename?: 'SubCategoryFeed';
  pageInfo: PageInfo;
  subCategoryFeed?: Maybe<Array<SubCategory>>;
  totalCount: Scalars['Int']['output'];
};

export type Temperature = {
  __typename?: 'Temperature';
  day?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type Topic = {
  __typename?: 'Topic';
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  subCategory?: Maybe<SubCategory>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Date']['output']>;
  url: Scalars['String']['output'];
};

export type TopicFeed = {
  __typename?: 'TopicFeed';
  pageInfo: PageInfo;
  topicFeed?: Maybe<Array<Topic>>;
  totalCount: Scalars['Int']['output'];
};

export enum Units {
  Imperial = 'imperial',
  Metric = 'metric'
}

export type Weather = {
  __typename?: 'Weather';
  condition?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dt: Scalars['Int']['output'];
  feelsLike?: Maybe<Scalars['String']['output']>;
  humidity?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Temperature>;
};

export type CreateCategoryInput = {
  abbr: Scalars['String']['input'];
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateSubCategoryInput = {
  category: Scalars['ID']['input'];
  categoryOrder?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTopicInput = {
  category: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  subCategory: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type UpdateCategoryInput = {
  abbr?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSubCategoryInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTopicInput = {
  category: Scalars['ID']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  subCategory: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Category_By_IdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Category_By_IdQuery = { __typename?: 'Query', categoryById: { __typename?: 'Category', id: string, name: string, abbr: string, order?: number | null, createdAt: any, updatedAt: any } };

export type CategoryAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryAllQuery = { __typename?: 'Query', categoryAll?: Array<{ __typename?: 'Category', id: string, name: string, abbr: string, createdAt: any, updatedAt: any }> | null };


export const Category_By_IdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Category_By_Id"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"abbr"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<Category_By_IdQuery, Category_By_IdQueryVariables>;
export const CategoryAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CategoryAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"abbr"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CategoryAllQuery, CategoryAllQueryVariables>;