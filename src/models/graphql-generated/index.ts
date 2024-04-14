export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	Date: { input: any; output: any };
	DateTime: { input: any; output: any };
	I18NLocaleCode: { input: any; output: any };
	JSON: { input: any; output: any };
	Upload: { input: any; output: any };
};

export type BooleanFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	contains?: InputMaybe<Scalars['Boolean']['input']>;
	containsi?: InputMaybe<Scalars['Boolean']['input']>;
	endsWith?: InputMaybe<Scalars['Boolean']['input']>;
	eq?: InputMaybe<Scalars['Boolean']['input']>;
	eqi?: InputMaybe<Scalars['Boolean']['input']>;
	gt?: InputMaybe<Scalars['Boolean']['input']>;
	gte?: InputMaybe<Scalars['Boolean']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	lt?: InputMaybe<Scalars['Boolean']['input']>;
	lte?: InputMaybe<Scalars['Boolean']['input']>;
	ne?: InputMaybe<Scalars['Boolean']['input']>;
	nei?: InputMaybe<Scalars['Boolean']['input']>;
	not?: InputMaybe<BooleanFilterInput>;
	notContains?: InputMaybe<Scalars['Boolean']['input']>;
	notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
	startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
	contains?: InputMaybe<Scalars['Date']['input']>;
	containsi?: InputMaybe<Scalars['Date']['input']>;
	endsWith?: InputMaybe<Scalars['Date']['input']>;
	eq?: InputMaybe<Scalars['Date']['input']>;
	eqi?: InputMaybe<Scalars['Date']['input']>;
	gt?: InputMaybe<Scalars['Date']['input']>;
	gte?: InputMaybe<Scalars['Date']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
	lt?: InputMaybe<Scalars['Date']['input']>;
	lte?: InputMaybe<Scalars['Date']['input']>;
	ne?: InputMaybe<Scalars['Date']['input']>;
	nei?: InputMaybe<Scalars['Date']['input']>;
	not?: InputMaybe<DateFilterInput>;
	notContains?: InputMaybe<Scalars['Date']['input']>;
	notContainsi?: InputMaybe<Scalars['Date']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
	startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	contains?: InputMaybe<Scalars['DateTime']['input']>;
	containsi?: InputMaybe<Scalars['DateTime']['input']>;
	endsWith?: InputMaybe<Scalars['DateTime']['input']>;
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	eqi?: InputMaybe<Scalars['DateTime']['input']>;
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	ne?: InputMaybe<Scalars['DateTime']['input']>;
	nei?: InputMaybe<Scalars['DateTime']['input']>;
	not?: InputMaybe<DateTimeFilterInput>;
	notContains?: InputMaybe<Scalars['DateTime']['input']>;
	notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Jobskill_Category {
	Bi = 'BI',
	Backend = 'Backend',
	Devops = 'Devops',
	FrontendGlobal = 'Frontend_Global',
	FrontendTechnique = 'Frontend_Technique',
	Mobile = 'Mobile'
}

export enum Enum_Techno_Color {
	Blue = 'blue',
	DarkGreen = 'dark_green',
	Green = 'green',
	Orange = 'orange',
	Pink = 'pink',
	Red = 'red'
}

