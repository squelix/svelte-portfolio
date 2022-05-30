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
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any;
	/** A string used to identify an i18n locale */
	I18NLocaleCode: any;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any;
	/** The `Upload` scalar type represents a file upload. */
	Upload: any;
};

export type BooleanFilterInput = {
	and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
	contains?: InputMaybe<Scalars['Boolean']>;
	containsi?: InputMaybe<Scalars['Boolean']>;
	endsWith?: InputMaybe<Scalars['Boolean']>;
	eq?: InputMaybe<Scalars['Boolean']>;
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
	| School
	| SchoolProject
	| Skill
	| SocialNetwork
	| UploadFile
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
	logo?: Maybe<UploadFileEntityResponse>;
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
	logo?: InputMaybe<Scalars['ID']>;
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
	createIcon?: Maybe<IconEntityResponse>;
	createIconLocalization?: Maybe<IconEntityResponse>;
	createInterest?: Maybe<InterestEntityResponse>;
	createInterestLocalization?: Maybe<InterestEntityResponse>;
	createJob?: Maybe<JobEntityResponse>;
	createJobLocalization?: Maybe<JobEntityResponse>;
	createJobMission?: Maybe<JobMissionEntityResponse>;
	createJobMissionLocalization?: Maybe<JobMissionEntityResponse>;
	createJobSkill?: Maybe<JobSkillEntityResponse>;
	createJobSkillLocalization?: Maybe<JobSkillEntityResponse>;
	createLanguage?: Maybe<LanguageEntityResponse>;
	createLanguageLocalization?: Maybe<LanguageEntityResponse>;
	createProfileLocalization?: Maybe<ProfileEntityResponse>;
	createSchool?: Maybe<SchoolEntityResponse>;
	createSchoolLocalization?: Maybe<SchoolEntityResponse>;
	createSchoolProject?: Maybe<SchoolProjectEntityResponse>;
	createSchoolProjectLocalization?: Maybe<SchoolProjectEntityResponse>;
	createSkill?: Maybe<SkillEntityResponse>;
	createSkillLocalization?: Maybe<SkillEntityResponse>;
	createSocialNetwork?: Maybe<SocialNetworkEntityResponse>;
	createUploadFile?: Maybe<UploadFileEntityResponse>;
	/** Create a new role */
	createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
	/** Create a new user */
	createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	deleteIcon?: Maybe<IconEntityResponse>;
	deleteInterest?: Maybe<InterestEntityResponse>;
	deleteJob?: Maybe<JobEntityResponse>;
	deleteJobMission?: Maybe<JobMissionEntityResponse>;
	deleteJobSkill?: Maybe<JobSkillEntityResponse>;
	deleteLanguage?: Maybe<LanguageEntityResponse>;
	deleteProfile?: Maybe<ProfileEntityResponse>;
	deleteSchool?: Maybe<SchoolEntityResponse>;
	deleteSchoolProject?: Maybe<SchoolProjectEntityResponse>;
	deleteSkill?: Maybe<SkillEntityResponse>;
	deleteSocialNetwork?: Maybe<SocialNetworkEntityResponse>;
	deleteUploadFile?: Maybe<UploadFileEntityResponse>;
	/** Delete an existing role */
	deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
	/** Update an existing user */
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
	updateIcon?: Maybe<IconEntityResponse>;
	updateInterest?: Maybe<InterestEntityResponse>;
	updateJob?: Maybe<JobEntityResponse>;
	updateJobMission?: Maybe<JobMissionEntityResponse>;
	updateJobSkill?: Maybe<JobSkillEntityResponse>;
	updateLanguage?: Maybe<LanguageEntityResponse>;
	updateProfile?: Maybe<ProfileEntityResponse>;
	updateSchool?: Maybe<SchoolEntityResponse>;
	updateSchoolProject?: Maybe<SchoolProjectEntityResponse>;
	updateSkill?: Maybe<SkillEntityResponse>;
	updateSocialNetwork?: Maybe<SocialNetworkEntityResponse>;
	updateUploadFile?: Maybe<UploadFileEntityResponse>;
	/** Update an existing role */
	updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
	/** Update an existing user */
	updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
	upload: UploadFileEntityResponse;
};

