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
	Date: any;
	DateTime: any;
	I18NLocaleCode: any;
	JSON: any;
	Upload: any;
};

export type BooleanFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	contains?: InputMaybe<Scalars['Boolean']>;
	containsi?: InputMaybe<Scalars['Boolean']>;
	endsWith?: InputMaybe<Scalars['Boolean']>;
	eq?: InputMaybe<Scalars['Boolean']>;
	eqi?: InputMaybe<Scalars['Boolean']>;
	gt?: InputMaybe<Scalars['Boolean']>;
	gte?: InputMaybe<Scalars['Boolean']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	lt?: InputMaybe<Scalars['Boolean']>;
	lte?: InputMaybe<Scalars['Boolean']>;
	ne?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<BooleanFilterInput>;
	notContains?: InputMaybe<Scalars['Boolean']>;
	notContainsi?: InputMaybe<Scalars['Boolean']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type DateFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
	contains?: InputMaybe<Scalars['Date']>;
	containsi?: InputMaybe<Scalars['Date']>;
	endsWith?: InputMaybe<Scalars['Date']>;
	eq?: InputMaybe<Scalars['Date']>;
	eqi?: InputMaybe<Scalars['Date']>;
	gt?: InputMaybe<Scalars['Date']>;
	gte?: InputMaybe<Scalars['Date']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
	lt?: InputMaybe<Scalars['Date']>;
	lte?: InputMaybe<Scalars['Date']>;
	ne?: InputMaybe<Scalars['Date']>;
	not?: InputMaybe<DateFilterInput>;
	notContains?: InputMaybe<Scalars['Date']>;
	notContainsi?: InputMaybe<Scalars['Date']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
	startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	contains?: InputMaybe<Scalars['DateTime']>;
	containsi?: InputMaybe<Scalars['DateTime']>;
	endsWith?: InputMaybe<Scalars['DateTime']>;
	eq?: InputMaybe<Scalars['DateTime']>;
	eqi?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	ne?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<DateTimeFilterInput>;
	notContains?: InputMaybe<Scalars['DateTime']>;
	notContainsi?: InputMaybe<Scalars['DateTime']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
	startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Techno_Color {
	Blue = 'blue',
	DarkGreen = 'dark_green',
	Green = 'green',
	Orange = 'orange',
	Pink = 'pink',
	Red = 'red'
}

