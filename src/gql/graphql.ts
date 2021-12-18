import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  body?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  draft: Scalars['Boolean'];
  edit_description?: Maybe<Scalars['String']>;
  excerpt: Scalars['String'];
  featured: Scalars['Boolean'];
  id: Scalars['String'];
  image?: Maybe<Image>;
  last_edit_date?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  publish_date: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  body?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  alt_text?: Maybe<Scalars['String']>;
  attribution?: Maybe<Scalars['String']>;
  attribution_link?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  cdn?: Maybe<Scalars['String']>;
  file_name: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['String'];
  width: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  body?: Maybe<Scalars['String']>;
  draft: Scalars['Boolean'];
  excerpt: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  publish_date: Scalars['String'];
  section?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
};

export type Profile = {
  __typename?: 'Profile';
  age?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Article?: Maybe<Article>;
  Category?: Maybe<Category>;
  Image?: Maybe<Image>;
  Page?: Maybe<Page>;
  Profile?: Maybe<Profile>;
  Section?: Maybe<Section>;
  Website?: Maybe<Website>;
  allArticles?: Maybe<Array<Maybe<Article>>>;
  allCategorys?: Maybe<Array<Maybe<Category>>>;
  allImages?: Maybe<Array<Maybe<Image>>>;
  allPages?: Maybe<Array<Maybe<Page>>>;
  allProfiles?: Maybe<Array<Maybe<Profile>>>;
  allSections?: Maybe<Array<Maybe<Section>>>;
  allWebsites?: Maybe<Array<Maybe<Website>>>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryImageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryProfileArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QuerySectionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryWebsiteArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Section = {
  __typename?: 'Section';
  body?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  weight?: Maybe<Scalars['Int']>;
};

export type Website = {
  __typename?: 'Website';
  body?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  profile?: Maybe<Profile>;
  url: Scalars['String'];
};