export type MutationCreateIconArgs = {
	data: IconInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateIconLocalizationArgs = {
	data?: InputMaybe<IconInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateInterestArgs = {
	data: InterestInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateInterestLocalizationArgs = {
	data?: InputMaybe<InterestInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobArgs = {
	data: JobInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobLocalizationArgs = {
	data?: InputMaybe<JobInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobMissionArgs = {
	data: JobMissionInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobMissionLocalizationArgs = {
	data?: InputMaybe<JobMissionInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobSkillArgs = {
	data: JobSkillInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateJobSkillLocalizationArgs = {
	data?: InputMaybe<JobSkillInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateLanguageArgs = {
	data: LanguageInput;
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

export type MutationCreateSchoolArgs = {
	data: SchoolInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSchoolLocalizationArgs = {
	data?: InputMaybe<SchoolInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSchoolProjectArgs = {
	data: SchoolProjectInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSchoolProjectLocalizationArgs = {
	data?: InputMaybe<SchoolProjectInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSkillArgs = {
	data: SkillInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSkillLocalizationArgs = {
	data?: InputMaybe<SkillInput>;
	id?: InputMaybe<Scalars['ID']>;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationCreateSocialNetworkArgs = {
	data: SocialNetworkInput;
};

export type MutationCreateUploadFileArgs = {
	data: UploadFileInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
	data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
	data: UsersPermissionsUserInput;
};

export type MutationDeleteIconArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteInterestArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteJobArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteJobMissionArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteJobSkillArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteLanguageArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteProfileArgs = {
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSchoolArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSchoolProjectArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSkillArgs = {
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationDeleteSocialNetworkArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUploadFileArgs = {
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

export type MutationUpdateIconArgs = {
	data: IconInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateInterestArgs = {
	data: InterestInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateJobArgs = {
	data: JobInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateJobMissionArgs = {
	data: JobMissionInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateJobSkillArgs = {
	data: JobSkillInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateLanguageArgs = {
	data: LanguageInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateProfileArgs = {
	data: ProfileInput;
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSchoolArgs = {
	data: SchoolInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSchoolProjectArgs = {
	data: SchoolProjectInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSkillArgs = {
	data: SkillInput;
	id: Scalars['ID'];
	locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type MutationUpdateSocialNetworkArgs = {
	data: SocialNetworkInput;
	id: Scalars['ID'];
};

export type MutationUpdateUploadFileArgs = {
	data: UploadFileInput;
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
	lastname: Scalars['String'];
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<ProfileRelationResponseCollection>;
	phone: Scalars['String'];
	picture: UploadFileEntityResponse;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
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
	school?: Maybe<SchoolEntityResponse>;
	schoolProject?: Maybe<SchoolProjectEntityResponse>;
	schoolProjects?: Maybe<SchoolProjectEntityResponseCollection>;
	schools?: Maybe<SchoolEntityResponseCollection>;
	skill?: Maybe<SkillEntityResponse>;
	skills?: Maybe<SkillEntityResponseCollection>;
	socialNetwork?: Maybe<SocialNetworkEntityResponse>;
	socialNetworks?: Maybe<SocialNetworkEntityResponseCollection>;
	uploadFile?: Maybe<UploadFileEntityResponse>;
	uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
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

export type QueryUploadFileArgs = {
	id?: InputMaybe<Scalars['ID']>;
};

export type QueryUploadFilesArgs = {
	filters?: InputMaybe<UploadFileFiltersInput>;
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
	logo: UploadFileEntityResponse;
	name: Scalars['String'];
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
	logo?: InputMaybe<Scalars['ID']>;
	name?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	startYear?: InputMaybe<Scalars['Int']>;
};

export type SchoolProject = {
	__typename?: 'SchoolProject';
	createdAt?: Maybe<Scalars['DateTime']>;
	locale?: Maybe<Scalars['String']>;
	localizations?: Maybe<SchoolProjectRelationResponseCollection>;
	publishedAt?: Maybe<Scalars['DateTime']>;
	slug?: Maybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	url: Scalars['String'];
	urlName?: Maybe<Scalars['String']>;
};

export type SchoolProjectLocalizationsArgs = {
	filters?: InputMaybe<SchoolProjectFiltersInput>;
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
	id?: InputMaybe<IdFilterInput>;
	locale?: InputMaybe<StringFilterInput>;
	localizations?: InputMaybe<SchoolProjectFiltersInput>;
	not?: InputMaybe<SchoolProjectFiltersInput>;
	or?: InputMaybe<Array<InputMaybe<SchoolProjectFiltersInput>>>;
	publishedAt?: InputMaybe<DateTimeFilterInput>;
	sitemap_exclude?: InputMaybe<BooleanFilterInput>;
	slug?: InputMaybe<StringFilterInput>;
	title?: InputMaybe<StringFilterInput>;
	updatedAt?: InputMaybe<DateTimeFilterInput>;
	url?: InputMaybe<StringFilterInput>;
	urlName?: InputMaybe<StringFilterInput>;
};

export type SchoolProjectInput = {
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
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
	slug?: Maybe<Scalars['String']>;
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

export type SocialNetworkInput = {
	icon?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
	slug?: InputMaybe<Scalars['String']>;
	title?: InputMaybe<Scalars['String']>;
	url?: InputMaybe<Scalars['String']>;
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
				firstname: string;
				lastname: string;
				address: string;
				email: string;
				phone: string;
				description: string;
				job: string;
				birthYear: number;
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
