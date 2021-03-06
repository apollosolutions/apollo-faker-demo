import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A blob (base64'ed in JSON & GraphQL) */
    Blob: any;
    GraphQLDocument: any;
    /** Long type */
    Long: any;
    /** Arbitrary JSON object */
    Object: any;
    /** SHA-256 hash, represented in lowercase hexadecimal */
    SHA256: any;
    StringOrInt: any;
    /** ISO 8601, extended format with nanoseconds, Zulu (or '[+-]seconds' for times relative to now) */
    Timestamp: any;
    /** Always null */
    Void: any;
};
export declare type Account = {
    __typename?: 'Account';
    auditLogExports?: Maybe<Array<AuditLogExport>>;
    /** These are the roles that the account is able to use */
    availableRoles: Array<UserPermission>;
    /**
     * Get an URL to which an avatar image can be uploaded. Client uploads by sending a PUT request
     * with the image data to MediaUploadInfo.url. Client SHOULD set the "Content-Type" header to the
     * browser-inferred MIME type, and SHOULD set the "x-apollo-content-filename" header to the
     * filename, if such information is available. Client MUST set the "x-apollo-csrf-token" header to
     * MediaUploadInfo.csrfToken.
     */
    avatarUpload?: Maybe<AvatarUploadResult>;
    /**
     * Get an image URL for the account's avatar. Note that CORS is not enabled for these URLs. The size
     * argument is used for bandwidth reduction, and should be the size of the image as displayed in the
     * application. Apollo's media server will downscale larger images to at least the requested size,
     * but this will not happen for third-party media servers.
     */
    avatarUrl?: Maybe<Scalars['String']>;
    billingInfo?: Maybe<BillingInfo>;
    companyUrl?: Maybe<Scalars['String']>;
    currentBillingMonth?: Maybe<BillingMonth>;
    currentPlan: BillingPlan;
    currentPlanV2: BillingPlanV2;
    currentSubscription?: Maybe<BillingSubscription>;
    currentSubscriptionV2?: Maybe<BillingSubscriptionV2>;
    experimentalFeatures: AccountExperimentalFeatures;
    expiredTrialSubscription?: Maybe<BillingSubscription>;
    expiredTrialSubscriptionV2?: Maybe<BillingSubscriptionV2>;
    graphIDAvailable: Scalars['Boolean'];
    hasBeenOnTrial: Scalars['Boolean'];
    hasBeenOnTrialV2: Scalars['Boolean'];
    id: Scalars['ID'];
    /**
     * Internal immutable identifier for the account. Only visible to Apollo admins (because it really
     * shouldn't be used in normal client apps).
     */
    internalID: Scalars['ID'];
    invitations?: Maybe<Array<AccountInvitation>>;
    invoices?: Maybe<Array<Invoice>>;
    invoicesV2: Array<InvoiceV2>;
    isOnExpiredTrial: Scalars['Boolean'];
    isOnTrial: Scalars['Boolean'];
    legacyIsOnTrial: Scalars['Boolean'];
    memberships?: Maybe<Array<AccountMembership>>;
    name: Scalars['String'];
    provisionedAt?: Maybe<Scalars['Timestamp']>;
    recurlyEmail?: Maybe<Scalars['String']>;
    /** Returns a different registry related stats pertaining to this account. */
    registryStatsWindow?: Maybe<RegistryStatsWindow>;
    requests?: Maybe<Scalars['Long']>;
    requestsInCurrentBillingPeriod?: Maybe<Scalars['Long']>;
    roles?: Maybe<AccountRoles>;
    /** How many seats would be included in your next bill, as best estimated today */
    seatCountForNextBill?: Maybe<Scalars['Int']>;
    seats?: Maybe<Seats>;
    secondaryIDs: Array<Scalars['ID']>;
    services: Array<Service>;
    /**
     * If non-null, this organization tracks its members through an upstream, eg PingOne;
     * invitations are not possible on SSO-synchronized account.
     */
    sso?: Maybe<OrganizationSso>;
    state?: Maybe<AccountState>;
    /** A list of reusable invitations for the organization. */
    staticInvitations?: Maybe<Array<OrganizationInviteLink>>;
    /** @deprecated use Account.statsWindow instead */
    stats: AccountStatsWindow;
    statsWindow?: Maybe<AccountStatsWindow>;
    subscriptions?: Maybe<Array<BillingSubscription>>;
    subscriptionsV2: Array<BillingSubscriptionV2>;
    /** Gets a ticket for this org, by id */
    ticket?: Maybe<ZendeskTicket>;
    /** List of Zendesk tickets submitted for this org */
    tickets?: Maybe<Array<ZendeskTicket>>;
};
export declare type AccountAvatarUrlArgs = {
    size?: Scalars['Int'];
};
export declare type AccountGraphIdAvailableArgs = {
    id: Scalars['ID'];
};
export declare type AccountInvitationsArgs = {
    includeAccepted?: Scalars['Boolean'];
};
export declare type AccountRegistryStatsWindowArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type AccountRequestsArgs = {
    from: Scalars['Timestamp'];
    to: Scalars['Timestamp'];
};
export declare type AccountServicesArgs = {
    includeDeleted?: InputMaybe<Scalars['Boolean']>;
};
export declare type AccountStatsArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type AccountStatsWindowArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type AccountTicketArgs = {
    id: Scalars['ID'];
};
export declare type AccountChecksStatsMetrics = {
    __typename?: 'AccountChecksStatsMetrics';
    totalFailedChecks: Scalars['Long'];
    totalSuccessfulChecks: Scalars['Long'];
};
export declare type AccountChecksStatsRecord = {
    __typename?: 'AccountChecksStatsRecord';
    id: Scalars['ID'];
    metrics: AccountChecksStatsMetrics;
    timestamp: Scalars['Timestamp'];
};
/** Columns of AccountEdgeServerInfos. */
export declare enum AccountEdgeServerInfosColumn {
    BootId = "BOOT_ID",
    ExecutableSchemaId = "EXECUTABLE_SCHEMA_ID",
    LibraryVersion = "LIBRARY_VERSION",
    Platform = "PLATFORM",
    RuntimeVersion = "RUNTIME_VERSION",
    SchemaTag = "SCHEMA_TAG",
    ServerId = "SERVER_ID",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    UserVersion = "USER_VERSION"
}
export declare type AccountEdgeServerInfosDimensions = {
    __typename?: 'AccountEdgeServerInfosDimensions';
    bootId?: Maybe<Scalars['ID']>;
    executableSchemaId?: Maybe<Scalars['ID']>;
    libraryVersion?: Maybe<Scalars['String']>;
    platform?: Maybe<Scalars['String']>;
    runtimeVersion?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serverId?: Maybe<Scalars['ID']>;
    serviceId?: Maybe<Scalars['ID']>;
    userVersion?: Maybe<Scalars['String']>;
};
/** Filter for data in AccountEdgeServerInfos. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountEdgeServerInfosFilter = {
    and?: InputMaybe<Array<AccountEdgeServerInfosFilter>>;
    /** Selects rows whose bootId dimension equals the given value if not null. To query for the null value, use {in: {bootId: [null]}} instead. */
    bootId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose executableSchemaId dimension equals the given value if not null. To query for the null value, use {in: {executableSchemaId: [null]}} instead. */
    executableSchemaId?: InputMaybe<Scalars['ID']>;
    in?: InputMaybe<AccountEdgeServerInfosFilterIn>;
    /** Selects rows whose libraryVersion dimension equals the given value if not null. To query for the null value, use {in: {libraryVersion: [null]}} instead. */
    libraryVersion?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<AccountEdgeServerInfosFilter>;
    or?: InputMaybe<Array<AccountEdgeServerInfosFilter>>;
    /** Selects rows whose platform dimension equals the given value if not null. To query for the null value, use {in: {platform: [null]}} instead. */
    platform?: InputMaybe<Scalars['String']>;
    /** Selects rows whose runtimeVersion dimension equals the given value if not null. To query for the null value, use {in: {runtimeVersion: [null]}} instead. */
    runtimeVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serverId dimension equals the given value if not null. To query for the null value, use {in: {serverId: [null]}} instead. */
    serverId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose userVersion dimension equals the given value if not null. To query for the null value, use {in: {userVersion: [null]}} instead. */
    userVersion?: InputMaybe<Scalars['String']>;
};
/** Filter for data in AccountEdgeServerInfos. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountEdgeServerInfosFilterIn = {
    /** Selects rows whose bootId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    bootId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose executableSchemaId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    executableSchemaId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose libraryVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    libraryVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose platform dimension is in the given list. A null value in the list means a row with null for that dimension. */
    platform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose runtimeVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    runtimeVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serverId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serverId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose userVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    userVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type AccountEdgeServerInfosOrderBySpec = {
    column: AccountEdgeServerInfosColumn;
    direction: Ordering;
};
export declare type AccountEdgeServerInfosRecord = {
    __typename?: 'AccountEdgeServerInfosRecord';
    /** Dimensions of AccountEdgeServerInfos that can be grouped by. */
    groupBy: AccountEdgeServerInfosDimensions;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of AccountErrorStats. */
export declare enum AccountErrorStatsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    ErrorsCount = "ERRORS_COUNT",
    Path = "PATH",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    RequestsWithErrorsCount = "REQUESTS_WITH_ERRORS_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP"
}
export declare type AccountErrorStatsDimensions = {
    __typename?: 'AccountErrorStatsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in AccountErrorStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountErrorStatsFilter = {
    and?: InputMaybe<Array<AccountErrorStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<AccountErrorStatsFilterIn>;
    not?: InputMaybe<AccountErrorStatsFilter>;
    or?: InputMaybe<Array<AccountErrorStatsFilter>>;
    /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
    path?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in AccountErrorStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountErrorStatsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
    path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type AccountErrorStatsMetrics = {
    __typename?: 'AccountErrorStatsMetrics';
    errorsCount: Scalars['Long'];
    requestsWithErrorsCount: Scalars['Long'];
};
export declare type AccountErrorStatsOrderBySpec = {
    column: AccountErrorStatsColumn;
    direction: Ordering;
};
export declare type AccountErrorStatsRecord = {
    __typename?: 'AccountErrorStatsRecord';
    /** Dimensions of AccountErrorStats that can be grouped by. */
    groupBy: AccountErrorStatsDimensions;
    /** Metrics of AccountErrorStats that can be aggregated over. */
    metrics: AccountErrorStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type AccountExperimentalFeatures = {
    __typename?: 'AccountExperimentalFeatures';
    auditLogs: Scalars['Boolean'];
    championDashboard: Scalars['Boolean'];
    derivedLaunches: Scalars['Boolean'];
    federation2Preview: Scalars['Boolean'];
    preRequestPreview: Scalars['Boolean'];
    publicVariants: Scalars['Boolean'];
    variantHomepage: Scalars['Boolean'];
    webhooksPreview: Scalars['Boolean'];
};
/** Columns of AccountFieldLatencies. */
export declare enum AccountFieldLatenciesColumn {
    FieldHistogram = "FIELD_HISTOGRAM",
    FieldName = "FIELD_NAME",
    ParentType = "PARENT_TYPE",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP"
}
export declare type AccountFieldLatenciesDimensions = {
    __typename?: 'AccountFieldLatenciesDimensions';
    field?: Maybe<Scalars['String']>;
    fieldName?: Maybe<Scalars['String']>;
    parentType?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in AccountFieldLatencies. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountFieldLatenciesFilter = {
    and?: InputMaybe<Array<AccountFieldLatenciesFilter>>;
    /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
    fieldName?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<AccountFieldLatenciesFilterIn>;
    not?: InputMaybe<AccountFieldLatenciesFilter>;
    or?: InputMaybe<Array<AccountFieldLatenciesFilter>>;
    /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
    parentType?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in AccountFieldLatencies. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountFieldLatenciesFilterIn = {
    /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
    parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type AccountFieldLatenciesMetrics = {
    __typename?: 'AccountFieldLatenciesMetrics';
    fieldHistogram: DurationHistogram;
};
export declare type AccountFieldLatenciesOrderBySpec = {
    column: AccountFieldLatenciesColumn;
    direction: Ordering;
};
export declare type AccountFieldLatenciesRecord = {
    __typename?: 'AccountFieldLatenciesRecord';
    /** Dimensions of AccountFieldLatencies that can be grouped by. */
    groupBy: AccountFieldLatenciesDimensions;
    /** Metrics of AccountFieldLatencies that can be aggregated over. */
    metrics: AccountFieldLatenciesMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of AccountFieldUsage. */
export declare enum AccountFieldUsageColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    EstimatedExecutionCount = "ESTIMATED_EXECUTION_COUNT",
    ExecutionCount = "EXECUTION_COUNT",
    FieldName = "FIELD_NAME",
    ParentType = "PARENT_TYPE",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    ReferencingOperationCount = "REFERENCING_OPERATION_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP"
}
export declare type AccountFieldUsageDimensions = {
    __typename?: 'AccountFieldUsageDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    fieldName?: Maybe<Scalars['String']>;
    parentType?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in AccountFieldUsage. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountFieldUsageFilter = {
    and?: InputMaybe<Array<AccountFieldUsageFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
    fieldName?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<AccountFieldUsageFilterIn>;
    not?: InputMaybe<AccountFieldUsageFilter>;
    or?: InputMaybe<Array<AccountFieldUsageFilter>>;
    /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
    parentType?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in AccountFieldUsage. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountFieldUsageFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
    parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type AccountFieldUsageMetrics = {
    __typename?: 'AccountFieldUsageMetrics';
    estimatedExecutionCount: Scalars['Long'];
    executionCount: Scalars['Long'];
    referencingOperationCount: Scalars['Long'];
};
export declare type AccountFieldUsageOrderBySpec = {
    column: AccountFieldUsageColumn;
    direction: Ordering;
};
export declare type AccountFieldUsageRecord = {
    __typename?: 'AccountFieldUsageRecord';
    /** Dimensions of AccountFieldUsage that can be grouped by. */
    groupBy: AccountFieldUsageDimensions;
    /** Metrics of AccountFieldUsage that can be aggregated over. */
    metrics: AccountFieldUsageMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type AccountInvitation = {
    __typename?: 'AccountInvitation';
    /** An accepted invitation cannot be used anymore */
    acceptedAt?: Maybe<Scalars['Timestamp']>;
    /** Who accepted the invitation */
    acceptedBy?: Maybe<User>;
    /** Time the invitation was created */
    createdAt: Scalars['Timestamp'];
    /** Who created the invitation */
    createdBy?: Maybe<User>;
    email: Scalars['String'];
    id: Scalars['ID'];
    /** Last time we sent an email for the invitation */
    lastSentAt?: Maybe<Scalars['Timestamp']>;
    /** Access role for the invitee */
    role: UserPermission;
};
export declare type AccountMembership = {
    __typename?: 'AccountMembership';
    account: Account;
    createdAt: Scalars['Timestamp'];
    /** If this membership is a free seat (based on role) */
    free?: Maybe<Scalars['Boolean']>;
    permission: UserPermission;
    user: User;
};
export declare type AccountMutation = {
    __typename?: 'AccountMutation';
    auditExport?: Maybe<AuditLogExportMutation>;
    /** Cancel a pending change from an annual team subscription to a monthly team subscription when the current period expires. */
    cancelConvertAnnualTeamSubscriptionToMonthlyAtNextPeriod?: Maybe<Account>;
    /** Cancel account subscriptions, subscriptions will remain active until the end of the paid period */
    cancelSubscriptions?: Maybe<Account>;
    /** Changes an annual team subscription to a monthly team subscription when the current period expires. */
    convertAnnualTeamSubscriptionToMonthlyAtNextPeriod?: Maybe<Account>;
    /** Changes a monthly team subscription to an annual team subscription. */
    convertMonthlyTeamSubscriptionToAnnual?: Maybe<Account>;
    createStaticInvitation?: Maybe<OrganizationInviteLink>;
    /** Delete the account's avatar. Requires Account.canUpdateAvatar to be true. */
    deleteAvatar?: Maybe<AvatarDeleteError>;
    /** Acknowledge that a trial has expired and return to community */
    dismissExpiredTrial?: Maybe<Account>;
    /** Apollo admins only: extend an ongoing trial */
    extendTrial?: Maybe<Account>;
    /** Hard delete an account and all associated services */
    hardDelete?: Maybe<Scalars['Void']>;
    /** Send an invitation to join the account by E-mail */
    invite?: Maybe<AccountInvitation>;
    /** Reactivate a canceled current subscription */
    reactivateCurrentSubscription?: Maybe<Account>;
    /** Refresh billing information from third-party billing service */
    refreshBilling?: Maybe<Scalars['Void']>;
    /** Delete an invitation */
    removeInvitation?: Maybe<Scalars['Void']>;
    /** Remove a member of the account */
    removeMember?: Maybe<Account>;
    requestAuditExport?: Maybe<Account>;
    /** Send a new E-mail for an existing invitation */
    resendInvitation?: Maybe<AccountInvitation>;
    revokeStaticInvitation?: Maybe<OrganizationInviteLink>;
    /** Apollo admins only: set the billing plan to an arbitrary plan */
    setPlan?: Maybe<Scalars['Void']>;
    /** Start a new team subscription with the given billing period */
    startTeamSubscription?: Maybe<Account>;
    /** Start a team trial */
    startTrial?: Maybe<Account>;
    /** This is called by the form shown to users after they cancel their team subscription. */
    submitTeamCancellationFeedback?: Maybe<Scalars['Void']>;
    /** Apollo admins only: terminate any ongoing subscriptions in the account, without refunds */
    terminateSubscriptions?: Maybe<Account>;
    /** Update the billing address for a Recurly token */
    updateBillingAddress?: Maybe<Account>;
    /** Update the billing information from a Recurly token */
    updateBillingInfo?: Maybe<Scalars['Void']>;
    updateCompanyUrl?: Maybe<Account>;
    /** Set the E-mail address of the account, used notably for billing */
    updateEmail?: Maybe<Scalars['Void']>;
    /** Update the account ID */
    updateID?: Maybe<Account>;
    /** Update the company name */
    updateName?: Maybe<Scalars['Void']>;
    /** Apollo admins only: enable or disable an account for PingOne SSO login */
    updatePingOneSSOIDPID?: Maybe<Account>;
    /** Updates the role assigned to new SSO users. */
    updateSSODefaultRole?: Maybe<OrganizationSso>;
    /** A (currently) internal to Apollo mutation to update a user's role within an organization */
    updateUserPermission?: Maybe<User>;
};
export declare type AccountMutationAuditExportArgs = {
    id: Scalars['String'];
};
export declare type AccountMutationCreateStaticInvitationArgs = {
    role: UserPermission;
};
export declare type AccountMutationExtendTrialArgs = {
    to: Scalars['Timestamp'];
};
export declare type AccountMutationInviteArgs = {
    email: Scalars['String'];
    role?: InputMaybe<UserPermission>;
};
export declare type AccountMutationRemoveInvitationArgs = {
    id?: InputMaybe<Scalars['ID']>;
};
export declare type AccountMutationRemoveMemberArgs = {
    id: Scalars['ID'];
};
export declare type AccountMutationRequestAuditExportArgs = {
    actors?: InputMaybe<Array<ActorInput>>;
    from: Scalars['Timestamp'];
    graphIds?: InputMaybe<Array<Scalars['String']>>;
    to: Scalars['Timestamp'];
};
export declare type AccountMutationResendInvitationArgs = {
    id?: InputMaybe<Scalars['ID']>;
};
export declare type AccountMutationRevokeStaticInvitationArgs = {
    token: Scalars['String'];
};
export declare type AccountMutationSetPlanArgs = {
    id: Scalars['ID'];
};
export declare type AccountMutationStartTeamSubscriptionArgs = {
    billingPeriod: BillingPeriod;
};
export declare type AccountMutationSubmitTeamCancellationFeedbackArgs = {
    feedback: Scalars['String'];
};
export declare type AccountMutationUpdateBillingAddressArgs = {
    billingAddress: BillingAddressInput;
};
export declare type AccountMutationUpdateBillingInfoArgs = {
    token: Scalars['String'];
};
export declare type AccountMutationUpdateCompanyUrlArgs = {
    companyUrl?: InputMaybe<Scalars['String']>;
};
export declare type AccountMutationUpdateEmailArgs = {
    email: Scalars['String'];
};
export declare type AccountMutationUpdateIdArgs = {
    id: Scalars['ID'];
};
export declare type AccountMutationUpdateNameArgs = {
    name: Scalars['String'];
};
export declare type AccountMutationUpdatePingOneSsoidpidArgs = {
    idpid?: InputMaybe<Scalars['String']>;
};
export declare type AccountMutationUpdateSsoDefaultRoleArgs = {
    role: UserPermission;
};
export declare type AccountMutationUpdateUserPermissionArgs = {
    permission: UserPermission;
    userID: Scalars['ID'];
};
/** Columns of AccountOperationCheckStats. */
export declare enum AccountOperationCheckStatsColumn {
    CachedRequestsCount = "CACHED_REQUESTS_COUNT",
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    UncachedRequestsCount = "UNCACHED_REQUESTS_COUNT"
}
export declare type AccountOperationCheckStatsDimensions = {
    __typename?: 'AccountOperationCheckStatsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in AccountOperationCheckStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountOperationCheckStatsFilter = {
    and?: InputMaybe<Array<AccountOperationCheckStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<AccountOperationCheckStatsFilterIn>;
    not?: InputMaybe<AccountOperationCheckStatsFilter>;
    or?: InputMaybe<Array<AccountOperationCheckStatsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in AccountOperationCheckStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountOperationCheckStatsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type AccountOperationCheckStatsMetrics = {
    __typename?: 'AccountOperationCheckStatsMetrics';
    cachedRequestsCount: Scalars['Long'];
    uncachedRequestsCount: Scalars['Long'];
};
export declare type AccountOperationCheckStatsOrderBySpec = {
    column: AccountOperationCheckStatsColumn;
    direction: Ordering;
};
export declare type AccountOperationCheckStatsRecord = {
    __typename?: 'AccountOperationCheckStatsRecord';
    /** Dimensions of AccountOperationCheckStats that can be grouped by. */
    groupBy: AccountOperationCheckStatsDimensions;
    /** Metrics of AccountOperationCheckStats that can be aggregated over. */
    metrics: AccountOperationCheckStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type AccountPublishesStatsMetrics = {
    __typename?: 'AccountPublishesStatsMetrics';
    totalPublishes: Scalars['Long'];
};
export declare type AccountPublishesStatsRecord = {
    __typename?: 'AccountPublishesStatsRecord';
    id: Scalars['ID'];
    metrics: AccountPublishesStatsMetrics;
    timestamp: Scalars['Timestamp'];
};
/** Columns of AccountQueryStats. */
export declare enum AccountQueryStatsColumn {
    CachedHistogram = "CACHED_HISTOGRAM",
    CachedRequestsCount = "CACHED_REQUESTS_COUNT",
    CacheTtlHistogram = "CACHE_TTL_HISTOGRAM",
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    ForbiddenOperationCount = "FORBIDDEN_OPERATION_COUNT",
    FromEngineproxy = "FROM_ENGINEPROXY",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    RegisteredOperationCount = "REGISTERED_OPERATION_COUNT",
    RequestsWithErrorsCount = "REQUESTS_WITH_ERRORS_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    UncachedHistogram = "UNCACHED_HISTOGRAM",
    UncachedRequestsCount = "UNCACHED_REQUESTS_COUNT"
}
export declare type AccountQueryStatsDimensions = {
    __typename?: 'AccountQueryStatsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    fromEngineproxy?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    querySignature?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in AccountQueryStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountQueryStatsFilter = {
    and?: InputMaybe<Array<AccountQueryStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose fromEngineproxy dimension equals the given value if not null. To query for the null value, use {in: {fromEngineproxy: [null]}} instead. */
    fromEngineproxy?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<AccountQueryStatsFilterIn>;
    not?: InputMaybe<AccountQueryStatsFilter>;
    or?: InputMaybe<Array<AccountQueryStatsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in AccountQueryStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountQueryStatsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose fromEngineproxy dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fromEngineproxy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type AccountQueryStatsMetrics = {
    __typename?: 'AccountQueryStatsMetrics';
    cacheTtlHistogram: DurationHistogram;
    cachedHistogram: DurationHistogram;
    cachedRequestsCount: Scalars['Long'];
    forbiddenOperationCount: Scalars['Long'];
    registeredOperationCount: Scalars['Long'];
    requestsWithErrorsCount: Scalars['Long'];
    totalLatencyHistogram: DurationHistogram;
    totalRequestCount: Scalars['Long'];
    uncachedHistogram: DurationHistogram;
    uncachedRequestsCount: Scalars['Long'];
};
export declare type AccountQueryStatsOrderBySpec = {
    column: AccountQueryStatsColumn;
    direction: Ordering;
};
export declare type AccountQueryStatsRecord = {
    __typename?: 'AccountQueryStatsRecord';
    /** Dimensions of AccountQueryStats that can be grouped by. */
    groupBy: AccountQueryStatsDimensions;
    /** Metrics of AccountQueryStats that can be aggregated over. */
    metrics: AccountQueryStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type AccountRoles = {
    __typename?: 'AccountRoles';
    canAudit: Scalars['Boolean'];
    canCreateDevGraph: Scalars['Boolean'];
    canCreateService: Scalars['Boolean'];
    canDelete: Scalars['Boolean'];
    /** @deprecated Use canQueryBillingInfo instead */
    canDownloadInvoice: Scalars['Boolean'];
    canManageMembers: Scalars['Boolean'];
    canQuery: Scalars['Boolean'];
    canQueryAudit: Scalars['Boolean'];
    canQueryBillingInfo: Scalars['Boolean'];
    /** @deprecated Use canQueryBillingInfo instead */
    canQueryInvoices: Scalars['Boolean'];
    canQueryMembers: Scalars['Boolean'];
    canQueryStats: Scalars['Boolean'];
    canReadTickets: Scalars['Boolean'];
    canRemoveMembers: Scalars['Boolean'];
    canSetConstrainedPlan: Scalars['Boolean'];
    canUpdateBillingInfo: Scalars['Boolean'];
    canUpdateMetadata: Scalars['Boolean'];
};
export declare enum AccountState {
    Active = "ACTIVE",
    Closed = "CLOSED",
    Unknown = "UNKNOWN",
    Unprovisioned = "UNPROVISIONED"
}
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindow = {
    __typename?: 'AccountStatsWindow';
    edgeServerInfos: Array<AccountEdgeServerInfosRecord>;
    errorStats: Array<AccountErrorStatsRecord>;
    fieldLatencies: Array<AccountFieldLatenciesRecord>;
    fieldUsage: Array<AccountFieldUsageRecord>;
    operationCheckStats: Array<AccountOperationCheckStatsRecord>;
    queryStats: Array<AccountQueryStatsRecord>;
    /** From field rounded down to the nearest resolution. */
    roundedDownFrom: Scalars['Timestamp'];
    /** To field rounded up to the nearest resolution. */
    roundedUpTo: Scalars['Timestamp'];
    tracePathErrorsRefs: Array<AccountTracePathErrorsRefsRecord>;
    traceRefs: Array<AccountTraceRefsRecord>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowEdgeServerInfosArgs = {
    filter?: InputMaybe<AccountEdgeServerInfosFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountEdgeServerInfosOrderBySpec>>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowErrorStatsArgs = {
    filter?: InputMaybe<AccountErrorStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountErrorStatsOrderBySpec>>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowFieldLatenciesArgs = {
    filter?: InputMaybe<AccountFieldLatenciesFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountFieldLatenciesOrderBySpec>>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowFieldUsageArgs = {
    filter?: InputMaybe<AccountFieldUsageFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountFieldUsageOrderBySpec>>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowOperationCheckStatsArgs = {
    filter?: InputMaybe<AccountOperationCheckStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountOperationCheckStatsOrderBySpec>>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowQueryStatsArgs = {
    filter?: InputMaybe<AccountQueryStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountQueryStatsOrderBySpec>>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowTracePathErrorsRefsArgs = {
    filter?: InputMaybe<AccountTracePathErrorsRefsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountTracePathErrorsRefsOrderBySpec>>;
};
/** A time window with a specified granularity over a given account. */
export declare type AccountStatsWindowTraceRefsArgs = {
    filter?: InputMaybe<AccountTraceRefsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<AccountTraceRefsOrderBySpec>>;
};
/** Columns of AccountTracePathErrorsRefs. */
export declare enum AccountTracePathErrorsRefsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    DurationBucket = "DURATION_BUCKET",
    ErrorsCountInPath = "ERRORS_COUNT_IN_PATH",
    ErrorsCountInTrace = "ERRORS_COUNT_IN_TRACE",
    ErrorMessage = "ERROR_MESSAGE",
    Path = "PATH",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    TraceHttpStatusCode = "TRACE_HTTP_STATUS_CODE",
    TraceId = "TRACE_ID",
    TraceSizeBytes = "TRACE_SIZE_BYTES",
    TraceStartsAt = "TRACE_STARTS_AT"
}
export declare type AccountTracePathErrorsRefsDimensions = {
    __typename?: 'AccountTracePathErrorsRefsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    durationBucket?: Maybe<Scalars['Int']>;
    errorMessage?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
    traceHttpStatusCode?: Maybe<Scalars['Int']>;
    traceId?: Maybe<Scalars['ID']>;
    traceStartsAt?: Maybe<Scalars['Timestamp']>;
};
/** Filter for data in AccountTracePathErrorsRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountTracePathErrorsRefsFilter = {
    and?: InputMaybe<Array<AccountTracePathErrorsRefsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
    durationBucket?: InputMaybe<Scalars['Int']>;
    /** Selects rows whose errorMessage dimension equals the given value if not null. To query for the null value, use {in: {errorMessage: [null]}} instead. */
    errorMessage?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<AccountTracePathErrorsRefsFilterIn>;
    not?: InputMaybe<AccountTracePathErrorsRefsFilter>;
    or?: InputMaybe<Array<AccountTracePathErrorsRefsFilter>>;
    /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
    path?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose traceHttpStatusCode dimension equals the given value if not null. To query for the null value, use {in: {traceHttpStatusCode: [null]}} instead. */
    traceHttpStatusCode?: InputMaybe<Scalars['Int']>;
    /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
    traceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in AccountTracePathErrorsRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountTracePathErrorsRefsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
    durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose errorMessage dimension is in the given list. A null value in the list means a row with null for that dimension. */
    errorMessage?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
    path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose traceHttpStatusCode dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceHttpStatusCode?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type AccountTracePathErrorsRefsMetrics = {
    __typename?: 'AccountTracePathErrorsRefsMetrics';
    errorsCountInPath: Scalars['Long'];
    errorsCountInTrace: Scalars['Long'];
    traceSizeBytes: Scalars['Long'];
};
export declare type AccountTracePathErrorsRefsOrderBySpec = {
    column: AccountTracePathErrorsRefsColumn;
    direction: Ordering;
};
export declare type AccountTracePathErrorsRefsRecord = {
    __typename?: 'AccountTracePathErrorsRefsRecord';
    /** Dimensions of AccountTracePathErrorsRefs that can be grouped by. */
    groupBy: AccountTracePathErrorsRefsDimensions;
    /** Metrics of AccountTracePathErrorsRefs that can be aggregated over. */
    metrics: AccountTracePathErrorsRefsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of AccountTraceRefs. */
export declare enum AccountTraceRefsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    DurationBucket = "DURATION_BUCKET",
    DurationNs = "DURATION_NS",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    TraceId = "TRACE_ID",
    TraceSizeBytes = "TRACE_SIZE_BYTES"
}
export declare type AccountTraceRefsDimensions = {
    __typename?: 'AccountTraceRefsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    durationBucket?: Maybe<Scalars['Int']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    querySignature?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
    traceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in AccountTraceRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type AccountTraceRefsFilter = {
    and?: InputMaybe<Array<AccountTraceRefsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
    durationBucket?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<AccountTraceRefsFilterIn>;
    not?: InputMaybe<AccountTraceRefsFilter>;
    or?: InputMaybe<Array<AccountTraceRefsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
    traceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in AccountTraceRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type AccountTraceRefsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
    durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type AccountTraceRefsMetrics = {
    __typename?: 'AccountTraceRefsMetrics';
    durationNs: Scalars['Long'];
    traceSizeBytes: Scalars['Long'];
};
export declare type AccountTraceRefsOrderBySpec = {
    column: AccountTraceRefsColumn;
    direction: Ordering;
};
export declare type AccountTraceRefsRecord = {
    __typename?: 'AccountTraceRefsRecord';
    /** Dimensions of AccountTraceRefs that can be grouped by. */
    groupBy: AccountTraceRefsDimensions;
    /** Metrics of AccountTraceRefs that can be aggregated over. */
    metrics: AccountTraceRefsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type Actor = {
    __typename?: 'Actor';
    actorId: Scalars['ID'];
    type: ActorType;
};
export declare type ActorInput = {
    actorId: Scalars['ID'];
    type: ActorType;
};
export declare enum ActorType {
    AnonymousUser = "ANONYMOUS_USER",
    Backfill = "BACKFILL",
    Cron = "CRON",
    Graph = "GRAPH",
    InternalIdentity = "INTERNAL_IDENTITY",
    Synchronization = "SYNCHRONIZATION",
    System = "SYSTEM",
    User = "USER"
}
export declare type AddOperationCollectionEntryResult = OperationCollectionEntry | PermissionError | ValidationError;
export declare type AddOperationCollectionToVariantResult = GraphVariant | InvalidTarget | PermissionError | ValidationError;
export declare type AffectedClient = {
    __typename?: 'AffectedClient';
    /**
     * ID, often the name, of the client set by the user and reported alongside metrics
     * @deprecated Unsupported.
     */
    clientReferenceId?: Maybe<Scalars['ID']>;
    /**
     * version of the client set by the user and reported alongside metrics
     * @deprecated Unsupported.
     */
    clientVersion?: Maybe<Scalars['String']>;
};
export declare type AffectedQuery = {
    __typename?: 'AffectedQuery';
    /** If the operation would be approved if the check ran again. Returns null if queried from SchemaDiff.changes.affectedQueries.alreadyApproved */
    alreadyApproved?: Maybe<Scalars['Boolean']>;
    /** If the operation would be ignored if the check ran again */
    alreadyIgnored?: Maybe<Scalars['Boolean']>;
    /** List of changes affecting this query. Returns null if queried from SchemaDiff.changes.affectedQueries.changes */
    changes?: Maybe<Array<ChangeOnOperation>>;
    /** Name to display to the user for the operation */
    displayName?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    /** Determines if this query validates against the proposed schema */
    isValid?: Maybe<Scalars['Boolean']>;
    /** Whether this operation was ignored and its severity was downgraded for that reason */
    markedAsIgnored?: Maybe<Scalars['Boolean']>;
    /** Whether the changes were marked as safe and its severity was downgraded for that reason */
    markedAsSafe?: Maybe<Scalars['Boolean']>;
    /** Name provided for the operation, which can be empty string if it is an anonymous operation */
    name?: Maybe<Scalars['String']>;
    /** First 128 characters of query signature for display */
    signature?: Maybe<Scalars['String']>;
};
export declare type ApiKey = {
    id: Scalars['ID'];
    keyName?: Maybe<Scalars['String']>;
    token: Scalars['String'];
};
export declare type ApiKeyProvision = {
    __typename?: 'ApiKeyProvision';
    apiKey: ApiKey;
    created: Scalars['Boolean'];
};
export declare type AuditLogExport = {
    __typename?: 'AuditLogExport';
    actors?: Maybe<Array<Identity>>;
    bigqueryTriggeredAt?: Maybe<Scalars['Timestamp']>;
    completedAt?: Maybe<Scalars['Timestamp']>;
    createdAt: Scalars['Timestamp'];
    exportedFiles?: Maybe<Array<Scalars['String']>>;
    from: Scalars['Timestamp'];
    graphs?: Maybe<Array<Service>>;
    id: Scalars['ID'];
    requester?: Maybe<User>;
    status: AuditStatus;
    to: Scalars['Timestamp'];
};
export declare type AuditLogExportMutation = {
    __typename?: 'AuditLogExportMutation';
    cancel?: Maybe<Account>;
    delete?: Maybe<Account>;
};
export declare enum AuditStatus {
    Cancelled = "CANCELLED",
    Completed = "COMPLETED",
    Expired = "EXPIRED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Queued = "QUEUED"
}
export declare type AvatarDeleteError = {
    __typename?: 'AvatarDeleteError';
    clientMessage: Scalars['String'];
    code: AvatarDeleteErrorCode;
    serverMessage: Scalars['String'];
};
export declare enum AvatarDeleteErrorCode {
    SsoUsersCannotDeleteSelfAvatar = "SSO_USERS_CANNOT_DELETE_SELF_AVATAR"
}
export declare type AvatarUploadError = {
    __typename?: 'AvatarUploadError';
    clientMessage: Scalars['String'];
    code: AvatarUploadErrorCode;
    serverMessage: Scalars['String'];
};
export declare enum AvatarUploadErrorCode {
    SsoUsersCannotUploadSelfAvatar = "SSO_USERS_CANNOT_UPLOAD_SELF_AVATAR"
}
export declare type AvatarUploadResult = AvatarUploadError | MediaUploadInfo;
export declare type BillingAddress = {
    __typename?: 'BillingAddress';
    address1?: Maybe<Scalars['String']>;
    address2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
};
/** Billing address inpnut */
export declare type BillingAddressInput = {
    address1: Scalars['String'];
    address2?: InputMaybe<Scalars['String']>;
    city: Scalars['String'];
    country: Scalars['String'];
    state: Scalars['String'];
    zip: Scalars['String'];
};
export declare type BillingInfo = {
    __typename?: 'BillingInfo';
    address: BillingAddress;
    cardType?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastFour?: Maybe<Scalars['Int']>;
    lastName?: Maybe<Scalars['String']>;
    month?: Maybe<Scalars['Int']>;
    vatNumber?: Maybe<Scalars['String']>;
    year?: Maybe<Scalars['Int']>;
};
export declare enum BillingModel {
    RequestBased = "REQUEST_BASED",
    SeatBased = "SEAT_BASED"
}
export declare type BillingMonth = {
    __typename?: 'BillingMonth';
    end: Scalars['Timestamp'];
    requests: Scalars['Long'];
    start: Scalars['Timestamp'];
};
export declare enum BillingPeriod {
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    SemiAnnually = "SEMI_ANNUALLY",
    Yearly = "YEARLY"
}
export declare type BillingPlan = {
    __typename?: 'BillingPlan';
    addons: Array<BillingPlanAddon>;
    billingModel: BillingModel;
    billingPeriod?: Maybe<BillingPeriod>;
    capabilities: BillingPlanCapabilities;
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    isTrial: Scalars['Boolean'];
    kind: BillingPlanKind;
    name: Scalars['String'];
    /** The price of every seat */
    pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
    /** The price of subscribing to this plan with a quantity of 1 (currently always the case) */
    pricePerUnitInUsdCents: Scalars['Int'];
    /** Whether the plan is accessible by all users in QueryRoot.allPlans, QueryRoot.plan, or AccountMutation.setPlan */
    public: Scalars['Boolean'];
    tier: BillingPlanTier;
};
export declare type BillingPlanAddon = {
    __typename?: 'BillingPlanAddon';
    id: Scalars['ID'];
    pricePerUnitInUsdCents: Scalars['Int'];
};
export declare type BillingPlanAddonV2 = {
    __typename?: 'BillingPlanAddonV2';
    id: Scalars['ID'];
    pricePerUnitInUsdCents: Scalars['Int'];
};
export declare type BillingPlanCapabilities = {
    __typename?: 'BillingPlanCapabilities';
    clients: Scalars['Boolean'];
    contracts: Scalars['Boolean'];
    datadog: Scalars['Boolean'];
    errors: Scalars['Boolean'];
    federation: Scalars['Boolean'];
    launches: Scalars['Boolean'];
    maxAuditInDays: Scalars['Int'];
    maxRangeInDays?: Maybe<Scalars['Int']>;
    maxRequestsPerMonth?: Maybe<Scalars['Long']>;
    metrics: Scalars['Boolean'];
    notifications: Scalars['Boolean'];
    operationRegistry: Scalars['Boolean'];
    ranges: Array<Scalars['String']>;
    schemaValidation: Scalars['Boolean'];
    traces: Scalars['Boolean'];
    userRoles: Scalars['Boolean'];
    webhooks: Scalars['Boolean'];
};
export declare enum BillingPlanKind {
    Community = "COMMUNITY",
    EnterpriseInternal = "ENTERPRISE_INTERNAL",
    EnterprisePaid = "ENTERPRISE_PAID",
    EnterprisePilot = "ENTERPRISE_PILOT",
    TeamPaid = "TEAM_PAID",
    TeamTrial = "TEAM_TRIAL"
}
export declare enum BillingPlanKindV2 {
    Community = "COMMUNITY",
    EnterpriseInternal = "ENTERPRISE_INTERNAL",
    EnterprisePaid = "ENTERPRISE_PAID",
    EnterprisePilot = "ENTERPRISE_PILOT",
    TeamPaid = "TEAM_PAID",
    TeamTrial = "TEAM_TRIAL",
    Unknown = "UNKNOWN"
}
export declare enum BillingPlanTier {
    Community = "COMMUNITY",
    Enterprise = "ENTERPRISE",
    Team = "TEAM"
}
export declare enum BillingPlanTierV2 {
    Community = "COMMUNITY",
    Enterprise = "ENTERPRISE",
    Team = "TEAM",
    Unknown = "UNKNOWN"
}
export declare type BillingPlanV2 = {
    __typename?: 'BillingPlanV2';
    addons: Array<BillingPlanAddonV2>;
    billingModel: BillingModel;
    billingPeriod?: Maybe<BillingPeriod>;
    clients: Scalars['Boolean'];
    contracts: Scalars['Boolean'];
    datadog: Scalars['Boolean'];
    description?: Maybe<Scalars['String']>;
    errors: Scalars['Boolean'];
    federation: Scalars['Boolean'];
    id: Scalars['ID'];
    isTrial: Scalars['Boolean'];
    kind: BillingPlanKindV2;
    launches: Scalars['Boolean'];
    maxAuditInDays: Scalars['Int'];
    maxRangeInDays?: Maybe<Scalars['Int']>;
    maxRequestsPerMonth?: Maybe<Scalars['Long']>;
    metrics: Scalars['Boolean'];
    name: Scalars['String'];
    notifications: Scalars['Boolean'];
    operationRegistry: Scalars['Boolean'];
    /** The price of every seat */
    pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
    /** The price of subscribing to this plan with a quantity of 1 (currently always the case) */
    pricePerUnitInUsdCents: Scalars['Int'];
    /** Whether the plan is accessible by all users in QueryRoot.allPlans, QueryRoot.plan, or AccountMutation.setPlan */
    public: Scalars['Boolean'];
    ranges: Array<Scalars['String']>;
    schemaValidation: Scalars['Boolean'];
    tier: BillingPlanTierV2;
    traces: Scalars['Boolean'];
    userRoles: Scalars['Boolean'];
    webhooks: Scalars['Boolean'];
};
export declare type BillingSubscription = {
    __typename?: 'BillingSubscription';
    activatedAt: Scalars['Timestamp'];
    addons: Array<BillingSubscriptionAddon>;
    autoRenew: Scalars['Boolean'];
    /** The price of the subscription when ignoring add-ons (such as seats), ie quantity * pricePerUnitInUsdCents */
    basePriceInUsdCents: Scalars['Long'];
    canceledAt?: Maybe<Scalars['Timestamp']>;
    currentPeriodEndsAt: Scalars['Timestamp'];
    currentPeriodStartedAt: Scalars['Timestamp'];
    expiresAt?: Maybe<Scalars['Timestamp']>;
    plan: BillingPlan;
    /** The price of every seat */
    pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
    /** The price of every unit in the subscription (hence multiplied by quantity to get to the basePriceInUsdCents) */
    pricePerUnitInUsdCents: Scalars['Int'];
    quantity: Scalars['Int'];
    /** Total price of the subscription when it next renews, including add-ons (such as seats) */
    renewalTotalPriceInUsdCents: Scalars['Long'];
    state: SubscriptionState;
    /** Total price of the subscription, including add-ons (such as seats) */
    totalPriceInUsdCents: Scalars['Long'];
    /**
     * When this subscription's trial period expires (if it is a trial). Not the same as the
     * subscription's Recurly expiration).
     */
    trialExpiresAt?: Maybe<Scalars['Timestamp']>;
    uuid: Scalars['ID'];
};
export declare type BillingSubscriptionAddon = {
    __typename?: 'BillingSubscriptionAddon';
    id: Scalars['ID'];
    pricePerUnitInUsdCents: Scalars['Int'];
    quantity: Scalars['Int'];
};
export declare type BillingSubscriptionAddonV2 = {
    __typename?: 'BillingSubscriptionAddonV2';
    id: Scalars['ID'];
    pricePerUnitInUsdCents: Scalars['Int'];
    quantity: Scalars['Int'];
};
export declare type BillingSubscriptionV2 = {
    __typename?: 'BillingSubscriptionV2';
    /** The price of every unit in the subscription (hence multiplied by quantity to get to the basePriceInUsdCents) */
    activatedAt: Scalars['Timestamp'];
    addons: Array<BillingSubscriptionAddonV2>;
    autoRenew: Scalars['Boolean'];
    canceledAt?: Maybe<Scalars['Timestamp']>;
    currentPeriodEndsAt: Scalars['Timestamp'];
    currentPeriodStartedAt: Scalars['Timestamp'];
    expiresAt?: Maybe<Scalars['Timestamp']>;
    plan: BillingPlanV2;
    /** The price of every seat */
    pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
    quantity: Scalars['Int'];
    state: SubscriptionStateV2;
    /**
     * When this subscription's trial period expires (if it is a trial). Not the same as the
     * subscription's Recurly expiration).
     */
    trialExpiresAt?: Maybe<Scalars['Timestamp']>;
    uuid: Scalars['ID'];
};
export declare type Build = {
    __typename?: 'Build';
    input: BuildInput;
    result?: Maybe<BuildResult>;
};
export declare type BuildError = {
    __typename?: 'BuildError';
    code?: Maybe<Scalars['String']>;
    locations: Array<SourceLocation>;
    message: Scalars['String'];
};
export declare type BuildFailure = {
    __typename?: 'BuildFailure';
    errorMessages: Array<BuildError>;
};
export declare type BuildInput = CompositionBuildInput | FilterBuildInput;
export declare type BuildResult = BuildFailure | BuildSuccess;
export declare type BuildSuccess = {
    __typename?: 'BuildSuccess';
    coreSchema: CoreSchema;
};
export declare enum CacheScope {
    Private = "PRIVATE",
    Public = "PUBLIC",
    Unknown = "UNKNOWN",
    Unrecognized = "UNRECOGNIZED"
}
export declare type Change = {
    __typename?: 'Change';
    affectedQueries?: Maybe<Array<AffectedQuery>>;
    /** Target arg of change made. */
    argNode?: Maybe<NamedIntrospectionArg>;
    /** Indication of the category of the change (e.g. addition, removal, edit). */
    category: ChangeCategory;
    /**
     * Node related to the top level node that was changed, such as a field in an object,
     * a value in an enum or the object of an interface
     */
    childNode?: Maybe<NamedIntrospectionValue>;
    /** Indication of the kind of target and action of the change, e.g. 'TYPE_REMOVED'. */
    code: Scalars['String'];
    /** Explanation of both the target of the change and how it was changed. */
    description: Scalars['String'];
    /** Top level node affected by the change */
    parentNode?: Maybe<NamedIntrospectionType>;
    /** Indication of the success of the overall change, either failure, warning, or notice. */
    severity: ChangeSeverity;
    /**
     * Indication of the success of the overall change, either failure, warning, or notice.
     * @deprecated use severity instead
     */
    type: ChangeType;
};
/**
 * Defines a set of categories that a schema change
 * can be grouped by.
 */
export declare enum ChangeCategory {
    Addition = "ADDITION",
    Deprecation = "DEPRECATION",
    Edit = "EDIT",
    Removal = "REMOVAL"
}
/**
 * These schema change codes represent all of the possible changes that can
 * occur during the schema diff algorithm.
 */
export declare enum ChangeCode {
    /** Type of the argument was changed. */
    ArgChangedType = "ARG_CHANGED_TYPE",
    /** Argument was changed from nullable to non-nullable. */
    ArgChangedTypeOptionalToRequired = "ARG_CHANGED_TYPE_OPTIONAL_TO_REQUIRED",
    /** Default value added or changed for the argument. */
    ArgDefaultValueChange = "ARG_DEFAULT_VALUE_CHANGE",
    /** Description was added, removed, or updated for argument. */
    ArgDescriptionChange = "ARG_DESCRIPTION_CHANGE",
    /** Argument to a field was removed. */
    ArgRemoved = "ARG_REMOVED",
    /** Argument to the directive was removed. */
    DirectiveArgRemoved = "DIRECTIVE_ARG_REMOVED",
    /** Location of the directive was removed. */
    DirectiveLocationRemoved = "DIRECTIVE_LOCATION_REMOVED",
    /** Directive was removed. */
    DirectiveRemoved = "DIRECTIVE_REMOVED",
    /** Repeatable flag was removed for directive. */
    DirectiveRepeatableRemoved = "DIRECTIVE_REPEATABLE_REMOVED",
    /** Enum was deprecated. */
    EnumDeprecated = "ENUM_DEPRECATED",
    /** Reason for enum deprecation changed. */
    EnumDeprecatedReasonChange = "ENUM_DEPRECATED_REASON_CHANGE",
    /** Enum deprecation was removed. */
    EnumDeprecationRemoved = "ENUM_DEPRECATION_REMOVED",
    /** Description was added, removed, or updated for enum value. */
    EnumValueDescriptionChange = "ENUM_VALUE_DESCRIPTION_CHANGE",
    /** Field was added to the type. */
    FieldAdded = "FIELD_ADDED",
    /** Return type for the field was changed. */
    FieldChangedType = "FIELD_CHANGED_TYPE",
    /** Field was deprecated. */
    FieldDeprecated = "FIELD_DEPRECATED",
    /** Reason for field deprecation changed. */
    FieldDeprecatedReasonChange = "FIELD_DEPRECATED_REASON_CHANGE",
    /** Field deprecation removed. */
    FieldDeprecationRemoved = "FIELD_DEPRECATION_REMOVED",
    /** Description was added, removed, or updated for field. */
    FieldDescriptionChange = "FIELD_DESCRIPTION_CHANGE",
    /** Type of the field in the input object was changed. */
    FieldOnInputObjectChangedType = "FIELD_ON_INPUT_OBJECT_CHANGED_TYPE",
    /** Field was removed from the type. */
    FieldRemoved = "FIELD_REMOVED",
    /** Field was removed from the input object. */
    FieldRemovedFromInputObject = "FIELD_REMOVED_FROM_INPUT_OBJECT",
    /** Non-nullable field was added to the input object. (Deprecated.) */
    NonNullableFieldAddedToInputObject = "NON_NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT",
    /** Nullable field was added to the input type. (Deprecated.) */
    NullableFieldAddedToInputObject = "NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT",
    /** Nullable argument was added to the field. */
    OptionalArgAdded = "OPTIONAL_ARG_ADDED",
    /** Optional field was added to the input type. */
    OptionalFieldAddedToInputObject = "OPTIONAL_FIELD_ADDED_TO_INPUT_OBJECT",
    /** Non-nullable argument was added to the field. */
    RequiredArgAdded = "REQUIRED_ARG_ADDED",
    /** Non-nullable argument added to directive. */
    RequiredDirectiveArgAdded = "REQUIRED_DIRECTIVE_ARG_ADDED",
    /** Required field was added to the input object. */
    RequiredFieldAddedToInputObject = "REQUIRED_FIELD_ADDED_TO_INPUT_OBJECT",
    /** Type was added to the schema. */
    TypeAdded = "TYPE_ADDED",
    /** Type now implements the interface. */
    TypeAddedToInterface = "TYPE_ADDED_TO_INTERFACE",
    /** A new value was added to the enum. */
    TypeAddedToUnion = "TYPE_ADDED_TO_UNION",
    /**
     * Type was changed from one kind to another.
     * Ex: scalar to object or enum to union.
     */
    TypeChangedKind = "TYPE_CHANGED_KIND",
    /** Description was added, removed, or updated for type. */
    TypeDescriptionChange = "TYPE_DESCRIPTION_CHANGE",
    /** Type (object or scalar) was removed from the schema. */
    TypeRemoved = "TYPE_REMOVED",
    /** Type no longer implements the interface. */
    TypeRemovedFromInterface = "TYPE_REMOVED_FROM_INTERFACE",
    /** Type is no longer included in the union. */
    TypeRemovedFromUnion = "TYPE_REMOVED_FROM_UNION",
    /** A new value was added to the enum. */
    ValueAddedToEnum = "VALUE_ADDED_TO_ENUM",
    /** Value was removed from the enum. */
    ValueRemovedFromEnum = "VALUE_REMOVED_FROM_ENUM"
}
/**
 * Represents the tuple of static information
 * about a particular kind of schema change.
 */
export declare type ChangeDefinition = {
    __typename?: 'ChangeDefinition';
    category: ChangeCategory;
    code: ChangeCode;
    defaultSeverity: ChangeSeverity;
};
/** Info about a change in the context of an operation it affects */
export declare type ChangeOnOperation = {
    __typename?: 'ChangeOnOperation';
    /** Human-readable explanation of the impact of this change on the operation */
    impact?: Maybe<Scalars['String']>;
    /** The semantic info about this change, i.e. info about the change that doesn't depend on the operation */
    semanticChange: SemanticChange;
};
export declare enum ChangeSeverity {
    Failure = "FAILURE",
    Notice = "NOTICE"
}
/**
 * Summary of the changes for a schema diff, computed by placing the changes into categories and then
 * counting the size of each category. This categorization can be done in different ways, and
 * accordingly there are multiple fields here for each type of categorization.
 *
 * Note that if an object or interface field is added/removed, there won't be any addition/removal
 * changes generated for its arguments or @deprecated usages. If an enum type is added/removed, there
 * will be addition/removal changes generated for its values, but not for those values' @deprecated
 * usages. Description changes won't be generated for a schema element if that element (or an
 * ancestor) was added/removed.
 */
export declare type ChangeSummary = {
    __typename?: 'ChangeSummary';
    /** Counts for changes to fields of objects, input objects, and interfaces. */
    field: FieldChangeSummaryCounts;
    /** Counts for all changes. */
    total: TotalChangeSummaryCounts;
    /**
     * Counts for changes to non-field aspects of objects, input objects, and interfaces,
     * and all aspects of enums, unions, and scalars.
     */
    type: TypeChangeSummaryCounts;
};
export declare enum ChangeType {
    Failure = "FAILURE",
    Notice = "NOTICE"
}
export declare type ChangelogLaunchResult = {
    __typename?: 'ChangelogLaunchResult';
    createdAt: Scalars['Timestamp'];
    schemaTagID: Scalars['ID'];
};
/** Destination for notifications */
export declare type Channel = {
    id: Scalars['ID'];
    name: Scalars['String'];
    subscriptions: Array<ChannelSubscription>;
};
export declare type ChannelSubscription = {
    channels: Array<Channel>;
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    variant?: Maybe<Scalars['String']>;
};
export declare type CheckConfiguration = {
    __typename?: 'CheckConfiguration';
    /** Time when check configuration was created */
    createdAt: Scalars['Timestamp'];
    /** Clients to ignore during validation */
    excludedClients: Array<ClientFilter>;
    /** Operation names to ignore during validation */
    excludedOperationNames?: Maybe<Array<Maybe<OperationNameFilter>>>;
    /** Operations to ignore during validation */
    excludedOperations: Array<ExcludedOperation>;
    /** Graph that this check configuration belongs to */
    graphID: Scalars['ID'];
    /** ID of the check configuration */
    id: Scalars['ID'];
    /** Default configuration to include operations on the base variant. */
    includeBaseVariant: Scalars['Boolean'];
    /** Variant overrides for validation */
    includedVariants: Array<Scalars['String']>;
    /** Minimum number of requests within the window for an operation to be considered. */
    operationCountThreshold: Scalars['Int'];
    /**
     * Number of requests within the window for an operation to be considered, relative to
     * total request count. Expected values are between 0 and 0.05 (minimum 5% of
     * total request volume)
     */
    operationCountThresholdPercentage: Scalars['Float'];
    /**
     * Only check operations from the last <timeRangeSeconds> seconds.
     * The default is 7 days (604,800 seconds).
     */
    timeRangeSeconds: Scalars['Long'];
    /** Time when check configuration was last updated */
    updatedAt: Scalars['Timestamp'];
    /** Identity of the last user to update the check configuration */
    updatedBy?: Maybe<Identity>;
};
/** Filter options available when listing checks. */
export declare type CheckFilterInput = {
    authors?: InputMaybe<Array<Scalars['String']>>;
    branches?: InputMaybe<Array<Scalars['String']>>;
    status?: InputMaybe<CheckFilterInputStatusOption>;
    subgraphs?: InputMaybe<Array<Scalars['String']>>;
};
/** Options for filtering CheckWorkflows by status */
export declare enum CheckFilterInputStatusOption {
    Failed = "FAILED",
    Passed = "PASSED",
    Pending = "PENDING"
}
export declare type CheckPartialSchemaResult = {
    __typename?: 'CheckPartialSchemaResult';
    /** Result of traffic validation. This will be null if composition validation was unsuccessful. */
    checkSchemaResult?: Maybe<CheckSchemaResult>;
    /** Result of composition validation run before the schema check. */
    compositionValidationResult: CompositionValidationResult;
    /** If any modifications were detected in the composed core schema */
    coreSchemaModified: Scalars['Boolean'];
    /** Workflow associated with the composition validation. */
    workflow?: Maybe<CheckWorkflow>;
};
export declare type CheckSchemaResult = {
    __typename?: 'CheckSchemaResult';
    /** Schema diff and affected operations generated by the schema check */
    diffToPrevious: SchemaDiff;
    /** ID of the operations check that was created */
    operationsCheckID: Scalars['ID'];
    /** Generated url to view schema diff in Engine */
    targetUrl?: Maybe<Scalars['String']>;
    /** Workflow associated with this check result */
    workflow?: Maybe<CheckWorkflow>;
};
export declare type CheckWorkflow = {
    __typename?: 'CheckWorkflow';
    /**
     * The variant provided as a base to check against.  Only the differences from the
     * base schema will be tested in operations checks.
     */
    baseVariant?: Maybe<GraphVariant>;
    completedAt?: Maybe<Scalars['Timestamp']>;
    createdAt: Scalars['Timestamp'];
    /** Contextual parameters supplied by the runtime environment where the check was run. */
    gitContext?: Maybe<GitContext>;
    id: Scalars['ID'];
    /** The name of the implementing service that was responsible for triggering the validation. */
    implementingServiceName?: Maybe<Scalars['String']>;
    /** If this check is triggered for an sdl fetched using introspection, this is the endpoint where that schema was being served. */
    introspectionEndpoint?: Maybe<Scalars['String']>;
    /** Only true if the check was triggered from Sandbox Checks page. */
    isSandboxCheck: Scalars['Boolean'];
    /** If this check was created by rerunning, the original check that was rerun. */
    rerunOf?: Maybe<CheckWorkflow>;
    /** Checks created by re-running this check, most recent first. */
    reruns?: Maybe<Array<CheckWorkflow>>;
    startedAt?: Maybe<Scalars['Timestamp']>;
    /** Overall status of the workflow, based on the underlying task statuses. */
    status: CheckWorkflowStatus;
    /** The set of check tasks associated with this workflow, e.g. OperationsCheck, GraphComposition, etc. */
    tasks: Array<CheckWorkflowTask>;
    /** Identity of the user who ran this check */
    triggeredBy?: Maybe<Identity>;
    /** Configuration of validation at the time the check was run. */
    validationConfig?: Maybe<SchemaDiffValidationConfig>;
};
export declare type CheckWorkflowRerunsArgs = {
    limit?: Scalars['Int'];
};
export declare type CheckWorkflowMutation = {
    __typename?: 'CheckWorkflowMutation';
    /** Re-run a check workflow using the current configuration. A new workflow is created and returned. */
    rerun?: Maybe<CheckWorkflowRerunResult>;
};
export declare type CheckWorkflowRerunResult = {
    __typename?: 'CheckWorkflowRerunResult';
    /** Check workflow created by re-running. */
    result?: Maybe<CheckWorkflow>;
    /** Check workflow that was rerun. */
    source?: Maybe<CheckWorkflow>;
};
export declare enum CheckWorkflowStatus {
    Failed = "FAILED",
    Passed = "PASSED",
    Pending = "PENDING"
}
export declare type CheckWorkflowTask = {
    completedAt?: Maybe<Scalars['Timestamp']>;
    createdAt: Scalars['Timestamp'];
    id: Scalars['ID'];
    status: CheckWorkflowTaskStatus;
    /** The workflow that this task belongs to. */
    workflow: CheckWorkflow;
};
export declare enum CheckWorkflowTaskStatus {
    Blocked = "BLOCKED",
    Failed = "FAILED",
    Passed = "PASSED",
    Pending = "PENDING"
}
/** Client filter configuration for a graph. */
export declare type ClientFilter = {
    __typename?: 'ClientFilter';
    /** name of the client set by the user and reported alongside metrics */
    name?: Maybe<Scalars['String']>;
    /** version of the client set by the user and reported alongside metrics */
    version?: Maybe<Scalars['String']>;
};
/**
 * Options to filter by client reference ID, client name, and client version.
 * If passing client version, make sure to either provide a client reference ID or client name.
 */
export declare type ClientFilterInput = {
    /** name of the client set by the user and reported alongside metrics */
    name?: InputMaybe<Scalars['String']>;
    /** version of the client set by the user and reported alongside metrics */
    version?: InputMaybe<Scalars['String']>;
};
/** Filter options to exclude by client reference ID, client name, and client version. */
export declare type ClientInfoFilter = {
    name?: InputMaybe<Scalars['String']>;
    /** Ignored */
    referenceID?: InputMaybe<Scalars['ID']>;
    version?: InputMaybe<Scalars['String']>;
};
/** Filter options to exclude clients. Used as an output type for SchemaDiffValidationConfig. */
export declare type ClientInfoFilterOutput = {
    __typename?: 'ClientInfoFilterOutput';
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};
export declare enum ComparisonOperator {
    Equals = "EQUALS",
    GreaterThan = "GREATER_THAN",
    GreaterThanOrEqualTo = "GREATER_THAN_OR_EQUAL_TO",
    LessThan = "LESS_THAN",
    LessThanOrEqualTo = "LESS_THAN_OR_EQUAL_TO",
    NotEquals = "NOT_EQUALS",
    Unrecognized = "UNRECOGNIZED"
}
/** Metadata about the result of composition run in the cloud, combined with removing an implementing service */
export declare type CompositionAndRemoveResult = {
    __typename?: 'CompositionAndRemoveResult';
    /** The produced composition config. Will be null if there are any errors */
    compositionConfig?: Maybe<CompositionConfig>;
    /** Whether the removed implementing service existed. */
    didExist: Scalars['Boolean'];
    /**
     * List of errors during composition. Errors mean that Apollo was unable to compose the
     * graph's implementing services into a GraphQL schema. This partial schema should not be
     * published to the implementing service if there were any errors encountered.
     */
    errors: Array<Maybe<SchemaCompositionError>>;
    /** ID that points to the results of composition. */
    graphCompositionID: Scalars['String'];
    /** List of subgraphs that are included in this composition. */
    subgraphConfigs: Array<SubgraphConfig>;
    /** Whether the gateway link was updated, or would have been for dry runs. */
    updatedGateway: Scalars['Boolean'];
};
/** Metadata about the result of composition run in the cloud, combined with implementing service upsert */
export declare type CompositionAndUpsertResult = {
    __typename?: 'CompositionAndUpsertResult';
    /** The produced composition config. Will be null if there are any errors */
    compositionConfig?: Maybe<CompositionConfig>;
    /**
     * List of errors during composition. Errors mean that Apollo was unable to compose the
     * graph's implementing services into a GraphQL schema. This partial schema should not be
     * published to the implementing service if there were any errors encountered
     */
    errors: Array<Maybe<SchemaCompositionError>>;
    /** ID that points to the results of composition. */
    graphCompositionID: Scalars['String'];
    /** Copy text for the launch result of a publish. */
    launchCliCopy?: Maybe<Scalars['String']>;
    /** Link to corresponding launches page on Studio if avaliable. */
    launchUrl?: Maybe<Scalars['String']>;
    /** List of subgraphs that are included in this composition. */
    subgraphConfigs: Array<SubgraphConfig>;
    /** Whether the gateway link was updated. */
    updatedGateway: Scalars['Boolean'];
    /** Whether an implementingService was created as part of this mutation */
    wasCreated: Scalars['Boolean'];
    /** Whether an implementingService was updated as part of this mutation */
    wasUpdated: Scalars['Boolean'];
};
export declare type CompositionBuildInput = {
    __typename?: 'CompositionBuildInput';
    subgraphs: Array<Subgraph>;
    version?: Maybe<Scalars['String']>;
};
export declare type CompositionCheckTask = CheckWorkflowTask & {
    __typename?: 'CompositionCheckTask';
    completedAt?: Maybe<Scalars['Timestamp']>;
    createdAt: Scalars['Timestamp'];
    id: Scalars['ID'];
    /** The result of the composition. */
    result?: Maybe<CompositionResult>;
    status: CheckWorkflowTaskStatus;
    workflow: CheckWorkflow;
};
/** The composition config exposed to the gateway */
export declare type CompositionConfig = {
    __typename?: 'CompositionConfig';
    /**
     * List of GCS links for implementing services that comprise a composed graph. Is empty if tag/inaccessible is enabled.
     * @deprecated Soon we will stop writing to GCS locations
     */
    implementingServiceLocations: Array<ImplementingServiceLocation>;
    /** Hash of the composed schema */
    schemaHash: Scalars['String'];
};
/** Metadata about the result of composition run in the cloud */
export declare type CompositionPublishResult = CompositionResult & {
    __typename?: 'CompositionPublishResult';
    /** The produced composition config. Will be null if there are any errors */
    compositionConfig?: Maybe<CompositionConfig>;
    /**
     * Supergraph SDL generated by composition (this is not the CSDL, that is a deprecated format).
     * @deprecated Use supergraphSdl instead
     */
    csdl?: Maybe<Scalars['GraphQLDocument']>;
    /**
     * List of errors during composition. Errors mean that Apollo was unable to compose the
     * graph's implementing services into a GraphQL schema. This partial schema should not be
     * published to the implementing service if there were any errors encountered
     */
    errors: Array<SchemaCompositionError>;
    /** ID that points to the results of this composition. */
    graphCompositionID: Scalars['ID'];
    /** List of subgraphs that are included in this composition. */
    subgraphConfigs: Array<SubgraphConfig>;
    /** Supergraph SDL generated by composition. */
    supergraphSdl?: Maybe<Scalars['GraphQLDocument']>;
    /** Whether the gateway link was updated. */
    updatedGateway: Scalars['Boolean'];
    webhookNotificationBody?: Maybe<Scalars['String']>;
};
/** Result of a composition, either as the result of a composition validation or a publish. */
export declare type CompositionResult = {
    /**
     * Supergraph SDL generated by composition (this is not the CSDL, that is a deprecated format).
     * @deprecated Use supergraphSdl instead
     */
    csdl?: Maybe<Scalars['GraphQLDocument']>;
    /**
     * List of errors during composition. Errors mean that Apollo was unable to compose the
     * graph's implementing services into a GraphQL schema. This partial schema should not be
     * published to the implementing service if there were any errors encountered
     */
    errors: Array<SchemaCompositionError>;
    /** ID that points to the results of this composition. */
    graphCompositionID: Scalars['ID'];
    /** List of subgraphs that are included in this composition. */
    subgraphConfigs: Array<SubgraphConfig>;
    /** Supergraph SDL generated by composition. */
    supergraphSdl?: Maybe<Scalars['GraphQLDocument']>;
};
export declare type CompositionStatusSubscription = ChannelSubscription & {
    __typename?: 'CompositionStatusSubscription';
    channels: Array<Channel>;
    createdAt: Scalars['Timestamp'];
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    lastUpdatedAt: Scalars['Timestamp'];
    variant?: Maybe<Scalars['String']>;
};
/** The composition config exposed to the gateway */
export declare type CompositionValidationDetails = {
    __typename?: 'CompositionValidationDetails';
    /** List of implementing service partial schemas that comprised the graph composed during validation */
    implementingServices: Array<FederatedImplementingServicePartialSchema>;
    /** Hash of the composed schema */
    schemaHash?: Maybe<Scalars['String']>;
};
/** Metadata about the result of compositions validation run in the cloud */
export declare type CompositionValidationResult = CompositionResult & {
    __typename?: 'CompositionValidationResult';
    /** Describes whether composition succeeded. */
    compositionSuccess: Scalars['Boolean'];
    /**
     * Akin to a composition config, represents the partial schemas and implementing services that were used
     * in running composition. Will be null if any errors are encountered. Also may contain a schema hash if
     * one could be computed, which can be used for schema validation.
     */
    compositionValidationDetails?: Maybe<CompositionValidationDetails>;
    /**
     * Supergraph SDL generated by composition (this is not the CSDL, that is a deprecated format).
     * @deprecated Use supergraphSdl instead
     */
    csdl?: Maybe<Scalars['GraphQLDocument']>;
    /**
     * List of errors during composition. Errors mean that Apollo was unable to compose the
     * graph's implementing services into a GraphQL schema. This partial schema should not be
     * published to the implementing service if there were any errors encountered
     */
    errors: Array<SchemaCompositionError>;
    /** ID that points to the results of this composition. */
    graphCompositionID: Scalars['ID'];
    /** The implementing service that was responsible for triggering the validation */
    proposedImplementingService: FederatedImplementingServicePartialSchema;
    /** List of subgraphs that are included in this composition. */
    subgraphConfigs: Array<SubgraphConfig>;
    /** Supergraph SDL generated by composition. */
    supergraphSdl?: Maybe<Scalars['GraphQLDocument']>;
    /** If created as part of a check workflow, the associated workflow task. */
    workflowTask?: Maybe<CompositionCheckTask>;
};
export declare enum ContractVariantFailedStep {
    AddDirectiveDefinitionsIfNotPresent = "ADD_DIRECTIVE_DEFINITIONS_IF_NOT_PRESENT",
    DirectiveDefinitionLocationAugmenting = "DIRECTIVE_DEFINITION_LOCATION_AUGMENTING",
    EmptyObjectAndInterfaceMasking = "EMPTY_OBJECT_AND_INTERFACE_MASKING",
    EmptyUnionMasking = "EMPTY_UNION_MASKING",
    InputValidation = "INPUT_VALIDATION",
    Parsing = "PARSING",
    ParsingTagDirectives = "PARSING_TAG_DIRECTIVES",
    PartialInterfaceMasking = "PARTIAL_INTERFACE_MASKING",
    SchemaRetrieval = "SCHEMA_RETRIEVAL",
    TagInheriting = "TAG_INHERITING",
    TagMatching = "TAG_MATCHING",
    ToApiSchema = "TO_API_SCHEMA",
    ToFilterSchema = "TO_FILTER_SCHEMA",
    Unknown = "UNKNOWN",
    VersionCheck = "VERSION_CHECK"
}
export declare type ContractVariantPreviewErrors = {
    __typename?: 'ContractVariantPreviewErrors';
    errorMessages: Array<Scalars['String']>;
    failedStep: ContractVariantFailedStep;
};
export declare type ContractVariantPreviewResult = ContractVariantPreviewErrors | ContractVariantPreviewSuccess;
export declare type ContractVariantPreviewSuccess = {
    __typename?: 'ContractVariantPreviewSuccess';
    baseApiSchema: Scalars['String'];
    baseCoreSchema: Scalars['String'];
    contractApiSchema: Scalars['String'];
    contractCoreSchema: Scalars['String'];
};
export declare type ContractVariantUpsertErrors = {
    __typename?: 'ContractVariantUpsertErrors';
    errorMessages: Array<Scalars['String']>;
};
export declare type ContractVariantUpsertResult = ContractVariantUpsertErrors | ContractVariantUpsertSuccess;
export declare type ContractVariantUpsertSuccess = {
    __typename?: 'ContractVariantUpsertSuccess';
    contractVariant: GraphVariant;
};
export declare type CoreSchema = {
    __typename?: 'CoreSchema';
    apiDocument: Scalars['GraphQLDocument'];
    coreDocument: Scalars['GraphQLDocument'];
    coreHash: Scalars['String'];
};
export declare type CreateOperationCollectionResult = OperationCollection | PermissionError | ValidationError;
export declare type CronExecution = {
    __typename?: 'CronExecution';
    completedAt?: Maybe<Scalars['Timestamp']>;
    failure?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    job: CronJob;
    resolvedAt?: Maybe<Scalars['Timestamp']>;
    resolvedBy?: Maybe<Actor>;
    schedule: Scalars['String'];
    startedAt: Scalars['Timestamp'];
};
export declare type CronJob = {
    __typename?: 'CronJob';
    group: Scalars['String'];
    name: Scalars['String'];
    recentExecutions: Array<CronExecution>;
};
export declare type CronJobRecentExecutionsArgs = {
    n?: InputMaybe<Scalars['Int']>;
};
export declare enum DatadogApiRegion {
    Eu = "EU",
    Eu1 = "EU1",
    Us = "US",
    Us1 = "US1",
    Us1Fed = "US1FED",
    Us3 = "US3",
    Us5 = "US5"
}
export declare type DatadogMetricsConfig = {
    __typename?: 'DatadogMetricsConfig';
    apiKey: Scalars['String'];
    apiRegion: DatadogApiRegion;
    enabled: Scalars['Boolean'];
    legacyMetricNames: Scalars['Boolean'];
};
export declare type DeleteOperationCollectionResult = DeleteOperationCollectionSuccess | PermissionError;
export declare type DeleteOperationCollectionSuccess = {
    __typename?: 'DeleteOperationCollectionSuccess';
    sandboxOwner?: Maybe<User>;
    variants: Array<GraphVariant>;
};
export declare type DeleteSchemaTagResult = {
    __typename?: 'DeleteSchemaTagResult';
    deleted: Scalars['Boolean'];
};
export declare enum DeletionTargetType {
    Account = "ACCOUNT",
    User = "USER"
}
/** Support for a single directive on a graph variant */
export declare type DirectiveSupportStatus = {
    __typename?: 'DirectiveSupportStatus';
    /** whether the directive is supported on the current graph variant */
    enabled: Scalars['Boolean'];
    /** name of the directive */
    name: Scalars['String'];
};
export declare type DuplicateOperationCollectionResult = OperationCollection | PermissionError | ValidationError;
export declare type DurationHistogram = {
    __typename?: 'DurationHistogram';
    averageDurationMs?: Maybe<Scalars['Float']>;
    buckets: Array<DurationHistogramBucket>;
    durationMs?: Maybe<Scalars['Float']>;
    /** Counts per durationBucket, where sequences of zeroes are replaced with the negative of their size */
    sparseBuckets: Array<Scalars['Long']>;
    totalCount: Scalars['Long'];
    totalDurationMs: Scalars['Float'];
};
export declare type DurationHistogramDurationMsArgs = {
    percentile: Scalars['Float'];
};
export declare type DurationHistogramBucket = {
    __typename?: 'DurationHistogramBucket';
    count: Scalars['Long'];
    index: Scalars['Int'];
    rangeBeginMs: Scalars['Float'];
    rangeEndMs: Scalars['Float'];
};
export declare type EdgeServerInfo = {
    /** A randomly generated UUID, immutable for the lifetime of the edge server runtime. */
    bootId: Scalars['String'];
    /** A unique identifier for the executable GraphQL served by the edge server. length must be <= 64 characters. */
    executableSchemaId: Scalars['String'];
    /** The graph variant, defaults to 'current' */
    graphVariant?: Scalars['String'];
    /** The version of the edge server reporting agent, e.g. apollo-server-2.8, graphql-java-3.1, etc. length must be <= 256 characters. */
    libraryVersion?: InputMaybe<Scalars['String']>;
    /** The infra environment in which this edge server is running, e.g. localhost, Kubernetes, AWS Lambda, Google CloudRun, AWS ECS, etc. length must be <= 256 characters. */
    platform?: InputMaybe<Scalars['String']>;
    /** The runtime in which the edge server is running, e.g. node 12.03, zulu8.46.0.19-ca-jdk8.0.252-macosx_x64, etc. length must be <= 256 characters. */
    runtimeVersion?: InputMaybe<Scalars['String']>;
    /** If available, an identifier for the edge server instance, such that when restarting this instance it will have the same serverId, with a different bootId. For example, in Kubernetes this might be the pod name. Length must be <= 256 characters. */
    serverId?: InputMaybe<Scalars['String']>;
    /** An identifier used to distinguish the version (from the user's perspective) of the edge server's code itself. For instance, the git sha of the server's repository or the docker sha of the associated image this server runs with. Length must be <= 256 characters. */
    userVersion?: InputMaybe<Scalars['String']>;
};
/** Columns of EdgeServerInfos. */
export declare enum EdgeServerInfosColumn {
    BootId = "BOOT_ID",
    ExecutableSchemaId = "EXECUTABLE_SCHEMA_ID",
    LibraryVersion = "LIBRARY_VERSION",
    Platform = "PLATFORM",
    RuntimeVersion = "RUNTIME_VERSION",
    SchemaTag = "SCHEMA_TAG",
    ServerId = "SERVER_ID",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    UserVersion = "USER_VERSION"
}
export declare type EdgeServerInfosDimensions = {
    __typename?: 'EdgeServerInfosDimensions';
    bootId?: Maybe<Scalars['ID']>;
    executableSchemaId?: Maybe<Scalars['ID']>;
    libraryVersion?: Maybe<Scalars['String']>;
    platform?: Maybe<Scalars['String']>;
    runtimeVersion?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serverId?: Maybe<Scalars['ID']>;
    serviceId?: Maybe<Scalars['ID']>;
    userVersion?: Maybe<Scalars['String']>;
};
/** Filter for data in EdgeServerInfos. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type EdgeServerInfosFilter = {
    and?: InputMaybe<Array<EdgeServerInfosFilter>>;
    /** Selects rows whose bootId dimension equals the given value if not null. To query for the null value, use {in: {bootId: [null]}} instead. */
    bootId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose executableSchemaId dimension equals the given value if not null. To query for the null value, use {in: {executableSchemaId: [null]}} instead. */
    executableSchemaId?: InputMaybe<Scalars['ID']>;
    in?: InputMaybe<EdgeServerInfosFilterIn>;
    /** Selects rows whose libraryVersion dimension equals the given value if not null. To query for the null value, use {in: {libraryVersion: [null]}} instead. */
    libraryVersion?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<EdgeServerInfosFilter>;
    or?: InputMaybe<Array<EdgeServerInfosFilter>>;
    /** Selects rows whose platform dimension equals the given value if not null. To query for the null value, use {in: {platform: [null]}} instead. */
    platform?: InputMaybe<Scalars['String']>;
    /** Selects rows whose runtimeVersion dimension equals the given value if not null. To query for the null value, use {in: {runtimeVersion: [null]}} instead. */
    runtimeVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serverId dimension equals the given value if not null. To query for the null value, use {in: {serverId: [null]}} instead. */
    serverId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose userVersion dimension equals the given value if not null. To query for the null value, use {in: {userVersion: [null]}} instead. */
    userVersion?: InputMaybe<Scalars['String']>;
};
/** Filter for data in EdgeServerInfos. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type EdgeServerInfosFilterIn = {
    /** Selects rows whose bootId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    bootId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose executableSchemaId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    executableSchemaId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose libraryVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    libraryVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose platform dimension is in the given list. A null value in the list means a row with null for that dimension. */
    platform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose runtimeVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    runtimeVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serverId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serverId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose userVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    userVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type EdgeServerInfosOrderBySpec = {
    column: EdgeServerInfosColumn;
    direction: Ordering;
};
export declare type EdgeServerInfosRecord = {
    __typename?: 'EdgeServerInfosRecord';
    /** Dimensions of EdgeServerInfos that can be grouped by. */
    groupBy: EdgeServerInfosDimensions;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare enum EmailCategory {
    Educational = "EDUCATIONAL"
}
export declare type EmailPreferences = {
    __typename?: 'EmailPreferences';
    email: Scalars['String'];
    subscriptions: Array<EmailCategory>;
    unsubscribedFromAll: Scalars['Boolean'];
};
export declare type Error = {
    message: Scalars['String'];
};
/** Columns of ErrorStats. */
export declare enum ErrorStatsColumn {
    AccountId = "ACCOUNT_ID",
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    ErrorsCount = "ERRORS_COUNT",
    Path = "PATH",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    RequestsWithErrorsCount = "REQUESTS_WITH_ERRORS_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP"
}
export declare type ErrorStatsDimensions = {
    __typename?: 'ErrorStatsDimensions';
    accountId?: Maybe<Scalars['ID']>;
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in ErrorStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ErrorStatsFilter = {
    /** Selects rows whose accountId dimension equals the given value if not null. To query for the null value, use {in: {accountId: [null]}} instead. */
    accountId?: InputMaybe<Scalars['ID']>;
    and?: InputMaybe<Array<ErrorStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<ErrorStatsFilterIn>;
    not?: InputMaybe<ErrorStatsFilter>;
    or?: InputMaybe<Array<ErrorStatsFilter>>;
    /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
    path?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in ErrorStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ErrorStatsFilterIn = {
    /** Selects rows whose accountId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    accountId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
    path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type ErrorStatsMetrics = {
    __typename?: 'ErrorStatsMetrics';
    errorsCount: Scalars['Long'];
    requestsWithErrorsCount: Scalars['Long'];
};
export declare type ErrorStatsOrderBySpec = {
    column: ErrorStatsColumn;
    direction: Ordering;
};
export declare type ErrorStatsRecord = {
    __typename?: 'ErrorStatsRecord';
    /** Dimensions of ErrorStats that can be grouped by. */
    groupBy: ErrorStatsDimensions;
    /** Metrics of ErrorStats that can be aggregated over. */
    metrics: ErrorStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/**  Input parameters for run explorer operation event. */
export declare enum EventEnum {
    ClickCheckList = "CLICK_CHECK_LIST",
    ClickGoToGraphSettings = "CLICK_GO_TO_GRAPH_SETTINGS",
    RunExplorerOperation = "RUN_EXPLORER_OPERATION"
}
/** Excluded operation for a graph. */
export declare type ExcludedOperation = {
    __typename?: 'ExcludedOperation';
    /** Operation ID to exclude from schema check. */
    ID: Scalars['ID'];
};
/** Option to filter by operation ID. */
export declare type ExcludedOperationInput = {
    /** Operation ID to exclude from schema check. */
    ID: Scalars['ID'];
};
export declare type FeatureIntros = {
    __typename?: 'FeatureIntros';
    devGraph: Scalars['Boolean'];
    federatedGraph: Scalars['Boolean'];
    freeConsumerSeats: Scalars['Boolean'];
};
/** Feature Intros Input Type */
export declare type FeatureIntrosInput = {
    devGraph?: InputMaybe<Scalars['Boolean']>;
    federatedGraph?: InputMaybe<Scalars['Boolean']>;
    freeConsumerSeats?: InputMaybe<Scalars['Boolean']>;
};
export declare type FederatedImplementingService = {
    __typename?: 'FederatedImplementingService';
    /**
     * An implementing service could have multiple inactive partial schemas that were previously uploaded
     * activePartialSchema returns the one that is designated to be used for composition for a given graph-variant
     */
    activePartialSchema: PartialSchema;
    /** Timestamp of when this implementing service was created */
    createdAt: Scalars['Timestamp'];
    /**
     * Identifies which graph this implementing service belongs to.
     * Formerly known as "service_id"
     */
    graphID: Scalars['String'];
    /**
     * Specifies which variant of a graph this implementing service belongs to".
     * Formerly known as "tag"
     */
    graphVariant: Scalars['String'];
    /** Name of the implementing service */
    name: Scalars['String'];
    /**
     * A way to capture some customer-specific way of tracking which version / edition
     * of the ImplementingService this is. Typically a Git SHA or docker image ID.
     */
    revision: Scalars['String'];
    /** Timestamp for when this implementing service was updated */
    updatedAt: Scalars['Timestamp'];
    /** URL of the graphql endpoint of the implementing service */
    url?: Maybe<Scalars['String']>;
};
/** A minimal representation of a federated implementing service, using only a name and partial schema SDL */
export declare type FederatedImplementingServicePartialSchema = {
    __typename?: 'FederatedImplementingServicePartialSchema';
    /** The name of the implementing service */
    name: Scalars['String'];
    /** The partial schema of the implementing service */
    sdl: Scalars['String'];
};
/** List of federated implementing services that compose a graph */
export declare type FederatedImplementingServices = {
    __typename?: 'FederatedImplementingServices';
    services: Array<FederatedImplementingService>;
};
export declare type FieldChangeSummaryCounts = {
    __typename?: 'FieldChangeSummaryCounts';
    /** Number of changes that are additions of fields to object and interface types. */
    additions: Scalars['Int'];
    /**
     * Number of changes that are field edits. This includes fields changing type and any field
     * deprecation and description changes, but also includes any argument changes and any input object
     * field changes.
     */
    edits: Scalars['Int'];
    /** Number of changes that are removals of fields from object and interface types. */
    removals: Scalars['Int'];
};
/** Columns of FieldLatencies. */
export declare enum FieldLatenciesColumn {
    FieldHistogram = "FIELD_HISTOGRAM",
    FieldName = "FIELD_NAME",
    ParentType = "PARENT_TYPE",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP"
}
export declare type FieldLatenciesDimensions = {
    __typename?: 'FieldLatenciesDimensions';
    field?: Maybe<Scalars['String']>;
    fieldName?: Maybe<Scalars['String']>;
    parentType?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in FieldLatencies. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type FieldLatenciesFilter = {
    and?: InputMaybe<Array<FieldLatenciesFilter>>;
    /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
    fieldName?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<FieldLatenciesFilterIn>;
    not?: InputMaybe<FieldLatenciesFilter>;
    or?: InputMaybe<Array<FieldLatenciesFilter>>;
    /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
    parentType?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in FieldLatencies. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type FieldLatenciesFilterIn = {
    /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
    parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type FieldLatenciesMetrics = {
    __typename?: 'FieldLatenciesMetrics';
    fieldHistogram: DurationHistogram;
};
export declare type FieldLatenciesOrderBySpec = {
    column: FieldLatenciesColumn;
    direction: Ordering;
};
export declare type FieldLatenciesRecord = {
    __typename?: 'FieldLatenciesRecord';
    /** Dimensions of FieldLatencies that can be grouped by. */
    groupBy: FieldLatenciesDimensions;
    /** Metrics of FieldLatencies that can be aggregated over. */
    metrics: FieldLatenciesMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of FieldUsage. */
export declare enum FieldUsageColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    EstimatedExecutionCount = "ESTIMATED_EXECUTION_COUNT",
    ExecutionCount = "EXECUTION_COUNT",
    FieldName = "FIELD_NAME",
    ParentType = "PARENT_TYPE",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    ReferencingOperationCount = "REFERENCING_OPERATION_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP"
}
export declare type FieldUsageDimensions = {
    __typename?: 'FieldUsageDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    fieldName?: Maybe<Scalars['String']>;
    parentType?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in FieldUsage. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type FieldUsageFilter = {
    and?: InputMaybe<Array<FieldUsageFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
    fieldName?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<FieldUsageFilterIn>;
    not?: InputMaybe<FieldUsageFilter>;
    or?: InputMaybe<Array<FieldUsageFilter>>;
    /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
    parentType?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in FieldUsage. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type FieldUsageFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
    parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type FieldUsageMetrics = {
    __typename?: 'FieldUsageMetrics';
    estimatedExecutionCount: Scalars['Long'];
    executionCount: Scalars['Long'];
    referencingOperationCount: Scalars['Long'];
};
export declare type FieldUsageOrderBySpec = {
    column: FieldUsageColumn;
    direction: Ordering;
};
export declare type FieldUsageRecord = {
    __typename?: 'FieldUsageRecord';
    /** Dimensions of FieldUsage that can be grouped by. */
    groupBy: FieldUsageDimensions;
    /** Metrics of FieldUsage that can be aggregated over. */
    metrics: FieldUsageMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type FilterBuildInput = {
    __typename?: 'FilterBuildInput';
    filterConfig: FilterConfig;
    schemaHash: Scalars['String'];
};
export declare type FilterConfig = {
    __typename?: 'FilterConfig';
    exclude: Array<Scalars['String']>;
    include: Array<Scalars['String']>;
};
export declare type FilterConfigInput = {
    exclude: Array<Scalars['String']>;
    include: Array<Scalars['String']>;
};
export declare type GitContext = {
    __typename?: 'GitContext';
    branch?: Maybe<Scalars['String']>;
    commit?: Maybe<Scalars['ID']>;
    commitUrl?: Maybe<Scalars['String']>;
    committer?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    remoteHost?: Maybe<GitRemoteHost>;
    remoteUrl?: Maybe<Scalars['String']>;
};
/** This is stored with a schema when it is uploaded */
export declare type GitContextInput = {
    branch?: InputMaybe<Scalars['String']>;
    commit?: InputMaybe<Scalars['ID']>;
    committer?: InputMaybe<Scalars['String']>;
    message?: InputMaybe<Scalars['String']>;
    remoteUrl?: InputMaybe<Scalars['String']>;
};
export declare enum GitRemoteHost {
    Bitbucket = "BITBUCKET",
    Github = "GITHUB",
    Gitlab = "GITLAB"
}
export declare type GlobalExperimentalFeatures = {
    __typename?: 'GlobalExperimentalFeatures';
    operationsCollections: Scalars['Boolean'];
    sandboxesFullRelease: Scalars['Boolean'];
    sandboxesPreview: Scalars['Boolean'];
    sandboxesSchemaChecksPage: Scalars['Boolean'];
    sandboxesSchemaDiffPage: Scalars['Boolean'];
    subgraphsInSandbox: Scalars['Boolean'];
};
export declare type GraphApiKey = ApiKey & {
    __typename?: 'GraphApiKey';
    createdAt: Scalars['Timestamp'];
    createdBy?: Maybe<Identity>;
    id: Scalars['ID'];
    keyName?: Maybe<Scalars['String']>;
    role: UserPermission;
    token: Scalars['String'];
};
/** A union of all combinations that can comprise the implementingServices for a Service */
export declare type GraphImplementors = FederatedImplementingServices | NonFederatedImplementingService;
/** A variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariant = {
    __typename?: 'GraphVariant';
    /** As new schema tags keep getting published, activeSchemaPublish refers to the latest. */
    activeSchemaPublish?: Maybe<SchemaTag>;
    /** The version of composition currently in use, if applicable */
    compositionVersion?: Maybe<Scalars['String']>;
    /** Filter configuration used to create the contract schema */
    contractFilterConfig?: Maybe<FilterConfig>;
    /** Explorer setting for default headers for a graph */
    defaultHeaders?: Maybe<Scalars['String']>;
    derivedVariantCount: Scalars['Int'];
    /** Graph the variant belongs to */
    graph: Service;
    /** Graph ID of the variant. Prefer using graph { id } when feasible. */
    graphId: Scalars['String'];
    /** Global identifier for the graph variant, in the form `graph@variant`. */
    id: Scalars['ID'];
    /** Represents whether this variant is a Contract. */
    isContract: Scalars['Boolean'];
    /** Is this variant one of the current user's favorite variants? */
    isFavoriteOfCurrentUser: Scalars['Boolean'];
    /** If the variant has a composition */
    isFederated?: Maybe<Scalars['Boolean']>;
    /** If the variant is protected */
    isProtected: Scalars['Boolean'];
    isPublic: Scalars['Boolean'];
    /** Represents whether this variant should be listed in the public variants directory. This can only be true if the variant is also public. */
    isPubliclyListed: Scalars['Boolean'];
    /** Represents whether Apollo has verified the authenticity of this public variant. This can only be true if the variant is also public. */
    isVerified: Scalars['Boolean'];
    latestApprovedLaunch?: Maybe<Launch>;
    latestLaunch?: Maybe<Launch>;
    launch?: Maybe<Launch>;
    launchHistory: Array<Launch>;
    links?: Maybe<Array<LinkInfo>>;
    /** Name of the variant, like `variant`. */
    name: Scalars['String'];
    operationCollections: Array<OperationCollection>;
    /** Which permissions the current user has for interacting with this variant */
    permissions: GraphVariantPermissions;
    /** Generate a federated operation plan for a given operation */
    plan?: Maybe<QueryPlan>;
    /** Explorer setting for preflight script to run before the actual GraphQL operations is run. */
    preflightScript?: Maybe<Scalars['String']>;
    readme?: Maybe<Readme>;
    /** Registry stats for this particular graph variant */
    registryStatsWindow?: Maybe<RegistryStatsWindow>;
    /** The total number of requests for this variant in the last 24 hours */
    requestsInLastDay?: Maybe<Scalars['Long']>;
    /** If the graphql endpoint is set up to accept cookies */
    sendCookies?: Maybe<Scalars['Boolean']>;
    sourceVariant?: Maybe<GraphVariant>;
    /** URL where the graph subscription can be queried. */
    subscriptionUrl?: Maybe<Scalars['String']>;
    /** A list of supported directives */
    supportedDirectives?: Maybe<Array<DirectiveSupportStatus>>;
    /** URL where the graph can be queried. */
    url?: Maybe<Scalars['String']>;
    /** The last instant that usage information (e.g. operation stat, client stats) was reported for this variant */
    usageLastReportedAt?: Maybe<Scalars['Timestamp']>;
};
/** A variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantLaunchArgs = {
    id: Scalars['ID'];
};
/** A variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantLaunchHistoryArgs = {
    limit?: Scalars['Int'];
};
/** A variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantPlanArgs = {
    document: Scalars['GraphQLDocument'];
    operationName?: InputMaybe<Scalars['String']>;
};
/** A variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantRegistryStatsWindowArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type GraphVariantLookup = GraphVariant | InvalidRefFormat;
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutation = {
    __typename?: 'GraphVariantMutation';
    addLinkToVariant: GraphVariant;
    configureComposition?: Maybe<GraphVariant>;
    /** @deprecated Use configureComposition instead */
    enableTagAndInaccessible?: Maybe<GraphVariant>;
    /** Graph ID of the variant */
    graphId: Scalars['String'];
    /** Global identifier for the graph variant, in the form `graph@variant`. */
    id: Scalars['ID'];
    /** Name of the variant, like `variant`. */
    name: Scalars['String'];
    relaunch: RelaunchResult;
    removeLinkFromVariant: GraphVariant;
    setIsFavoriteOfCurrentUser: GraphVariant;
    updateDefaultHeaders?: Maybe<GraphVariant>;
    updateIsProtected?: Maybe<GraphVariant>;
    updatePreflightScript?: Maybe<GraphVariant>;
    updateSendCookies?: Maybe<GraphVariant>;
    updateSubscriptionURL?: Maybe<GraphVariant>;
    updateURL?: Maybe<GraphVariant>;
    updateVariantIsPublic?: Maybe<GraphVariant>;
    updateVariantIsPubliclyListed?: Maybe<GraphVariant>;
    updateVariantIsVerified?: Maybe<GraphVariant>;
    updateVariantReadme?: Maybe<GraphVariant>;
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationAddLinkToVariantArgs = {
    title?: InputMaybe<Scalars['String']>;
    type: LinkInfoType;
    url: Scalars['String'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationConfigureCompositionArgs = {
    enableTagAndInaccessible?: InputMaybe<Scalars['Boolean']>;
    version?: InputMaybe<Scalars['String']>;
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationEnableTagAndInaccessibleArgs = {
    enabled: Scalars['Boolean'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationRemoveLinkFromVariantArgs = {
    linkInfoId: Scalars['ID'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationSetIsFavoriteOfCurrentUserArgs = {
    favorite: Scalars['Boolean'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateDefaultHeadersArgs = {
    defaultHeaders?: InputMaybe<Scalars['String']>;
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateIsProtectedArgs = {
    isProtected: Scalars['Boolean'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdatePreflightScriptArgs = {
    preflightScript?: InputMaybe<Scalars['String']>;
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateSendCookiesArgs = {
    sendCookies: Scalars['Boolean'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateSubscriptionUrlArgs = {
    subscriptionUrl?: InputMaybe<Scalars['String']>;
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateUrlArgs = {
    url?: InputMaybe<Scalars['String']>;
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateVariantIsPublicArgs = {
    isPublic: Scalars['Boolean'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateVariantIsPubliclyListedArgs = {
    isPubliclyListed: Scalars['Boolean'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateVariantIsVerifiedArgs = {
    isVerified: Scalars['Boolean'];
};
/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export declare type GraphVariantMutationUpdateVariantReadmeArgs = {
    readme: Scalars['String'];
};
/** A map from permission String to boolean that the current user is allowed for the root graph variant */
export declare type GraphVariantPermissions = {
    __typename?: 'GraphVariantPermissions';
    canCreateCollectionInVariant: Scalars['Boolean'];
    canManageBuildConfig: Scalars['Boolean'];
    canManageExplorerSettings: Scalars['Boolean'];
    canPushSchemas: Scalars['Boolean'];
    canQueryBuildConfig: Scalars['Boolean'];
    /**
     * Whether the current user can access the schema for this variant. This will be anded with
     * the ServiceRoles.canQuerySchemas, this will be true when the service schema permission is
     * false for Services with public variants
     */
    canQuerySchemas: Scalars['Boolean'];
    canShareCollectionInVariant: Scalars['Boolean'];
    canUpdateVariantLinkInfo: Scalars['Boolean'];
    canUpdateVariantReadme: Scalars['Boolean'];
    variantId: Scalars['ID'];
};
export declare enum HttpMethod {
    Connect = "CONNECT",
    Delete = "DELETE",
    Get = "GET",
    Head = "HEAD",
    Options = "OPTIONS",
    Patch = "PATCH",
    Post = "POST",
    Put = "PUT",
    Trace = "TRACE",
    Unknown = "UNKNOWN",
    Unrecognized = "UNRECOGNIZED"
}
export declare type HistoricQueryParameters = {
    /** A list of clients to filter out during validation. */
    excludedClients?: InputMaybe<Array<ClientInfoFilter>>;
    /** A list of operation names to filter out during validation. */
    excludedOperationNames?: InputMaybe<Array<OperationNameFilterInput>>;
    from?: InputMaybe<Scalars['Timestamp']>;
    /** A list of operation IDs to filter out during validation. */
    ignoredOperations?: InputMaybe<Array<Scalars['ID']>>;
    /**
     * A list of variants to include in the validation. If no variants are provided
     * then this defaults to the "current" variant along with the base variant. The
     * base variant indicates the schema that generates diff and marks the metrics that
     * are checked for broken queries. We union this base variant with the untagged values('',
     * same as null inside of `in`, and 'current') in this metrics fetch. This strategy
     * supports users who have not tagged their metrics or schema.
     */
    includedVariants?: InputMaybe<Array<Scalars['String']>>;
    /** Minimum number of requests within the window for a query to be considered. */
    queryCountThreshold?: InputMaybe<Scalars['Int']>;
    /**
     * Number of requests within the window for a query to be considered, relative to
     * total request count. Expected values are between 0 and 0.05 (minimum 5% of total
     * request volume)
     */
    queryCountThresholdPercentage?: InputMaybe<Scalars['Float']>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type Identity = {
    asActor: Actor;
    id: Scalars['ID'];
    name: Scalars['String'];
};
/** An actor's identity and info about the client they used to perform the action */
export declare type IdentityAndClientInfo = {
    __typename?: 'IdentityAndClientInfo';
    /** The clientName given to Apollo Cloud when the actor performed the action */
    clientName?: Maybe<Scalars['String']>;
    /** The clientVersion given to Apollo Cloud when the actor performed the action */
    clientVersion?: Maybe<Scalars['String']>;
    /** Identity info about the actor */
    identity?: Maybe<Identity>;
};
export declare type IdentityMutation = ServiceMutation | UserMutation;
export declare type IgnoreOperationsInChecksResult = {
    __typename?: 'IgnoreOperationsInChecksResult';
    graph: Service;
};
/** The location of the implementing service config file in storage */
export declare type ImplementingServiceLocation = {
    __typename?: 'ImplementingServiceLocation';
    /** The name of the implementing service */
    name: Scalars['String'];
    /** The path in storage to access the implementing service config file */
    path: Scalars['String'];
};
export declare type InternalAdminUser = {
    __typename?: 'InternalAdminUser';
    role: InternalMdgAdminRole;
    userID: Scalars['String'];
};
export declare type InternalIdentity = Identity & {
    __typename?: 'InternalIdentity';
    accounts: Array<Account>;
    asActor: Actor;
    email?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
};
export declare enum InternalMdgAdminRole {
    InternalMdgReadOnly = "INTERNAL_MDG_READ_ONLY",
    InternalMdgSales = "INTERNAL_MDG_SALES",
    InternalMdgSuperAdmin = "INTERNAL_MDG_SUPER_ADMIN",
    InternalMdgSupport = "INTERNAL_MDG_SUPPORT"
}
export declare type IntrospectionDirective = {
    __typename?: 'IntrospectionDirective';
    args: Array<IntrospectionInputValue>;
    description?: Maybe<Scalars['String']>;
    locations: Array<IntrospectionDirectiveLocation>;
    name: Scalars['String'];
};
export declare type IntrospectionDirectiveInput = {
    args: Array<IntrospectionInputValueInput>;
    description?: InputMaybe<Scalars['String']>;
    isRepeatable?: InputMaybe<Scalars['Boolean']>;
    locations: Array<IntrospectionDirectiveLocation>;
    name: Scalars['String'];
};
/** __DirectiveLocation introspection type */
export declare enum IntrospectionDirectiveLocation {
    /** Location adjacent to an argument definition. */
    ArgumentDefinition = "ARGUMENT_DEFINITION",
    /** Location adjacent to an enum definition. */
    Enum = "ENUM",
    /** Location adjacent to an enum value definition. */
    EnumValue = "ENUM_VALUE",
    /** Location adjacent to a field. */
    Field = "FIELD",
    /** Location adjacent to a field definition. */
    FieldDefinition = "FIELD_DEFINITION",
    /** Location adjacent to a fragment definition. */
    FragmentDefinition = "FRAGMENT_DEFINITION",
    /** Location adjacent to a fragment spread. */
    FragmentSpread = "FRAGMENT_SPREAD",
    /** Location adjacent to an inline fragment. */
    InlineFragment = "INLINE_FRAGMENT",
    /** Location adjacent to an input object field definition. */
    InputFieldDefinition = "INPUT_FIELD_DEFINITION",
    /** Location adjacent to an input object type definition. */
    InputObject = "INPUT_OBJECT",
    /** Location adjacent to an interface definition. */
    Interface = "INTERFACE",
    /** Location adjacent to a mutation operation. */
    Mutation = "MUTATION",
    /** Location adjacent to an object type definition. */
    Object = "OBJECT",
    /** Location adjacent to a query operation. */
    Query = "QUERY",
    /** Location adjacent to a scalar definition. */
    Scalar = "SCALAR",
    /** Location adjacent to a schema definition. */
    Schema = "SCHEMA",
    /** Location adjacent to a subscription operation. */
    Subscription = "SUBSCRIPTION",
    /** Location adjacent to a union definition. */
    Union = "UNION",
    /** Location adjacent to a variable definition. */
    VariableDefinition = "VARIABLE_DEFINITION"
}
/** Values associated with introspection result for an enum value */
export declare type IntrospectionEnumValue = {
    __typename?: 'IntrospectionEnumValue';
    /** @deprecated Use deprecationReason instead */
    depreactionReason?: Maybe<Scalars['String']>;
    deprecationReason?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    name: Scalars['String'];
};
/** __EnumValue introspection type */
export declare type IntrospectionEnumValueInput = {
    deprecationReason?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    name: Scalars['String'];
};
/** Values associated with introspection result for field */
export declare type IntrospectionField = {
    __typename?: 'IntrospectionField';
    args: Array<IntrospectionInputValue>;
    deprecationReason?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    name: Scalars['String'];
    type: IntrospectionType;
};
/** __Field introspection type */
export declare type IntrospectionFieldInput = {
    args: Array<IntrospectionInputValueInput>;
    deprecationReason?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    isDeprecated: Scalars['Boolean'];
    name: Scalars['String'];
    type: IntrospectionTypeInput;
};
/** Values associated with introspection result for an input field */
export declare type IntrospectionInputValue = {
    __typename?: 'IntrospectionInputValue';
    defaultValue?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    type: IntrospectionType;
};
/** __Value introspection type */
export declare type IntrospectionInputValueInput = {
    defaultValue?: InputMaybe<Scalars['String']>;
    deprecationReason?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    isDeprecated?: InputMaybe<Scalars['Boolean']>;
    name: Scalars['String'];
    type: IntrospectionTypeInput;
};
export declare type IntrospectionSchema = {
    __typename?: 'IntrospectionSchema';
    directives: Array<IntrospectionDirective>;
    mutationType?: Maybe<IntrospectionType>;
    queryType: IntrospectionType;
    subscriptionType?: Maybe<IntrospectionType>;
    types: Array<IntrospectionType>;
};
export declare type IntrospectionSchemaTypesArgs = {
    filter?: InputMaybe<TypeFilterConfig>;
};
/** __Schema introspection type */
export declare type IntrospectionSchemaInput = {
    description?: InputMaybe<Scalars['String']>;
    directives: Array<IntrospectionDirectiveInput>;
    mutationType?: InputMaybe<IntrospectionTypeRefInput>;
    queryType: IntrospectionTypeRefInput;
    subscriptionType?: InputMaybe<IntrospectionTypeRefInput>;
    types?: InputMaybe<Array<IntrospectionTypeInput>>;
};
/** Object containing all possible values for an introspectionType */
export declare type IntrospectionType = {
    __typename?: 'IntrospectionType';
    /** the base kind of the type this references, ignoring lists and nullability */
    baseKind?: Maybe<IntrospectionTypeKind>;
    description?: Maybe<Scalars['String']>;
    enumValues?: Maybe<Array<IntrospectionEnumValue>>;
    fields?: Maybe<Array<IntrospectionField>>;
    inputFields?: Maybe<Array<IntrospectionInputValue>>;
    interfaces?: Maybe<Array<IntrospectionType>>;
    kind?: Maybe<IntrospectionTypeKind>;
    name?: Maybe<Scalars['String']>;
    ofType?: Maybe<IntrospectionType>;
    possibleTypes?: Maybe<Array<IntrospectionType>>;
    /** printed representation of type, including nested nullability and list ofTypes */
    printed: Scalars['String'];
};
/** Object containing all possible values for an introspectionType */
export declare type IntrospectionTypeEnumValuesArgs = {
    includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};
/** __Type introspection type */
export declare type IntrospectionTypeInput = {
    description?: InputMaybe<Scalars['String']>;
    enumValues?: InputMaybe<Array<IntrospectionEnumValueInput>>;
    fields?: InputMaybe<Array<IntrospectionFieldInput>>;
    inputFields?: InputMaybe<Array<IntrospectionInputValueInput>>;
    interfaces?: InputMaybe<Array<IntrospectionTypeInput>>;
    kind: IntrospectionTypeKind;
    name?: InputMaybe<Scalars['String']>;
    ofType?: InputMaybe<IntrospectionTypeInput>;
    possibleTypes?: InputMaybe<Array<IntrospectionTypeInput>>;
    specifiedByUrl?: InputMaybe<Scalars['String']>;
};
export declare enum IntrospectionTypeKind {
    /** Indicates this type is an enum. 'enumValues' is a valid field. */
    Enum = "ENUM",
    /** Indicates this type is an input object. 'inputFields' is a valid field. */
    InputObject = "INPUT_OBJECT",
    /**
     * Indicates this type is an interface. 'fields' and 'possibleTypes' are valid
     * fields
     */
    Interface = "INTERFACE",
    /** Indicates this type is a list. 'ofType' is a valid field. */
    List = "LIST",
    /** Indicates this type is a non-null. 'ofType' is a valid field. */
    NonNull = "NON_NULL",
    /** Indicates this type is an object. 'fields' and 'interfaces' are valid fields. */
    Object = "OBJECT",
    /** Indicates this type is a scalar. */
    Scalar = "SCALAR",
    /** Indicates this type is a union. 'possibleTypes' is a valid field. */
    Union = "UNION"
}
/** Shallow __Type introspection type */
export declare type IntrospectionTypeRefInput = {
    kind?: InputMaybe<Scalars['String']>;
    name: Scalars['String'];
};
export declare type InvalidOperation = {
    __typename?: 'InvalidOperation';
    errors?: Maybe<Array<OperationValidationError>>;
    signature: Scalars['ID'];
};
export declare type InvalidRefFormat = Error & {
    __typename?: 'InvalidRefFormat';
    message: Scalars['String'];
};
export declare type InvalidTarget = Error & {
    __typename?: 'InvalidTarget';
    message: Scalars['String'];
};
export declare type Invoice = {
    __typename?: 'Invoice';
    closedAt?: Maybe<Scalars['Timestamp']>;
    collectionMethod?: Maybe<Scalars['String']>;
    createdAt: Scalars['Timestamp'];
    invoiceNumber: Scalars['Int'];
    state: InvoiceState;
    totalInCents: Scalars['Int'];
    updatedAt: Scalars['Timestamp'];
    uuid: Scalars['ID'];
};
export declare enum InvoiceState {
    Collected = "COLLECTED",
    Failed = "FAILED",
    Open = "OPEN",
    PastDue = "PAST_DUE",
    Unknown = "UNKNOWN"
}
export declare enum InvoiceStateV2 {
    Collected = "COLLECTED",
    Failed = "FAILED",
    Open = "OPEN",
    PastDue = "PAST_DUE",
    Unknown = "UNKNOWN"
}
export declare type InvoiceV2 = {
    __typename?: 'InvoiceV2';
    closedAt?: Maybe<Scalars['Timestamp']>;
    collectionMethod?: Maybe<Scalars['String']>;
    createdAt: Scalars['Timestamp'];
    invoiceNumber: Scalars['Int'];
    state: InvoiceStateV2;
    totalInCents: Scalars['Int'];
    updatedAt: Scalars['Timestamp'];
    uuid: Scalars['ID'];
};
export declare type Launch = {
    __typename?: 'Launch';
    approvedAt?: Maybe<Scalars['Timestamp']>;
    build?: Maybe<Build>;
    buildInput: BuildInput;
    completedAt?: Maybe<Scalars['Timestamp']>;
    createdAt: Scalars['Timestamp'];
    downstreamLaunches: Array<Launch>;
    graphId: Scalars['String'];
    graphVariant: Scalars['String'];
    id: Scalars['ID'];
    isAvailable?: Maybe<Scalars['Boolean']>;
    isCompleted?: Maybe<Scalars['Boolean']>;
    isPublished?: Maybe<Scalars['Boolean']>;
    isTarget?: Maybe<Scalars['Boolean']>;
    latestSequenceStep?: Maybe<LaunchSequenceStep>;
    results: Array<LaunchResult>;
    schemaTag?: Maybe<SchemaTag>;
    sequence: Array<LaunchSequenceStep>;
    shortenedID: Scalars['String'];
    status: LaunchStatus;
    subgraphChanges?: Maybe<Array<SubgraphChange>>;
    supersededAt?: Maybe<Scalars['Timestamp']>;
    supersededBy?: Maybe<Launch>;
    upstreamLaunch?: Maybe<Launch>;
};
/** more result types will be supported in the future */
export declare type LaunchResult = ChangelogLaunchResult;
export declare type LaunchSequenceBuildStep = {
    __typename?: 'LaunchSequenceBuildStep';
    completedAt?: Maybe<Scalars['Timestamp']>;
    startedAt?: Maybe<Scalars['Timestamp']>;
};
export declare type LaunchSequenceCheckStep = {
    __typename?: 'LaunchSequenceCheckStep';
    completedAt?: Maybe<Scalars['Timestamp']>;
    startedAt?: Maybe<Scalars['Timestamp']>;
};
export declare type LaunchSequenceCompletedStep = {
    __typename?: 'LaunchSequenceCompletedStep';
    completedAt?: Maybe<Scalars['Timestamp']>;
};
export declare type LaunchSequenceInitiatedStep = {
    __typename?: 'LaunchSequenceInitiatedStep';
    startedAt?: Maybe<Scalars['Timestamp']>;
};
export declare type LaunchSequencePublishStep = {
    __typename?: 'LaunchSequencePublishStep';
    completedAt?: Maybe<Scalars['Timestamp']>;
    startedAt?: Maybe<Scalars['Timestamp']>;
};
export declare type LaunchSequenceStep = LaunchSequenceBuildStep | LaunchSequenceCheckStep | LaunchSequenceCompletedStep | LaunchSequenceInitiatedStep | LaunchSequencePublishStep | LaunchSequenceSupersededStep;
export declare type LaunchSequenceSupersededStep = {
    __typename?: 'LaunchSequenceSupersededStep';
    completedAt?: Maybe<Scalars['Timestamp']>;
};
export declare enum LaunchStatus {
    LaunchCompleted = "LAUNCH_COMPLETED",
    LaunchFailed = "LAUNCH_FAILED",
    LaunchInitiated = "LAUNCH_INITIATED"
}
export declare type LinkInfo = {
    __typename?: 'LinkInfo';
    createdAt: Scalars['Timestamp'];
    id: Scalars['ID'];
    title?: Maybe<Scalars['String']>;
    type: LinkInfoType;
    url: Scalars['String'];
};
export declare enum LinkInfoType {
    DeveloperPortal = "DEVELOPER_PORTAL",
    Other = "OTHER",
    Repository = "REPOSITORY"
}
export declare type MarkChangesForOperationAsSafeResult = {
    __typename?: 'MarkChangesForOperationAsSafeResult';
    /**
     * Nice to have for the frontend since the Apollo cache is already watching for AffectedQuery to update.
     * This might return null if no behavior changes were found for the affected operation ID.
     * This is a weird situation that should never happen.
     */
    affectedOperation?: Maybe<AffectedQuery>;
    message: Scalars['String'];
    success: Scalars['Boolean'];
};
export declare type MediaUploadInfo = {
    __typename?: 'MediaUploadInfo';
    csrfToken: Scalars['String'];
    maxContentLength: Scalars['Int'];
    url: Scalars['String'];
};
export declare type MoveOperationCollectionEntryResult = InvalidTarget | MoveOperationCollectionEntrySuccess | PermissionError;
export declare type MoveOperationCollectionEntrySuccess = {
    __typename?: 'MoveOperationCollectionEntrySuccess';
    operation: OperationCollectionEntry;
    originCollection: OperationCollection;
    targetCollection: OperationCollection;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    account?: Maybe<AccountMutation>;
    /** Creates an operation collection for the given variantRefs, or make a sandbox collection without variantRefs. */
    createOperationCollection: CreateOperationCollectionResult;
    /**
     * Finalize a password reset with a token included in the E-mail link,
     * returns the corresponding login email when successful
     */
    finalizePasswordReset?: Maybe<Scalars['String']>;
    /** Join an account with a token */
    joinAccount?: Maybe<Account>;
    me?: Maybe<IdentityMutation>;
    newAccount?: Maybe<Account>;
    newService?: Maybe<Service>;
    operationCollection?: Maybe<OperationCollectionMutation>;
    /** Refresh all plans from third-party billing service */
    plansRefreshBilling?: Maybe<Scalars['Void']>;
    /** Report a running GraphQL server's schema. */
    reportSchema?: Maybe<ReportSchemaResult>;
    /** Ask for a user's password to be reset by E-mail */
    resetPassword?: Maybe<Scalars['Void']>;
    resolveAllInternalCronExecutions?: Maybe<Scalars['Void']>;
    resolveInternalCronExecution?: Maybe<CronExecution>;
    service?: Maybe<ServiceMutation>;
    /** Set the subscriptions for a given email */
    setSubscriptions?: Maybe<EmailPreferences>;
    /** Set the studio settings for the current user */
    setUserSettings?: Maybe<UserSettings>;
    signUp?: Maybe<User>;
    /** This is called by the form shown to users after they delete their user or organization account. */
    submitPostDeletionFeedback?: Maybe<Scalars['Void']>;
    /** Mutation for basic engagement tracking in studio */
    track?: Maybe<Scalars['Void']>;
    /** Rover session tracking. Reserved to https://rover.apollo.dev/telemetry (https://github.com/apollographql/orbiter). */
    trackRoverSession?: Maybe<Scalars['Void']>;
    /** Unsubscribe a given email from all emails */
    unsubscribeFromAll?: Maybe<EmailPreferences>;
    user?: Maybe<UserMutation>;
};
export declare type MutationAccountArgs = {
    id: Scalars['ID'];
};
export declare type MutationCreateOperationCollectionArgs = {
    description?: InputMaybe<Scalars['String']>;
    isSandbox: Scalars['Boolean'];
    isShared: Scalars['Boolean'];
    name: Scalars['String'];
    variantRefs?: InputMaybe<Array<Scalars['ID']>>;
};
export declare type MutationFinalizePasswordResetArgs = {
    newPassword: Scalars['String'];
    resetToken: Scalars['String'];
};
export declare type MutationJoinAccountArgs = {
    accountId: Scalars['ID'];
    joinToken: Scalars['String'];
};
export declare type MutationNewAccountArgs = {
    companyUrl?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
};
export declare type MutationNewServiceArgs = {
    accountId: Scalars['ID'];
    description?: InputMaybe<Scalars['String']>;
    hiddenFromUninvitedNonAdminAccountMembers?: Scalars['Boolean'];
    id: Scalars['ID'];
    isDev?: Scalars['Boolean'];
    name?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationOperationCollectionArgs = {
    id: Scalars['ID'];
};
export declare type MutationReportSchemaArgs = {
    coreSchema?: InputMaybe<Scalars['String']>;
    report: SchemaReport;
};
export declare type MutationResetPasswordArgs = {
    email: Scalars['String'];
};
export declare type MutationResolveAllInternalCronExecutionsArgs = {
    group?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
};
export declare type MutationResolveInternalCronExecutionArgs = {
    id: Scalars['ID'];
};
export declare type MutationServiceArgs = {
    id: Scalars['ID'];
};
export declare type MutationSetSubscriptionsArgs = {
    email: Scalars['String'];
    subscriptions: Array<EmailCategory>;
    token: Scalars['String'];
};
export declare type MutationSetUserSettingsArgs = {
    newSettings?: InputMaybe<UserSettingsInput>;
};
export declare type MutationSignUpArgs = {
    email: Scalars['String'];
    fullName: Scalars['String'];
    password: Scalars['String'];
    referrer?: InputMaybe<Scalars['String']>;
    trackingGoogleClientId?: InputMaybe<Scalars['String']>;
    trackingMarketoClientId?: InputMaybe<Scalars['String']>;
    userSegment?: InputMaybe<UserSegment>;
    utmCampaign?: InputMaybe<Scalars['String']>;
    utmMedium?: InputMaybe<Scalars['String']>;
    utmSource?: InputMaybe<Scalars['String']>;
};
export declare type MutationSubmitPostDeletionFeedbackArgs = {
    feedback: Scalars['String'];
    targetIdentifier: Scalars['ID'];
    targetType: DeletionTargetType;
};
export declare type MutationTrackArgs = {
    event: EventEnum;
    graphID: Scalars['String'];
    graphVariant?: Scalars['String'];
};
export declare type MutationTrackRoverSessionArgs = {
    anonymousId: Scalars['ID'];
    arguments: Array<RoverArgumentInput>;
    ci?: InputMaybe<Scalars['String']>;
    command: Scalars['String'];
    cwdHash: Scalars['SHA256'];
    os: Scalars['String'];
    remoteUrlHash: Scalars['SHA256'];
    sessionId: Scalars['ID'];
    version: Scalars['String'];
};
export declare type MutationUnsubscribeFromAllArgs = {
    email: Scalars['String'];
    token: Scalars['String'];
};
export declare type MutationUserArgs = {
    id: Scalars['ID'];
};
export declare type NamedIntrospectionArg = {
    __typename?: 'NamedIntrospectionArg';
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type NamedIntrospectionArgNoDescription = {
    __typename?: 'NamedIntrospectionArgNoDescription';
    name?: Maybe<Scalars['String']>;
};
/**
 * The shared fields for a named introspection type. Currently this is returned for the
 * top level value affected by a change. In the future, we may update this
 * type to be an interface, which is extended by the more specific types:
 * scalar, object, input object, union, interface, and enum
 *
 * For an in-depth look at where these types come from, see:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/659eb50d3/types/graphql/utilities/introspectionQuery.d.ts#L31-L37
 */
export declare type NamedIntrospectionType = {
    __typename?: 'NamedIntrospectionType';
    description?: Maybe<Scalars['String']>;
    kind?: Maybe<IntrospectionTypeKind>;
    name?: Maybe<Scalars['String']>;
};
export declare type NamedIntrospectionTypeNoDescription = {
    __typename?: 'NamedIntrospectionTypeNoDescription';
    name?: Maybe<Scalars['String']>;
};
/**
 * Introspection values that can be children of other types for changes, such
 * as input fields, objects in interfaces, enum values. In the future, this
 * value could become an interface to allow fields specific to the types
 * returned.
 */
export declare type NamedIntrospectionValue = {
    __typename?: 'NamedIntrospectionValue';
    description?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    printedType?: Maybe<Scalars['String']>;
};
export declare type NamedIntrospectionValueNoDescription = {
    __typename?: 'NamedIntrospectionValueNoDescription';
    name?: Maybe<Scalars['String']>;
    printedType?: Maybe<Scalars['String']>;
};
/** A non-federated service for a monolithic graph */
export declare type NonFederatedImplementingService = {
    __typename?: 'NonFederatedImplementingService';
    /** Timestamp of when this implementing service was created */
    createdAt: Scalars['Timestamp'];
    /**
     * Identifies which graph this non-implementing service belongs to.
     * Formerly known as "service_id"
     */
    graphID: Scalars['String'];
    /**
     * Specifies which variant of a graph this implementing service belongs to".
     * Formerly known as "tag"
     */
    graphVariant: Scalars['String'];
};
export declare type NotFoundError = Error & {
    __typename?: 'NotFoundError';
    message: Scalars['String'];
};
export declare type OdysseyCertification = {
    __typename?: 'OdysseyCertification';
    certificationId: Scalars['String'];
    earnedAt: Scalars['Timestamp'];
    id: Scalars['ID'];
    owner?: Maybe<OdysseyCertificationOwner>;
};
export declare type OdysseyCertificationOwner = {
    __typename?: 'OdysseyCertificationOwner';
    fullName: Scalars['String'];
    id: Scalars['ID'];
};
export declare type OdysseyCourse = {
    __typename?: 'OdysseyCourse';
    completedAt?: Maybe<Scalars['Timestamp']>;
    enrolledAt?: Maybe<Scalars['Timestamp']>;
    id: Scalars['ID'];
};
export declare type OdysseyCourseInput = {
    completedAt?: InputMaybe<Scalars['Timestamp']>;
    courseId: Scalars['String'];
};
export declare type OdysseyTask = {
    __typename?: 'OdysseyTask';
    completedAt?: Maybe<Scalars['Timestamp']>;
    id: Scalars['ID'];
    value?: Maybe<Scalars['String']>;
};
export declare type OdysseyTaskInput = {
    completedAt?: InputMaybe<Scalars['Timestamp']>;
    taskId: Scalars['String'];
    value?: InputMaybe<Scalars['String']>;
};
export declare type Operation = {
    __typename?: 'Operation';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    signature?: Maybe<Scalars['String']>;
    truncated: Scalars['Boolean'];
};
export declare type OperationAcceptedChange = {
    __typename?: 'OperationAcceptedChange';
    acceptedAt: Scalars['Timestamp'];
    acceptedBy: Identity;
    change: StoredApprovedChange;
    checkID: Scalars['ID'];
    graphID: Scalars['ID'];
    id: Scalars['ID'];
    operationID: Scalars['String'];
};
/** Columns of OperationCheckStats. */
export declare enum OperationCheckStatsColumn {
    CachedRequestsCount = "CACHED_REQUESTS_COUNT",
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    UncachedRequestsCount = "UNCACHED_REQUESTS_COUNT"
}
export declare type OperationCheckStatsDimensions = {
    __typename?: 'OperationCheckStatsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in OperationCheckStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type OperationCheckStatsFilter = {
    and?: InputMaybe<Array<OperationCheckStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<OperationCheckStatsFilterIn>;
    not?: InputMaybe<OperationCheckStatsFilter>;
    or?: InputMaybe<Array<OperationCheckStatsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in OperationCheckStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type OperationCheckStatsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type OperationCheckStatsMetrics = {
    __typename?: 'OperationCheckStatsMetrics';
    cachedRequestsCount: Scalars['Long'];
    uncachedRequestsCount: Scalars['Long'];
};
export declare type OperationCheckStatsOrderBySpec = {
    column: OperationCheckStatsColumn;
    direction: Ordering;
};
export declare type OperationCheckStatsRecord = {
    __typename?: 'OperationCheckStatsRecord';
    /** Dimensions of OperationCheckStats that can be grouped by. */
    groupBy: OperationCheckStatsDimensions;
    /** Metrics of OperationCheckStats that can be aggregated over. */
    metrics: OperationCheckStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type OperationCollection = {
    __typename?: 'OperationCollection';
    createdAt: Scalars['Timestamp'];
    createdBy?: Maybe<Identity>;
    description?: Maybe<Scalars['String']>;
    /**
     * If a user has any of these roles, they will be able to edit this
     * collection. This will be null if and only if \`isShared\` is false
     */
    editRoles?: Maybe<Array<UserPermission>>;
    id: Scalars['ID'];
    isFavorite: Scalars['Boolean'];
    isSandbox: Scalars['Boolean'];
    isShared: Scalars['Boolean'];
    lastUpdatedAt: Scalars['Timestamp'];
    lastUpdatedBy?: Maybe<Identity>;
    name: Scalars['String'];
    operation?: Maybe<OperationCollectionEntryResult>;
    operations: Array<OperationCollectionEntry>;
    /**  Permissions the current user has for this collection */
    permissions: OperationCollectionPermissions;
    variants: Array<GraphVariant>;
};
export declare type OperationCollectionOperationArgs = {
    id: Scalars['ID'];
};
export declare type OperationCollectionEntry = {
    __typename?: 'OperationCollectionEntry';
    collection: OperationCollection;
    createdAt: Scalars['Timestamp'];
    createdBy?: Maybe<Identity>;
    currentOperationRevision: OperationCollectionEntryState;
    id: Scalars['ID'];
    lastUpdatedAt: Scalars['Timestamp'];
    lastUpdatedBy?: Maybe<Identity>;
    name: Scalars['String'];
    orderingIndex: Scalars['String'];
};
export declare type OperationCollectionEntryMutation = {
    __typename?: 'OperationCollectionEntryMutation';
    moveToCollection: MoveOperationCollectionEntryResult;
    reorderEntry?: Maybe<UpdateOperationCollectionResult>;
    updateName?: Maybe<UpdateOperationCollectionEntryResult>;
    updateValues?: Maybe<UpdateOperationCollectionEntryResult>;
};
export declare type OperationCollectionEntryMutationMoveToCollectionArgs = {
    collectionId: Scalars['ID'];
    lowerOrderingBound?: InputMaybe<Scalars['String']>;
    upperOrderingBound?: InputMaybe<Scalars['String']>;
};
export declare type OperationCollectionEntryMutationReorderEntryArgs = {
    lowerOrderingBound?: InputMaybe<Scalars['String']>;
    upperOrderingBound?: InputMaybe<Scalars['String']>;
};
export declare type OperationCollectionEntryMutationUpdateNameArgs = {
    name: Scalars['String'];
};
export declare type OperationCollectionEntryMutationUpdateValuesArgs = {
    operationInput: OperationCollectionEntryStateInput;
};
export declare type OperationCollectionEntryMutationResult = NotFoundError | OperationCollectionEntryMutation | PermissionError;
export declare type OperationCollectionEntryResult = NotFoundError | OperationCollectionEntry;
export declare type OperationCollectionEntryState = {
    __typename?: 'OperationCollectionEntryState';
    body: Scalars['String'];
    createdAt: Scalars['Timestamp'];
    createdBy?: Maybe<Identity>;
    headers?: Maybe<Array<OperationHeader>>;
    variables?: Maybe<Scalars['String']>;
};
export declare type OperationCollectionEntryStateInput = {
    body: Scalars['String'];
    headers?: InputMaybe<Array<OperationHeaderInput>>;
    /**  I'm assuming this is non null */
    variables?: InputMaybe<Scalars['String']>;
};
export declare type OperationCollectionMutation = {
    __typename?: 'OperationCollectionMutation';
    addOperation?: Maybe<AddOperationCollectionEntryResult>;
    /** @deprecated Will throw NotImplemented */
    addToVariant: AddOperationCollectionToVariantResult;
    delete?: Maybe<DeleteOperationCollectionResult>;
    deleteOperation?: Maybe<RemoveOperationCollectionEntryResult>;
    duplicateCollection: DuplicateOperationCollectionResult;
    operation?: Maybe<OperationCollectionEntryMutationResult>;
    /** @deprecated Will throw NotImplemented */
    removeFromVariant: RemoveOperationCollectionFromVariantResult;
    updateDescription?: Maybe<UpdateOperationCollectionResult>;
    updateEditRoles?: Maybe<UpdateOperationCollectionResult>;
    updateIsFavorite?: Maybe<UpdateOperationCollectionResult>;
    updateIsShared?: Maybe<UpdateOperationCollectionResult>;
    updateName?: Maybe<UpdateOperationCollectionResult>;
};
export declare type OperationCollectionMutationAddOperationArgs = {
    name: Scalars['String'];
    operationInput: OperationCollectionEntryStateInput;
};
export declare type OperationCollectionMutationAddToVariantArgs = {
    variantRef: Scalars['ID'];
};
export declare type OperationCollectionMutationDeleteOperationArgs = {
    id: Scalars['ID'];
};
export declare type OperationCollectionMutationDuplicateCollectionArgs = {
    description?: InputMaybe<Scalars['String']>;
    isSandbox: Scalars['Boolean'];
    isShared: Scalars['Boolean'];
    name: Scalars['String'];
    variantRef?: InputMaybe<Scalars['ID']>;
};
export declare type OperationCollectionMutationOperationArgs = {
    id: Scalars['ID'];
};
export declare type OperationCollectionMutationRemoveFromVariantArgs = {
    variantRef: Scalars['ID'];
};
export declare type OperationCollectionMutationUpdateDescriptionArgs = {
    description?: InputMaybe<Scalars['String']>;
};
export declare type OperationCollectionMutationUpdateEditRolesArgs = {
    editRoles: Array<UserPermission>;
};
export declare type OperationCollectionMutationUpdateIsFavoriteArgs = {
    isFavorite: Scalars['Boolean'];
};
export declare type OperationCollectionMutationUpdateIsSharedArgs = {
    isShared: Scalars['Boolean'];
};
export declare type OperationCollectionMutationUpdateNameArgs = {
    name: Scalars['String'];
};
export declare type OperationCollectionPermissions = {
    __typename?: 'OperationCollectionPermissions';
    canEditOperations: Scalars['Boolean'];
    canManage: Scalars['Boolean'];
    canReadOperations: Scalars['Boolean'];
};
export declare type OperationCollectionResult = NotFoundError | OperationCollection | PermissionError;
export declare type OperationDocument = {
    __typename?: 'OperationDocument';
    /** Operation document body */
    body: Scalars['String'];
    /** Operation name */
    name?: Maybe<Scalars['String']>;
};
export declare type OperationDocumentInput = {
    /** Operation document body */
    body: Scalars['String'];
    /** Operation name */
    name?: InputMaybe<Scalars['String']>;
};
export declare type OperationHeader = {
    __typename?: 'OperationHeader';
    name: Scalars['String'];
    value: Scalars['String'];
};
export declare type OperationHeaderInput = {
    name: Scalars['String'];
    value: Scalars['String'];
};
/** Operation name filter configuration for a graph. */
export declare type OperationNameFilter = {
    __typename?: 'OperationNameFilter';
    /** name of the operation by the user and reported alongside metrics */
    name: Scalars['String'];
};
/** Options to filter by operation name. */
export declare type OperationNameFilterInput = {
    /** name of the operation set by the user and reported alongside metrics */
    name: Scalars['String'];
};
export declare type OperationValidationError = {
    __typename?: 'OperationValidationError';
    message: Scalars['String'];
};
export declare type OperationsCheckResult = {
    __typename?: 'OperationsCheckResult';
    /** Operations affected by all changes in diff */
    affectedQueries?: Maybe<Array<AffectedQuery>>;
    /** Summary/counts for all changes in diff */
    changeSummary: ChangeSummary;
    /** List of schema changes with associated affected clients and operations */
    changes: Array<Change>;
    /** Indication of the success of the change, either failure, warning, or notice. */
    checkSeverity: ChangeSeverity;
    /** The variant that was used as a base to check against */
    checkedVariant: GraphVariant;
    createdAt: Scalars['Timestamp'];
    id: Scalars['ID'];
    /** Number of affected query operations that are neither marked as SAFE or IGNORED */
    numberOfAffectedOperations: Scalars['Int'];
    /** Number of operations that were validated during schema diff */
    numberOfCheckedOperations: Scalars['Int'];
    workflowTask: OperationsCheckTask;
};
export declare type OperationsCheckTask = CheckWorkflowTask & {
    __typename?: 'OperationsCheckTask';
    completedAt?: Maybe<Scalars['Timestamp']>;
    createdAt: Scalars['Timestamp'];
    id: Scalars['ID'];
    /** The result of the check. */
    result?: Maybe<OperationsCheckResult>;
    status: CheckWorkflowTaskStatus;
    workflow: CheckWorkflow;
};
export declare enum Ordering {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/** A reusable invite link for an organization. */
export declare type OrganizationInviteLink = {
    __typename?: 'OrganizationInviteLink';
    createdAt: Scalars['Timestamp'];
    /** A joinToken that can be passed to Mutation.joinAccount to join the organization. */
    joinToken: Scalars['String'];
    /** The role that the user will receive if they join the organization with this link. */
    role: UserPermission;
};
export declare type OrganizationSso = {
    __typename?: 'OrganizationSSO';
    defaultRole: UserPermission;
    idpid: Scalars['ID'];
    provider: OrganizationSsoProvider;
};
export declare enum OrganizationSsoProvider {
    Pingone = "PINGONE"
}
/** PagerDuty notification channel */
export declare type PagerDutyChannel = Channel & {
    __typename?: 'PagerDutyChannel';
    id: Scalars['ID'];
    name: Scalars['String'];
    routingKey: Scalars['String'];
    subscriptions: Array<ChannelSubscription>;
};
/** PagerDuty notification channel parameters */
export declare type PagerDutyChannelInput = {
    name?: InputMaybe<Scalars['String']>;
    routingKey: Scalars['String'];
};
/** Schema for an implementing service with associated metadata */
export declare type PartialSchema = {
    __typename?: 'PartialSchema';
    /** Timestamp for when the partial schema was created */
    createdAt: Scalars['Timestamp'];
    /** If this sdl is currently actively composed in the gateway, this is true */
    isLive: Scalars['Boolean'];
    /** The enriched sdl of a partial schema */
    sdl: Scalars['String'];
    /** The path of deep storage to find the raw enriched partial schema file */
    sdlPath: Scalars['String'];
};
/**
 * Input for registering a partial schema to an implementing service.
 * One of the fields must be specified (validated server-side).
 *
 * If a new partialSchemaSDL is passed in, this operation will store it before
 * creating the association.
 *
 * If both the sdl and hash are specified, an error will be thrown if the provided
 * hash doesn't match our hash of the sdl contents. If the sdl field is specified,
 * the hash does not need to be and will be computed server-side.
 */
export declare type PartialSchemaInput = {
    /**
     * Hash of the partial schema to associate; error is thrown if only the hash is
     * specified and the hash has not been seen before
     */
    hash?: InputMaybe<Scalars['String']>;
    /**
     * Contents of the partial schema in SDL syntax, but may reference types
     * that aren't defined in this document
     */
    sdl?: InputMaybe<Scalars['String']>;
};
export declare type PermissionError = Error & {
    __typename?: 'PermissionError';
    message: Scalars['String'];
};
export declare type PromoteSchemaError = {
    __typename?: 'PromoteSchemaError';
    code: PromoteSchemaErrorCode;
    message: Scalars['String'];
};
export declare enum PromoteSchemaErrorCode {
    CannotPromoteSchemaForFederatedGraph = "CANNOT_PROMOTE_SCHEMA_FOR_FEDERATED_GRAPH"
}
export declare type PromoteSchemaResponse = {
    __typename?: 'PromoteSchemaResponse';
    code: PromoteSchemaResponseCode;
    tag: SchemaTag;
};
export declare enum PromoteSchemaResponseCode {
    NoChangesDetected = "NO_CHANGES_DETECTED",
    PromotionSuccess = "PROMOTION_SUCCESS"
}
export declare type PromoteSchemaResponseOrError = PromoteSchemaError | PromoteSchemaResponse;
export declare type Protobuf = {
    __typename?: 'Protobuf';
    json: Scalars['String'];
    object: Scalars['Object'];
    raw: Scalars['Blob'];
    text: Scalars['String'];
};
export declare type Query = {
    __typename?: 'Query';
    /** Account by ID */
    account?: Maybe<Account>;
    /** Retrieve account by billing provider identifier */
    accountByBillingCode?: Maybe<Account>;
    /** Whether an account ID is available for mutation{newAccount(id:)} */
    accountIDAvailable: Scalars['Boolean'];
    /** All accounts */
    allAccounts?: Maybe<Array<Account>>;
    /** All available plans */
    allPlans: Array<BillingPlan>;
    /** All services */
    allServices?: Maybe<Array<Service>>;
    /** All timezones with their offsets from UTC */
    allTimezoneOffsets: Array<TimezoneOffset>;
    /** All users */
    allUsers?: Maybe<Array<User>>;
    /** Look up a plan by ID */
    billingPlan?: Maybe<BillingPlanV2>;
    /** All available plans */
    billingPlans: Array<BillingPlanV2>;
    /** If this is true, the user is an Apollo administrator who can ignore restrictions based purely on billing plan. */
    canBypassPlanRestrictions: Scalars['Boolean'];
    diffSchemas: Array<Change>;
    /** Get the unsubscribe settings for a given email. */
    emailPreferences?: Maybe<EmailPreferences>;
    experimentalFeatures: GlobalExperimentalFeatures;
    frontendUrlRoot: Scalars['String'];
    internalActiveCronJobs: Array<CronJob>;
    internalAdminUsers?: Maybe<Array<InternalAdminUser>>;
    internalUnresolvedCronExecutionFailures: Array<CronExecution>;
    /** Current identity, null if not authenticated */
    me?: Maybe<Identity>;
    odysseyCertification?: Maybe<OdysseyCertification>;
    operationCollection: OperationCollectionResult;
    operationCollectionEntries: Array<OperationCollectionEntry>;
    /** Look up a plan by ID */
    plan?: Maybe<BillingPlan>;
    /** A list of public variants that have been selected to be shown on our Graph Directory. */
    publiclyListedVariants?: Maybe<Array<GraphVariant>>;
    /** Service by ID */
    service?: Maybe<Service>;
    /** Query statistics across all services. For admins only; normal users must go through AccountsStatsWindow or ServiceStatsWindow. */
    stats: StatsWindow;
    /** Get the studio settings for the current user */
    studioSettings?: Maybe<UserSettings>;
    /** The plan started by AccountMutation.startTeamSubscription */
    teamBillingPlan: BillingPlanV2;
    /** The plan started by AccountMutation.startTeamSubscription */
    teamPlan: BillingPlan;
    /** The plan started by AccountMutation.startTrial */
    trialBillingPlan: BillingPlanV2;
    /** The plan started by AccountMutation.startTrial */
    trialPlan: BillingPlan;
    /** User by ID */
    user?: Maybe<User>;
    /**
     * Access a variant by reference of the form `graphID@variantName`, or `graphID` for the default `current` variant.
     * Returns null when the graph or variant do not exist, or when the graph cannot be accessed.
     * Note that we can return more types implementing Error in the future.
     */
    variant?: Maybe<GraphVariantLookup>;
};
export declare type QueryAccountArgs = {
    id: Scalars['ID'];
};
export declare type QueryAccountByBillingCodeArgs = {
    id: Scalars['ID'];
};
export declare type QueryAccountIdAvailableArgs = {
    id: Scalars['ID'];
};
export declare type QueryAllAccountsArgs = {
    search?: InputMaybe<Scalars['String']>;
    tier?: InputMaybe<BillingPlanTier>;
};
export declare type QueryAllServicesArgs = {
    search?: InputMaybe<Scalars['String']>;
};
export declare type QueryAllUsersArgs = {
    search?: InputMaybe<Scalars['String']>;
};
export declare type QueryBillingPlanArgs = {
    id?: InputMaybe<Scalars['ID']>;
};
export declare type QueryDiffSchemasArgs = {
    baseSchema: Scalars['String'];
    nextSchema: Scalars['String'];
};
export declare type QueryEmailPreferencesArgs = {
    email: Scalars['String'];
    token: Scalars['String'];
};
export declare type QueryOdysseyCertificationArgs = {
    id: Scalars['ID'];
};
export declare type QueryOperationCollectionArgs = {
    id: Scalars['ID'];
};
export declare type QueryOperationCollectionEntriesArgs = {
    collectionEntryIds: Array<Scalars['ID']>;
};
export declare type QueryPlanArgs = {
    id?: InputMaybe<Scalars['ID']>;
};
export declare type QueryServiceArgs = {
    id: Scalars['ID'];
};
export declare type QueryStatsArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type QueryTeamBillingPlanArgs = {
    billingPeriod: BillingPeriod;
};
export declare type QueryTeamPlanArgs = {
    billingPeriod: BillingPeriod;
};
export declare type QueryUserArgs = {
    id: Scalars['ID'];
};
export declare type QueryVariantArgs = {
    ref: Scalars['ID'];
};
/** query documents to validate against */
export declare type QueryDocumentInput = {
    document?: InputMaybe<Scalars['String']>;
};
export declare type QueryPlan = {
    __typename?: 'QueryPlan';
    json: Scalars['String'];
    object: Scalars['Object'];
    text: Scalars['String'];
};
/** Columns of QueryStats. */
export declare enum QueryStatsColumn {
    AccountId = "ACCOUNT_ID",
    CachedHistogram = "CACHED_HISTOGRAM",
    CachedRequestsCount = "CACHED_REQUESTS_COUNT",
    CacheTtlHistogram = "CACHE_TTL_HISTOGRAM",
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    ForbiddenOperationCount = "FORBIDDEN_OPERATION_COUNT",
    FromEngineproxy = "FROM_ENGINEPROXY",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    RegisteredOperationCount = "REGISTERED_OPERATION_COUNT",
    RequestsWithErrorsCount = "REQUESTS_WITH_ERRORS_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    UncachedHistogram = "UNCACHED_HISTOGRAM",
    UncachedRequestsCount = "UNCACHED_REQUESTS_COUNT"
}
export declare type QueryStatsDimensions = {
    __typename?: 'QueryStatsDimensions';
    accountId?: Maybe<Scalars['ID']>;
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    fromEngineproxy?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    querySignature?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in QueryStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type QueryStatsFilter = {
    /** Selects rows whose accountId dimension equals the given value if not null. To query for the null value, use {in: {accountId: [null]}} instead. */
    accountId?: InputMaybe<Scalars['ID']>;
    and?: InputMaybe<Array<QueryStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose fromEngineproxy dimension equals the given value if not null. To query for the null value, use {in: {fromEngineproxy: [null]}} instead. */
    fromEngineproxy?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<QueryStatsFilterIn>;
    not?: InputMaybe<QueryStatsFilter>;
    or?: InputMaybe<Array<QueryStatsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in QueryStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type QueryStatsFilterIn = {
    /** Selects rows whose accountId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    accountId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose fromEngineproxy dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fromEngineproxy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type QueryStatsMetrics = {
    __typename?: 'QueryStatsMetrics';
    cacheTtlHistogram: DurationHistogram;
    cachedHistogram: DurationHistogram;
    cachedRequestsCount: Scalars['Long'];
    forbiddenOperationCount: Scalars['Long'];
    registeredOperationCount: Scalars['Long'];
    requestsWithErrorsCount: Scalars['Long'];
    totalLatencyHistogram: DurationHistogram;
    totalRequestCount: Scalars['Long'];
    uncachedHistogram: DurationHistogram;
    uncachedRequestsCount: Scalars['Long'];
};
export declare type QueryStatsOrderBySpec = {
    column: QueryStatsColumn;
    direction: Ordering;
};
export declare type QueryStatsRecord = {
    __typename?: 'QueryStatsRecord';
    /** Dimensions of QueryStats that can be grouped by. */
    groupBy: QueryStatsDimensions;
    /** Metrics of QueryStats that can be aggregated over. */
    metrics: QueryStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Query Trigger */
export declare type QueryTrigger = ChannelSubscription & {
    __typename?: 'QueryTrigger';
    channels: Array<Channel>;
    comparisonOperator: ComparisonOperator;
    enabled: Scalars['Boolean'];
    excludedOperationNames: Array<Scalars['String']>;
    id: Scalars['ID'];
    metric: QueryTriggerMetric;
    operationNames: Array<Scalars['String']>;
    percentile?: Maybe<Scalars['Float']>;
    scope: QueryTriggerScope;
    serviceId: Scalars['String'];
    state: QueryTriggerState;
    threshold: Scalars['Float'];
    variant?: Maybe<Scalars['String']>;
    window: QueryTriggerWindow;
};
/** Query trigger */
export declare type QueryTriggerInput = {
    channelIds?: InputMaybe<Array<Scalars['String']>>;
    comparisonOperator: ComparisonOperator;
    enabled?: InputMaybe<Scalars['Boolean']>;
    excludedOperationNames?: InputMaybe<Array<Scalars['String']>>;
    metric: QueryTriggerMetric;
    operationNames?: InputMaybe<Array<Scalars['String']>>;
    percentile?: InputMaybe<Scalars['Float']>;
    scope?: InputMaybe<QueryTriggerScope>;
    threshold: Scalars['Float'];
    variant?: InputMaybe<Scalars['String']>;
    window: QueryTriggerWindow;
};
export declare enum QueryTriggerMetric {
    /** Number of requests within the window that resulted in an error. Ignores `percentile`. */
    ErrorCount = "ERROR_COUNT",
    /** Number of error requests divided by total number of requests. Ignores `percentile`. */
    ErrorPercentage = "ERROR_PERCENTAGE",
    /** Number of requests within the window. Ignores `percentile`. */
    RequestCount = "REQUEST_COUNT",
    /** Request latency in ms. Requires `percentile`. */
    RequestServiceTime = "REQUEST_SERVICE_TIME"
}
export declare enum QueryTriggerScope {
    All = "ALL",
    Any = "ANY",
    Unrecognized = "UNRECOGNIZED"
}
/** Query trigger state */
export declare type QueryTriggerState = {
    __typename?: 'QueryTriggerState';
    evaluatedAt: Scalars['Timestamp'];
    lastTriggeredAt?: Maybe<Scalars['Timestamp']>;
    operations: Array<QueryTriggerStateOperation>;
    triggered: Scalars['Boolean'];
};
export declare type QueryTriggerStateOperation = {
    __typename?: 'QueryTriggerStateOperation';
    count: Scalars['Long'];
    operation: Scalars['String'];
    triggered: Scalars['Boolean'];
    value: Scalars['Float'];
};
export declare enum QueryTriggerWindow {
    FifteenMinutes = "FIFTEEN_MINUTES",
    FiveMinutes = "FIVE_MINUTES",
    OneMinute = "ONE_MINUTE",
    Unrecognized = "UNRECOGNIZED"
}
export declare type Readme = {
    __typename?: 'Readme';
    content: Scalars['String'];
    id: Scalars['ID'];
    lastUpdatedAt: Scalars['Timestamp'];
    lastUpdatedBy?: Maybe<Identity>;
};
export declare type RegisterOperationsMutationResponse = {
    __typename?: 'RegisterOperationsMutationResponse';
    invalidOperations?: Maybe<Array<InvalidOperation>>;
    newOperations?: Maybe<Array<RegisteredOperation>>;
    registrationSuccess: Scalars['Boolean'];
};
export declare type RegisteredClientIdentityInput = {
    identifier: Scalars['String'];
    name: Scalars['String'];
    version?: InputMaybe<Scalars['String']>;
};
export declare type RegisteredOperation = {
    __typename?: 'RegisteredOperation';
    signature: Scalars['ID'];
};
export declare type RegisteredOperationInput = {
    document?: InputMaybe<Scalars['String']>;
    metadata?: InputMaybe<RegisteredOperationMetadataInput>;
    signature: Scalars['ID'];
};
export declare type RegisteredOperationMetadataInput = {
    /** This will be used to link existing records in Engine to a new ID. */
    engineSignature?: InputMaybe<Scalars['String']>;
};
export declare type RegistryApiKey = {
    __typename?: 'RegistryApiKey';
    keyName?: Maybe<Scalars['String']>;
    token: Scalars['String'];
};
export declare type RegistryStatsWindow = {
    __typename?: 'RegistryStatsWindow';
    schemaCheckStats: Array<AccountChecksStatsRecord>;
    schemaPublishStats: Array<AccountPublishesStatsRecord>;
};
export declare type RegistrySubscription = ChannelSubscription & {
    __typename?: 'RegistrySubscription';
    channel?: Maybe<Channel>;
    /** @deprecated Use channels list instead */
    channels: Array<Channel>;
    createdAt: Scalars['Timestamp'];
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    lastUpdatedAt: Scalars['Timestamp'];
    options: SubscriptionOptions;
    variant?: Maybe<Scalars['String']>;
};
export declare type RelaunchComplete = {
    __typename?: 'RelaunchComplete';
    latestLaunch: Launch;
    updated: Scalars['Boolean'];
};
export declare type RelaunchError = {
    __typename?: 'RelaunchError';
    message: Scalars['String'];
};
export declare type RelaunchResult = RelaunchComplete | RelaunchError;
export declare type RemoveOperationCollectionEntryResult = OperationCollection | PermissionError;
export declare type RemoveOperationCollectionFromVariantResult = GraphVariant | NotFoundError | PermissionError | ValidationError;
export declare type ReorderOperationCollectionResult = OperationCollection | PermissionError;
export declare type ReportSchemaError = ReportSchemaResult & {
    __typename?: 'ReportSchemaError';
    code: ReportSchemaErrorCode;
    inSeconds: Scalars['Int'];
    message: Scalars['String'];
    withCoreSchema: Scalars['Boolean'];
};
export declare enum ReportSchemaErrorCode {
    BootIdIsNotValidUuid = "BOOT_ID_IS_NOT_VALID_UUID",
    BootIdIsRequired = "BOOT_ID_IS_REQUIRED",
    CoreSchemaHashIsNotSchemaSha256 = "CORE_SCHEMA_HASH_IS_NOT_SCHEMA_SHA256",
    CoreSchemaHashIsRequired = "CORE_SCHEMA_HASH_IS_REQUIRED",
    CoreSchemaHashIsTooLong = "CORE_SCHEMA_HASH_IS_TOO_LONG",
    ExecutableSchemaIdIsNotSchemaSha256 = "EXECUTABLE_SCHEMA_ID_IS_NOT_SCHEMA_SHA256",
    ExecutableSchemaIdIsRequired = "EXECUTABLE_SCHEMA_ID_IS_REQUIRED",
    ExecutableSchemaIdIsTooLong = "EXECUTABLE_SCHEMA_ID_IS_TOO_LONG",
    GraphRefInvalidFormat = "GRAPH_REF_INVALID_FORMAT",
    GraphRefIsRequired = "GRAPH_REF_IS_REQUIRED",
    GraphVariantDoesNotMatchRegex = "GRAPH_VARIANT_DOES_NOT_MATCH_REGEX",
    GraphVariantIsRequired = "GRAPH_VARIANT_IS_REQUIRED",
    LibraryVersionIsTooLong = "LIBRARY_VERSION_IS_TOO_LONG",
    PlatformIsTooLong = "PLATFORM_IS_TOO_LONG",
    RuntimeVersionIsTooLong = "RUNTIME_VERSION_IS_TOO_LONG",
    SchemaIsNotParsable = "SCHEMA_IS_NOT_PARSABLE",
    SchemaIsNotValid = "SCHEMA_IS_NOT_VALID",
    ServerIdIsTooLong = "SERVER_ID_IS_TOO_LONG",
    UserVersionIsTooLong = "USER_VERSION_IS_TOO_LONG"
}
export declare type ReportSchemaResponse = ReportSchemaResult & {
    __typename?: 'ReportSchemaResponse';
    inSeconds: Scalars['Int'];
    withCoreSchema: Scalars['Boolean'];
};
export declare type ReportSchemaResult = {
    inSeconds: Scalars['Int'];
    withCoreSchema: Scalars['Boolean'];
};
export declare type ReportServerInfoError = ReportServerInfoResult & {
    __typename?: 'ReportServerInfoError';
    code: ReportSchemaErrorCode;
    inSeconds: Scalars['Int'];
    message: Scalars['String'];
    withExecutableSchema: Scalars['Boolean'];
};
export declare type ReportServerInfoResponse = ReportServerInfoResult & {
    __typename?: 'ReportServerInfoResponse';
    inSeconds: Scalars['Int'];
    withExecutableSchema: Scalars['Boolean'];
};
export declare type ReportServerInfoResult = {
    inSeconds: Scalars['Int'];
    withExecutableSchema: Scalars['Boolean'];
};
export declare enum Resolution {
    R1D = "R1D",
    R1H = "R1H",
    R1M = "R1M",
    R5M = "R5M",
    R6H = "R6H",
    R15M = "R15M"
}
export declare enum ResponseHints {
    None = "NONE",
    SampleResponses = "SAMPLE_RESPONSES",
    Subgraphs = "SUBGRAPHS",
    Timings = "TIMINGS",
    TraceTimings = "TRACE_TIMINGS"
}
export declare type RoleOverride = {
    __typename?: 'RoleOverride';
    graph: Service;
    lastUpdatedAt: Scalars['Timestamp'];
    role: UserPermission;
    user: User;
};
export declare type RoverArgumentInput = {
    key: Scalars['String'];
    value?: InputMaybe<Scalars['Object']>;
};
export declare type ScheduledSummary = ChannelSubscription & {
    __typename?: 'ScheduledSummary';
    /** @deprecated Use channels list instead */
    channel?: Maybe<Channel>;
    channels: Array<Channel>;
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    timezone: Scalars['String'];
    variant: Scalars['String'];
};
export declare type Schema = {
    __typename?: 'Schema';
    createTemporaryURL?: Maybe<TemporaryUrl>;
    createdAt: Scalars['Timestamp'];
    document: Scalars['GraphQLDocument'];
    /** The number of fields; this includes user defined fields only, excluding built-in types and fields */
    fieldCount: Scalars['Int'];
    gitContext?: Maybe<GitContext>;
    hash: Scalars['ID'];
    introspection: IntrospectionSchema;
    /** The number of types; this includes user defined types only, excluding built-in types */
    typeCount: Scalars['Int'];
};
export declare type SchemaCreateTemporaryUrlArgs = {
    expiresInSeconds?: Scalars['Int'];
};
/** Represents an error from running schema composition on a list of service definitions. */
export declare type SchemaCompositionError = {
    __typename?: 'SchemaCompositionError';
    code?: Maybe<Scalars['String']>;
    locations: Array<Maybe<SourceLocation>>;
    message: Scalars['String'];
};
export declare type SchemaDiff = {
    __typename?: 'SchemaDiff';
    /**
     * Clients affected by all changes in diff
     * @deprecated Unsupported.
     */
    affectedClients?: Maybe<Array<AffectedClient>>;
    /** Operations affected by all changes in diff */
    affectedQueries?: Maybe<Array<AffectedQuery>>;
    /** Summary/counts for all changes in diff */
    changeSummary: ChangeSummary;
    /** List of schema changes with associated affected clients and operations */
    changes: Array<Change>;
    /** Number of affected query operations that are neither marked as SAFE or IGNORED */
    numberOfAffectedOperations: Scalars['Int'];
    /** Number of operations that were validated during schema diff */
    numberOfCheckedOperations?: Maybe<Scalars['Int']>;
    /** Indication of the success of the change, either failure, warning, or notice. */
    severity: ChangeSeverity;
    /** The tag against which this diff was created */
    tag?: Maybe<Scalars['String']>;
    /** @deprecated use severity instead */
    type: ChangeType;
    /** Configuration of validation */
    validationConfig?: Maybe<SchemaDiffValidationConfig>;
};
export declare type SchemaDiffValidationConfig = {
    __typename?: 'SchemaDiffValidationConfig';
    /** Clients to ignore during validation. */
    excludedClients?: Maybe<Array<ClientInfoFilterOutput>>;
    /** Operation names to ignore during validation. */
    excludedOperationNames?: Maybe<Array<Maybe<OperationNameFilter>>>;
    /**
     * delta in seconds from current time that determines the start of the window
     * for reported metrics included in a schema diff. A day window from the present
     * day would have a `from` value of -86400. In rare cases, this could be an ISO
     * timestamp if the user passed one in on diff creation
     */
    from?: Maybe<Scalars['Timestamp']>;
    /** Operation IDs to ignore during validation. */
    ignoredOperations?: Maybe<Array<Scalars['ID']>>;
    /** Variants to include during validation. */
    includedVariants?: Maybe<Array<Scalars['String']>>;
    /** Minimum number of requests within the window for a query to be considered. */
    queryCountThreshold?: Maybe<Scalars['Int']>;
    /**
     * Number of requests within the window for a query to be considered, relative to
     * total request count. Expected values are between 0 and 0.05 (minimum 5% of
     * total request volume)
     */
    queryCountThresholdPercentage?: Maybe<Scalars['Float']>;
    /**
     * delta in seconds from current time that determines the end of the
     * window for reported metrics included in a schema diff. A day window
     * from the present day would have a `to` value of -0. In rare
     * cases, this could be an ISO timestamp if the user passed one in on diff
     * creation
     */
    to?: Maybe<Scalars['Timestamp']>;
};
export declare type SchemaPublishSubscription = ChannelSubscription & {
    __typename?: 'SchemaPublishSubscription';
    channels: Array<Channel>;
    createdAt: Scalars['Timestamp'];
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    lastUpdatedAt: Scalars['Timestamp'];
    variant?: Maybe<Scalars['String']>;
};
export declare type SchemaReport = {
    /** A randomly generated UUID, immutable for the lifetime of the edge server runtime. */
    bootId: Scalars['String'];
    /** The hex SHA256 hash of the schema being reported. Note that for a GraphQL server with a core schema, this should be the core schema, not the API schema. */
    coreSchemaHash: Scalars['String'];
    /** The graph ref (eg, 'id@variant') */
    graphRef: Scalars['String'];
    /** The version of the edge server reporting agent, e.g. apollo-server-2.8, graphql-java-3.1, etc. length must be <= 256 characters. */
    libraryVersion?: InputMaybe<Scalars['String']>;
    /** The infra environment in which this edge server is running, e.g. localhost, Kubernetes, AWS Lambda, Google CloudRun, AWS ECS, etc. length must be <= 256 characters. */
    platform?: InputMaybe<Scalars['String']>;
    /** The runtime in which the edge server is running, e.g. node 12.03, zulu8.46.0.19-ca-jdk8.0.252-macosx_x64, etc. length must be <= 256 characters. */
    runtimeVersion?: InputMaybe<Scalars['String']>;
    /** If available, an identifier for the edge server instance, such that when restarting this instance it will have the same serverId, with a different bootId. For example, in Kubernetes this might be the pod name. Length must be <= 256 characters. */
    serverId?: InputMaybe<Scalars['String']>;
    /** An identifier used to distinguish the version (from the user's perspective) of the edge server's code itself. For instance, the git sha of the server's repository or the docker sha of the associated image this server runs with. Length must be <= 256 characters. */
    userVersion?: InputMaybe<Scalars['String']>;
};
export declare type SchemaTag = {
    __typename?: 'SchemaTag';
    /** The composition result that corresponds to this schema repo tag, if it exists. */
    compositionResult?: Maybe<CompositionResult>;
    createdAt: Scalars['Timestamp'];
    diffToPrevious?: Maybe<SchemaDiff>;
    gitContext?: Maybe<GitContext>;
    /**
     * List of previously uploaded SchemaTags under the same tag name, starting with
     * the selected published schema record. Sorted in reverse chronological order
     * by creation date (newest publish first).
     *
     * Note: This does not include the history of checked schemas
     */
    history: Array<SchemaTag>;
    /**
     * Number of tagged schemas created under the same tag name.
     * Also represents the maximum size of the history's limit argument.
     */
    historyLength: Scalars['Int'];
    /**
     * Number of schemas tagged prior to this one under the same tag name, its position
     * in the tag history.
     */
    historyOrder: Scalars['Int'];
    /**
     * The identifier for this particular schema tag, which may be either a particular
     * run of a check or a specific publish. This ID can be used alongside `schemaTagByID`
     * in order to look up a particular entry.
     */
    id: Scalars['ID'];
    /**
     * Indicates this schema is "published" meaning that our users correspond this schema
     * with a long-running or permanent initiative. Published schemas appear in the UI
     * when exploring a service's schemas, and typically refer to either active environments
     * with metrics (e.g. "staging") or git branches that are constantly used as a base
     * (e.g. "main"). If this field is not found, the schema is "private" to Engine
     * and is uploaded but not promoted to published yet. The other benefit is this makes
     * for nice UX around publishing events
     */
    publishedAt: Scalars['Timestamp'];
    /**
     * The Identity that published this schema and their client info, or null if this isn't
     * a publish. Sub-fields may be null if they weren't recorded.
     */
    publishedBy?: Maybe<IdentityAndClientInfo>;
    /**
     * Indicates the schemaTag of the schema's original upload, null if this is the
     * first upload of the schema.
     */
    reversionFrom?: Maybe<SchemaTag>;
    schema: Schema;
    slackNotificationBody?: Maybe<Scalars['String']>;
    /** @deprecated Please use variant { name } instead */
    tag: Scalars['String'];
    /** The graph variant this schema tag belongs to. */
    variant: GraphVariant;
    webhookNotificationBody: Scalars['String'];
};
export declare type SchemaTagHistoryArgs = {
    includeUnchanged?: Scalars['Boolean'];
    limit?: Scalars['Int'];
    offset?: InputMaybe<Scalars['Int']>;
};
export declare type SchemaTagSlackNotificationBodyArgs = {
    graphDisplayName: Scalars['String'];
};
/** How many seats of the given types does an organization have (regardless of plan type)? */
export declare type Seats = {
    __typename?: 'Seats';
    /** How many members that are free in this organization. */
    free: Scalars['Int'];
    /** How many members that are not free in this organization. */
    fullPrice: Scalars['Int'];
};
export declare type SemanticChange = {
    __typename?: 'SemanticChange';
    /** Target arg of change made. */
    argNode?: Maybe<NamedIntrospectionArg>;
    /**
     * Node related to the top level node that was changed, such as a field in an object,
     * a value in an enum or the object of an interface
     */
    childNode?: Maybe<NamedIntrospectionValue>;
    /** Semantic metadata about the type of change */
    definition: ChangeDefinition;
    /** Top level node affected by the change */
    parentNode?: Maybe<NamedIntrospectionType>;
};
export declare type Service = Identity & {
    __typename?: 'Service';
    account?: Maybe<Account>;
    accountId?: Maybe<Scalars['ID']>;
    apiKeys?: Maybe<Array<GraphApiKey>>;
    asActor: Actor;
    /**
     * Get an URL to which an avatar image can be uploaded. Client uploads by sending a PUT request
     * with the image data to MediaUploadInfo.url. Client SHOULD set the "Content-Type" header to the
     * browser-inferred MIME type, and SHOULD set the "x-apollo-content-filename" header to the
     * filename, if such information is available. Client MUST set the "x-apollo-csrf-token" header to
     * MediaUploadInfo.csrfToken.
     */
    avatarUpload?: Maybe<AvatarUploadResult>;
    /**
     * Get an image URL for the service's avatar. Note that CORS is not enabled for these URLs. The size
     * argument is used for bandwidth reduction, and should be the size of the image as displayed in the
     * application. Apollo's media server will downscale larger images to at least the requested size,
     * but this will not happen for third-party media servers.
     */
    avatarUrl?: Maybe<Scalars['String']>;
    /** Get available notification endpoints */
    channels?: Maybe<Array<Channel>>;
    /** Get check configuration for this graph. */
    checkConfiguration?: Maybe<CheckConfiguration>;
    /** Get a check workflow for this graph by its ID */
    checkWorkflow?: Maybe<CheckWorkflow>;
    /** Get check workflows for this graph ordered by creation time, most recent first. */
    checkWorkflows: Array<CheckWorkflow>;
    /**
     * List of options available for filtering checks for this graph by author.
     * If a filter is passed, constrains results to match the filter.
     */
    checksAuthorOptions: Array<Scalars['String']>;
    /**
     * List of options available for filtering checks for this graph by branch.
     * If a filter is passed, constrains results to match the filter.
     */
    checksBranchOptions: Array<Scalars['String']>;
    /**
     * List of options available for filtering checks for this graph by subgraph name.
     * If a filter is passed, constrains results to match the filter.
     */
    checksSubgraphOptions: Array<Scalars['String']>;
    /** Given a graphCompositionID, return the results of composition. This can represent either a validation or a publish. */
    compositionResultById?: Maybe<CompositionResult>;
    createdAt: Scalars['Timestamp'];
    createdBy?: Maybe<Identity>;
    datadogMetricsConfig?: Maybe<DatadogMetricsConfig>;
    deletedAt?: Maybe<Scalars['Timestamp']>;
    description?: Maybe<Scalars['String']>;
    devGraphOwner?: Maybe<User>;
    /** Get a GraphQL document by hash */
    document?: Maybe<Scalars['GraphQLDocument']>;
    /**
     * When this is true, this graph will be hidden from non-admin members of the org who haven't been explicitly assigned a
     * role on this graph.
     */
    hiddenFromUninvitedNonAdminAccountMembers: Scalars['Boolean'];
    id: Scalars['ID'];
    /**
     * List of implementing services that comprise a graph. A non-federated graph should have a single implementing service.
     * Set includeDeleted to see deleted implementing services.
     */
    implementingServices?: Maybe<GraphImplementors>;
    lastReportedAt?: Maybe<Scalars['Timestamp']>;
    /** Current identity, null if not authenticated. */
    me?: Maybe<Identity>;
    /**
     * This returns the composition result that was most recently published to the graph.
     * Only identities that canQuerySchemas and canQueryImplementingServices have access
     * to this field
     */
    mostRecentCompositionPublish?: Maybe<CompositionPublishResult>;
    myRole?: Maybe<UserPermission>;
    /** @deprecated Use Service.title */
    name: Scalars['String'];
    operation?: Maybe<Operation>;
    /** Gets the operations and their approved changes for this graph, checkID, and operationID. */
    operationsAcceptedChanges: Array<OperationAcceptedChange>;
    /** Get an operations check result for a specific check ID */
    operationsCheck?: Maybe<OperationsCheckResult>;
    /** Get query triggers for a given variant. If variant is null all the triggers for this service will be gotten. */
    queryTriggers?: Maybe<Array<QueryTrigger>>;
    readme?: Maybe<Readme>;
    /** Registry specific stats for this graph. */
    registryStatsWindow?: Maybe<RegistryStatsWindow>;
    /**
     * Whether registry subscriptions (with any options) are enabled. If variant is not passed, returns true if configuration is present for any variant
     * @deprecated This field will be removed
     */
    registrySubscriptionsEnabled: Scalars['Boolean'];
    reportingEnabled: Scalars['Boolean'];
    /** The list of members that can access this graph, accounting for graph role overrides */
    roleOverrides?: Maybe<Array<RoleOverride>>;
    /** Which permissions the current user has for interacting with this service */
    roles?: Maybe<ServiceRoles>;
    scheduledSummaries: Array<ScheduledSummary>;
    /** Get a schema by hash OR current tag */
    schema?: Maybe<Schema>;
    /** Get the schema tag */
    schemaTag?: Maybe<SchemaTag>;
    schemaTagById?: Maybe<SchemaTag>;
    /**
     * Get schema tags, with optional filtering to a set of tags. Always sorted by creation
     * date in reverse chronological order.
     */
    schemaTags?: Maybe<Array<SchemaTag>>;
    /** @deprecated use Service.statsWindow instead */
    stats: ServiceStatsWindow;
    statsWindow?: Maybe<ServiceStatsWindow>;
    /** Generate a test schema publish notification body */
    testSchemaPublishBody: Scalars['String'];
    title: Scalars['String'];
    trace?: Maybe<Trace>;
    traceStorageEnabled: Scalars['Boolean'];
    /** A particular variant (sometimes called "tag") of the graph, often representing a live traffic environment (such as "prod"). Each variant can represent a specific URL or destination to query at, analytics, and its own schema history. */
    variant?: Maybe<GraphVariant>;
    /** The list of variants that exist for this graph */
    variants: Array<GraphVariant>;
};
export declare type ServiceAvatarUrlArgs = {
    size?: Scalars['Int'];
};
export declare type ServiceChannelsArgs = {
    channelIds?: InputMaybe<Array<Scalars['ID']>>;
};
export declare type ServiceCheckWorkflowArgs = {
    id: Scalars['ID'];
};
export declare type ServiceCheckWorkflowsArgs = {
    filter?: InputMaybe<CheckFilterInput>;
    limit?: Scalars['Int'];
};
export declare type ServiceChecksAuthorOptionsArgs = {
    filter?: InputMaybe<CheckFilterInput>;
};
export declare type ServiceChecksBranchOptionsArgs = {
    filter?: InputMaybe<CheckFilterInput>;
};
export declare type ServiceChecksSubgraphOptionsArgs = {
    filter?: InputMaybe<CheckFilterInput>;
};
export declare type ServiceCompositionResultByIdArgs = {
    id: Scalars['ID'];
};
export declare type ServiceDocumentArgs = {
    hash?: InputMaybe<Scalars['SHA256']>;
};
export declare type ServiceImplementingServicesArgs = {
    graphVariant: Scalars['String'];
    includeDeleted?: InputMaybe<Scalars['Boolean']>;
};
export declare type ServiceLastReportedAtArgs = {
    graphVariant?: InputMaybe<Scalars['String']>;
};
export declare type ServiceMostRecentCompositionPublishArgs = {
    graphVariant: Scalars['String'];
};
export declare type ServiceOperationArgs = {
    id: Scalars['ID'];
};
export declare type ServiceOperationsAcceptedChangesArgs = {
    checkID: Scalars['ID'];
    operationID: Scalars['String'];
};
export declare type ServiceOperationsCheckArgs = {
    checkID: Scalars['ID'];
};
export declare type ServiceQueryTriggersArgs = {
    graphVariant?: InputMaybe<Scalars['String']>;
    operationNames?: InputMaybe<Array<Scalars['String']>>;
};
export declare type ServiceRegistryStatsWindowArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type ServiceRegistrySubscriptionsEnabledArgs = {
    graphVariant?: InputMaybe<Scalars['String']>;
};
export declare type ServiceSchemaArgs = {
    hash?: InputMaybe<Scalars['ID']>;
    tag?: InputMaybe<Scalars['String']>;
};
export declare type ServiceSchemaTagArgs = {
    tag: Scalars['String'];
};
export declare type ServiceSchemaTagByIdArgs = {
    id: Scalars['ID'];
};
export declare type ServiceSchemaTagsArgs = {
    tags?: InputMaybe<Array<Scalars['String']>>;
};
export declare type ServiceStatsArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type ServiceStatsWindowArgs = {
    from: Scalars['Timestamp'];
    resolution?: InputMaybe<Resolution>;
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type ServiceTestSchemaPublishBodyArgs = {
    variant: Scalars['String'];
};
export declare type ServiceTraceArgs = {
    id: Scalars['ID'];
};
export declare type ServiceVariantArgs = {
    name: Scalars['String'];
};
/** Columns of ServiceEdgeServerInfos. */
export declare enum ServiceEdgeServerInfosColumn {
    BootId = "BOOT_ID",
    ExecutableSchemaId = "EXECUTABLE_SCHEMA_ID",
    LibraryVersion = "LIBRARY_VERSION",
    Platform = "PLATFORM",
    RuntimeVersion = "RUNTIME_VERSION",
    SchemaTag = "SCHEMA_TAG",
    ServerId = "SERVER_ID",
    Timestamp = "TIMESTAMP",
    UserVersion = "USER_VERSION"
}
export declare type ServiceEdgeServerInfosDimensions = {
    __typename?: 'ServiceEdgeServerInfosDimensions';
    bootId?: Maybe<Scalars['ID']>;
    executableSchemaId?: Maybe<Scalars['ID']>;
    libraryVersion?: Maybe<Scalars['String']>;
    platform?: Maybe<Scalars['String']>;
    runtimeVersion?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serverId?: Maybe<Scalars['ID']>;
    userVersion?: Maybe<Scalars['String']>;
};
/** Filter for data in ServiceEdgeServerInfos. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceEdgeServerInfosFilter = {
    and?: InputMaybe<Array<ServiceEdgeServerInfosFilter>>;
    /** Selects rows whose bootId dimension equals the given value if not null. To query for the null value, use {in: {bootId: [null]}} instead. */
    bootId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose executableSchemaId dimension equals the given value if not null. To query for the null value, use {in: {executableSchemaId: [null]}} instead. */
    executableSchemaId?: InputMaybe<Scalars['ID']>;
    in?: InputMaybe<ServiceEdgeServerInfosFilterIn>;
    /** Selects rows whose libraryVersion dimension equals the given value if not null. To query for the null value, use {in: {libraryVersion: [null]}} instead. */
    libraryVersion?: InputMaybe<Scalars['String']>;
    not?: InputMaybe<ServiceEdgeServerInfosFilter>;
    or?: InputMaybe<Array<ServiceEdgeServerInfosFilter>>;
    /** Selects rows whose platform dimension equals the given value if not null. To query for the null value, use {in: {platform: [null]}} instead. */
    platform?: InputMaybe<Scalars['String']>;
    /** Selects rows whose runtimeVersion dimension equals the given value if not null. To query for the null value, use {in: {runtimeVersion: [null]}} instead. */
    runtimeVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serverId dimension equals the given value if not null. To query for the null value, use {in: {serverId: [null]}} instead. */
    serverId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose userVersion dimension equals the given value if not null. To query for the null value, use {in: {userVersion: [null]}} instead. */
    userVersion?: InputMaybe<Scalars['String']>;
};
/** Filter for data in ServiceEdgeServerInfos. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceEdgeServerInfosFilterIn = {
    /** Selects rows whose bootId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    bootId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose executableSchemaId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    executableSchemaId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose libraryVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    libraryVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose platform dimension is in the given list. A null value in the list means a row with null for that dimension. */
    platform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose runtimeVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    runtimeVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serverId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serverId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose userVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    userVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type ServiceEdgeServerInfosOrderBySpec = {
    column: ServiceEdgeServerInfosColumn;
    direction: Ordering;
};
export declare type ServiceEdgeServerInfosRecord = {
    __typename?: 'ServiceEdgeServerInfosRecord';
    /** Dimensions of ServiceEdgeServerInfos that can be grouped by. */
    groupBy: ServiceEdgeServerInfosDimensions;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of ServiceErrorStats. */
export declare enum ServiceErrorStatsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    ErrorsCount = "ERRORS_COUNT",
    Path = "PATH",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    RequestsWithErrorsCount = "REQUESTS_WITH_ERRORS_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    Timestamp = "TIMESTAMP"
}
export declare type ServiceErrorStatsDimensions = {
    __typename?: 'ServiceErrorStatsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
};
/** Filter for data in ServiceErrorStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceErrorStatsFilter = {
    and?: InputMaybe<Array<ServiceErrorStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<ServiceErrorStatsFilterIn>;
    not?: InputMaybe<ServiceErrorStatsFilter>;
    or?: InputMaybe<Array<ServiceErrorStatsFilter>>;
    /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
    path?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
};
/** Filter for data in ServiceErrorStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceErrorStatsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
    path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type ServiceErrorStatsMetrics = {
    __typename?: 'ServiceErrorStatsMetrics';
    errorsCount: Scalars['Long'];
    requestsWithErrorsCount: Scalars['Long'];
};
export declare type ServiceErrorStatsOrderBySpec = {
    column: ServiceErrorStatsColumn;
    direction: Ordering;
};
export declare type ServiceErrorStatsRecord = {
    __typename?: 'ServiceErrorStatsRecord';
    /** Dimensions of ServiceErrorStats that can be grouped by. */
    groupBy: ServiceErrorStatsDimensions;
    /** Metrics of ServiceErrorStats that can be aggregated over. */
    metrics: ServiceErrorStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of ServiceFieldLatencies. */
export declare enum ServiceFieldLatenciesColumn {
    FieldHistogram = "FIELD_HISTOGRAM",
    FieldName = "FIELD_NAME",
    ParentType = "PARENT_TYPE",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    Timestamp = "TIMESTAMP"
}
export declare type ServiceFieldLatenciesDimensions = {
    __typename?: 'ServiceFieldLatenciesDimensions';
    field?: Maybe<Scalars['String']>;
    fieldName?: Maybe<Scalars['String']>;
    parentType?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
};
/** Filter for data in ServiceFieldLatencies. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceFieldLatenciesFilter = {
    and?: InputMaybe<Array<ServiceFieldLatenciesFilter>>;
    /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
    fieldName?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<ServiceFieldLatenciesFilterIn>;
    not?: InputMaybe<ServiceFieldLatenciesFilter>;
    or?: InputMaybe<Array<ServiceFieldLatenciesFilter>>;
    /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
    parentType?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
};
/** Filter for data in ServiceFieldLatencies. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceFieldLatenciesFilterIn = {
    /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
    parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type ServiceFieldLatenciesMetrics = {
    __typename?: 'ServiceFieldLatenciesMetrics';
    fieldHistogram: DurationHistogram;
};
export declare type ServiceFieldLatenciesOrderBySpec = {
    column: ServiceFieldLatenciesColumn;
    direction: Ordering;
};
export declare type ServiceFieldLatenciesRecord = {
    __typename?: 'ServiceFieldLatenciesRecord';
    /** Dimensions of ServiceFieldLatencies that can be grouped by. */
    groupBy: ServiceFieldLatenciesDimensions;
    /** Metrics of ServiceFieldLatencies that can be aggregated over. */
    metrics: ServiceFieldLatenciesMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of ServiceFieldUsage. */
export declare enum ServiceFieldUsageColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    EstimatedExecutionCount = "ESTIMATED_EXECUTION_COUNT",
    ExecutionCount = "EXECUTION_COUNT",
    FieldName = "FIELD_NAME",
    ParentType = "PARENT_TYPE",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    ReferencingOperationCount = "REFERENCING_OPERATION_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    Timestamp = "TIMESTAMP"
}
export declare type ServiceFieldUsageDimensions = {
    __typename?: 'ServiceFieldUsageDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    fieldName?: Maybe<Scalars['String']>;
    parentType?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
};
/** Filter for data in ServiceFieldUsage. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceFieldUsageFilter = {
    and?: InputMaybe<Array<ServiceFieldUsageFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
    fieldName?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<ServiceFieldUsageFilterIn>;
    not?: InputMaybe<ServiceFieldUsageFilter>;
    or?: InputMaybe<Array<ServiceFieldUsageFilter>>;
    /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
    parentType?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
};
/** Filter for data in ServiceFieldUsage. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceFieldUsageFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
    parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type ServiceFieldUsageMetrics = {
    __typename?: 'ServiceFieldUsageMetrics';
    estimatedExecutionCount: Scalars['Long'];
    executionCount: Scalars['Long'];
    referencingOperationCount: Scalars['Long'];
};
export declare type ServiceFieldUsageOrderBySpec = {
    column: ServiceFieldUsageColumn;
    direction: Ordering;
};
export declare type ServiceFieldUsageRecord = {
    __typename?: 'ServiceFieldUsageRecord';
    /** Dimensions of ServiceFieldUsage that can be grouped by. */
    groupBy: ServiceFieldUsageDimensions;
    /** Metrics of ServiceFieldUsage that can be aggregated over. */
    metrics: ServiceFieldUsageMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type ServiceMutation = {
    __typename?: 'ServiceMutation';
    /**
     * Compose an implementing service's partial schema, diff the composed schema, validate traffic against that schema,
     * and store the result so the details can be viewed by users in the UI.
     * This mutation will not mark the schema as "published".
     */
    checkPartialSchema: CheckPartialSchemaResult;
    /**
     * Checks a proposed schema against the schema that has been published to
     * a particular tag, using metrics that have been published to the base tag.
     * Callers can set the historicParameters directly, which will be used if
     * provided. If useMaximumRetention is provided, but historicParameters is not,
     * then validation will use the maximum retention the graph has access to.
     * If neither historicParameters nor useMaximumRetention is provided, the
     * default time range of one week (7 days) will be used.
     */
    checkSchema: CheckSchemaResult;
    /** Make changes to a check workflow. */
    checkWorkflow?: Maybe<CheckWorkflowMutation>;
    createCompositionStatusSubscription: SchemaPublishSubscription;
    createSchemaPublishSubscription: SchemaPublishSubscription;
    /** Soft delete a graph. Data associated with the graph is not permanently deleted; Apollo support can undo. */
    delete?: Maybe<Scalars['Void']>;
    /** Delete the service's avatar. Requires Service.roles.canUpdateAvatar to be true. */
    deleteAvatar?: Maybe<AvatarDeleteError>;
    /** Delete an existing channel */
    deleteChannel: Scalars['Boolean'];
    /** Delete an existing query trigger */
    deleteQueryTrigger: Scalars['Boolean'];
    /** Deletes this service's current subscriptions specific to the ID, returns true if it existed */
    deleteRegistrySubscription: Scalars['Boolean'];
    /**
     * Deletes this service's current registry subscription(s) specific to its graph variant,
     * returns a list of subscription IDs that were deleted.
     */
    deleteRegistrySubscriptions: Array<Scalars['ID']>;
    deleteScheduledSummary: Scalars['Boolean'];
    deleteSchemaTag: DeleteSchemaTagResult;
    /** Given a UTC timestamp, delete all traces associated with this Service, on that corresponding day. If a timestamp to is provided, deletes all days inclusive. */
    deleteTraces?: Maybe<Scalars['Void']>;
    disableDatadogForwardingLegacyMetricNames?: Maybe<Service>;
    /** Hard delete a graph and all data associated with it. Its ID cannot be reused. */
    hardDelete?: Maybe<Scalars['Void']>;
    /** @deprecated Use service.id */
    id: Scalars['ID'];
    /**
     * Ignore an operation in future checks;
     * changes affecting it will be tracked,
     * but won't affect the outcome of the check.
     * Returns true if the operation is newly ignored,
     * false if it already was.
     */
    ignoreOperationsInChecks?: Maybe<IgnoreOperationsInChecksResult>;
    /**
     * Mark the changeset that affects an operation in a given check instance as safe.
     * Note that only operations marked as behavior changes are allowed to be marked as safe.
     */
    markChangesForOperationAsSafe: MarkChangesForOperationAsSafeResult;
    newKey: GraphApiKey;
    /** Adds an override to the given users permission for this graph */
    overrideUserPermission?: Maybe<Service>;
    /** Returns a preview of the Core and API schema contracts derived from a source variant and a set of filter configurations */
    previewContractVariant: ContractVariantPreviewResult;
    /** Promote the schema with the given SHA-256 hash to active for the given variant/tag. */
    promoteSchema: PromoteSchemaResponseOrError;
    registerOperationsWithResponse?: Maybe<RegisterOperationsMutationResponse>;
    removeImplementingServiceAndTriggerComposition: CompositionAndRemoveResult;
    removeKey?: Maybe<Scalars['Void']>;
    renameKey?: Maybe<GraphApiKey>;
    /** @deprecated use Mutation.reportSchema instead */
    reportServerInfo?: Maybe<ReportServerInfoResult>;
    service: Service;
    /**
     * Store a given schema document. This schema will be attached to the graph but
     * not be associated with any variant. On success, returns the schema hash.
     */
    storeSchemaDocument: StoreSchemaResponseOrError;
    /** Test Slack notification channel */
    testSlackChannel?: Maybe<Scalars['Void']>;
    testSubscriptionForChannel: Scalars['String'];
    transfer?: Maybe<Service>;
    triggerRepublish?: Maybe<Scalars['Void']>;
    undelete?: Maybe<Service>;
    /**
     * Revert the effects of ignoreOperation.
     * Returns true if the operation is no longer ignored,
     * false if it wasn't.
     */
    unignoreOperationsInChecks?: Maybe<UnignoreOperationsInChecksResult>;
    /** Unmark changes for an operation as safe. */
    unmarkChangesForOperationAsSafe: MarkChangesForOperationAsSafeResult;
    /** Update schema check configuration for a graph. */
    updateCheckConfiguration: CheckConfiguration;
    updateDatadogMetricsConfig?: Maybe<DatadogMetricsConfig>;
    updateDescription?: Maybe<Service>;
    /** Update hiddenFromUninvitedNonAdminAccountMembers */
    updateHiddenFromUninvitedNonAdminAccountMembers?: Maybe<Service>;
    updateReadme?: Maybe<Service>;
    updateTitle?: Maybe<Service>;
    uploadSchema?: Maybe<UploadSchemaMutationResponse>;
    upsertChannel?: Maybe<Channel>;
    /** Creates a contract schema from a source variant and a set of filter configurations */
    upsertContractVariant: ContractVariantUpsertResult;
    upsertImplementingServiceAndTriggerComposition?: Maybe<CompositionAndUpsertResult>;
    /** Create/update PagerDuty notification channel */
    upsertPagerDutyChannel?: Maybe<PagerDutyChannel>;
    upsertQueryTrigger?: Maybe<QueryTrigger>;
    /** Create or update a subscription for a service. */
    upsertRegistrySubscription: RegistrySubscription;
    upsertScheduledSummary?: Maybe<ScheduledSummary>;
    /** Create/update Slack notification channel */
    upsertSlackChannel?: Maybe<SlackChannel>;
    upsertWebhookChannel?: Maybe<WebhookChannel>;
    validateOperations: ValidateOperationsResult;
    /**
     * This mutation will not result in any changes to the implementing service
     * Run composition with the Implementing Service's partial schema replaced with the one provided
     * in the mutation's input. Store the composed schema, return the hash of the composed schema,
     * and any warnings and errors pertaining to composition.
     * This mutation will not run validation against operations.
     */
    validatePartialSchemaOfImplementingServiceAgainstGraph: CompositionValidationResult;
    /** Make changes to a graph variant. */
    variant?: Maybe<GraphVariantMutation>;
};
export declare type ServiceMutationCheckPartialSchemaArgs = {
    frontend?: InputMaybe<Scalars['String']>;
    gitContext?: InputMaybe<GitContextInput>;
    graphVariant: Scalars['String'];
    historicParameters?: InputMaybe<HistoricQueryParameters>;
    implementingServiceName: Scalars['String'];
    introspectionEndpoint?: InputMaybe<Scalars['String']>;
    isSandboxCheck?: Scalars['Boolean'];
    partialSchema: PartialSchemaInput;
    useMaximumRetention?: InputMaybe<Scalars['Boolean']>;
};
export declare type ServiceMutationCheckSchemaArgs = {
    baseSchemaTag?: InputMaybe<Scalars['String']>;
    frontend?: InputMaybe<Scalars['String']>;
    gitContext?: InputMaybe<GitContextInput>;
    historicParameters?: InputMaybe<HistoricQueryParameters>;
    introspectionEndpoint?: InputMaybe<Scalars['String']>;
    isSandboxCheck?: Scalars['Boolean'];
    proposedSchema?: InputMaybe<IntrospectionSchemaInput>;
    proposedSchemaDocument?: InputMaybe<Scalars['String']>;
    proposedSchemaHash?: InputMaybe<Scalars['String']>;
    useMaximumRetention?: InputMaybe<Scalars['Boolean']>;
};
export declare type ServiceMutationCheckWorkflowArgs = {
    id: Scalars['ID'];
};
export declare type ServiceMutationCreateCompositionStatusSubscriptionArgs = {
    channelID: Scalars['ID'];
    variant: Scalars['String'];
};
export declare type ServiceMutationCreateSchemaPublishSubscriptionArgs = {
    channelID: Scalars['ID'];
    variant: Scalars['String'];
};
export declare type ServiceMutationDeleteChannelArgs = {
    id: Scalars['ID'];
};
export declare type ServiceMutationDeleteQueryTriggerArgs = {
    id: Scalars['ID'];
};
export declare type ServiceMutationDeleteRegistrySubscriptionArgs = {
    id: Scalars['ID'];
};
export declare type ServiceMutationDeleteRegistrySubscriptionsArgs = {
    variant: Scalars['String'];
};
export declare type ServiceMutationDeleteScheduledSummaryArgs = {
    id: Scalars['ID'];
};
export declare type ServiceMutationDeleteSchemaTagArgs = {
    tag: Scalars['String'];
};
export declare type ServiceMutationDeleteTracesArgs = {
    from: Scalars['Timestamp'];
    to?: InputMaybe<Scalars['Timestamp']>;
};
export declare type ServiceMutationIgnoreOperationsInChecksArgs = {
    ids: Array<Scalars['ID']>;
};
export declare type ServiceMutationMarkChangesForOperationAsSafeArgs = {
    checkID: Scalars['ID'];
    operationID: Scalars['ID'];
};
export declare type ServiceMutationNewKeyArgs = {
    keyName?: InputMaybe<Scalars['String']>;
    role?: UserPermission;
};
export declare type ServiceMutationOverrideUserPermissionArgs = {
    permission?: InputMaybe<UserPermission>;
    userID: Scalars['ID'];
};
export declare type ServiceMutationPreviewContractVariantArgs = {
    filterConfig: FilterConfigInput;
    sourceVariant: Scalars['String'];
};
export declare type ServiceMutationPromoteSchemaArgs = {
    graphVariant: Scalars['String'];
    historicParameters?: InputMaybe<HistoricQueryParameters>;
    overrideComposedSchema?: Scalars['Boolean'];
    sha256: Scalars['SHA256'];
};
export declare type ServiceMutationRegisterOperationsWithResponseArgs = {
    clientIdentity?: InputMaybe<RegisteredClientIdentityInput>;
    gitContext?: InputMaybe<GitContextInput>;
    graphVariant?: Scalars['String'];
    manifestVersion?: InputMaybe<Scalars['Int']>;
    operations: Array<RegisteredOperationInput>;
};
export declare type ServiceMutationRemoveImplementingServiceAndTriggerCompositionArgs = {
    dryRun?: Scalars['Boolean'];
    graphVariant: Scalars['String'];
    name: Scalars['String'];
};
export declare type ServiceMutationRemoveKeyArgs = {
    id?: InputMaybe<Scalars['ID']>;
};
export declare type ServiceMutationRenameKeyArgs = {
    id: Scalars['ID'];
    newKeyName?: InputMaybe<Scalars['String']>;
};
export declare type ServiceMutationReportServerInfoArgs = {
    executableSchema?: InputMaybe<Scalars['String']>;
    info: EdgeServerInfo;
};
export declare type ServiceMutationStoreSchemaDocumentArgs = {
    schemaDocument: Scalars['String'];
};
export declare type ServiceMutationTestSlackChannelArgs = {
    id: Scalars['ID'];
    notification: SlackNotificationInput;
};
export declare type ServiceMutationTestSubscriptionForChannelArgs = {
    channelID: Scalars['ID'];
    subscriptionID: Scalars['ID'];
};
export declare type ServiceMutationTransferArgs = {
    to: Scalars['String'];
};
export declare type ServiceMutationTriggerRepublishArgs = {
    graphVariant: Scalars['String'];
};
export declare type ServiceMutationUnignoreOperationsInChecksArgs = {
    ids: Array<Scalars['ID']>;
};
export declare type ServiceMutationUnmarkChangesForOperationAsSafeArgs = {
    checkID: Scalars['ID'];
    operationID: Scalars['ID'];
};
export declare type ServiceMutationUpdateCheckConfigurationArgs = {
    excludedClients?: InputMaybe<Array<ClientFilterInput>>;
    excludedOperationNames?: InputMaybe<Array<OperationNameFilterInput>>;
    excludedOperations?: InputMaybe<Array<ExcludedOperationInput>>;
    includeBaseVariant?: InputMaybe<Scalars['Boolean']>;
    includedVariants?: InputMaybe<Array<Scalars['String']>>;
    operationCountThreshold?: InputMaybe<Scalars['Int']>;
    operationCountThresholdPercentage?: InputMaybe<Scalars['Float']>;
    timeRangeSeconds?: InputMaybe<Scalars['Long']>;
};
export declare type ServiceMutationUpdateDatadogMetricsConfigArgs = {
    apiKey?: InputMaybe<Scalars['String']>;
    apiRegion?: InputMaybe<DatadogApiRegion>;
    enabled?: InputMaybe<Scalars['Boolean']>;
};
export declare type ServiceMutationUpdateDescriptionArgs = {
    description: Scalars['String'];
};
export declare type ServiceMutationUpdateHiddenFromUninvitedNonAdminAccountMembersArgs = {
    hiddenFromUninvitedNonAdminAccountMembers: Scalars['Boolean'];
};
export declare type ServiceMutationUpdateReadmeArgs = {
    readme: Scalars['String'];
};
export declare type ServiceMutationUpdateTitleArgs = {
    title: Scalars['String'];
};
export declare type ServiceMutationUploadSchemaArgs = {
    errorOnBadRequest?: Scalars['Boolean'];
    gitContext?: InputMaybe<GitContextInput>;
    historicParameters?: InputMaybe<HistoricQueryParameters>;
    overrideComposedSchema?: Scalars['Boolean'];
    schema?: InputMaybe<IntrospectionSchemaInput>;
    schemaDocument?: InputMaybe<Scalars['String']>;
    tag: Scalars['String'];
};
export declare type ServiceMutationUpsertChannelArgs = {
    id?: InputMaybe<Scalars['ID']>;
    pagerDutyChannel?: InputMaybe<PagerDutyChannelInput>;
    slackChannel?: InputMaybe<SlackChannelInput>;
    webhookChannel?: InputMaybe<WebhookChannelInput>;
};
export declare type ServiceMutationUpsertContractVariantArgs = {
    contractVariantName: Scalars['String'];
    filterConfig: FilterConfigInput;
    initiateLaunch?: Scalars['Boolean'];
    sourceVariant: Scalars['String'];
};
export declare type ServiceMutationUpsertImplementingServiceAndTriggerCompositionArgs = {
    activePartialSchema: PartialSchemaInput;
    gitContext?: InputMaybe<GitContextInput>;
    graphVariant: Scalars['String'];
    name: Scalars['String'];
    revision: Scalars['String'];
    url?: InputMaybe<Scalars['String']>;
};
export declare type ServiceMutationUpsertPagerDutyChannelArgs = {
    channel: PagerDutyChannelInput;
    id?: InputMaybe<Scalars['ID']>;
};
export declare type ServiceMutationUpsertQueryTriggerArgs = {
    id?: InputMaybe<Scalars['ID']>;
    trigger: QueryTriggerInput;
};
export declare type ServiceMutationUpsertRegistrySubscriptionArgs = {
    channelID?: InputMaybe<Scalars['ID']>;
    id?: InputMaybe<Scalars['ID']>;
    options?: InputMaybe<SubscriptionOptionsInput>;
    variant?: InputMaybe<Scalars['String']>;
};
export declare type ServiceMutationUpsertScheduledSummaryArgs = {
    channelID?: InputMaybe<Scalars['ID']>;
    enabled?: InputMaybe<Scalars['Boolean']>;
    id?: InputMaybe<Scalars['ID']>;
    tag?: InputMaybe<Scalars['String']>;
    timezone?: InputMaybe<Scalars['String']>;
    variant?: InputMaybe<Scalars['String']>;
};
export declare type ServiceMutationUpsertSlackChannelArgs = {
    channel: SlackChannelInput;
    id?: InputMaybe<Scalars['ID']>;
};
export declare type ServiceMutationUpsertWebhookChannelArgs = {
    id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    secretToken?: InputMaybe<Scalars['String']>;
    url: Scalars['String'];
};
export declare type ServiceMutationValidateOperationsArgs = {
    gitContext?: InputMaybe<GitContextInput>;
    operations: Array<OperationDocumentInput>;
    tag?: InputMaybe<Scalars['String']>;
};
export declare type ServiceMutationValidatePartialSchemaOfImplementingServiceAgainstGraphArgs = {
    graphVariant: Scalars['String'];
    implementingServiceName: Scalars['String'];
    partialSchema: PartialSchemaInput;
};
export declare type ServiceMutationVariantArgs = {
    name: Scalars['String'];
};
/** Columns of ServiceOperationCheckStats. */
export declare enum ServiceOperationCheckStatsColumn {
    CachedRequestsCount = "CACHED_REQUESTS_COUNT",
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaTag = "SCHEMA_TAG",
    Timestamp = "TIMESTAMP",
    UncachedRequestsCount = "UNCACHED_REQUESTS_COUNT"
}
export declare type ServiceOperationCheckStatsDimensions = {
    __typename?: 'ServiceOperationCheckStatsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
};
/** Filter for data in ServiceOperationCheckStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceOperationCheckStatsFilter = {
    and?: InputMaybe<Array<ServiceOperationCheckStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<ServiceOperationCheckStatsFilterIn>;
    not?: InputMaybe<ServiceOperationCheckStatsFilter>;
    or?: InputMaybe<Array<ServiceOperationCheckStatsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
};
/** Filter for data in ServiceOperationCheckStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceOperationCheckStatsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type ServiceOperationCheckStatsMetrics = {
    __typename?: 'ServiceOperationCheckStatsMetrics';
    cachedRequestsCount: Scalars['Long'];
    uncachedRequestsCount: Scalars['Long'];
};
export declare type ServiceOperationCheckStatsOrderBySpec = {
    column: ServiceOperationCheckStatsColumn;
    direction: Ordering;
};
export declare type ServiceOperationCheckStatsRecord = {
    __typename?: 'ServiceOperationCheckStatsRecord';
    /** Dimensions of ServiceOperationCheckStats that can be grouped by. */
    groupBy: ServiceOperationCheckStatsDimensions;
    /** Metrics of ServiceOperationCheckStats that can be aggregated over. */
    metrics: ServiceOperationCheckStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of ServiceQueryStats. */
export declare enum ServiceQueryStatsColumn {
    CachedHistogram = "CACHED_HISTOGRAM",
    CachedRequestsCount = "CACHED_REQUESTS_COUNT",
    CacheTtlHistogram = "CACHE_TTL_HISTOGRAM",
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    ForbiddenOperationCount = "FORBIDDEN_OPERATION_COUNT",
    FromEngineproxy = "FROM_ENGINEPROXY",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    RegisteredOperationCount = "REGISTERED_OPERATION_COUNT",
    RequestsWithErrorsCount = "REQUESTS_WITH_ERRORS_COUNT",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    Timestamp = "TIMESTAMP",
    UncachedHistogram = "UNCACHED_HISTOGRAM",
    UncachedRequestsCount = "UNCACHED_REQUESTS_COUNT"
}
export declare type ServiceQueryStatsDimensions = {
    __typename?: 'ServiceQueryStatsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    fromEngineproxy?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    querySignature?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
};
/** Filter for data in ServiceQueryStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceQueryStatsFilter = {
    and?: InputMaybe<Array<ServiceQueryStatsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose fromEngineproxy dimension equals the given value if not null. To query for the null value, use {in: {fromEngineproxy: [null]}} instead. */
    fromEngineproxy?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<ServiceQueryStatsFilterIn>;
    not?: InputMaybe<ServiceQueryStatsFilter>;
    or?: InputMaybe<Array<ServiceQueryStatsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
};
/** Filter for data in ServiceQueryStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceQueryStatsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose fromEngineproxy dimension is in the given list. A null value in the list means a row with null for that dimension. */
    fromEngineproxy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};
export declare type ServiceQueryStatsMetrics = {
    __typename?: 'ServiceQueryStatsMetrics';
    cacheTtlHistogram: DurationHistogram;
    cachedHistogram: DurationHistogram;
    cachedRequestsCount: Scalars['Long'];
    forbiddenOperationCount: Scalars['Long'];
    registeredOperationCount: Scalars['Long'];
    requestsWithErrorsCount: Scalars['Long'];
    totalLatencyHistogram: DurationHistogram;
    totalRequestCount: Scalars['Long'];
    uncachedHistogram: DurationHistogram;
    uncachedRequestsCount: Scalars['Long'];
};
export declare type ServiceQueryStatsOrderBySpec = {
    column: ServiceQueryStatsColumn;
    direction: Ordering;
};
export declare type ServiceQueryStatsRecord = {
    __typename?: 'ServiceQueryStatsRecord';
    /** Dimensions of ServiceQueryStats that can be grouped by. */
    groupBy: ServiceQueryStatsDimensions;
    /** Metrics of ServiceQueryStats that can be aggregated over. */
    metrics: ServiceQueryStatsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** A map from role (permission) String to boolean that the current user is allowed for the root service */
export declare type ServiceRoles = {
    __typename?: 'ServiceRoles';
    canCheckSchemas: Scalars['Boolean'];
    canCreateVariants: Scalars['Boolean'];
    canDelete: Scalars['Boolean'];
    canManageAccess: Scalars['Boolean'];
    canManageBuildConfig: Scalars['Boolean'];
    canManageIntegrations: Scalars['Boolean'];
    canManageKeys: Scalars['Boolean'];
    canManageVariants: Scalars['Boolean'];
    canQueryBuildConfig: Scalars['Boolean'];
    canQueryCheckConfiguration: Scalars['Boolean'];
    canQueryDeletedImplementingServices: Scalars['Boolean'];
    canQueryImplementingServices: Scalars['Boolean'];
    canQueryIntegrations: Scalars['Boolean'];
    canQueryPrivateInfo: Scalars['Boolean'];
    canQueryPublicInfo: Scalars['Boolean'];
    canQueryReadmeAuthor: Scalars['Boolean'];
    canQueryRoleOverrides: Scalars['Boolean'];
    canQuerySchemas: Scalars['Boolean'];
    canQueryStats: Scalars['Boolean'];
    canQueryTokens: Scalars['Boolean'];
    canQueryTraces: Scalars['Boolean'];
    canRegisterOperations: Scalars['Boolean'];
    canStoreSchemasWithoutVariant: Scalars['Boolean'];
    canUndelete: Scalars['Boolean'];
    canUpdateAvatar: Scalars['Boolean'];
    canUpdateDescription: Scalars['Boolean'];
    canUpdateTitle: Scalars['Boolean'];
    /** @deprecated Replaced with canQueryTraces and canQueryStats */
    canVisualizeStats: Scalars['Boolean'];
    canWriteCheckConfiguration: Scalars['Boolean'];
    /** @deprecated Never worked, not replaced */
    canWriteTraces: Scalars['Boolean'];
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindow = {
    __typename?: 'ServiceStatsWindow';
    edgeServerInfos: Array<ServiceEdgeServerInfosRecord>;
    errorStats: Array<ServiceErrorStatsRecord>;
    fieldLatencies: Array<ServiceFieldLatenciesRecord>;
    fieldStats: Array<ServiceFieldLatenciesRecord>;
    fieldUsage: Array<ServiceFieldUsageRecord>;
    operationCheckStats: Array<ServiceOperationCheckStatsRecord>;
    queryStats: Array<ServiceQueryStatsRecord>;
    /** From field rounded down to the nearest resolution. */
    roundedDownFrom: Scalars['Timestamp'];
    /** To field rounded up to the nearest resolution. */
    roundedUpTo: Scalars['Timestamp'];
    tracePathErrorsRefs: Array<ServiceTracePathErrorsRefsRecord>;
    traceRefs: Array<ServiceTraceRefsRecord>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowEdgeServerInfosArgs = {
    filter?: InputMaybe<ServiceEdgeServerInfosFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceEdgeServerInfosOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowErrorStatsArgs = {
    filter?: InputMaybe<ServiceErrorStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceErrorStatsOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowFieldLatenciesArgs = {
    filter?: InputMaybe<ServiceFieldLatenciesFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceFieldLatenciesOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowFieldStatsArgs = {
    filter?: InputMaybe<ServiceFieldLatenciesFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceFieldLatenciesOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowFieldUsageArgs = {
    filter?: InputMaybe<ServiceFieldUsageFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceFieldUsageOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowOperationCheckStatsArgs = {
    filter?: InputMaybe<ServiceOperationCheckStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceOperationCheckStatsOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowQueryStatsArgs = {
    filter?: InputMaybe<ServiceQueryStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceQueryStatsOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowTracePathErrorsRefsArgs = {
    filter?: InputMaybe<ServiceTracePathErrorsRefsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceTracePathErrorsRefsOrderBySpec>>;
};
/** A time window with a specified granularity over a given service. */
export declare type ServiceStatsWindowTraceRefsArgs = {
    filter?: InputMaybe<ServiceTraceRefsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ServiceTraceRefsOrderBySpec>>;
};
/** Columns of ServiceTracePathErrorsRefs. */
export declare enum ServiceTracePathErrorsRefsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    DurationBucket = "DURATION_BUCKET",
    ErrorsCountInPath = "ERRORS_COUNT_IN_PATH",
    ErrorsCountInTrace = "ERRORS_COUNT_IN_TRACE",
    ErrorMessage = "ERROR_MESSAGE",
    Path = "PATH",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    Timestamp = "TIMESTAMP",
    TraceHttpStatusCode = "TRACE_HTTP_STATUS_CODE",
    TraceId = "TRACE_ID",
    TraceSizeBytes = "TRACE_SIZE_BYTES",
    TraceStartsAt = "TRACE_STARTS_AT"
}
export declare type ServiceTracePathErrorsRefsDimensions = {
    __typename?: 'ServiceTracePathErrorsRefsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    durationBucket?: Maybe<Scalars['Int']>;
    errorMessage?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    traceHttpStatusCode?: Maybe<Scalars['Int']>;
    traceId?: Maybe<Scalars['ID']>;
    traceStartsAt?: Maybe<Scalars['Timestamp']>;
};
/** Filter for data in ServiceTracePathErrorsRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceTracePathErrorsRefsFilter = {
    and?: InputMaybe<Array<ServiceTracePathErrorsRefsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
    durationBucket?: InputMaybe<Scalars['Int']>;
    /** Selects rows whose errorMessage dimension equals the given value if not null. To query for the null value, use {in: {errorMessage: [null]}} instead. */
    errorMessage?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<ServiceTracePathErrorsRefsFilterIn>;
    not?: InputMaybe<ServiceTracePathErrorsRefsFilter>;
    or?: InputMaybe<Array<ServiceTracePathErrorsRefsFilter>>;
    /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
    path?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose traceHttpStatusCode dimension equals the given value if not null. To query for the null value, use {in: {traceHttpStatusCode: [null]}} instead. */
    traceHttpStatusCode?: InputMaybe<Scalars['Int']>;
    /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
    traceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in ServiceTracePathErrorsRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceTracePathErrorsRefsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
    durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose errorMessage dimension is in the given list. A null value in the list means a row with null for that dimension. */
    errorMessage?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
    path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose traceHttpStatusCode dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceHttpStatusCode?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type ServiceTracePathErrorsRefsMetrics = {
    __typename?: 'ServiceTracePathErrorsRefsMetrics';
    errorsCountInPath: Scalars['Long'];
    errorsCountInTrace: Scalars['Long'];
    traceSizeBytes: Scalars['Long'];
};
export declare type ServiceTracePathErrorsRefsOrderBySpec = {
    column: ServiceTracePathErrorsRefsColumn;
    direction: Ordering;
};
export declare type ServiceTracePathErrorsRefsRecord = {
    __typename?: 'ServiceTracePathErrorsRefsRecord';
    /** Dimensions of ServiceTracePathErrorsRefs that can be grouped by. */
    groupBy: ServiceTracePathErrorsRefsDimensions;
    /** Metrics of ServiceTracePathErrorsRefs that can be aggregated over. */
    metrics: ServiceTracePathErrorsRefsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of ServiceTraceRefs. */
export declare enum ServiceTraceRefsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    DurationBucket = "DURATION_BUCKET",
    DurationNs = "DURATION_NS",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    Timestamp = "TIMESTAMP",
    TraceId = "TRACE_ID",
    TraceSizeBytes = "TRACE_SIZE_BYTES"
}
export declare type ServiceTraceRefsDimensions = {
    __typename?: 'ServiceTraceRefsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    durationBucket?: Maybe<Scalars['Int']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    querySignature?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    traceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in ServiceTraceRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type ServiceTraceRefsFilter = {
    and?: InputMaybe<Array<ServiceTraceRefsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
    durationBucket?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<ServiceTraceRefsFilterIn>;
    not?: InputMaybe<ServiceTraceRefsFilter>;
    or?: InputMaybe<Array<ServiceTraceRefsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
    traceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in ServiceTraceRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type ServiceTraceRefsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
    durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type ServiceTraceRefsMetrics = {
    __typename?: 'ServiceTraceRefsMetrics';
    durationNs: Scalars['Long'];
    traceSizeBytes: Scalars['Long'];
};
export declare type ServiceTraceRefsOrderBySpec = {
    column: ServiceTraceRefsColumn;
    direction: Ordering;
};
export declare type ServiceTraceRefsRecord = {
    __typename?: 'ServiceTraceRefsRecord';
    /** Dimensions of ServiceTraceRefs that can be grouped by. */
    groupBy: ServiceTraceRefsDimensions;
    /** Metrics of ServiceTraceRefs that can be aggregated over. */
    metrics: ServiceTraceRefsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Slack notification channel */
export declare type SlackChannel = Channel & {
    __typename?: 'SlackChannel';
    id: Scalars['ID'];
    name: Scalars['String'];
    subscriptions: Array<ChannelSubscription>;
    url: Scalars['String'];
};
/** Slack notification channel parameters */
export declare type SlackChannelInput = {
    name?: InputMaybe<Scalars['String']>;
    url: Scalars['String'];
};
export declare type SlackNotificationField = {
    key: Scalars['String'];
    value: Scalars['String'];
};
/** Slack notification message */
export declare type SlackNotificationInput = {
    color?: InputMaybe<Scalars['String']>;
    fallback: Scalars['String'];
    fields?: InputMaybe<Array<SlackNotificationField>>;
    iconUrl?: InputMaybe<Scalars['String']>;
    text?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['Timestamp']>;
    title?: InputMaybe<Scalars['String']>;
    titleLink?: InputMaybe<Scalars['String']>;
    username?: InputMaybe<Scalars['String']>;
};
export declare type SourceLocation = {
    __typename?: 'SourceLocation';
    column: Scalars['Int'];
    line: Scalars['Int'];
};
/** A time window with a specified granularity. */
export declare type StatsWindow = {
    __typename?: 'StatsWindow';
    edgeServerInfos: Array<EdgeServerInfosRecord>;
    errorStats: Array<ErrorStatsRecord>;
    fieldLatencies: Array<FieldLatenciesRecord>;
    fieldUsage: Array<FieldUsageRecord>;
    operationCheckStats: Array<OperationCheckStatsRecord>;
    queryStats: Array<QueryStatsRecord>;
    /** From field rounded down to the nearest resolution. */
    roundedDownFrom: Scalars['Timestamp'];
    /** To field rounded up to the nearest resolution. */
    roundedUpTo: Scalars['Timestamp'];
    tracePathErrorsRefs: Array<TracePathErrorsRefsRecord>;
    traceRefs: Array<TraceRefsRecord>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowEdgeServerInfosArgs = {
    filter?: InputMaybe<EdgeServerInfosFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<EdgeServerInfosOrderBySpec>>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowErrorStatsArgs = {
    filter?: InputMaybe<ErrorStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<ErrorStatsOrderBySpec>>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowFieldLatenciesArgs = {
    filter?: InputMaybe<FieldLatenciesFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<FieldLatenciesOrderBySpec>>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowFieldUsageArgs = {
    filter?: InputMaybe<FieldUsageFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<FieldUsageOrderBySpec>>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowOperationCheckStatsArgs = {
    filter?: InputMaybe<OperationCheckStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<OperationCheckStatsOrderBySpec>>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowQueryStatsArgs = {
    filter?: InputMaybe<QueryStatsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<QueryStatsOrderBySpec>>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowTracePathErrorsRefsArgs = {
    filter?: InputMaybe<TracePathErrorsRefsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<TracePathErrorsRefsOrderBySpec>>;
};
/** A time window with a specified granularity. */
export declare type StatsWindowTraceRefsArgs = {
    filter?: InputMaybe<TraceRefsFilter>;
    limit?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<TraceRefsOrderBySpec>>;
};
export declare type StoreSchemaError = {
    __typename?: 'StoreSchemaError';
    code: StoreSchemaErrorCode;
    message: Scalars['String'];
};
export declare enum StoreSchemaErrorCode {
    SchemaIsNotParsable = "SCHEMA_IS_NOT_PARSABLE",
    SchemaIsNotValid = "SCHEMA_IS_NOT_VALID"
}
export declare type StoreSchemaResponse = {
    __typename?: 'StoreSchemaResponse';
    sha256: Scalars['SHA256'];
};
export declare type StoreSchemaResponseOrError = StoreSchemaError | StoreSchemaResponse;
export declare type StoredApprovedChange = {
    __typename?: 'StoredApprovedChange';
    argNode?: Maybe<NamedIntrospectionArgNoDescription>;
    childNode?: Maybe<NamedIntrospectionValueNoDescription>;
    code: ChangeCode;
    parentNode?: Maybe<NamedIntrospectionTypeNoDescription>;
};
export declare type StringToString = {
    __typename?: 'StringToString';
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type StringToStringInput = {
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type Subgraph = {
    __typename?: 'Subgraph';
    hash: Scalars['String'];
    name: Scalars['String'];
    routingURL: Scalars['String'];
};
export declare type SubgraphChange = {
    __typename?: 'SubgraphChange';
    name: Scalars['ID'];
    type: SubgraphChangeType;
};
export declare enum SubgraphChangeType {
    Addition = "ADDITION",
    Deletion = "DELETION",
    Modification = "MODIFICATION"
}
export declare type SubgraphConfig = {
    __typename?: 'SubgraphConfig';
    id: Scalars['ID'];
    name: Scalars['String'];
    schemaHash: Scalars['String'];
    sdl: Scalars['String'];
    url: Scalars['String'];
};
export declare type SubscriptionOptions = {
    __typename?: 'SubscriptionOptions';
    /** Enables notifications for schema updates */
    schemaUpdates: Scalars['Boolean'];
};
export declare type SubscriptionOptionsInput = {
    /** Enables notifications for schema updates */
    schemaUpdates: Scalars['Boolean'];
};
export declare enum SubscriptionState {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Expired = "EXPIRED",
    Future = "FUTURE",
    PastDue = "PAST_DUE",
    Paused = "PAUSED",
    Pending = "PENDING",
    Unknown = "UNKNOWN"
}
export declare enum SubscriptionStateV2 {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Expired = "EXPIRED",
    Future = "FUTURE",
    PastDue = "PAST_DUE",
    Paused = "PAUSED",
    Pending = "PENDING",
    Unknown = "UNKNOWN"
}
export declare type TemporaryUrl = {
    __typename?: 'TemporaryURL';
    url: Scalars['String'];
};
export declare enum ThemeName {
    Dark = "DARK",
    Light = "LIGHT"
}
export declare enum TicketPriority {
    P0 = "P0",
    P1 = "P1",
    P2 = "P2",
    P3 = "P3"
}
export declare enum TicketStatus {
    Closed = "CLOSED",
    Hold = "HOLD",
    New = "NEW",
    Open = "OPEN",
    Pending = "PENDING",
    Solved = "SOLVED"
}
export declare type TimezoneOffset = {
    __typename?: 'TimezoneOffset';
    minutesOffsetFromUTC: Scalars['Int'];
    zoneID: Scalars['String'];
};
export declare type TotalChangeSummaryCounts = {
    __typename?: 'TotalChangeSummaryCounts';
    /**
     * Number of changes that are additions. This includes adding types, adding fields to object, input
     * object, and interface types, adding values to enums, adding members to interfaces and unions, and
     * adding arguments.
     */
    additions: Scalars['Int'];
    /** Number of changes that are new usages of the @deprecated directive. */
    deprecations: Scalars['Int'];
    /**
     * Number of changes that are edits. This includes types changing kind, fields and arguments
     * changing type, arguments changing default value, and any description changes. This also includes
     * edits to @deprecated reason strings.
     */
    edits: Scalars['Int'];
    /**
     * Number of changes that are removals. This includes removing types, removing fields from object,
     * input object, and interface types, removing values from enums, removing members from interfaces
     * and unions, and removing arguments. This also includes removing @deprecated usages.
     */
    removals: Scalars['Int'];
};
export declare type Trace = {
    __typename?: 'Trace';
    cacheMaxAgeMs?: Maybe<Scalars['Float']>;
    cacheScope?: Maybe<CacheScope>;
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    durationMs: Scalars['Float'];
    endTime: Scalars['Timestamp'];
    http?: Maybe<TraceHttp>;
    id: Scalars['ID'];
    operationName?: Maybe<Scalars['String']>;
    protobuf: Protobuf;
    root: TraceNode;
    signature: Scalars['String'];
    startTime: Scalars['Timestamp'];
    variablesJSON: Array<StringToString>;
};
export declare type TraceError = {
    __typename?: 'TraceError';
    json: Scalars['String'];
    locations: Array<TraceSourceLocation>;
    message: Scalars['String'];
    timestamp?: Maybe<Scalars['Timestamp']>;
};
export declare type TraceHttp = {
    __typename?: 'TraceHTTP';
    host?: Maybe<Scalars['String']>;
    method: HttpMethod;
    path?: Maybe<Scalars['String']>;
    protocol?: Maybe<Scalars['String']>;
    requestHeaders: Array<StringToString>;
    responseHeaders: Array<StringToString>;
    secure: Scalars['Boolean'];
    statusCode: Scalars['Int'];
};
export declare type TraceNode = {
    __typename?: 'TraceNode';
    cacheMaxAgeMs?: Maybe<Scalars['Float']>;
    cacheScope?: Maybe<CacheScope>;
    children: Array<TraceNode>;
    childrenIds: Array<Scalars['ID']>;
    descendants: Array<TraceNode>;
    descendantsIds: Array<Scalars['ID']>;
    endTime: Scalars['Timestamp'];
    errors: Array<TraceError>;
    id: Scalars['ID'];
    key?: Maybe<Scalars['StringOrInt']>;
    originalFieldName?: Maybe<Scalars['String']>;
    parent: Scalars['ID'];
    parentId?: Maybe<Scalars['ID']>;
    path: Array<Scalars['String']>;
    startTime: Scalars['Timestamp'];
    type?: Maybe<Scalars['String']>;
};
/** Columns of TracePathErrorsRefs. */
export declare enum TracePathErrorsRefsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    DurationBucket = "DURATION_BUCKET",
    ErrorsCountInPath = "ERRORS_COUNT_IN_PATH",
    ErrorsCountInTrace = "ERRORS_COUNT_IN_TRACE",
    ErrorMessage = "ERROR_MESSAGE",
    Path = "PATH",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    TraceHttpStatusCode = "TRACE_HTTP_STATUS_CODE",
    TraceId = "TRACE_ID",
    TraceSizeBytes = "TRACE_SIZE_BYTES",
    TraceStartsAt = "TRACE_STARTS_AT"
}
export declare type TracePathErrorsRefsDimensions = {
    __typename?: 'TracePathErrorsRefsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    durationBucket?: Maybe<Scalars['Int']>;
    errorMessage?: Maybe<Scalars['String']>;
    /** If metrics were collected from a federated service, this field will be prefixed with `service:<SERVICE_NAME>.` */
    path?: Maybe<Scalars['String']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
    traceHttpStatusCode?: Maybe<Scalars['Int']>;
    traceId?: Maybe<Scalars['ID']>;
    traceStartsAt?: Maybe<Scalars['Timestamp']>;
};
/** Filter for data in TracePathErrorsRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type TracePathErrorsRefsFilter = {
    and?: InputMaybe<Array<TracePathErrorsRefsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
    durationBucket?: InputMaybe<Scalars['Int']>;
    /** Selects rows whose errorMessage dimension equals the given value if not null. To query for the null value, use {in: {errorMessage: [null]}} instead. */
    errorMessage?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<TracePathErrorsRefsFilterIn>;
    not?: InputMaybe<TracePathErrorsRefsFilter>;
    or?: InputMaybe<Array<TracePathErrorsRefsFilter>>;
    /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
    path?: InputMaybe<Scalars['String']>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose traceHttpStatusCode dimension equals the given value if not null. To query for the null value, use {in: {traceHttpStatusCode: [null]}} instead. */
    traceHttpStatusCode?: InputMaybe<Scalars['Int']>;
    /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
    traceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in TracePathErrorsRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type TracePathErrorsRefsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
    durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose errorMessage dimension is in the given list. A null value in the list means a row with null for that dimension. */
    errorMessage?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
    path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose traceHttpStatusCode dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceHttpStatusCode?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type TracePathErrorsRefsMetrics = {
    __typename?: 'TracePathErrorsRefsMetrics';
    errorsCountInPath: Scalars['Long'];
    errorsCountInTrace: Scalars['Long'];
    traceSizeBytes: Scalars['Long'];
};
export declare type TracePathErrorsRefsOrderBySpec = {
    column: TracePathErrorsRefsColumn;
    direction: Ordering;
};
export declare type TracePathErrorsRefsRecord = {
    __typename?: 'TracePathErrorsRefsRecord';
    /** Dimensions of TracePathErrorsRefs that can be grouped by. */
    groupBy: TracePathErrorsRefsDimensions;
    /** Metrics of TracePathErrorsRefs that can be aggregated over. */
    metrics: TracePathErrorsRefsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
/** Columns of TraceRefs. */
export declare enum TraceRefsColumn {
    ClientName = "CLIENT_NAME",
    ClientVersion = "CLIENT_VERSION",
    DurationBucket = "DURATION_BUCKET",
    DurationNs = "DURATION_NS",
    QueryId = "QUERY_ID",
    QueryName = "QUERY_NAME",
    SchemaHash = "SCHEMA_HASH",
    SchemaTag = "SCHEMA_TAG",
    ServiceId = "SERVICE_ID",
    Timestamp = "TIMESTAMP",
    TraceId = "TRACE_ID",
    TraceSizeBytes = "TRACE_SIZE_BYTES"
}
export declare type TraceRefsDimensions = {
    __typename?: 'TraceRefsDimensions';
    clientName?: Maybe<Scalars['String']>;
    clientVersion?: Maybe<Scalars['String']>;
    durationBucket?: Maybe<Scalars['Int']>;
    queryId?: Maybe<Scalars['ID']>;
    queryName?: Maybe<Scalars['String']>;
    querySignature?: Maybe<Scalars['String']>;
    schemaHash?: Maybe<Scalars['String']>;
    schemaTag?: Maybe<Scalars['String']>;
    serviceId?: Maybe<Scalars['ID']>;
    traceId?: Maybe<Scalars['ID']>;
};
/** Filter for data in TraceRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export declare type TraceRefsFilter = {
    and?: InputMaybe<Array<TraceRefsFilter>>;
    /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
    clientName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
    clientVersion?: InputMaybe<Scalars['String']>;
    /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
    durationBucket?: InputMaybe<Scalars['Int']>;
    in?: InputMaybe<TraceRefsFilterIn>;
    not?: InputMaybe<TraceRefsFilter>;
    or?: InputMaybe<Array<TraceRefsFilter>>;
    /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
    queryId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
    queryName?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
    schemaHash?: InputMaybe<Scalars['String']>;
    /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
    schemaTag?: InputMaybe<Scalars['String']>;
    /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
    serviceId?: InputMaybe<Scalars['ID']>;
    /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
    traceId?: InputMaybe<Scalars['ID']>;
};
/** Filter for data in TraceRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export declare type TraceRefsFilterIn = {
    /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
    clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
    durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
    queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
    schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
    traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type TraceRefsMetrics = {
    __typename?: 'TraceRefsMetrics';
    durationNs: Scalars['Long'];
    traceSizeBytes: Scalars['Long'];
};
export declare type TraceRefsOrderBySpec = {
    column: TraceRefsColumn;
    direction: Ordering;
};
export declare type TraceRefsRecord = {
    __typename?: 'TraceRefsRecord';
    /** Dimensions of TraceRefs that can be grouped by. */
    groupBy: TraceRefsDimensions;
    /** Metrics of TraceRefs that can be aggregated over. */
    metrics: TraceRefsMetrics;
    /** Starting segment timestamp. */
    timestamp: Scalars['Timestamp'];
};
export declare type TraceSourceLocation = {
    __typename?: 'TraceSourceLocation';
    column: Scalars['Int'];
    line: Scalars['Int'];
};
export declare type TypeChangeSummaryCounts = {
    __typename?: 'TypeChangeSummaryCounts';
    /** Number of changes that are additions of types. */
    additions: Scalars['Int'];
    /**
     * Number of changes that are edits. This includes types changing kind and any type description
     * changes, but also includes adding/removing values from enums, adding/removing members from
     * interfaces and unions, and any enum value deprecation and description changes.
     */
    edits: Scalars['Int'];
    /** Number of changes that are removals of types. */
    removals: Scalars['Int'];
};
/**
 * the TypeFilterConfig is used to isolate
 * types, and subsequent fields, through
 * various configuration settings.
 *
 * It defaults to filter towards user defined
 * types only
 */
export declare type TypeFilterConfig = {
    /** include abstract types (interfaces and unions) */
    includeAbstractTypes?: InputMaybe<Scalars['Boolean']>;
    /** include built in scalars (i.e. Boolean, Int, etc) */
    includeBuiltInTypes?: InputMaybe<Scalars['Boolean']>;
    /** include reserved introspection types (i.e. __Type) */
    includeIntrospectionTypes?: InputMaybe<Scalars['Boolean']>;
};
export declare type Uri = {
    __typename?: 'URI';
    /** A GCS URI */
    gcs: Scalars['String'];
};
export declare type UnignoreOperationsInChecksResult = {
    __typename?: 'UnignoreOperationsInChecksResult';
    graph: Service;
};
export declare type UpdateOperationCollectionEntryResult = OperationCollectionEntry | PermissionError | ValidationError;
export declare type UpdateOperationCollectionResult = OperationCollection | PermissionError | ValidationError;
export declare type UploadSchemaMutationResponse = {
    __typename?: 'UploadSchemaMutationResponse';
    code: Scalars['String'];
    message: Scalars['String'];
    success: Scalars['Boolean'];
    tag?: Maybe<SchemaTag>;
};
export declare type User = Identity & {
    __typename?: 'User';
    acceptedPrivacyPolicyAt?: Maybe<Scalars['Timestamp']>;
    /** @deprecated Replaced with User.memberships.account */
    accounts: Array<Account>;
    apiKeys: Array<UserApiKey>;
    asActor: Actor;
    /**
     * Get an URL to which an avatar image can be uploaded. Client uploads by sending a PUT request
     * with the image data to MediaUploadInfo.url. Client SHOULD set the "Content-Type" header to the
     * browser-inferred MIME type, and SHOULD set the "x-apollo-content-filename" header to the
     * filename, if such information is available. Client MUST set the "x-apollo-csrf-token" header to
     * MediaUploadInfo.csrfToken.
     */
    avatarUpload?: Maybe<AvatarUploadResult>;
    /**
     * Get an image URL for the user's avatar. Note that CORS is not enabled for these URLs. The size
     * argument is used for bandwidth reduction, and should be the size of the image as displayed in the
     * application. Apollo's media server will downscale larger images to at least the requested size,
     * but this will not happen for third-party media servers.
     */
    avatarUrl?: Maybe<Scalars['String']>;
    betaFeaturesOn: Scalars['Boolean'];
    canUpdateAvatar: Scalars['Boolean'];
    canUpdateEmail: Scalars['Boolean'];
    canUpdateFullName: Scalars['Boolean'];
    createdAt: Scalars['Timestamp'];
    email?: Maybe<Scalars['String']>;
    emailModifiedAt?: Maybe<Scalars['Timestamp']>;
    emailVerified: Scalars['Boolean'];
    experimentalFeatures: UserExperimentalFeatures;
    featureIntros?: Maybe<FeatureIntros>;
    fullName: Scalars['String'];
    /** The user's GitHub username, if they log in via GitHub. May be null even for GitHub users in some edge cases. */
    githubUsername?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    /**
     * This role is reserved exclusively for internal MDG employees, and it controls what access they may have to other
     * organizations. Only admins are allowed to see this field.
     */
    internalAdminRole?: Maybe<InternalMdgAdminRole>;
    /** Last time any API token from this user was used against AGM services */
    lastAuthenticatedAt?: Maybe<Scalars['Timestamp']>;
    logoutAfterIdleMs?: Maybe<Scalars['Int']>;
    memberships: Array<UserMembership>;
    name: Scalars['String'];
    odysseyCertifications?: Maybe<Array<OdysseyCertification>>;
    odysseyCourses?: Maybe<Array<OdysseyCourse>>;
    odysseyHasEarlyAccess: Scalars['Boolean'];
    odysseyHasRequestedEarlyAccess: Scalars['Boolean'];
    odysseyTasks?: Maybe<Array<OdysseyTask>>;
    sandboxOperationCollections: Array<OperationCollection>;
    synchronized: Scalars['Boolean'];
    /** List of Zendesk tickets this user has submitted */
    tickets?: Maybe<Array<ZendeskTicket>>;
    type: UserType;
};
export declare type UserApiKeysArgs = {
    includeCookies?: InputMaybe<Scalars['Boolean']>;
};
export declare type UserAvatarUrlArgs = {
    size?: Scalars['Int'];
};
export declare type UserApiKey = ApiKey & {
    __typename?: 'UserApiKey';
    id: Scalars['ID'];
    keyName?: Maybe<Scalars['String']>;
    token: Scalars['String'];
};
export declare type UserExperimentalFeatures = {
    __typename?: 'UserExperimentalFeatures';
    exampleFeature: Scalars['Boolean'];
};
export declare type UserMembership = {
    __typename?: 'UserMembership';
    account: Account;
    createdAt: Scalars['Timestamp'];
    permission: UserPermission;
    user: User;
};
export declare type UserMutation = {
    __typename?: 'UserMutation';
    acceptPrivacyPolicy?: Maybe<Scalars['Void']>;
    /** Change the user's password */
    changePassword?: Maybe<Scalars['Void']>;
    createOdysseyCertification?: Maybe<OdysseyCertification>;
    createOdysseyCourses?: Maybe<Array<OdysseyCourse>>;
    createOdysseyTasks?: Maybe<Array<OdysseyTask>>;
    /** Delete the user's avatar. Requires User.canUpdateAvatar to be true. */
    deleteAvatar?: Maybe<AvatarDeleteError>;
    /** Hard deletes the associated user. Throws an error otherwise with reason included. */
    hardDelete?: Maybe<Scalars['Void']>;
    /** Create a new API key for this user. Must take in a name for this key. */
    newKey: UserApiKey;
    /**
     * Create a new API key for this user if there are no current API keys.
     * If an API key already exists, this will return one at random and not create a new one.
     */
    provisionKey?: Maybe<ApiKeyProvision>;
    /** Refresh information about the user from its upstream service (eg list of organizations from GitHub) */
    refresh?: Maybe<User>;
    /** Removes the given key from this user. Can be used to remove either a web cookie or a user API key. */
    removeKey?: Maybe<Scalars['Void']>;
    /** Renames the given key to the new key name. */
    renameKey?: Maybe<UserApiKey>;
    resendVerificationEmail?: Maybe<Scalars['Void']>;
    setOdysseyCourse?: Maybe<OdysseyCourse>;
    setOdysseyTask?: Maybe<OdysseyTask>;
    /** Submit a zendesk ticket for this user */
    submitZendeskTicket?: Maybe<ZendeskTicket>;
    /** Update information about a user; all arguments are optional */
    update?: Maybe<User>;
    /** Updates this users' preference concerning opting into beta features. */
    updateBetaFeaturesOn?: Maybe<User>;
    /** Update the status of a feature for this. For example, if you want to hide an introductory popup. */
    updateFeatureIntros?: Maybe<User>;
    /**
     * Update user to have the given internal mdg admin role.
     * It is necessary to be an MDG_INTERNAL_SUPER_ADMIN to perform update.
     * Additionally, upserting a null value explicitly revokes this user's
     * admin status.
     */
    updateRole?: Maybe<User>;
    user: User;
    verifyEmail?: Maybe<User>;
};
export declare type UserMutationChangePasswordArgs = {
    newPassword: Scalars['String'];
    previousPassword: Scalars['String'];
};
export declare type UserMutationCreateOdysseyCertificationArgs = {
    certificationId: Scalars['String'];
};
export declare type UserMutationCreateOdysseyCoursesArgs = {
    courses: Array<OdysseyCourseInput>;
};
export declare type UserMutationCreateOdysseyTasksArgs = {
    tasks: Array<OdysseyTaskInput>;
};
export declare type UserMutationNewKeyArgs = {
    keyName: Scalars['String'];
};
export declare type UserMutationProvisionKeyArgs = {
    keyName?: Scalars['String'];
};
export declare type UserMutationRemoveKeyArgs = {
    id: Scalars['ID'];
};
export declare type UserMutationRenameKeyArgs = {
    id: Scalars['ID'];
    newKeyName?: InputMaybe<Scalars['String']>;
};
export declare type UserMutationSetOdysseyCourseArgs = {
    course: OdysseyCourseInput;
};
export declare type UserMutationSetOdysseyTaskArgs = {
    task: OdysseyTaskInput;
};
export declare type UserMutationSubmitZendeskTicketArgs = {
    collaborators?: InputMaybe<Array<Scalars['String']>>;
    email: Scalars['String'];
    ticket: ZendeskTicketInput;
};
export declare type UserMutationUpdateArgs = {
    email?: InputMaybe<Scalars['String']>;
    fullName?: InputMaybe<Scalars['String']>;
    referrer?: InputMaybe<Scalars['String']>;
    trackingGoogleClientId?: InputMaybe<Scalars['String']>;
    trackingMarketoClientId?: InputMaybe<Scalars['String']>;
    userSegment?: InputMaybe<UserSegment>;
    utmCampaign?: InputMaybe<Scalars['String']>;
    utmMedium?: InputMaybe<Scalars['String']>;
    utmSource?: InputMaybe<Scalars['String']>;
};
export declare type UserMutationUpdateBetaFeaturesOnArgs = {
    betaFeaturesOn: Scalars['Boolean'];
};
export declare type UserMutationUpdateFeatureIntrosArgs = {
    newFeatureIntros?: InputMaybe<FeatureIntrosInput>;
};
export declare type UserMutationUpdateRoleArgs = {
    newRole?: InputMaybe<InternalMdgAdminRole>;
};
export declare type UserMutationVerifyEmailArgs = {
    token: Scalars['String'];
};
export declare enum UserPermission {
    BillingManager = "BILLING_MANAGER",
    Consumer = "CONSUMER",
    Contributor = "CONTRIBUTOR",
    GraphAdmin = "GRAPH_ADMIN",
    LegacyGraphKey = "LEGACY_GRAPH_KEY",
    Observer = "OBSERVER",
    OrgAdmin = "ORG_ADMIN"
}
export declare enum UserSegment {
    JoinMyTeam = "JOIN_MY_TEAM",
    LocalDevelopment = "LOCAL_DEVELOPMENT",
    NotSpecified = "NOT_SPECIFIED",
    ProductionGraphs = "PRODUCTION_GRAPHS",
    Sandbox = "SANDBOX",
    TryTeam = "TRY_TEAM"
}
export declare type UserSettings = {
    __typename?: 'UserSettings';
    appNavCollapsed: Scalars['Boolean'];
    autoManageVariables: Scalars['Boolean'];
    id: Scalars['String'];
    mockingResponses: Scalars['Boolean'];
    preflightScriptEnabled: Scalars['Boolean'];
    responseHints: ResponseHints;
    tableMode: Scalars['Boolean'];
    themeName: ThemeName;
};
/** Explorer user settings input */
export declare type UserSettingsInput = {
    appNavCollapsed?: InputMaybe<Scalars['Boolean']>;
    autoManageVariables?: InputMaybe<Scalars['Boolean']>;
    mockingResponses?: InputMaybe<Scalars['Boolean']>;
    preflightScriptEnabled?: InputMaybe<Scalars['Boolean']>;
    responseHints?: InputMaybe<ResponseHints>;
    tableMode?: InputMaybe<Scalars['Boolean']>;
    themeName?: InputMaybe<ThemeName>;
};
export declare enum UserType {
    Apollo = "APOLLO",
    Github = "GITHUB",
    Sso = "SSO"
}
export declare type ValidateOperationsResult = {
    __typename?: 'ValidateOperationsResult';
    validationResults: Array<ValidationResult>;
};
export declare type ValidationError = Error & {
    __typename?: 'ValidationError';
    message: Scalars['String'];
};
export declare enum ValidationErrorCode {
    DeprecatedField = "DEPRECATED_FIELD",
    InvalidOperation = "INVALID_OPERATION",
    NonParseableDocument = "NON_PARSEABLE_DOCUMENT"
}
export declare enum ValidationErrorType {
    Failure = "FAILURE",
    Invalid = "INVALID",
    Warning = "WARNING"
}
/**
 * Represents a single validation error, with information relating to the error
 * and its respective operation
 */
export declare type ValidationResult = {
    __typename?: 'ValidationResult';
    /** The validation result's error code */
    code: ValidationErrorCode;
    /** Description of the validation error */
    description: Scalars['String'];
    /** The operation related to this validation result */
    operation: OperationDocument;
    /** The type of validation error thrown - warning, failure, or invalid. */
    type: ValidationErrorType;
};
/** Webhook notification channel */
export declare type WebhookChannel = Channel & {
    __typename?: 'WebhookChannel';
    id: Scalars['ID'];
    name: Scalars['String'];
    secretToken?: Maybe<Scalars['String']>;
    subscriptions: Array<ChannelSubscription>;
    url: Scalars['String'];
};
/** PagerDuty notification channel parameters */
export declare type WebhookChannelInput = {
    name?: InputMaybe<Scalars['String']>;
    secretToken?: InputMaybe<Scalars['String']>;
    url: Scalars['String'];
};
export declare type ZendeskTicket = {
    __typename?: 'ZendeskTicket';
    createdAt: Scalars['Timestamp'];
    description: Scalars['String'];
    graph?: Maybe<Service>;
    id: Scalars['Int'];
    organization?: Maybe<Account>;
    priority: TicketPriority;
    status?: Maybe<TicketStatus>;
    subject: Scalars['String'];
    user?: Maybe<User>;
};
/** Zendesk ticket input */
export declare type ZendeskTicketInput = {
    description: Scalars['String'];
    graphId?: InputMaybe<Scalars['String']>;
    organizationId?: InputMaybe<Scalars['String']>;
    priority: TicketPriority;
    subject: Scalars['String'];
};
export declare type LatestApprovedLaunchQueryVariables = Exact<{
    serviceId: Scalars['ID'];
    variant: Scalars['String'];
}>;
export declare type LatestApprovedLaunchQuery = {
    __typename?: 'Query';
    service?: {
        __typename?: 'Service';
        variant?: {
            __typename?: 'GraphVariant';
            latestApprovedLaunch?: {
                __typename?: 'Launch';
                build?: {
                    __typename?: 'Build';
                    result?: {
                        __typename: 'BuildFailure';
                    } | {
                        __typename: 'BuildSuccess';
                        coreSchema: {
                            __typename?: 'CoreSchema';
                            apiDocument: any;
                            coreDocument: any;
                        };
                    } | null;
                } | null;
            } | null;
        } | null;
    } | null;
};
export declare type SubgraphSdlsQueryVariables = Exact<{
    serviceId: Scalars['ID'];
    variant: Scalars['String'];
}>;
export declare type SubgraphSdlsQuery = {
    __typename?: 'Query';
    service?: {
        __typename?: 'Service';
        implementingServices?: {
            __typename: 'FederatedImplementingServices';
            services: Array<{
                __typename?: 'FederatedImplementingService';
                name: string;
                activePartialSchema: {
                    __typename?: 'PartialSchema';
                    sdl: string;
                };
            }>;
        } | {
            __typename: 'NonFederatedImplementingService';
        } | null;
    } | null;
};
export declare const LatestApprovedLaunchDocument: import("graphql/language/ast").DocumentNode;
export declare const SubgraphSdlsDocument: import("graphql/language/ast").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    LatestApprovedLaunch(variables: LatestApprovedLaunchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LatestApprovedLaunchQuery>;
    SubgraphSdls(variables: SubgraphSdlsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubgraphSdlsQuery>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