export type FileInfoInput = {
	alternativeText?: InputMaybe<Scalars['String']>;
	caption?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	contains?: InputMaybe<Scalars['Float']>;
	containsi?: InputMaybe<Scalars['Float']>;
	endsWith?: InputMaybe<Scalars['Float']>;
	eq?: InputMaybe<Scalars['Float']>;
	eqi?: InputMaybe<Scalars['Float']>;
	gt?: InputMaybe<Scalars['Float']>;
	gte?: InputMaybe<Scalars['Float']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	lt?: InputMaybe<Scalars['Float']>;
	lte?: InputMaybe<Scalars['Float']>;
	ne?: InputMaybe<Scalars['Float']>;
	not?: InputMaybe<FloatFilterInput>;
	notContains?: InputMaybe<Scalars['Float']>;
	notContainsi?: InputMaybe<Scalars['Float']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
	startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph =
	| I18NLocale
	| Icon
	| Interest
	| Job
	| JobMission
	| JobSkill
	| Language
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

export type I18NLocale = {
	__typename?: 'I18NLocale';
	code?: Maybe<Scalars['String']>;
	createdAt?: Maybe<Scalars['DateTime']>;
	name?: Maybe<Scalars['String']>;
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
	__typename?: 'I18NLocaleEntity';
	attributes?: Maybe<I18NLocale>;
	id?: Maybe<Scalars['ID']>;
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
	and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	contains?: InputMaybe<Scalars['ID']>;
	containsi?: InputMaybe<Scalars['ID']>;
	endsWith?: InputMaybe<Scalars['ID']>;
	eq?: InputMaybe<Scalars['ID']>;
	eqi?: InputMaybe<Scalars['ID']>;
	gt?: InputMaybe<Scalars['ID']>;
	gte?: InputMaybe<Scalars['ID']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	lt?: InputMaybe<Scalars['ID']>;
	lte?: InputMaybe<Scalars['ID']>;
	ne?: InputMaybe<Scalars['ID']>;
	not?: InputMaybe<IdFilterInput>;
	notContains?: InputMaybe<Scalars['ID']>;
	notContainsi?: InputMaybe<Scalars['ID']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	startsWith?: InputMaybe<Scalars['ID']>;
};

export type Icon = {
	__typename?: 'Icon';
	createdAt?: Maybe<Scalars['DateTime']>;
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<IconRelationResponseCollection>;
	media: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
};

export type IconLocalizationsArgs = {
	filters?: InputMaybe<IconFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IconEntity = {
	__typename?: 'IconEntity';
	attributes?: Maybe<Icon>;
	id?: Maybe<Scalars['ID']>;
};

export type IconEntityResponse = {
	__typename?: 'IconEntityResponse';
	data?: Maybe<IconEntity>;
};

export type IconEntityResponseCollection = {
	__typename?: 'IconEntityResponseCollection';
	data: Array<IconEntity>;
	meta: ResponseCollectionMeta;
};

export type IconFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<IconFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<IconFiltersInput>;
	not?: InputMaybe<IconFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<IconFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
};

export type IconInput = {
	media?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	title?: InputMaybe<Scalars['String']>;
	url?: InputMaybe<Scalars['String']>;
};

export type IconRelationResponseCollection = {
	__typename?: 'IconRelationResponseCollection';
	data: Array<IconEntity>;
};

export type IntFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	contains?: InputMaybe<Scalars['Int']>;
	containsi?: InputMaybe<Scalars['Int']>;
	endsWith?: InputMaybe<Scalars['Int']>;
	eq?: InputMaybe<Scalars['Int']>;
	eqi?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	ne?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<IntFilterInput>;
	notContains?: InputMaybe<Scalars['Int']>;
	notContainsi?: InputMaybe<Scalars['Int']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
	startsWith?: InputMaybe<Scalars['Int']>;
};