export type FileInfoInput = {
	alternativeText?: InputMaybe<Scalars['String']['input']>;
	caption?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	contains?: InputMaybe<Scalars['Float']['input']>;
	containsi?: InputMaybe<Scalars['Float']['input']>;
	endsWith?: InputMaybe<Scalars['Float']['input']>;
	eq?: InputMaybe<Scalars['Float']['input']>;
	eqi?: InputMaybe<Scalars['Float']['input']>;
	gt?: InputMaybe<Scalars['Float']['input']>;
	gte?: InputMaybe<Scalars['Float']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	lt?: InputMaybe<Scalars['Float']['input']>;
	lte?: InputMaybe<Scalars['Float']['input']>;
	ne?: InputMaybe<Scalars['Float']['input']>;
	nei?: InputMaybe<Scalars['Float']['input']>;
	not?: InputMaybe<FloatFilterInput>;
	notContains?: InputMaybe<Scalars['Float']['input']>;
	notContainsi?: InputMaybe<Scalars['Float']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph =
	| Hobby
	| I18NLocale
	| Job
	| JobMission
	| JobSkill
	| Language
	| LegalMention
	| Profile
	| Project
	| School
	| SchoolProject
	| Skill
	| SocialNetwork
	| Techno
	| UploadFile
	| UploadFolder
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsUser;

export type Hobby = {
	__typename?: 'Hobby';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	icon: Scalars['String']['output'];
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<HobbyRelationResponseCollection>;
	name: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HobbyLocalizationsArgs = {
	filters?: InputMaybe<HobbyFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HobbyEntity = {
	__typename?: 'HobbyEntity';
	attributes?: Maybe<Hobby>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type HobbyEntityResponse = {
	__typename?: 'HobbyEntityResponse';
	data?: Maybe<HobbyEntity>;
};

export type HobbyEntityResponseCollection = {
	__typename?: 'HobbyEntityResponseCollection';
	data: Array<HobbyEntity>;
	meta: ResponseCollectionMeta;
};

export type HobbyFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<HobbyFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	icon?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<HobbyFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<HobbyFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<HobbyFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HobbyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	icon?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type HobbyRelationResponseCollection = {
	__typename?: 'HobbyRelationResponseCollection';
	data: Array<HobbyEntity>;
};

export type I18NLocale = {
	__typename?: 'I18NLocale';
	code?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
	__typename?: 'I18NLocaleEntity';
	attributes?: Maybe<I18NLocale>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
	__typename?: 'I18NLocaleEntityResponse';
	data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
	__typename?: 'I18NLocaleEntityResponseCollection';
	data: Array<I18NLocaleEntity>;
	meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	code?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<I18NLocaleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	contains?: InputMaybe<Scalars['ID']['input']>;
	containsi?: InputMaybe<Scalars['ID']['input']>;
	endsWith?: InputMaybe<Scalars['ID']['input']>;
	eq?: InputMaybe<Scalars['ID']['input']>;
	eqi?: InputMaybe<Scalars['ID']['input']>;
	gt?: InputMaybe<Scalars['ID']['input']>;
	gte?: InputMaybe<Scalars['ID']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	lt?: InputMaybe<Scalars['ID']['input']>;
	lte?: InputMaybe<Scalars['ID']['input']>;
	ne?: InputMaybe<Scalars['ID']['input']>;
	nei?: InputMaybe<Scalars['ID']['input']>;
	not?: InputMaybe<IdFilterInput>;
	notContains?: InputMaybe<Scalars['ID']['input']>;
	notContainsi?: InputMaybe<Scalars['ID']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	contains?: InputMaybe<Scalars['Int']['input']>;
	containsi?: InputMaybe<Scalars['Int']['input']>;
	endsWith?: InputMaybe<Scalars['Int']['input']>;
	eq?: InputMaybe<Scalars['Int']['input']>;
	eqi?: InputMaybe<Scalars['Int']['input']>;
	gt?: InputMaybe<Scalars['Int']['input']>;
	gte?: InputMaybe<Scalars['Int']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	lt?: InputMaybe<Scalars['Int']['input']>;
	lte?: InputMaybe<Scalars['Int']['input']>;
	ne?: InputMaybe<Scalars['Int']['input']>;
	nei?: InputMaybe<Scalars['Int']['input']>;
	not?: InputMaybe<IntFilterInput>;
	notContains?: InputMaybe<Scalars['Int']['input']>;
	notContainsi?: InputMaybe<Scalars['Int']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
	startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	contains?: InputMaybe<Scalars['JSON']['input']>;
	containsi?: InputMaybe<Scalars['JSON']['input']>;
	endsWith?: InputMaybe<Scalars['JSON']['input']>;
	eq?: InputMaybe<Scalars['JSON']['input']>;
	eqi?: InputMaybe<Scalars['JSON']['input']>;
	gt?: InputMaybe<Scalars['JSON']['input']>;
	gte?: InputMaybe<Scalars['JSON']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	lt?: InputMaybe<Scalars['JSON']['input']>;
	lte?: InputMaybe<Scalars['JSON']['input']>;
	ne?: InputMaybe<Scalars['JSON']['input']>;
	nei?: InputMaybe<Scalars['JSON']['input']>;
	not?: InputMaybe<JsonFilterInput>;
	notContains?: InputMaybe<Scalars['JSON']['input']>;
	notContainsi?: InputMaybe<Scalars['JSON']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
	startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Job = {
	__typename?: 'Job';
	companyName: Scalars['String']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	endDate?: Maybe<Scalars['Date']['output']>;
	jobMissions?: Maybe<JobMissionRelationResponseCollection>;
	jobSkills?: Maybe<JobSkillRelationResponseCollection>;
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<JobRelationResponseCollection>;
	location: Scalars['String']['output'];
	picture?: Maybe<UploadFileEntityResponse>;
	pictureUrl: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
	startDate: Scalars['Date']['output'];
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type JobJobMissionsArgs = {
	filters?: InputMaybe<JobMissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JobJobSkillsArgs = {
	filters?: InputMaybe<JobSkillFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JobLocalizationsArgs = {
	filters?: InputMaybe<JobFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JobEntity = {
	__typename?: 'JobEntity';
	attributes?: Maybe<Job>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type JobEntityResponse = {
	__typename?: 'JobEntityResponse';
	data?: Maybe<JobEntity>;
};

export type JobEntityResponseCollection = {
	__typename?: 'JobEntityResponseCollection';
	data: Array<JobEntity>;
	meta: ResponseCollectionMeta;
};

export type JobFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
	companyName?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	endDate?: InputMaybe<DateFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	jobMissions?: InputMaybe<JobMissionFiltersInput>;
	jobSkills?: InputMaybe<JobSkillFiltersInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<JobFiltersInput>;
	location?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<JobFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
	pictureUrl?: InputMaybe<StringFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	startDate?: InputMaybe<DateFilterInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobInput = {
	companyName?: InputMaybe<Scalars['String']['input']>;
	endDate?: InputMaybe<Scalars['Date']['input']>;
	jobMissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	jobSkills?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	location?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['ID']['input']>;
	pictureUrl?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	startDate?: InputMaybe<Scalars['Date']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type JobMission = {
	__typename?: 'JobMission';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<JobMissionRelationResponseCollection>;
	order: Scalars['Int']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	url?: Maybe<Scalars['String']['output']>;
	urlName?: Maybe<Scalars['String']['output']>;
};

export type JobMissionLocalizationsArgs = {
	filters?: InputMaybe<JobMissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JobMissionEntity = {
	__typename?: 'JobMissionEntity';
	attributes?: Maybe<JobMission>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type JobMissionEntityResponse = {
	__typename?: 'JobMissionEntityResponse';
	data?: Maybe<JobMissionEntity>;
};

export type JobMissionEntityResponseCollection = {
	__typename?: 'JobMissionEntityResponseCollection';
	data: Array<JobMissionEntity>;
	meta: ResponseCollectionMeta;
};

export type JobMissionFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<JobMissionFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<JobMissionFiltersInput>;
	not?: InputMaybe<JobMissionFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<JobMissionFiltersInput>>>;
	order?: InputMaybe<IntFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	urlName?: InputMaybe<StringFilterInput>;
};

export type JobMissionInput = {
	order?: InputMaybe<Scalars['Int']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
	urlName?: InputMaybe<Scalars['String']['input']>;
};

export type JobMissionRelationResponseCollection = {
	__typename?: 'JobMissionRelationResponseCollection';
	data: Array<JobMissionEntity>;
};

export type JobRelationResponseCollection = {
	__typename?: 'JobRelationResponseCollection';
	data: Array<JobEntity>;
};

export type JobSkill = {
	__typename?: 'JobSkill';
	category?: Maybe<Enum_Jobskill_Category>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<JobSkillRelationResponseCollection>;
	name: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type JobSkillLocalizationsArgs = {
	filters?: InputMaybe<JobSkillFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JobSkillEntity = {
	__typename?: 'JobSkillEntity';
	attributes?: Maybe<JobSkill>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type JobSkillEntityResponse = {
	__typename?: 'JobSkillEntityResponse';
	data?: Maybe<JobSkillEntity>;
};

export type JobSkillEntityResponseCollection = {
	__typename?: 'JobSkillEntityResponseCollection';
	data: Array<JobSkillEntity>;
	meta: ResponseCollectionMeta;
};

export type JobSkillFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<JobSkillFiltersInput>>>;
	category?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<JobSkillFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<JobSkillFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<JobSkillFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobSkillInput = {
	category?: InputMaybe<Enum_Jobskill_Category>;
	name?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type JobSkillRelationResponseCollection = {
	__typename?: 'JobSkillRelationResponseCollection';
	data: Array<JobSkillEntity>;
};

export type Language = {
	__typename?: 'Language';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<LanguageRelationResponseCollection>;
	name: Scalars['String']['output'];
	percentage: Scalars['Int']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LanguageLocalizationsArgs = {
	filters?: InputMaybe<LanguageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LanguageEntity = {
	__typename?: 'LanguageEntity';
	attributes?: Maybe<Language>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type LanguageEntityResponse = {
	__typename?: 'LanguageEntityResponse';
	data?: Maybe<LanguageEntity>;
};

export type LanguageEntityResponseCollection = {
	__typename?: 'LanguageEntityResponseCollection';
	data: Array<LanguageEntity>;
	meta: ResponseCollectionMeta;
};

export type LanguageFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<LanguageFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<LanguageFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<LanguageFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<LanguageFiltersInput>>>;
	percentage?: InputMaybe<IntFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LanguageInput = {
	name?: InputMaybe<Scalars['String']['input']>;
	percentage?: InputMaybe<Scalars['Int']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type LanguageRelationResponseCollection = {
	__typename?: 'LanguageRelationResponseCollection';
	data: Array<LanguageEntity>;
};

export type LegalMention = {
	__typename?: 'LegalMention';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<LegalMentionRelationResponseCollection>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	text: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LegalMentionLocalizationsArgs = {
	publicationState?: InputMaybe<PublicationState>;
};

export type LegalMentionEntity = {
	__typename?: 'LegalMentionEntity';
	attributes?: Maybe<LegalMention>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type LegalMentionEntityResponse = {
	__typename?: 'LegalMentionEntityResponse';
	data?: Maybe<LegalMentionEntity>;
};

export type LegalMentionInput = {
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	text?: InputMaybe<Scalars['String']['input']>;
};

export type LegalMentionRelationResponseCollection = {
	__typename?: 'LegalMentionRelationResponseCollection';
	data: Array<LegalMentionEntity>;
};

export type Mutation = {
	__typename?: 'Mutation';
	changePassword?: Maybe<UsersPermissionsLoginPayload>;
	createHobbyLocalization?: Maybe<HobbyEntityResponse>;
	createJobLocalization?: Maybe<JobEntityResponse>;
	createJobMissionLocalization?: Maybe<JobMissionEntityResponse>;
	createJobSkillLocalization?: Maybe<JobSkillEntityResponse>;
	createLanguageLocalization?: Maybe<LanguageEntityResponse>;
	createLegalMentionLocalization?: Maybe<LegalMentionEntityResponse>;
	createProfileLocalization?: Maybe<ProfileEntityResponse>;
	createProjectLocalization?: Maybe<ProjectEntityResponse>;
	createSchoolLocalization?: Maybe<SchoolEntityResponse>;
	createSchoolProjectLocalization?: Maybe<SchoolProjectEntityResponse>;
	createSkillLocalization?: Maybe<SkillEntityResponse>;
	createUploadFile?: Maybe<UploadFileEntityResponse>;
	createUploadFolder?: Maybe<UploadFolderEntityResponse>;
	createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
	createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	deleteLegalMention?: Maybe<LegalMentionEntityResponse>;
	deleteUploadFile?: Maybe<UploadFileEntityResponse>;
	deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
	deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
	deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
	forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
	login: UsersPermissionsLoginPayload;
	multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
	register: UsersPermissionsLoginPayload;
	removeFile?: Maybe<UploadFileEntityResponse>;
	resetPassword?: Maybe<UsersPermissionsLoginPayload>;
	updateFileInfo: UploadFileEntityResponse;
	updateLegalMention?: Maybe<LegalMentionEntityResponse>;
	updateUploadFile?: Maybe<UploadFileEntityResponse>;
	updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
	updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
	updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
	currentPassword: Scalars['String']['input'];
	password: Scalars['String']['input'];
	passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateHobbyLocalizationArgs = {
	data?: InputMaybe<HobbyInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateJobLocalizationArgs = {
	data?: InputMaybe<JobInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateJobMissionLocalizationArgs = {
	data?: InputMaybe<JobMissionInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateJobSkillLocalizationArgs = {
	data?: InputMaybe<JobSkillInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLanguageLocalizationArgs = {
	data?: InputMaybe<LanguageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateLegalMentionLocalizationArgs = {
	data?: InputMaybe<LegalMentionInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateProfileLocalizationArgs = {
	data?: InputMaybe<ProfileInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateProjectLocalizationArgs = {
	data?: InputMaybe<ProjectInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSchoolLocalizationArgs = {
	data?: InputMaybe<SchoolInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSchoolProjectLocalizationArgs = {
	data?: InputMaybe<SchoolProjectInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateSkillLocalizationArgs = {
	data?: InputMaybe<SkillInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationCreateUploadFileArgs = {
	data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
	data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
};

export type MutationDeleteLegalMentionArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationDeleteUploadFileArgs = {
	id: Scalars['ID']['input'];
};

export type MutationDeleteUploadFolderArgs = {
	id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
	id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
	id: Scalars['ID']['input'];
};

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
	email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
	field?: InputMaybe<Scalars['String']['input']>;
	files: Array<InputMaybe<Scalars['Upload']['input']>>;
	ref?: InputMaybe<Scalars['String']['input']>;
	refId?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
	id: Scalars['ID']['input'];
};

export type MutationResetPasswordArgs = {
	code: Scalars['String']['input'];
	password: Scalars['String']['input'];
	passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateFileInfoArgs = {
	id: Scalars['ID']['input'];
	info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateLegalMentionArgs = {
	data: LegalMentionInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type MutationUpdateUploadFileArgs = {
	data: UploadFileInput;
	id: Scalars['ID']['input'];
};

export type MutationUpdateUploadFolderArgs = {
	data: UploadFolderInput;
	id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
	id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
	id: Scalars['ID']['input'];
};

export type MutationUploadArgs = {
	field?: InputMaybe<Scalars['String']['input']>;
	file: Scalars['Upload']['input'];
	info?: InputMaybe<FileInfoInput>;
	ref?: InputMaybe<Scalars['String']['input']>;
	refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
	__typename?: 'Pagination';
	page: Scalars['Int']['output'];
	pageCount: Scalars['Int']['output'];
	pageSize: Scalars['Int']['output'];
	total: Scalars['Int']['output'];
};

export type PaginationArg = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	pageSize?: InputMaybe<Scalars['Int']['input']>;
	start?: InputMaybe<Scalars['Int']['input']>;
};

export type Profile = {
	__typename?: 'Profile';
	address: Scalars['String']['output'];
	birthYear: Scalars['Int']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	cv: UploadFileEntityResponse;
	description: Scalars['String']['output'];
	email: Scalars['String']['output'];
	firstname: Scalars['String']['output'];
	job: Scalars['String']['output'];
	jobSearch: Scalars['String']['output'];
	lastname: Scalars['String']['output'];
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<ProfileRelationResponseCollection>;
	phone: Scalars['String']['output'];
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug: Scalars['String']['output'];
	socialNetworks?: Maybe<SocialNetworkRelationResponseCollection>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProfileLocalizationsArgs = {
	publicationState?: InputMaybe<PublicationState>;
};

export type ProfileSocialNetworksArgs = {
	filters?: InputMaybe<SocialNetworkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProfileEntity = {
	__typename?: 'ProfileEntity';
	attributes?: Maybe<Profile>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type ProfileEntityResponse = {
	__typename?: 'ProfileEntityResponse';
	data?: Maybe<ProfileEntity>;
};

export type ProfileInput = {
	address?: InputMaybe<Scalars['String']['input']>;
	birthYear?: InputMaybe<Scalars['Int']['input']>;
	cv?: InputMaybe<Scalars['ID']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	firstname?: InputMaybe<Scalars['String']['input']>;
	job?: InputMaybe<Scalars['String']['input']>;
	jobSearch?: InputMaybe<Scalars['String']['input']>;
	lastname?: InputMaybe<Scalars['String']['input']>;
	phone?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	socialNetworks?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProfileRelationResponseCollection = {
	__typename?: 'ProfileRelationResponseCollection';
	data: Array<ProfileEntity>;
};

export type Project = {
	__typename?: 'Project';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description: Scalars['String']['output'];
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<ProjectRelationResponseCollection>;
	mainTechno?: Maybe<TechnoEntityResponse>;
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug: Scalars['String']['output'];
	technos?: Maybe<TechnoRelationResponseCollection>;
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	url?: Maybe<Scalars['String']['output']>;
	urlName?: Maybe<Scalars['String']['output']>;
};

export type ProjectLocalizationsArgs = {
	filters?: InputMaybe<ProjectFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectTechnosArgs = {
	filters?: InputMaybe<TechnoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectEntity = {
	__typename?: 'ProjectEntity';
	attributes?: Maybe<Project>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectEntityResponse = {
	__typename?: 'ProjectEntityResponse';
	data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
	__typename?: 'ProjectEntityResponseCollection';
	data: Array<ProjectEntity>;
	meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<ProjectFiltersInput>;
	mainTechno?: InputMaybe<TechnoFiltersInput>;
	not?: InputMaybe<ProjectFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	technos?: InputMaybe<TechnoFiltersInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	urlName?: InputMaybe<StringFilterInput>;
};

export type ProjectInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	mainTechno?: InputMaybe<Scalars['ID']['input']>;
	picture?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	technos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
	urlName?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectRelationResponseCollection = {
	__typename?: 'ProjectRelationResponseCollection';
	data: Array<ProjectEntity>;
};

export enum PublicationState {
	Live = 'LIVE',
	Preview = 'PREVIEW'
}

export type Query = {
	__typename?: 'Query';
	hobbies?: Maybe<HobbyEntityResponseCollection>;
	hobby?: Maybe<HobbyEntityResponse>;
	i18NLocale?: Maybe<I18NLocaleEntityResponse>;
	i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
	job?: Maybe<JobEntityResponse>;
	jobMission?: Maybe<JobMissionEntityResponse>;
	jobMissions?: Maybe<JobMissionEntityResponseCollection>;
	jobSkill?: Maybe<JobSkillEntityResponse>;
	jobSkills?: Maybe<JobSkillEntityResponseCollection>;
	jobs?: Maybe<JobEntityResponseCollection>;
	language?: Maybe<LanguageEntityResponse>;
	languages?: Maybe<LanguageEntityResponseCollection>;
	legalMention?: Maybe<LegalMentionEntityResponse>;
	me?: Maybe<UsersPermissionsMe>;
	profile?: Maybe<ProfileEntityResponse>;
	project?: Maybe<ProjectEntityResponse>;
	projects?: Maybe<ProjectEntityResponseCollection>;
	school?: Maybe<SchoolEntityResponse>;
	schoolProject?: Maybe<SchoolProjectEntityResponse>;
	schoolProjects?: Maybe<SchoolProjectEntityResponseCollection>;
	schools?: Maybe<SchoolEntityResponseCollection>;
	skill?: Maybe<SkillEntityResponse>;
	skills?: Maybe<SkillEntityResponseCollection>;
	socialNetwork?: Maybe<SocialNetworkEntityResponse>;
	socialNetworks?: Maybe<SocialNetworkEntityResponseCollection>;
	techno?: Maybe<TechnoEntityResponse>;
	technos?: Maybe<TechnoEntityResponseCollection>;
	uploadFile?: Maybe<UploadFileEntityResponse>;
	uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
	uploadFolder?: Maybe<UploadFolderEntityResponse>;
	uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
	usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
	usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
	usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
	usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryHobbiesArgs = {
	filters?: InputMaybe<HobbyFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryHobbyArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryI18NLocaleArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocalesArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryJobArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryJobMissionArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryJobMissionsArgs = {
	filters?: InputMaybe<JobMissionFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryJobSkillArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryJobSkillsArgs = {
	filters?: InputMaybe<JobSkillFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryJobsArgs = {
	filters?: InputMaybe<JobFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLanguageArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryLanguagesArgs = {
	filters?: InputMaybe<LanguageFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryLegalMentionArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	publicationState?: InputMaybe<PublicationState>;
};

export type QueryProfileArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	publicationState?: InputMaybe<PublicationState>;
};

export type QueryProjectArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QueryProjectsArgs = {
	filters?: InputMaybe<ProjectFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySchoolArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySchoolProjectArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySchoolProjectsArgs = {
	filters?: InputMaybe<SchoolProjectFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySchoolsArgs = {
	filters?: InputMaybe<SchoolFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySkillArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type QuerySkillsArgs = {
	filters?: InputMaybe<SkillFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuerySocialNetworkArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type QuerySocialNetworksArgs = {
	filters?: InputMaybe<SocialNetworkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryTechnoArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTechnosArgs = {
	filters?: InputMaybe<TechnoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFileArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFolderArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFoldersArgs = {
	filters?: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsRolesArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsUserArgs = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
	__typename?: 'ResponseCollectionMeta';
	pagination: Pagination;
};

export type School = {
	__typename?: 'School';
	address: Scalars['String']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	diploma: Scalars['String']['output'];
	endYear: Scalars['Int']['output'];
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<SchoolRelationResponseCollection>;
	picture: UploadFileEntityResponse;
	pictureUrl?: Maybe<Scalars['String']['output']>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	schoolName: Scalars['String']['output'];
	slug?: Maybe<Scalars['String']['output']>;
	startYear: Scalars['Int']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SchoolLocalizationsArgs = {
	filters?: InputMaybe<SchoolFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SchoolEntity = {
	__typename?: 'SchoolEntity';
	attributes?: Maybe<School>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type SchoolEntityResponse = {
	__typename?: 'SchoolEntityResponse';
	data?: Maybe<SchoolEntity>;
};

export type SchoolEntityResponseCollection = {
	__typename?: 'SchoolEntityResponseCollection';
	data: Array<SchoolEntity>;
	meta: ResponseCollectionMeta;
};

export type SchoolFiltersInput = {
	address?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<SchoolFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	diploma?: InputMaybe<StringFilterInput>;
	endYear?: InputMaybe<IntFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<SchoolFiltersInput>;
	not?: InputMaybe<SchoolFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SchoolFiltersInput>>>;
	pictureUrl?: InputMaybe<StringFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	schoolName?: InputMaybe<StringFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	startYear?: InputMaybe<IntFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SchoolInput = {
	address?: InputMaybe<Scalars['String']['input']>;
	diploma?: InputMaybe<Scalars['String']['input']>;
	endYear?: InputMaybe<Scalars['Int']['input']>;
	picture?: InputMaybe<Scalars['ID']['input']>;
	pictureUrl?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	schoolName?: InputMaybe<Scalars['String']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	startYear?: InputMaybe<Scalars['Int']['input']>;
};

export type SchoolProject = {
	__typename?: 'SchoolProject';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description: Scalars['String']['output'];
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<SchoolProjectRelationResponseCollection>;
	mainTechno?: Maybe<TechnoEntityResponse>;
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug: Scalars['String']['output'];
	technos?: Maybe<TechnoRelationResponseCollection>;
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	url?: Maybe<Scalars['String']['output']>;
	urlName?: Maybe<Scalars['String']['output']>;
};

export type SchoolProjectLocalizationsArgs = {
	filters?: InputMaybe<SchoolProjectFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SchoolProjectTechnosArgs = {
	filters?: InputMaybe<TechnoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SchoolProjectEntity = {
	__typename?: 'SchoolProjectEntity';
	attributes?: Maybe<SchoolProject>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type SchoolProjectEntityResponse = {
	__typename?: 'SchoolProjectEntityResponse';
	data?: Maybe<SchoolProjectEntity>;
};

export type SchoolProjectEntityResponseCollection = {
	__typename?: 'SchoolProjectEntityResponseCollection';
	data: Array<SchoolProjectEntity>;
	meta: ResponseCollectionMeta;
};

export type SchoolProjectFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<SchoolProjectFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<SchoolProjectFiltersInput>;
	mainTechno?: InputMaybe<TechnoFiltersInput>;
	not?: InputMaybe<SchoolProjectFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SchoolProjectFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	technos?: InputMaybe<TechnoFiltersInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	urlName?: InputMaybe<StringFilterInput>;
};

export type SchoolProjectInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	mainTechno?: InputMaybe<Scalars['ID']['input']>;
	picture?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
	technos?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
	urlName?: InputMaybe<Scalars['String']['input']>;
};

export type SchoolProjectRelationResponseCollection = {
	__typename?: 'SchoolProjectRelationResponseCollection';
	data: Array<SchoolProjectEntity>;
};

export type SchoolRelationResponseCollection = {
	__typename?: 'SchoolRelationResponseCollection';
	data: Array<SchoolEntity>;
};

export type Skill = {
	__typename?: 'Skill';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	locale?: Maybe<Scalars['String']['output']>;
	localizations?: Maybe<SkillRelationResponseCollection>;
	name: Scalars['String']['output'];
	percentage: Scalars['Int']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SkillLocalizationsArgs = {
	filters?: InputMaybe<SkillFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SkillEntity = {
	__typename?: 'SkillEntity';
	attributes?: Maybe<Skill>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type SkillEntityResponse = {
	__typename?: 'SkillEntityResponse';
	data?: Maybe<SkillEntity>;
};

export type SkillEntityResponseCollection = {
	__typename?: 'SkillEntityResponseCollection';
	data: Array<SkillEntity>;
	meta: ResponseCollectionMeta;
};

export type SkillFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<SkillFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<SkillFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
	percentage?: InputMaybe<IntFilterInput>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SkillInput = {
	name?: InputMaybe<Scalars['String']['input']>;
	percentage?: InputMaybe<Scalars['Int']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	slug?: InputMaybe<Scalars['String']['input']>;
};

export type SkillRelationResponseCollection = {
	__typename?: 'SkillRelationResponseCollection';
	data: Array<SkillEntity>;
};

export type SocialNetwork = {
	__typename?: 'SocialNetwork';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	icon?: Maybe<UploadFileEntityResponse>;
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug: Scalars['String']['output'];
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	url: Scalars['String']['output'];
};

export type SocialNetworkEntity = {
	__typename?: 'SocialNetworkEntity';
	attributes?: Maybe<SocialNetwork>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type SocialNetworkEntityResponse = {
	__typename?: 'SocialNetworkEntityResponse';
	data?: Maybe<SocialNetworkEntity>;
};

export type SocialNetworkEntityResponseCollection = {
	__typename?: 'SocialNetworkEntityResponseCollection';
	data: Array<SocialNetworkEntity>;
	meta: ResponseCollectionMeta;
};

export type SocialNetworkFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<SocialNetworkFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<SocialNetworkFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SocialNetworkFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
};

export type SocialNetworkRelationResponseCollection = {
	__typename?: 'SocialNetworkRelationResponseCollection';
	data: Array<SocialNetworkEntity>;
};

export type StringFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	contains?: InputMaybe<Scalars['String']['input']>;
	containsi?: InputMaybe<Scalars['String']['input']>;
	endsWith?: InputMaybe<Scalars['String']['input']>;
	eq?: InputMaybe<Scalars['String']['input']>;
	eqi?: InputMaybe<Scalars['String']['input']>;
	gt?: InputMaybe<Scalars['String']['input']>;
	gte?: InputMaybe<Scalars['String']['input']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	lt?: InputMaybe<Scalars['String']['input']>;
	lte?: InputMaybe<Scalars['String']['input']>;
	ne?: InputMaybe<Scalars['String']['input']>;
	nei?: InputMaybe<Scalars['String']['input']>;
	not?: InputMaybe<StringFilterInput>;
	notContains?: InputMaybe<Scalars['String']['input']>;
	notContainsi?: InputMaybe<Scalars['String']['input']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	notNull?: InputMaybe<Scalars['Boolean']['input']>;
	null?: InputMaybe<Scalars['Boolean']['input']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Techno = {
	__typename?: 'Techno';
	color?: Maybe<Enum_Techno_Color>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	name: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	slug: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TechnoEntity = {
	__typename?: 'TechnoEntity';
	attributes?: Maybe<Techno>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type TechnoEntityResponse = {
	__typename?: 'TechnoEntityResponse';
	data?: Maybe<TechnoEntity>;
};

export type TechnoEntityResponseCollection = {
	__typename?: 'TechnoEntityResponseCollection';
	data: Array<TechnoEntity>;
	meta: ResponseCollectionMeta;
};

export type TechnoFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<TechnoFiltersInput>>>;
	color?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<TechnoFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<TechnoFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TechnoRelationResponseCollection = {
	__typename?: 'TechnoRelationResponseCollection';
	data: Array<TechnoEntity>;
};

export type UploadFile = {
	__typename?: 'UploadFile';
	alternativeText?: Maybe<Scalars['String']['output']>;
	caption?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	ext?: Maybe<Scalars['String']['output']>;
	formats?: Maybe<Scalars['JSON']['output']>;
	hash: Scalars['String']['output'];
	height?: Maybe<Scalars['Int']['output']>;
	mime: Scalars['String']['output'];
	name: Scalars['String']['output'];
	previewUrl?: Maybe<Scalars['String']['output']>;
	provider: Scalars['String']['output'];
	provider_metadata?: Maybe<Scalars['JSON']['output']>;
	related?: Maybe<Array<Maybe<GenericMorph>>>;
	size: Scalars['Float']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	url: Scalars['String']['output'];
	width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
	__typename?: 'UploadFileEntity';
	attributes?: Maybe<UploadFile>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
	__typename?: 'UploadFileEntityResponse';
	data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
	__typename?: 'UploadFileEntityResponseCollection';
	data: Array<UploadFileEntity>;
	meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
	alternativeText?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	caption?: InputMaybe<StringFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	ext?: InputMaybe<StringFilterInput>;
	folder?: InputMaybe<UploadFolderFiltersInput>;
	folderPath?: InputMaybe<StringFilterInput>;
	formats?: InputMaybe<JsonFilterInput>;
	hash?: InputMaybe<StringFilterInput>;
	height?: InputMaybe<IntFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	mime?: InputMaybe<StringFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UploadFileFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
	previewUrl?: InputMaybe<StringFilterInput>;
	provider?: InputMaybe<StringFilterInput>;
	provider_metadata?: InputMaybe<JsonFilterInput>;
	size?: InputMaybe<FloatFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
	alternativeText?: InputMaybe<Scalars['String']['input']>;
	caption?: InputMaybe<Scalars['String']['input']>;
	ext?: InputMaybe<Scalars['String']['input']>;
	folder?: InputMaybe<Scalars['ID']['input']>;
	folderPath?: InputMaybe<Scalars['String']['input']>;
	formats?: InputMaybe<Scalars['JSON']['input']>;
	hash?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Int']['input']>;
	mime?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	previewUrl?: InputMaybe<Scalars['String']['input']>;
	provider?: InputMaybe<Scalars['String']['input']>;
	provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	url?: InputMaybe<Scalars['String']['input']>;
	width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
	__typename?: 'UploadFileRelationResponseCollection';
	data: Array<UploadFileEntity>;
};

export type UploadFolder = {
	__typename?: 'UploadFolder';
	children?: Maybe<UploadFolderRelationResponseCollection>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	files?: Maybe<UploadFileRelationResponseCollection>;
	name: Scalars['String']['output'];
	parent?: Maybe<UploadFolderEntityResponse>;
	path: Scalars['String']['output'];
	pathId: Scalars['Int']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFolderChildrenArgs = {
	filters?: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
	__typename?: 'UploadFolderEntity';
	attributes?: Maybe<UploadFolder>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
	__typename?: 'UploadFolderEntityResponse';
	data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
	__typename?: 'UploadFolderEntityResponseCollection';
	data: Array<UploadFolderEntity>;
	meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
	children?: InputMaybe<UploadFolderFiltersInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	files?: InputMaybe<UploadFileFiltersInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UploadFolderFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
	parent?: InputMaybe<UploadFolderFiltersInput>;
	path?: InputMaybe<StringFilterInput>;
	pathId?: InputMaybe<IntFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
	children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	name?: InputMaybe<Scalars['String']['input']>;
	parent?: InputMaybe<Scalars['ID']['input']>;
	path?: InputMaybe<Scalars['String']['input']>;
	pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
	__typename?: 'UploadFolderRelationResponseCollection';
	data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
	__typename?: 'UsersPermissionsCreateRolePayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
	__typename?: 'UsersPermissionsDeleteRolePayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
	identifier: Scalars['String']['input'];
	password: Scalars['String']['input'];
	provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
	__typename?: 'UsersPermissionsLoginPayload';
	jwt?: Maybe<Scalars['String']['output']>;
	user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
	__typename?: 'UsersPermissionsMe';
	blocked?: Maybe<Scalars['Boolean']['output']>;
	confirmed?: Maybe<Scalars['Boolean']['output']>;
	email?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	role?: Maybe<UsersPermissionsMeRole>;
	username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
	__typename?: 'UsersPermissionsMeRole';
	description?: Maybe<Scalars['String']['output']>;
	id: Scalars['ID']['output'];
	name: Scalars['String']['output'];
	type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
	__typename?: 'UsersPermissionsPasswordPayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
	__typename?: 'UsersPermissionsPermission';
	action: Scalars['String']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	role?: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
	__typename?: 'UsersPermissionsPermissionEntity';
	attributes?: Maybe<UsersPermissionsPermission>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
	action?: InputMaybe<StringFilterInput>;
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
	__typename?: 'UsersPermissionsPermissionRelationResponseCollection';
	data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
	email: Scalars['String']['input'];
	password: Scalars['String']['input'];
	username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
	__typename?: 'UsersPermissionsRole';
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
	type?: Maybe<Scalars['String']['output']>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
	__typename?: 'UsersPermissionsRoleEntity';
	attributes?: Maybe<UsersPermissionsRole>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
	__typename?: 'UsersPermissionsRoleEntityResponse';
	data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
	__typename?: 'UsersPermissionsRoleEntityResponseCollection';
	data: Array<UsersPermissionsRoleEntity>;
	meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
	permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	type?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	type?: InputMaybe<Scalars['String']['input']>;
	users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
	__typename?: 'UsersPermissionsUpdateRolePayload';
	ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
	__typename?: 'UsersPermissionsUser';
	blocked?: Maybe<Scalars['Boolean']['output']>;
	confirmed?: Maybe<Scalars['Boolean']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	email: Scalars['String']['output'];
	provider?: Maybe<Scalars['String']['output']>;
	role?: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
	__typename?: 'UsersPermissionsUserEntity';
	attributes?: Maybe<UsersPermissionsUser>;
	id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
	__typename?: 'UsersPermissionsUserEntityResponse';
	data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
	__typename?: 'UsersPermissionsUserEntityResponseCollection';
	data: Array<UsersPermissionsUserEntity>;
	meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	blocked?: InputMaybe<BooleanFilterInput>;
	confirmationToken?: InputMaybe<StringFilterInput>;
	confirmed?: InputMaybe<BooleanFilterInput>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	email?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	not?: InputMaybe<UsersPermissionsUserFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
	password?: InputMaybe<StringFilterInput>;
	provider?: InputMaybe<StringFilterInput>;
	resetPasswordToken?: InputMaybe<StringFilterInput>;
	role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
	blocked?: InputMaybe<Scalars['Boolean']['input']>;
	confirmationToken?: InputMaybe<Scalars['String']['input']>;
	confirmed?: InputMaybe<Scalars['Boolean']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	password?: InputMaybe<Scalars['String']['input']>;
	provider?: InputMaybe<Scalars['String']['input']>;
	resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
	role?: InputMaybe<Scalars['ID']['input']>;
	username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
	__typename?: 'UsersPermissionsUserRelationResponseCollection';
	data: Array<UsersPermissionsUserEntity>;
};

export type GetHobbiesQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetHobbiesQuery = {
	__typename?: 'Query';
	hobbies?: {
		__typename?: 'HobbyEntityResponseCollection';
		data: Array<{
			__typename?: 'HobbyEntity';
			attributes?: {
				__typename?: 'Hobby';
				name: string;
				icon: string;
				description?: string | null;
				slug?: string | null;
			} | null;
		}>;
	} | null;
};

export type GetJobsQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetJobsQuery = {
	__typename?: 'Query';
	jobs?: {
		__typename?: 'JobEntityResponseCollection';
		data: Array<{
			__typename?: 'JobEntity';
			attributes?: {
				__typename?: 'Job';
				title: string;
				location: string;
				startDate: any;
				endDate?: any | null;
				slug?: string | null;
				pictureUrl: string;
				companyName: string;
				picture?: {
					__typename?: 'UploadFileEntityResponse';
					data?: {
						__typename?: 'UploadFileEntity';
						attributes?: { __typename?: 'UploadFile'; name: string; url: string } | null;
					} | null;
				} | null;
				jobMissions?: {
					__typename?: 'JobMissionRelationResponseCollection';
					data: Array<{
						__typename?: 'JobMissionEntity';
						attributes?: {
							__typename?: 'JobMission';
							title: string;
							url?: string | null;
							order: number;
							urlName?: string | null;
							slug?: string | null;
						} | null;
					}>;
				} | null;
				jobSkills?: {
					__typename?: 'JobSkillRelationResponseCollection';
					data: Array<{
						__typename?: 'JobSkillEntity';
						attributes?: {
							__typename?: 'JobSkill';
							name: string;
							slug?: string | null;
							category?: Enum_Jobskill_Category | null;
						} | null;
					}>;
				} | null;
			} | null;
		}>;
	} | null;
};

export type GetLanguagesQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetLanguagesQuery = {
	__typename?: 'Query';
	languages?: {
		__typename?: 'LanguageEntityResponseCollection';
		data: Array<{
			__typename?: 'LanguageEntity';
			attributes?: {
				__typename?: 'Language';
				name: string;
				percentage: number;
				slug?: string | null;
			} | null;
		}>;
	} | null;
};

export type GetLegalMentionQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetLegalMentionQuery = {
	__typename?: 'Query';
	legalMention?: {
		__typename?: 'LegalMentionEntityResponse';
		data?: {
			__typename?: 'LegalMentionEntity';
			attributes?: { __typename?: 'LegalMention'; text: string } | null;
		} | null;
	} | null;
};

export type GetProfileQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetProfileQuery = {
	__typename?: 'Query';
	profile?: {
		__typename?: 'ProfileEntityResponse';
		data?: {
			__typename?: 'ProfileEntity';
			attributes?: {
				__typename?: 'Profile';
				slug: string;
				firstname: string;
				lastname: string;
				address: string;
				email: string;
				phone: string;
				description: string;
				job: string;
				birthYear: number;
				jobSearch: string;
				picture: {
					__typename?: 'UploadFileEntityResponse';
					data?: {
						__typename?: 'UploadFileEntity';
						attributes?: { __typename?: 'UploadFile'; url: string; name: string } | null;
					} | null;
				};
				cv: {
					__typename?: 'UploadFileEntityResponse';
					data?: {
						__typename?: 'UploadFileEntity';
						attributes?: { __typename?: 'UploadFile'; url: string; name: string } | null;
					} | null;
				};
				socialNetworks?: {
					__typename?: 'SocialNetworkRelationResponseCollection';
					data: Array<{
						__typename?: 'SocialNetworkEntity';
						attributes?: {
							__typename?: 'SocialNetwork';
							title: string;
							url: string;
							icon?: {
								__typename?: 'UploadFileEntityResponse';
								data?: {
									__typename?: 'UploadFileEntity';
									attributes?: { __typename?: 'UploadFile'; url: string; name: string } | null;
								} | null;
							} | null;
						} | null;
					}>;
				} | null;
			} | null;
		} | null;
	} | null;
};

export type GetProjectsQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetProjectsQuery = {
	__typename?: 'Query';
	projects?: {
		__typename?: 'ProjectEntityResponseCollection';
		data: Array<{
			__typename?: 'ProjectEntity';
			attributes?: {
				__typename?: 'Project';
				slug: string;
				url?: string | null;
				urlName?: string | null;
				title: string;
				description: string;
				mainTechno?: {
					__typename?: 'TechnoEntityResponse';
					data?: {
						__typename?: 'TechnoEntity';
						attributes?: {
							__typename?: 'Techno';
							name: string;
							slug: string;
							color?: Enum_Techno_Color | null;
						} | null;
					} | null;
				} | null;
				technos?: {
					__typename?: 'TechnoRelationResponseCollection';
					data: Array<{
						__typename?: 'TechnoEntity';
						attributes?: {
							__typename?: 'Techno';
							name: string;
							slug: string;
							color?: Enum_Techno_Color | null;
						} | null;
					}>;
				} | null;
				picture: {
					__typename?: 'UploadFileEntityResponse';
					data?: {
						__typename?: 'UploadFileEntity';
						attributes?: { __typename?: 'UploadFile'; url: string; name: string } | null;
					} | null;
				};
			} | null;
		}>;
	} | null;
};

export type GetSchoolsProjectsQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSchoolsProjectsQuery = {
	__typename?: 'Query';
	schoolProjects?: {
		__typename?: 'SchoolProjectEntityResponseCollection';
		data: Array<{
			__typename?: 'SchoolProjectEntity';
			attributes?: {
				__typename?: 'SchoolProject';
				slug: string;
				url?: string | null;
				urlName?: string | null;
				title: string;
				description: string;
				mainTechno?: {
					__typename?: 'TechnoEntityResponse';
					data?: {
						__typename?: 'TechnoEntity';
						attributes?: {
							__typename?: 'Techno';
							name: string;
							slug: string;
							color?: Enum_Techno_Color | null;
						} | null;
					} | null;
				} | null;
				technos?: {
					__typename?: 'TechnoRelationResponseCollection';
					data: Array<{
						__typename?: 'TechnoEntity';
						attributes?: {
							__typename?: 'Techno';
							name: string;
							slug: string;
							color?: Enum_Techno_Color | null;
						} | null;
					}>;
				} | null;
				picture: {
					__typename?: 'UploadFileEntityResponse';
					data?: {
						__typename?: 'UploadFileEntity';
						attributes?: { __typename?: 'UploadFile'; url: string; name: string } | null;
					} | null;
				};
			} | null;
		}>;
	} | null;
};

export type GetSchoolsQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSchoolsQuery = {
	__typename?: 'Query';
	schools?: {
		__typename?: 'SchoolEntityResponseCollection';
		data: Array<{
			__typename?: 'SchoolEntity';
			attributes?: {
				__typename?: 'School';
				diploma: string;
				address: string;
				startYear: number;
				endYear: number;
				slug?: string | null;
				schoolName: string;
				picture: {
					__typename?: 'UploadFileEntityResponse';
					data?: {
						__typename?: 'UploadFileEntity';
						attributes?: { __typename?: 'UploadFile'; url: string; name: string } | null;
					} | null;
				};
			} | null;
		}>;
	} | null;
};

export type GetSkillsQueryVariables = Exact<{
	locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;

export type GetSkillsQuery = {
	__typename?: 'Query';
	skills?: {
		__typename?: 'SkillEntityResponseCollection';
		data: Array<{
			__typename?: 'SkillEntity';
			attributes?: {
				__typename?: 'Skill';
				name: string;
				percentage: number;
				slug?: string | null;
			} | null;
		}>;
	} | null;
};