export type Interest = {
	__typename?: 'Interest';
	createdAt?: Maybe<Scalars['DateTime']>;
	icon?: Maybe<UploadFileEntityResponse>;
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<InterestRelationResponseCollection>;
	name: Scalars['String'];
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InterestLocalizationsArgs = {
	filters?: InputMaybe<InterestFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InterestEntity = {
	__typename?: 'InterestEntity';
	attributes?: Maybe<Interest>;
	id?: Maybe<Scalars['ID']>;
};

export type InterestEntityResponse = {
	__typename?: 'InterestEntityResponse';
	data?: Maybe<InterestEntity>;
};

export type InterestEntityResponseCollection = {
	__typename?: 'InterestEntityResponseCollection';
	data: Array<InterestEntity>;
	meta: ResponseCollectionMeta;
};

export type InterestFiltersInput = {
	and?: InputMaybe<Array<InputMaybe<InterestFiltersInput>>>;
	createdAt?: InputMaybe<DateTimeFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<InterestFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<InterestFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<InterestFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InterestInput = {
	icon?: InputMaybe<Scalars['ID']>;
	name?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type InterestRelationResponseCollection = {
	__typename?: 'InterestRelationResponseCollection';
	data: Array<InterestEntity>;
};

export type JsonFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	contains?: InputMaybe<Scalars['JSON']>;
	containsi?: InputMaybe<Scalars['JSON']>;
	endsWith?: InputMaybe<Scalars['JSON']>;
	eq?: InputMaybe<Scalars['JSON']>;
	eqi?: InputMaybe<Scalars['JSON']>;
	gt?: InputMaybe<Scalars['JSON']>;
	gte?: InputMaybe<Scalars['JSON']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	lt?: InputMaybe<Scalars['JSON']>;
	lte?: InputMaybe<Scalars['JSON']>;
	ne?: InputMaybe<Scalars['JSON']>;
	not?: InputMaybe<JsonFilterInput>;
	notContains?: InputMaybe<Scalars['JSON']>;
	notContainsi?: InputMaybe<Scalars['JSON']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
	startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Job = {
	__typename?: 'Job';
	createdAt?: Maybe<Scalars['DateTime']>;
	endDate?: Maybe<Scalars['Date']>;
	jobMissions?: Maybe<JobMissionRelationResponseCollection>;
	jobSkills?: Maybe<JobSkillRelationResponseCollection>;
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<JobRelationResponseCollection>;
	location: Scalars['String'];
	picture?: Maybe<UploadFileEntityResponse>;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	startDate: Scalars['Date'];
	title: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobJobMissionsArgs = {
	filters?: InputMaybe<JobMissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JobJobSkillsArgs = {
	filters?: InputMaybe<JobSkillFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JobLocalizationsArgs = {
	filters?: InputMaybe<JobFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JobEntity = {
	__typename?: 'JobEntity';
	attributes?: Maybe<Job>;
	id?: Maybe<Scalars['ID']>;
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
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	startDate?: InputMaybe<DateFilterInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobInput = {
	endDate?: InputMaybe<Scalars['Date']>;
	jobMissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	jobSkills?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	location?: InputMaybe<Scalars['String']>;
	picture?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	startDate?: InputMaybe<Scalars['Date']>;
	title?: InputMaybe<Scalars['String']>;
};

export type JobMission = {
	__typename?: 'JobMission';
	createdAt?: Maybe<Scalars['DateTime']>;
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<JobMissionRelationResponseCollection>;
	order: Scalars['Int'];
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
	urlName?: Maybe<Scalars['String']>;
};

export type JobMissionLocalizationsArgs = {
	filters?: InputMaybe<JobMissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JobMissionEntity = {
	__typename?: 'JobMissionEntity';
	attributes?: Maybe<JobMission>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	urlName?: InputMaybe<StringFilterInput>;
};

export type JobMissionInput = {
	order?: InputMaybe<Scalars['Int']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	title?: InputMaybe<Scalars['String']>;
	url?: InputMaybe<Scalars['String']>;
	urlName?: InputMaybe<Scalars['String']>;
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
	createdAt?: Maybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<JobSkillRelationResponseCollection>;
	name: Scalars['String'];
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JobSkillLocalizationsArgs = {
	filters?: InputMaybe<JobSkillFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type JobSkillEntity = {
	__typename?: 'JobSkillEntity';
	attributes?: Maybe<JobSkill>;
	id?: Maybe<Scalars['ID']>;
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
	createdAt?: InputMaybe<DateTimeFilterInput>;
	description?: InputMaybe<StringFilterInput>;
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<JobSkillFiltersInput>;
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<JobSkillFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<JobSkillFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobSkillInput = {
	description?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type JobSkillRelationResponseCollection = {
	__typename?: 'JobSkillRelationResponseCollection';
	data: Array<JobSkillEntity>;
};

export type Language = {
	__typename?: 'Language';
	createdAt?: Maybe<Scalars['DateTime']>;
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<LanguageRelationResponseCollection>;
	name: Scalars['String'];
	percentage: Scalars['Int'];
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageLocalizationsArgs = {
	filters?: InputMaybe<LanguageFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LanguageEntity = {
	__typename?: 'LanguageEntity';
	attributes?: Maybe<Language>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LanguageInput = {
	name?: InputMaybe<Scalars['String']>;
	percentage?: InputMaybe<Scalars['Int']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type LanguageRelationResponseCollection = {
	__typename?: 'LanguageRelationResponseCollection';
	data: Array<LanguageEntity>;
};

export type Mutation = {
	__typename?: 'Mutation';
	/** Change user password. Confirm with the current password. */
	changePassword?: Maybe<UsersPermissionsLoginPayload>;
	createIconLocalization?: Maybe<IconEntityResponse>;
	createInterestLocalization?: Maybe<InterestEntityResponse>;
	createJobLocalization?: Maybe<JobEntityResponse>;
	createJobMissionLocalization?: Maybe<JobMissionEntityResponse>;
	createJobSkillLocalization?: Maybe<JobSkillEntityResponse>;
	createLanguageLocalization?: Maybe<LanguageEntityResponse>;
	createProfileLocalization?: Maybe<ProfileEntityResponse>;
	createProjectLocalization?: Maybe<ProjectEntityResponse>;
	createSchoolLocalization?: Maybe<SchoolEntityResponse>;
	createSchoolProjectLocalization?: Maybe<SchoolProjectEntityResponse>;
	createSkillLocalization?: Maybe<SkillEntityResponse>;
	createUploadFile?: Maybe<UploadFileEntityResponse>;
	createUploadFolder?: Maybe<UploadFolderEntityResponse>;
	/** Create a new role */
	createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
	/** Create a new user */
	createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	deleteUploadFile?: Maybe<UploadFileEntityResponse>;
	deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
	/** Delete an existing role */
	deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
	/** Delete an existing user */
	deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	/** Confirm an email users email address */
	emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
	/** Request a reset password token */
	forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
	login: UsersPermissionsLoginPayload;
	multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
	/** Register a user */
	register: UsersPermissionsLoginPayload;
	removeFile?: Maybe<UploadFileEntityResponse>;
	/** Reset user password. Confirm with a code (resetToken from forgotPassword) */
	resetPassword?: Maybe<UsersPermissionsLoginPayload>;
	updateFileInfo: UploadFileEntityResponse;
	updateUploadFile?: Maybe<UploadFileEntityResponse>;
	updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
	/** Update an existing role */
	updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
	/** Update an existing user */
	updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
	currentPassword: Scalars['String'];
	password: Scalars['String'];
	passwordConfirmation: Scalars['String'];
};

export type MutationCreateIconLocalizationArgs = {
	data?: InputMaybe<IconInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateInterestLocalizationArgs = {
	data?: InputMaybe<InterestInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobLocalizationArgs = {
	data?: InputMaybe<JobInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobMissionLocalizationArgs = {
	data?: InputMaybe<JobMissionInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobSkillLocalizationArgs = {
	data?: InputMaybe<JobSkillInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLanguageLocalizationArgs = {
	data?: InputMaybe<LanguageInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateProfileLocalizationArgs = {
	data?: InputMaybe<ProfileInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateProjectLocalizationArgs = {
	data?: InputMaybe<ProjectInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSchoolLocalizationArgs = {
	data?: InputMaybe<SchoolInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSchoolProjectLocalizationArgs = {
	data?: InputMaybe<SchoolProjectInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSkillLocalizationArgs = {
	data?: InputMaybe<SkillInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
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

export type MutationDeleteUploadFileArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUploadFolderArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
	id: Scalars['ID'];
};

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
	email: Scalars['String'];
};

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
	field?: InputMaybe<Scalars['String']>;
	files: Array<InputMaybe<Scalars['Upload']>>;
	ref?: InputMaybe<Scalars['String']>;
	refId?: InputMaybe<Scalars['ID']>;
};

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
	id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
	code: Scalars['String'];
	password: Scalars['String'];
	passwordConfirmation: Scalars['String'];
};

export type MutationUpdateFileInfoArgs = {
	id: Scalars['ID'];
	info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateUploadFileArgs = {
	data: UploadFileInput;
	id: Scalars['ID'];
};

export type MutationUpdateUploadFolderArgs = {
	data: UploadFolderInput;
	id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
	id: Scalars['ID'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
	id: Scalars['ID'];
};

export type MutationUploadArgs = {
	field?: InputMaybe<Scalars['String']>;
	file: Scalars['Upload'];
	info?: InputMaybe<FileInfoInput>;
	ref?: InputMaybe<Scalars['String']>;
	refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
	__typename?: 'Pagination';
	page: Scalars['Int'];
	pageCount: Scalars['Int'];
	pageSize: Scalars['Int'];
	total: Scalars['Int'];
};

export type PaginationArg = {
	limit?: InputMaybe<Scalars['Int']>;
	page?: InputMaybe<Scalars['Int']>;
	pageSize?: InputMaybe<Scalars['Int']>;
	start?: InputMaybe<Scalars['Int']>;
};

export type Profile = {
	__typename?: 'Profile';
	address: Scalars['String'];
	birthYear: Scalars['Int'];
	createdAt?: Maybe<Scalars['DateTime']>;
	cv: UploadFileEntityResponse;
	description: Scalars['String'];
	email: Scalars['String'];
	firstname: Scalars['String'];
	job: Scalars['String'];
	jobSearch: Scalars['String'];
	lastname: Scalars['String'];
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<ProfileRelationResponseCollection>;
	phone: Scalars['String'];
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	socialNetworks?: Maybe<SocialNetworkRelationResponseCollection>;
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProfileLocalizationsArgs = {
	publicationState?: InputMaybe<PublicationState>;
};

export type ProfileSocialNetworksArgs = {
	filters?: InputMaybe<SocialNetworkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProfileEntity = {
	__typename?: 'ProfileEntity';
	attributes?: Maybe<Profile>;
	id?: Maybe<Scalars['ID']>;
};

export type ProfileEntityResponse = {
	__typename?: 'ProfileEntityResponse';
	data?: Maybe<ProfileEntity>;
};

export type ProfileInput = {
	address?: InputMaybe<Scalars['String']>;
	birthYear?: InputMaybe<Scalars['Int']>;
	cv?: InputMaybe<Scalars['ID']>;
	description?: InputMaybe<Scalars['String']>;
	email?: InputMaybe<Scalars['String']>;
	firstname?: InputMaybe<Scalars['String']>;
	job?: InputMaybe<Scalars['String']>;
	jobSearch?: InputMaybe<Scalars['String']>;
	lastname?: InputMaybe<Scalars['String']>;
	phone?: InputMaybe<Scalars['String']>;
	picture?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	socialNetworks?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ProfileRelationResponseCollection = {
	__typename?: 'ProfileRelationResponseCollection';
	data: Array<ProfileEntity>;
};

export type Project = {
	__typename?: 'Project';
	createdAt?: Maybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<ProjectRelationResponseCollection>;
	mainTechno?: Maybe<TechnoEntityResponse>;
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	technos?: Maybe<TechnoRelationResponseCollection>;
	title: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
	urlName: Scalars['String'];
};

export type ProjectLocalizationsArgs = {
	filters?: InputMaybe<ProjectFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectTechnosArgs = {
	filters?: InputMaybe<TechnoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectEntity = {
	__typename?: 'ProjectEntity';
	attributes?: Maybe<Project>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	technos?: InputMaybe<TechnoFiltersInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	urlName?: InputMaybe<StringFilterInput>;
};

export type ProjectInput = {
	description?: InputMaybe<Scalars['String']>;
	mainTechno?: InputMaybe<Scalars['ID']>;
	picture?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	technos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	title?: InputMaybe<Scalars['String']>;
	url?: InputMaybe<Scalars['String']>;
	urlName?: InputMaybe<Scalars['String']>;
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
	i18NLocale?: Maybe<I18NLocaleEntityResponse>;
	i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
	icon?: Maybe<IconEntityResponse>;
	icons?: Maybe<IconEntityResponseCollection>;
	interest?: Maybe<InterestEntityResponse>;
	interests?: Maybe<InterestEntityResponseCollection>;
	job?: Maybe<JobEntityResponse>;
	jobMission?: Maybe<JobMissionEntityResponse>;
	jobMissions?: Maybe<JobMissionEntityResponseCollection>;
	jobSkill?: Maybe<JobSkillEntityResponse>;
	jobSkills?: Maybe<JobSkillEntityResponseCollection>;
	jobs?: Maybe<JobEntityResponseCollection>;
	language?: Maybe<LanguageEntityResponse>;
	languages?: Maybe<LanguageEntityResponseCollection>;
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

export type QueryI18NLocaleArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryI18NLocalesArgs = {
	filters?: InputMaybe<I18NLocaleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryIconArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryIconsArgs = {
	filters?: InputMaybe<IconFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryInterestArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryInterestsArgs = {
	filters?: InputMaybe<InterestFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryJobArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryJobMissionArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryJobMissionsArgs = {
	filters?: InputMaybe<JobMissionFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryJobSkillArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryJobSkillsArgs = {
	filters?: InputMaybe<JobSkillFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryJobsArgs = {
	filters?: InputMaybe<JobFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryLanguageArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryLanguagesArgs = {
	filters?: InputMaybe<LanguageFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryProfileArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	publicationState?: InputMaybe<PublicationState>;
};

export type QueryProjectArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QueryProjectsArgs = {
	filters?: InputMaybe<ProjectFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySchoolArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySchoolProjectArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySchoolProjectsArgs = {
	filters?: InputMaybe<SchoolProjectFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySchoolsArgs = {
	filters?: InputMaybe<SchoolFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySkillArgs = {
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type QuerySkillsArgs = {
	filters?: InputMaybe<SkillFiltersInput>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QuerySocialNetworkArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QuerySocialNetworksArgs = {
	filters?: InputMaybe<SocialNetworkFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryTechnoArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryTechnosArgs = {
	filters?: InputMaybe<TechnoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFileArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUploadFolderArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFoldersArgs = {
	filters?: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsRolesArgs = {
	filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type QueryUsersPermissionsUserArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryUsersPermissionsUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
	__typename?: 'ResponseCollectionMeta';
	pagination: Pagination;
};

export type School = {
	__typename?: 'School';
	address: Scalars['String'];
	createdAt?: Maybe<Scalars['DateTime']>;
	diploma: Scalars['String'];
	endYear: Scalars['Int'];
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<SchoolRelationResponseCollection>;
	name: Scalars['String'];
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	startYear: Scalars['Int'];
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolLocalizationsArgs = {
	filters?: InputMaybe<SchoolFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SchoolEntity = {
	__typename?: 'SchoolEntity';
	attributes?: Maybe<School>;
	id?: Maybe<Scalars['ID']>;
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
	name?: InputMaybe<StringFilterInput>;
	not?: InputMaybe<SchoolFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SchoolFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	startYear?: InputMaybe<IntFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SchoolInput = {
	address?: InputMaybe<Scalars['String']>;
	diploma?: InputMaybe<Scalars['String']>;
	endYear?: InputMaybe<Scalars['Int']>;
	name?: InputMaybe<Scalars['String']>;
	picture?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	startYear?: InputMaybe<Scalars['Int']>;
};

export type SchoolProject = {
	__typename?: 'SchoolProject';
	createdAt?: Maybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<SchoolProjectRelationResponseCollection>;
	mainTechno?: Maybe<TechnoEntityResponse>;
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	technos?: Maybe<TechnoRelationResponseCollection>;
	title: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
	urlName: Scalars['String'];
};

export type SchoolProjectLocalizationsArgs = {
	filters?: InputMaybe<SchoolProjectFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SchoolProjectTechnosArgs = {
	filters?: InputMaybe<TechnoFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SchoolProjectEntity = {
	__typename?: 'SchoolProjectEntity';
	attributes?: Maybe<SchoolProject>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	technos?: InputMaybe<TechnoFiltersInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	urlName?: InputMaybe<StringFilterInput>;
};

export type SchoolProjectInput = {
	description?: InputMaybe<Scalars['String']>;
	mainTechno?: InputMaybe<Scalars['ID']>;
	picture?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	technos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	title?: InputMaybe<Scalars['String']>;
	url?: InputMaybe<Scalars['String']>;
	urlName?: InputMaybe<Scalars['String']>;
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
	createdAt?: Maybe<Scalars['DateTime']>;
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<SkillRelationResponseCollection>;
	name: Scalars['String'];
	percentage: Scalars['Int'];
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SkillLocalizationsArgs = {
	filters?: InputMaybe<SkillFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	publicationState?: InputMaybe<PublicationState>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SkillEntity = {
	__typename?: 'SkillEntity';
	attributes?: Maybe<Skill>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SkillInput = {
	name?: InputMaybe<Scalars['String']>;
	percentage?: InputMaybe<Scalars['Int']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type SkillRelationResponseCollection = {
	__typename?: 'SkillRelationResponseCollection';
	data: Array<SkillEntity>;
};

export type SocialNetwork = {
	__typename?: 'SocialNetwork';
	createdAt?: Maybe<Scalars['DateTime']>;
	icon?: Maybe<UploadFileEntityResponse>;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	title: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
};

export type SocialNetworkEntity = {
	__typename?: 'SocialNetworkEntity';
	attributes?: Maybe<SocialNetwork>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
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
	and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	contains?: InputMaybe<Scalars['String']>;
	containsi?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	eq?: InputMaybe<Scalars['String']>;
	eqi?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	ne?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<StringFilterInput>;
	notContains?: InputMaybe<Scalars['String']>;
	notContainsi?: InputMaybe<Scalars['String']>;
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	notNull?: InputMaybe<Scalars['Boolean']>;
	null?: InputMaybe<Scalars['Boolean']>;
	or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type Techno = {
	__typename?: 'Techno';
	color?: Maybe<Enum_Techno_Color>;
	createdAt?: Maybe<Scalars['DateTime']>;
	name: Scalars['String'];
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TechnoEntity = {
	__typename?: 'TechnoEntity';
	attributes?: Maybe<Techno>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TechnoRelationResponseCollection = {
	__typename?: 'TechnoRelationResponseCollection';
	data: Array<TechnoEntity>;
};

export type UploadFile = {
	__typename?: 'UploadFile';
	alternativeText?: Maybe<Scalars['String']>;
	caption?: Maybe<Scalars['String']>;
	createdAt?: Maybe<Scalars['DateTime']>;
	ext?: Maybe<Scalars['String']>;
	formats?: Maybe<Scalars['JSON']>;
	hash: Scalars['String'];
	height?: Maybe<Scalars['Int']>;
	mime: Scalars['String'];
	name: Scalars['String'];
	previewUrl?: Maybe<Scalars['String']>;
	provider: Scalars['String'];
	provider_metadata?: Maybe<Scalars['JSON']>;
	related?: Maybe<Array<Maybe<GenericMorph>>>;
	size: Scalars['Float'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
	width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
	__typename?: 'UploadFileEntity';
	attributes?: Maybe<UploadFile>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	size?: InputMaybe<FloatFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
	alternativeText?: InputMaybe<Scalars['String']>;
	caption?: InputMaybe<Scalars['String']>;
	ext?: InputMaybe<Scalars['String']>;
	folder?: InputMaybe<Scalars['ID']>;
	folderPath?: InputMaybe<Scalars['String']>;
	formats?: InputMaybe<Scalars['JSON']>;
	hash?: InputMaybe<Scalars['String']>;
	height?: InputMaybe<Scalars['Int']>;
	mime?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	previewUrl?: InputMaybe<Scalars['String']>;
	provider?: InputMaybe<Scalars['String']>;
	provider_metadata?: InputMaybe<Scalars['JSON']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	size?: InputMaybe<Scalars['Float']>;
	url?: InputMaybe<Scalars['String']>;
	width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
	__typename?: 'UploadFileRelationResponseCollection';
	data: Array<UploadFileEntity>;
};

export type UploadFolder = {
	__typename?: 'UploadFolder';
	children?: Maybe<UploadFolderRelationResponseCollection>;
	createdAt?: Maybe<Scalars['DateTime']>;
	files?: Maybe<UploadFileRelationResponseCollection>;
	name: Scalars['String'];
	parent?: Maybe<UploadFolderEntityResponse>;
	path: Scalars['String'];
	pathId: Scalars['Int'];
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFolderChildrenArgs = {
	filters?: InputMaybe<UploadFolderFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
	__typename?: 'UploadFolderEntity';
	attributes?: Maybe<UploadFolder>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
	children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	name?: InputMaybe<Scalars['String']>;
	parent?: InputMaybe<Scalars['ID']>;
	path?: InputMaybe<Scalars['String']>;
	pathId?: InputMaybe<Scalars['Int']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type UploadFolderRelationResponseCollection = {
	__typename?: 'UploadFolderRelationResponseCollection';
	data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
	__typename?: 'UsersPermissionsCreateRolePayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
	__typename?: 'UsersPermissionsDeleteRolePayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
	identifier: Scalars['String'];
	password: Scalars['String'];
	provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
	__typename?: 'UsersPermissionsLoginPayload';
	jwt?: Maybe<Scalars['String']>;
	user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
	__typename?: 'UsersPermissionsMe';
	blocked?: Maybe<Scalars['Boolean']>;
	confirmed?: Maybe<Scalars['Boolean']>;
	email?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	role?: Maybe<UsersPermissionsMeRole>;
	username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
	__typename?: 'UsersPermissionsMeRole';
	description?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	name: Scalars['String'];
	type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
	__typename?: 'UsersPermissionsPasswordPayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
	__typename?: 'UsersPermissionsPermission';
	action: Scalars['String'];
	createdAt?: Maybe<Scalars['DateTime']>;
	role?: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
	__typename?: 'UsersPermissionsPermissionEntity';
	attributes?: Maybe<UsersPermissionsPermission>;
	id?: Maybe<Scalars['ID']>;
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
	email: Scalars['String'];
	password: Scalars['String'];
	username: Scalars['String'];
};

export type UsersPermissionsRole = {
	__typename?: 'UsersPermissionsRole';
	createdAt?: Maybe<Scalars['DateTime']>;
	description?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
	type?: Maybe<Scalars['String']>;
	updatedAt?: Maybe<Scalars['DateTime']>;
	users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
	filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
	filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
	pagination?: InputMaybe<PaginationArg>;
	sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
	__typename?: 'UsersPermissionsRoleEntity';
	attributes?: Maybe<UsersPermissionsRole>;
	id?: Maybe<Scalars['ID']>;
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
	description?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
	type?: InputMaybe<Scalars['String']>;
	users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
	__typename?: 'UsersPermissionsUpdateRolePayload';
	ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
	__typename?: 'UsersPermissionsUser';
	blocked?: Maybe<Scalars['Boolean']>;
	confirmed?: Maybe<Scalars['Boolean']>;
	createdAt?: Maybe<Scalars['DateTime']>;
	email: Scalars['String'];
	provider?: Maybe<Scalars['String']>;
	role?: Maybe<UsersPermissionsRoleEntityResponse>;
	updatedAt?: Maybe<Scalars['DateTime']>;
	username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
	__typename?: 'UsersPermissionsUserEntity';
	attributes?: Maybe<UsersPermissionsUser>;
	id?: Maybe<Scalars['ID']>;
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
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
	blocked?: InputMaybe<Scalars['Boolean']>;
	confirmationToken?: InputMaybe<Scalars['String']>;
	confirmed?: InputMaybe<Scalars['Boolean']>;
	email?: InputMaybe<Scalars['String']>;
	password?: InputMaybe<Scalars['String']>;
	provider?: InputMaybe<Scalars['String']>;
	resetPasswordToken?: InputMaybe<Scalars['String']>;
	role?: InputMaybe<Scalars['ID']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
	__typename?: 'UsersPermissionsUserRelationResponseCollection';
	data: Array<UsersPermissionsUserEntity>;
};

export type GetProfileQueryVariables = Exact<{
	locale: Scalars['I18NLocaleCode'];
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
	locale: Scalars['I18NLocaleCode'];
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
				url: string;
				urlName: string;
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
	locale: Scalars['I18NLocaleCode'];
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
				url: string;
				urlName: string;
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
	locale: Scalars['I18NLocaleCode'];
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
				name: string;
				slug?: string | null;
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

export type GetTechnosQueryVariables = Exact<{ [key: string]: never }>;

export type GetTechnosQuery = {
	__typename?: 'Query';
	technos?: {
		__typename?: 'TechnoEntityResponseCollection';
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
};
