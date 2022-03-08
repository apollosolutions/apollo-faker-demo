"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.PromoteSchemaErrorCode = exports.OrganizationSsoProvider = exports.Ordering = exports.OperationCheckStatsColumn = exports.LinkInfoType = exports.LaunchStatus = exports.InvoiceStateV2 = exports.InvoiceState = exports.IntrospectionTypeKind = exports.IntrospectionDirectiveLocation = exports.InternalMdgAdminRole = exports.HttpMethod = exports.GitRemoteHost = exports.FieldUsageColumn = exports.FieldLatenciesColumn = exports.EventEnum = exports.ErrorStatsColumn = exports.EmailCategory = exports.EdgeServerInfosColumn = exports.DeletionTargetType = exports.DatadogApiRegion = exports.ContractVariantFailedStep = exports.ComparisonOperator = exports.CheckWorkflowTaskStatus = exports.CheckWorkflowStatus = exports.CheckFilterInputStatusOption = exports.ChangeType = exports.ChangeSeverity = exports.ChangeCode = exports.ChangeCategory = exports.CacheScope = exports.BillingPlanTierV2 = exports.BillingPlanTier = exports.BillingPlanKindV2 = exports.BillingPlanKind = exports.BillingPeriod = exports.BillingModel = exports.AvatarUploadErrorCode = exports.AvatarDeleteErrorCode = exports.AuditStatus = exports.ActorType = exports.AccountTraceRefsColumn = exports.AccountTracePathErrorsRefsColumn = exports.AccountState = exports.AccountQueryStatsColumn = exports.AccountOperationCheckStatsColumn = exports.AccountFieldUsageColumn = exports.AccountFieldLatenciesColumn = exports.AccountErrorStatsColumn = exports.AccountEdgeServerInfosColumn = void 0;
exports.getSdk = exports.LatestApprovedLaunchDocument = exports.ValidationErrorType = exports.ValidationErrorCode = exports.UserType = exports.UserSegment = exports.UserPermission = exports.TraceRefsColumn = exports.TracePathErrorsRefsColumn = exports.TicketStatus = exports.TicketPriority = exports.ThemeName = exports.SubscriptionStateV2 = exports.SubscriptionState = exports.SubgraphChangeType = exports.StoreSchemaErrorCode = exports.ServiceTraceRefsColumn = exports.ServiceTracePathErrorsRefsColumn = exports.ServiceQueryStatsColumn = exports.ServiceOperationCheckStatsColumn = exports.ServiceFieldUsageColumn = exports.ServiceFieldLatenciesColumn = exports.ServiceErrorStatsColumn = exports.ServiceEdgeServerInfosColumn = exports.ResponseHints = exports.Resolution = exports.ReportSchemaErrorCode = exports.QueryTriggerWindow = exports.QueryTriggerScope = exports.QueryTriggerMetric = exports.QueryStatsColumn = exports.PromoteSchemaResponseCode = void 0;
var graphql_tag_1 = require("graphql-tag");
/** Columns of AccountEdgeServerInfos. */
var AccountEdgeServerInfosColumn;
(function (AccountEdgeServerInfosColumn) {
    AccountEdgeServerInfosColumn["BootId"] = "BOOT_ID";
    AccountEdgeServerInfosColumn["ExecutableSchemaId"] = "EXECUTABLE_SCHEMA_ID";
    AccountEdgeServerInfosColumn["LibraryVersion"] = "LIBRARY_VERSION";
    AccountEdgeServerInfosColumn["Platform"] = "PLATFORM";
    AccountEdgeServerInfosColumn["RuntimeVersion"] = "RUNTIME_VERSION";
    AccountEdgeServerInfosColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountEdgeServerInfosColumn["ServerId"] = "SERVER_ID";
    AccountEdgeServerInfosColumn["ServiceId"] = "SERVICE_ID";
    AccountEdgeServerInfosColumn["Timestamp"] = "TIMESTAMP";
    AccountEdgeServerInfosColumn["UserVersion"] = "USER_VERSION";
})(AccountEdgeServerInfosColumn = exports.AccountEdgeServerInfosColumn || (exports.AccountEdgeServerInfosColumn = {}));
/** Columns of AccountErrorStats. */
var AccountErrorStatsColumn;
(function (AccountErrorStatsColumn) {
    AccountErrorStatsColumn["ClientName"] = "CLIENT_NAME";
    AccountErrorStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountErrorStatsColumn["ErrorsCount"] = "ERRORS_COUNT";
    AccountErrorStatsColumn["Path"] = "PATH";
    AccountErrorStatsColumn["QueryId"] = "QUERY_ID";
    AccountErrorStatsColumn["QueryName"] = "QUERY_NAME";
    AccountErrorStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    AccountErrorStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountErrorStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountErrorStatsColumn["ServiceId"] = "SERVICE_ID";
    AccountErrorStatsColumn["Timestamp"] = "TIMESTAMP";
})(AccountErrorStatsColumn = exports.AccountErrorStatsColumn || (exports.AccountErrorStatsColumn = {}));
/** Columns of AccountFieldLatencies. */
var AccountFieldLatenciesColumn;
(function (AccountFieldLatenciesColumn) {
    AccountFieldLatenciesColumn["FieldHistogram"] = "FIELD_HISTOGRAM";
    AccountFieldLatenciesColumn["FieldName"] = "FIELD_NAME";
    AccountFieldLatenciesColumn["ParentType"] = "PARENT_TYPE";
    AccountFieldLatenciesColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountFieldLatenciesColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountFieldLatenciesColumn["ServiceId"] = "SERVICE_ID";
    AccountFieldLatenciesColumn["Timestamp"] = "TIMESTAMP";
})(AccountFieldLatenciesColumn = exports.AccountFieldLatenciesColumn || (exports.AccountFieldLatenciesColumn = {}));
/** Columns of AccountFieldUsage. */
var AccountFieldUsageColumn;
(function (AccountFieldUsageColumn) {
    AccountFieldUsageColumn["ClientName"] = "CLIENT_NAME";
    AccountFieldUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountFieldUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    AccountFieldUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    AccountFieldUsageColumn["FieldName"] = "FIELD_NAME";
    AccountFieldUsageColumn["ParentType"] = "PARENT_TYPE";
    AccountFieldUsageColumn["QueryId"] = "QUERY_ID";
    AccountFieldUsageColumn["QueryName"] = "QUERY_NAME";
    AccountFieldUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    AccountFieldUsageColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountFieldUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountFieldUsageColumn["ServiceId"] = "SERVICE_ID";
    AccountFieldUsageColumn["Timestamp"] = "TIMESTAMP";
})(AccountFieldUsageColumn = exports.AccountFieldUsageColumn || (exports.AccountFieldUsageColumn = {}));
/** Columns of AccountOperationCheckStats. */
var AccountOperationCheckStatsColumn;
(function (AccountOperationCheckStatsColumn) {
    AccountOperationCheckStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    AccountOperationCheckStatsColumn["ClientName"] = "CLIENT_NAME";
    AccountOperationCheckStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountOperationCheckStatsColumn["QueryId"] = "QUERY_ID";
    AccountOperationCheckStatsColumn["QueryName"] = "QUERY_NAME";
    AccountOperationCheckStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountOperationCheckStatsColumn["ServiceId"] = "SERVICE_ID";
    AccountOperationCheckStatsColumn["Timestamp"] = "TIMESTAMP";
    AccountOperationCheckStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(AccountOperationCheckStatsColumn = exports.AccountOperationCheckStatsColumn || (exports.AccountOperationCheckStatsColumn = {}));
/** Columns of AccountQueryStats. */
var AccountQueryStatsColumn;
(function (AccountQueryStatsColumn) {
    AccountQueryStatsColumn["CachedHistogram"] = "CACHED_HISTOGRAM";
    AccountQueryStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    AccountQueryStatsColumn["CacheTtlHistogram"] = "CACHE_TTL_HISTOGRAM";
    AccountQueryStatsColumn["ClientName"] = "CLIENT_NAME";
    AccountQueryStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountQueryStatsColumn["ForbiddenOperationCount"] = "FORBIDDEN_OPERATION_COUNT";
    AccountQueryStatsColumn["FromEngineproxy"] = "FROM_ENGINEPROXY";
    AccountQueryStatsColumn["QueryId"] = "QUERY_ID";
    AccountQueryStatsColumn["QueryName"] = "QUERY_NAME";
    AccountQueryStatsColumn["RegisteredOperationCount"] = "REGISTERED_OPERATION_COUNT";
    AccountQueryStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    AccountQueryStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountQueryStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountQueryStatsColumn["ServiceId"] = "SERVICE_ID";
    AccountQueryStatsColumn["Timestamp"] = "TIMESTAMP";
    AccountQueryStatsColumn["UncachedHistogram"] = "UNCACHED_HISTOGRAM";
    AccountQueryStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(AccountQueryStatsColumn = exports.AccountQueryStatsColumn || (exports.AccountQueryStatsColumn = {}));
var AccountState;
(function (AccountState) {
    AccountState["Active"] = "ACTIVE";
    AccountState["Closed"] = "CLOSED";
    AccountState["Unknown"] = "UNKNOWN";
    AccountState["Unprovisioned"] = "UNPROVISIONED";
})(AccountState = exports.AccountState || (exports.AccountState = {}));
/** Columns of AccountTracePathErrorsRefs. */
var AccountTracePathErrorsRefsColumn;
(function (AccountTracePathErrorsRefsColumn) {
    AccountTracePathErrorsRefsColumn["ClientName"] = "CLIENT_NAME";
    AccountTracePathErrorsRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountTracePathErrorsRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    AccountTracePathErrorsRefsColumn["ErrorsCountInPath"] = "ERRORS_COUNT_IN_PATH";
    AccountTracePathErrorsRefsColumn["ErrorsCountInTrace"] = "ERRORS_COUNT_IN_TRACE";
    AccountTracePathErrorsRefsColumn["ErrorMessage"] = "ERROR_MESSAGE";
    AccountTracePathErrorsRefsColumn["Path"] = "PATH";
    AccountTracePathErrorsRefsColumn["QueryId"] = "QUERY_ID";
    AccountTracePathErrorsRefsColumn["QueryName"] = "QUERY_NAME";
    AccountTracePathErrorsRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountTracePathErrorsRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountTracePathErrorsRefsColumn["ServiceId"] = "SERVICE_ID";
    AccountTracePathErrorsRefsColumn["Timestamp"] = "TIMESTAMP";
    AccountTracePathErrorsRefsColumn["TraceHttpStatusCode"] = "TRACE_HTTP_STATUS_CODE";
    AccountTracePathErrorsRefsColumn["TraceId"] = "TRACE_ID";
    AccountTracePathErrorsRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
    AccountTracePathErrorsRefsColumn["TraceStartsAt"] = "TRACE_STARTS_AT";
})(AccountTracePathErrorsRefsColumn = exports.AccountTracePathErrorsRefsColumn || (exports.AccountTracePathErrorsRefsColumn = {}));
/** Columns of AccountTraceRefs. */
var AccountTraceRefsColumn;
(function (AccountTraceRefsColumn) {
    AccountTraceRefsColumn["ClientName"] = "CLIENT_NAME";
    AccountTraceRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    AccountTraceRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    AccountTraceRefsColumn["DurationNs"] = "DURATION_NS";
    AccountTraceRefsColumn["QueryId"] = "QUERY_ID";
    AccountTraceRefsColumn["QueryName"] = "QUERY_NAME";
    AccountTraceRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    AccountTraceRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    AccountTraceRefsColumn["ServiceId"] = "SERVICE_ID";
    AccountTraceRefsColumn["Timestamp"] = "TIMESTAMP";
    AccountTraceRefsColumn["TraceId"] = "TRACE_ID";
    AccountTraceRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
})(AccountTraceRefsColumn = exports.AccountTraceRefsColumn || (exports.AccountTraceRefsColumn = {}));
var ActorType;
(function (ActorType) {
    ActorType["AnonymousUser"] = "ANONYMOUS_USER";
    ActorType["Backfill"] = "BACKFILL";
    ActorType["Cron"] = "CRON";
    ActorType["Graph"] = "GRAPH";
    ActorType["InternalIdentity"] = "INTERNAL_IDENTITY";
    ActorType["Synchronization"] = "SYNCHRONIZATION";
    ActorType["System"] = "SYSTEM";
    ActorType["User"] = "USER";
})(ActorType = exports.ActorType || (exports.ActorType = {}));
var AuditStatus;
(function (AuditStatus) {
    AuditStatus["Cancelled"] = "CANCELLED";
    AuditStatus["Completed"] = "COMPLETED";
    AuditStatus["Expired"] = "EXPIRED";
    AuditStatus["Failed"] = "FAILED";
    AuditStatus["InProgress"] = "IN_PROGRESS";
    AuditStatus["Queued"] = "QUEUED";
})(AuditStatus = exports.AuditStatus || (exports.AuditStatus = {}));
var AvatarDeleteErrorCode;
(function (AvatarDeleteErrorCode) {
    AvatarDeleteErrorCode["SsoUsersCannotDeleteSelfAvatar"] = "SSO_USERS_CANNOT_DELETE_SELF_AVATAR";
})(AvatarDeleteErrorCode = exports.AvatarDeleteErrorCode || (exports.AvatarDeleteErrorCode = {}));
var AvatarUploadErrorCode;
(function (AvatarUploadErrorCode) {
    AvatarUploadErrorCode["SsoUsersCannotUploadSelfAvatar"] = "SSO_USERS_CANNOT_UPLOAD_SELF_AVATAR";
})(AvatarUploadErrorCode = exports.AvatarUploadErrorCode || (exports.AvatarUploadErrorCode = {}));
var BillingModel;
(function (BillingModel) {
    BillingModel["RequestBased"] = "REQUEST_BASED";
    BillingModel["SeatBased"] = "SEAT_BASED";
})(BillingModel = exports.BillingModel || (exports.BillingModel = {}));
var BillingPeriod;
(function (BillingPeriod) {
    BillingPeriod["Monthly"] = "MONTHLY";
    BillingPeriod["Quarterly"] = "QUARTERLY";
    BillingPeriod["SemiAnnually"] = "SEMI_ANNUALLY";
    BillingPeriod["Yearly"] = "YEARLY";
})(BillingPeriod = exports.BillingPeriod || (exports.BillingPeriod = {}));
var BillingPlanKind;
(function (BillingPlanKind) {
    BillingPlanKind["Community"] = "COMMUNITY";
    BillingPlanKind["EnterpriseInternal"] = "ENTERPRISE_INTERNAL";
    BillingPlanKind["EnterprisePaid"] = "ENTERPRISE_PAID";
    BillingPlanKind["EnterprisePilot"] = "ENTERPRISE_PILOT";
    BillingPlanKind["TeamPaid"] = "TEAM_PAID";
    BillingPlanKind["TeamTrial"] = "TEAM_TRIAL";
})(BillingPlanKind = exports.BillingPlanKind || (exports.BillingPlanKind = {}));
var BillingPlanKindV2;
(function (BillingPlanKindV2) {
    BillingPlanKindV2["Community"] = "COMMUNITY";
    BillingPlanKindV2["EnterpriseInternal"] = "ENTERPRISE_INTERNAL";
    BillingPlanKindV2["EnterprisePaid"] = "ENTERPRISE_PAID";
    BillingPlanKindV2["EnterprisePilot"] = "ENTERPRISE_PILOT";
    BillingPlanKindV2["TeamPaid"] = "TEAM_PAID";
    BillingPlanKindV2["TeamTrial"] = "TEAM_TRIAL";
    BillingPlanKindV2["Unknown"] = "UNKNOWN";
})(BillingPlanKindV2 = exports.BillingPlanKindV2 || (exports.BillingPlanKindV2 = {}));
var BillingPlanTier;
(function (BillingPlanTier) {
    BillingPlanTier["Community"] = "COMMUNITY";
    BillingPlanTier["Enterprise"] = "ENTERPRISE";
    BillingPlanTier["Team"] = "TEAM";
})(BillingPlanTier = exports.BillingPlanTier || (exports.BillingPlanTier = {}));
var BillingPlanTierV2;
(function (BillingPlanTierV2) {
    BillingPlanTierV2["Community"] = "COMMUNITY";
    BillingPlanTierV2["Enterprise"] = "ENTERPRISE";
    BillingPlanTierV2["Team"] = "TEAM";
    BillingPlanTierV2["Unknown"] = "UNKNOWN";
})(BillingPlanTierV2 = exports.BillingPlanTierV2 || (exports.BillingPlanTierV2 = {}));
var CacheScope;
(function (CacheScope) {
    CacheScope["Private"] = "PRIVATE";
    CacheScope["Public"] = "PUBLIC";
    CacheScope["Unknown"] = "UNKNOWN";
    CacheScope["Unrecognized"] = "UNRECOGNIZED";
})(CacheScope = exports.CacheScope || (exports.CacheScope = {}));
/**
 * Defines a set of categories that a schema change
 * can be grouped by.
 */
var ChangeCategory;
(function (ChangeCategory) {
    ChangeCategory["Addition"] = "ADDITION";
    ChangeCategory["Deprecation"] = "DEPRECATION";
    ChangeCategory["Edit"] = "EDIT";
    ChangeCategory["Removal"] = "REMOVAL";
})(ChangeCategory = exports.ChangeCategory || (exports.ChangeCategory = {}));
/**
 * These schema change codes represent all of the possible changes that can
 * occur during the schema diff algorithm.
 */
var ChangeCode;
(function (ChangeCode) {
    /** Type of the argument was changed. */
    ChangeCode["ArgChangedType"] = "ARG_CHANGED_TYPE";
    /** Argument was changed from nullable to non-nullable. */
    ChangeCode["ArgChangedTypeOptionalToRequired"] = "ARG_CHANGED_TYPE_OPTIONAL_TO_REQUIRED";
    /** Default value added or changed for the argument. */
    ChangeCode["ArgDefaultValueChange"] = "ARG_DEFAULT_VALUE_CHANGE";
    /** Description was added, removed, or updated for argument. */
    ChangeCode["ArgDescriptionChange"] = "ARG_DESCRIPTION_CHANGE";
    /** Argument to a field was removed. */
    ChangeCode["ArgRemoved"] = "ARG_REMOVED";
    /** Argument to the directive was removed. */
    ChangeCode["DirectiveArgRemoved"] = "DIRECTIVE_ARG_REMOVED";
    /** Location of the directive was removed. */
    ChangeCode["DirectiveLocationRemoved"] = "DIRECTIVE_LOCATION_REMOVED";
    /** Directive was removed. */
    ChangeCode["DirectiveRemoved"] = "DIRECTIVE_REMOVED";
    /** Repeatable flag was removed for directive. */
    ChangeCode["DirectiveRepeatableRemoved"] = "DIRECTIVE_REPEATABLE_REMOVED";
    /** Enum was deprecated. */
    ChangeCode["EnumDeprecated"] = "ENUM_DEPRECATED";
    /** Reason for enum deprecation changed. */
    ChangeCode["EnumDeprecatedReasonChange"] = "ENUM_DEPRECATED_REASON_CHANGE";
    /** Enum deprecation was removed. */
    ChangeCode["EnumDeprecationRemoved"] = "ENUM_DEPRECATION_REMOVED";
    /** Description was added, removed, or updated for enum value. */
    ChangeCode["EnumValueDescriptionChange"] = "ENUM_VALUE_DESCRIPTION_CHANGE";
    /** Field was added to the type. */
    ChangeCode["FieldAdded"] = "FIELD_ADDED";
    /** Return type for the field was changed. */
    ChangeCode["FieldChangedType"] = "FIELD_CHANGED_TYPE";
    /** Field was deprecated. */
    ChangeCode["FieldDeprecated"] = "FIELD_DEPRECATED";
    /** Reason for field deprecation changed. */
    ChangeCode["FieldDeprecatedReasonChange"] = "FIELD_DEPRECATED_REASON_CHANGE";
    /** Field deprecation removed. */
    ChangeCode["FieldDeprecationRemoved"] = "FIELD_DEPRECATION_REMOVED";
    /** Description was added, removed, or updated for field. */
    ChangeCode["FieldDescriptionChange"] = "FIELD_DESCRIPTION_CHANGE";
    /** Type of the field in the input object was changed. */
    ChangeCode["FieldOnInputObjectChangedType"] = "FIELD_ON_INPUT_OBJECT_CHANGED_TYPE";
    /** Field was removed from the type. */
    ChangeCode["FieldRemoved"] = "FIELD_REMOVED";
    /** Field was removed from the input object. */
    ChangeCode["FieldRemovedFromInputObject"] = "FIELD_REMOVED_FROM_INPUT_OBJECT";
    /** Non-nullable field was added to the input object. (Deprecated.) */
    ChangeCode["NonNullableFieldAddedToInputObject"] = "NON_NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Nullable field was added to the input type. (Deprecated.) */
    ChangeCode["NullableFieldAddedToInputObject"] = "NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Nullable argument was added to the field. */
    ChangeCode["OptionalArgAdded"] = "OPTIONAL_ARG_ADDED";
    /** Optional field was added to the input type. */
    ChangeCode["OptionalFieldAddedToInputObject"] = "OPTIONAL_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Non-nullable argument was added to the field. */
    ChangeCode["RequiredArgAdded"] = "REQUIRED_ARG_ADDED";
    /** Non-nullable argument added to directive. */
    ChangeCode["RequiredDirectiveArgAdded"] = "REQUIRED_DIRECTIVE_ARG_ADDED";
    /** Required field was added to the input object. */
    ChangeCode["RequiredFieldAddedToInputObject"] = "REQUIRED_FIELD_ADDED_TO_INPUT_OBJECT";
    /** Type was added to the schema. */
    ChangeCode["TypeAdded"] = "TYPE_ADDED";
    /** Type now implements the interface. */
    ChangeCode["TypeAddedToInterface"] = "TYPE_ADDED_TO_INTERFACE";
    /** A new value was added to the enum. */
    ChangeCode["TypeAddedToUnion"] = "TYPE_ADDED_TO_UNION";
    /**
     * Type was changed from one kind to another.
     * Ex: scalar to object or enum to union.
     */
    ChangeCode["TypeChangedKind"] = "TYPE_CHANGED_KIND";
    /** Description was added, removed, or updated for type. */
    ChangeCode["TypeDescriptionChange"] = "TYPE_DESCRIPTION_CHANGE";
    /** Type (object or scalar) was removed from the schema. */
    ChangeCode["TypeRemoved"] = "TYPE_REMOVED";
    /** Type no longer implements the interface. */
    ChangeCode["TypeRemovedFromInterface"] = "TYPE_REMOVED_FROM_INTERFACE";
    /** Type is no longer included in the union. */
    ChangeCode["TypeRemovedFromUnion"] = "TYPE_REMOVED_FROM_UNION";
    /** A new value was added to the enum. */
    ChangeCode["ValueAddedToEnum"] = "VALUE_ADDED_TO_ENUM";
    /** Value was removed from the enum. */
    ChangeCode["ValueRemovedFromEnum"] = "VALUE_REMOVED_FROM_ENUM";
})(ChangeCode = exports.ChangeCode || (exports.ChangeCode = {}));
var ChangeSeverity;
(function (ChangeSeverity) {
    ChangeSeverity["Failure"] = "FAILURE";
    ChangeSeverity["Notice"] = "NOTICE";
})(ChangeSeverity = exports.ChangeSeverity || (exports.ChangeSeverity = {}));
var ChangeType;
(function (ChangeType) {
    ChangeType["Failure"] = "FAILURE";
    ChangeType["Notice"] = "NOTICE";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
/** Options for filtering CheckWorkflows by status */
var CheckFilterInputStatusOption;
(function (CheckFilterInputStatusOption) {
    CheckFilterInputStatusOption["Failed"] = "FAILED";
    CheckFilterInputStatusOption["Passed"] = "PASSED";
    CheckFilterInputStatusOption["Pending"] = "PENDING";
})(CheckFilterInputStatusOption = exports.CheckFilterInputStatusOption || (exports.CheckFilterInputStatusOption = {}));
var CheckWorkflowStatus;
(function (CheckWorkflowStatus) {
    CheckWorkflowStatus["Failed"] = "FAILED";
    CheckWorkflowStatus["Passed"] = "PASSED";
    CheckWorkflowStatus["Pending"] = "PENDING";
})(CheckWorkflowStatus = exports.CheckWorkflowStatus || (exports.CheckWorkflowStatus = {}));
var CheckWorkflowTaskStatus;
(function (CheckWorkflowTaskStatus) {
    CheckWorkflowTaskStatus["Blocked"] = "BLOCKED";
    CheckWorkflowTaskStatus["Failed"] = "FAILED";
    CheckWorkflowTaskStatus["Passed"] = "PASSED";
    CheckWorkflowTaskStatus["Pending"] = "PENDING";
})(CheckWorkflowTaskStatus = exports.CheckWorkflowTaskStatus || (exports.CheckWorkflowTaskStatus = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["Equals"] = "EQUALS";
    ComparisonOperator["GreaterThan"] = "GREATER_THAN";
    ComparisonOperator["GreaterThanOrEqualTo"] = "GREATER_THAN_OR_EQUAL_TO";
    ComparisonOperator["LessThan"] = "LESS_THAN";
    ComparisonOperator["LessThanOrEqualTo"] = "LESS_THAN_OR_EQUAL_TO";
    ComparisonOperator["NotEquals"] = "NOT_EQUALS";
    ComparisonOperator["Unrecognized"] = "UNRECOGNIZED";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var ContractVariantFailedStep;
(function (ContractVariantFailedStep) {
    ContractVariantFailedStep["AddDirectiveDefinitionsIfNotPresent"] = "ADD_DIRECTIVE_DEFINITIONS_IF_NOT_PRESENT";
    ContractVariantFailedStep["DirectiveDefinitionLocationAugmenting"] = "DIRECTIVE_DEFINITION_LOCATION_AUGMENTING";
    ContractVariantFailedStep["EmptyObjectAndInterfaceMasking"] = "EMPTY_OBJECT_AND_INTERFACE_MASKING";
    ContractVariantFailedStep["EmptyUnionMasking"] = "EMPTY_UNION_MASKING";
    ContractVariantFailedStep["InputValidation"] = "INPUT_VALIDATION";
    ContractVariantFailedStep["Parsing"] = "PARSING";
    ContractVariantFailedStep["ParsingTagDirectives"] = "PARSING_TAG_DIRECTIVES";
    ContractVariantFailedStep["PartialInterfaceMasking"] = "PARTIAL_INTERFACE_MASKING";
    ContractVariantFailedStep["SchemaRetrieval"] = "SCHEMA_RETRIEVAL";
    ContractVariantFailedStep["TagInheriting"] = "TAG_INHERITING";
    ContractVariantFailedStep["TagMatching"] = "TAG_MATCHING";
    ContractVariantFailedStep["ToApiSchema"] = "TO_API_SCHEMA";
    ContractVariantFailedStep["ToFilterSchema"] = "TO_FILTER_SCHEMA";
    ContractVariantFailedStep["Unknown"] = "UNKNOWN";
    ContractVariantFailedStep["VersionCheck"] = "VERSION_CHECK";
})(ContractVariantFailedStep = exports.ContractVariantFailedStep || (exports.ContractVariantFailedStep = {}));
var DatadogApiRegion;
(function (DatadogApiRegion) {
    DatadogApiRegion["Eu"] = "EU";
    DatadogApiRegion["Eu1"] = "EU1";
    DatadogApiRegion["Us"] = "US";
    DatadogApiRegion["Us1"] = "US1";
    DatadogApiRegion["Us1Fed"] = "US1FED";
    DatadogApiRegion["Us3"] = "US3";
    DatadogApiRegion["Us5"] = "US5";
})(DatadogApiRegion = exports.DatadogApiRegion || (exports.DatadogApiRegion = {}));
var DeletionTargetType;
(function (DeletionTargetType) {
    DeletionTargetType["Account"] = "ACCOUNT";
    DeletionTargetType["User"] = "USER";
})(DeletionTargetType = exports.DeletionTargetType || (exports.DeletionTargetType = {}));
/** Columns of EdgeServerInfos. */
var EdgeServerInfosColumn;
(function (EdgeServerInfosColumn) {
    EdgeServerInfosColumn["BootId"] = "BOOT_ID";
    EdgeServerInfosColumn["ExecutableSchemaId"] = "EXECUTABLE_SCHEMA_ID";
    EdgeServerInfosColumn["LibraryVersion"] = "LIBRARY_VERSION";
    EdgeServerInfosColumn["Platform"] = "PLATFORM";
    EdgeServerInfosColumn["RuntimeVersion"] = "RUNTIME_VERSION";
    EdgeServerInfosColumn["SchemaTag"] = "SCHEMA_TAG";
    EdgeServerInfosColumn["ServerId"] = "SERVER_ID";
    EdgeServerInfosColumn["ServiceId"] = "SERVICE_ID";
    EdgeServerInfosColumn["Timestamp"] = "TIMESTAMP";
    EdgeServerInfosColumn["UserVersion"] = "USER_VERSION";
})(EdgeServerInfosColumn = exports.EdgeServerInfosColumn || (exports.EdgeServerInfosColumn = {}));
var EmailCategory;
(function (EmailCategory) {
    EmailCategory["Educational"] = "EDUCATIONAL";
})(EmailCategory = exports.EmailCategory || (exports.EmailCategory = {}));
/** Columns of ErrorStats. */
var ErrorStatsColumn;
(function (ErrorStatsColumn) {
    ErrorStatsColumn["AccountId"] = "ACCOUNT_ID";
    ErrorStatsColumn["ClientName"] = "CLIENT_NAME";
    ErrorStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ErrorStatsColumn["ErrorsCount"] = "ERRORS_COUNT";
    ErrorStatsColumn["Path"] = "PATH";
    ErrorStatsColumn["QueryId"] = "QUERY_ID";
    ErrorStatsColumn["QueryName"] = "QUERY_NAME";
    ErrorStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    ErrorStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    ErrorStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ErrorStatsColumn["ServiceId"] = "SERVICE_ID";
    ErrorStatsColumn["Timestamp"] = "TIMESTAMP";
})(ErrorStatsColumn = exports.ErrorStatsColumn || (exports.ErrorStatsColumn = {}));
/**  Input parameters for run explorer operation event. */
var EventEnum;
(function (EventEnum) {
    EventEnum["ClickCheckList"] = "CLICK_CHECK_LIST";
    EventEnum["ClickGoToGraphSettings"] = "CLICK_GO_TO_GRAPH_SETTINGS";
    EventEnum["RunExplorerOperation"] = "RUN_EXPLORER_OPERATION";
})(EventEnum = exports.EventEnum || (exports.EventEnum = {}));
/** Columns of FieldLatencies. */
var FieldLatenciesColumn;
(function (FieldLatenciesColumn) {
    FieldLatenciesColumn["FieldHistogram"] = "FIELD_HISTOGRAM";
    FieldLatenciesColumn["FieldName"] = "FIELD_NAME";
    FieldLatenciesColumn["ParentType"] = "PARENT_TYPE";
    FieldLatenciesColumn["SchemaHash"] = "SCHEMA_HASH";
    FieldLatenciesColumn["SchemaTag"] = "SCHEMA_TAG";
    FieldLatenciesColumn["ServiceId"] = "SERVICE_ID";
    FieldLatenciesColumn["Timestamp"] = "TIMESTAMP";
})(FieldLatenciesColumn = exports.FieldLatenciesColumn || (exports.FieldLatenciesColumn = {}));
/** Columns of FieldUsage. */
var FieldUsageColumn;
(function (FieldUsageColumn) {
    FieldUsageColumn["ClientName"] = "CLIENT_NAME";
    FieldUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    FieldUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    FieldUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    FieldUsageColumn["FieldName"] = "FIELD_NAME";
    FieldUsageColumn["ParentType"] = "PARENT_TYPE";
    FieldUsageColumn["QueryId"] = "QUERY_ID";
    FieldUsageColumn["QueryName"] = "QUERY_NAME";
    FieldUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    FieldUsageColumn["SchemaHash"] = "SCHEMA_HASH";
    FieldUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    FieldUsageColumn["ServiceId"] = "SERVICE_ID";
    FieldUsageColumn["Timestamp"] = "TIMESTAMP";
})(FieldUsageColumn = exports.FieldUsageColumn || (exports.FieldUsageColumn = {}));
var GitRemoteHost;
(function (GitRemoteHost) {
    GitRemoteHost["Bitbucket"] = "BITBUCKET";
    GitRemoteHost["Github"] = "GITHUB";
    GitRemoteHost["Gitlab"] = "GITLAB";
})(GitRemoteHost = exports.GitRemoteHost || (exports.GitRemoteHost = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Connect"] = "CONNECT";
    HttpMethod["Delete"] = "DELETE";
    HttpMethod["Get"] = "GET";
    HttpMethod["Head"] = "HEAD";
    HttpMethod["Options"] = "OPTIONS";
    HttpMethod["Patch"] = "PATCH";
    HttpMethod["Post"] = "POST";
    HttpMethod["Put"] = "PUT";
    HttpMethod["Trace"] = "TRACE";
    HttpMethod["Unknown"] = "UNKNOWN";
    HttpMethod["Unrecognized"] = "UNRECOGNIZED";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
var InternalMdgAdminRole;
(function (InternalMdgAdminRole) {
    InternalMdgAdminRole["InternalMdgReadOnly"] = "INTERNAL_MDG_READ_ONLY";
    InternalMdgAdminRole["InternalMdgSales"] = "INTERNAL_MDG_SALES";
    InternalMdgAdminRole["InternalMdgSuperAdmin"] = "INTERNAL_MDG_SUPER_ADMIN";
    InternalMdgAdminRole["InternalMdgSupport"] = "INTERNAL_MDG_SUPPORT";
})(InternalMdgAdminRole = exports.InternalMdgAdminRole || (exports.InternalMdgAdminRole = {}));
/** __DirectiveLocation introspection type */
var IntrospectionDirectiveLocation;
(function (IntrospectionDirectiveLocation) {
    /** Location adjacent to an argument definition. */
    IntrospectionDirectiveLocation["ArgumentDefinition"] = "ARGUMENT_DEFINITION";
    /** Location adjacent to an enum definition. */
    IntrospectionDirectiveLocation["Enum"] = "ENUM";
    /** Location adjacent to an enum value definition. */
    IntrospectionDirectiveLocation["EnumValue"] = "ENUM_VALUE";
    /** Location adjacent to a field. */
    IntrospectionDirectiveLocation["Field"] = "FIELD";
    /** Location adjacent to a field definition. */
    IntrospectionDirectiveLocation["FieldDefinition"] = "FIELD_DEFINITION";
    /** Location adjacent to a fragment definition. */
    IntrospectionDirectiveLocation["FragmentDefinition"] = "FRAGMENT_DEFINITION";
    /** Location adjacent to a fragment spread. */
    IntrospectionDirectiveLocation["FragmentSpread"] = "FRAGMENT_SPREAD";
    /** Location adjacent to an inline fragment. */
    IntrospectionDirectiveLocation["InlineFragment"] = "INLINE_FRAGMENT";
    /** Location adjacent to an input object field definition. */
    IntrospectionDirectiveLocation["InputFieldDefinition"] = "INPUT_FIELD_DEFINITION";
    /** Location adjacent to an input object type definition. */
    IntrospectionDirectiveLocation["InputObject"] = "INPUT_OBJECT";
    /** Location adjacent to an interface definition. */
    IntrospectionDirectiveLocation["Interface"] = "INTERFACE";
    /** Location adjacent to a mutation operation. */
    IntrospectionDirectiveLocation["Mutation"] = "MUTATION";
    /** Location adjacent to an object type definition. */
    IntrospectionDirectiveLocation["Object"] = "OBJECT";
    /** Location adjacent to a query operation. */
    IntrospectionDirectiveLocation["Query"] = "QUERY";
    /** Location adjacent to a scalar definition. */
    IntrospectionDirectiveLocation["Scalar"] = "SCALAR";
    /** Location adjacent to a schema definition. */
    IntrospectionDirectiveLocation["Schema"] = "SCHEMA";
    /** Location adjacent to a subscription operation. */
    IntrospectionDirectiveLocation["Subscription"] = "SUBSCRIPTION";
    /** Location adjacent to a union definition. */
    IntrospectionDirectiveLocation["Union"] = "UNION";
    /** Location adjacent to a variable definition. */
    IntrospectionDirectiveLocation["VariableDefinition"] = "VARIABLE_DEFINITION";
})(IntrospectionDirectiveLocation = exports.IntrospectionDirectiveLocation || (exports.IntrospectionDirectiveLocation = {}));
var IntrospectionTypeKind;
(function (IntrospectionTypeKind) {
    /** Indicates this type is an enum. 'enumValues' is a valid field. */
    IntrospectionTypeKind["Enum"] = "ENUM";
    /** Indicates this type is an input object. 'inputFields' is a valid field. */
    IntrospectionTypeKind["InputObject"] = "INPUT_OBJECT";
    /**
     * Indicates this type is an interface. 'fields' and 'possibleTypes' are valid
     * fields
     */
    IntrospectionTypeKind["Interface"] = "INTERFACE";
    /** Indicates this type is a list. 'ofType' is a valid field. */
    IntrospectionTypeKind["List"] = "LIST";
    /** Indicates this type is a non-null. 'ofType' is a valid field. */
    IntrospectionTypeKind["NonNull"] = "NON_NULL";
    /** Indicates this type is an object. 'fields' and 'interfaces' are valid fields. */
    IntrospectionTypeKind["Object"] = "OBJECT";
    /** Indicates this type is a scalar. */
    IntrospectionTypeKind["Scalar"] = "SCALAR";
    /** Indicates this type is a union. 'possibleTypes' is a valid field. */
    IntrospectionTypeKind["Union"] = "UNION";
})(IntrospectionTypeKind = exports.IntrospectionTypeKind || (exports.IntrospectionTypeKind = {}));
var InvoiceState;
(function (InvoiceState) {
    InvoiceState["Collected"] = "COLLECTED";
    InvoiceState["Failed"] = "FAILED";
    InvoiceState["Open"] = "OPEN";
    InvoiceState["PastDue"] = "PAST_DUE";
    InvoiceState["Unknown"] = "UNKNOWN";
})(InvoiceState = exports.InvoiceState || (exports.InvoiceState = {}));
var InvoiceStateV2;
(function (InvoiceStateV2) {
    InvoiceStateV2["Collected"] = "COLLECTED";
    InvoiceStateV2["Failed"] = "FAILED";
    InvoiceStateV2["Open"] = "OPEN";
    InvoiceStateV2["PastDue"] = "PAST_DUE";
    InvoiceStateV2["Unknown"] = "UNKNOWN";
})(InvoiceStateV2 = exports.InvoiceStateV2 || (exports.InvoiceStateV2 = {}));
var LaunchStatus;
(function (LaunchStatus) {
    LaunchStatus["LaunchCompleted"] = "LAUNCH_COMPLETED";
    LaunchStatus["LaunchFailed"] = "LAUNCH_FAILED";
    LaunchStatus["LaunchInitiated"] = "LAUNCH_INITIATED";
})(LaunchStatus = exports.LaunchStatus || (exports.LaunchStatus = {}));
var LinkInfoType;
(function (LinkInfoType) {
    LinkInfoType["DeveloperPortal"] = "DEVELOPER_PORTAL";
    LinkInfoType["Other"] = "OTHER";
    LinkInfoType["Repository"] = "REPOSITORY";
})(LinkInfoType = exports.LinkInfoType || (exports.LinkInfoType = {}));
/** Columns of OperationCheckStats. */
var OperationCheckStatsColumn;
(function (OperationCheckStatsColumn) {
    OperationCheckStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    OperationCheckStatsColumn["ClientName"] = "CLIENT_NAME";
    OperationCheckStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    OperationCheckStatsColumn["QueryId"] = "QUERY_ID";
    OperationCheckStatsColumn["QueryName"] = "QUERY_NAME";
    OperationCheckStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    OperationCheckStatsColumn["ServiceId"] = "SERVICE_ID";
    OperationCheckStatsColumn["Timestamp"] = "TIMESTAMP";
    OperationCheckStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(OperationCheckStatsColumn = exports.OperationCheckStatsColumn || (exports.OperationCheckStatsColumn = {}));
var Ordering;
(function (Ordering) {
    Ordering["Ascending"] = "ASCENDING";
    Ordering["Descending"] = "DESCENDING";
})(Ordering = exports.Ordering || (exports.Ordering = {}));
var OrganizationSsoProvider;
(function (OrganizationSsoProvider) {
    OrganizationSsoProvider["Pingone"] = "PINGONE";
})(OrganizationSsoProvider = exports.OrganizationSsoProvider || (exports.OrganizationSsoProvider = {}));
var PromoteSchemaErrorCode;
(function (PromoteSchemaErrorCode) {
    PromoteSchemaErrorCode["CannotPromoteSchemaForFederatedGraph"] = "CANNOT_PROMOTE_SCHEMA_FOR_FEDERATED_GRAPH";
})(PromoteSchemaErrorCode = exports.PromoteSchemaErrorCode || (exports.PromoteSchemaErrorCode = {}));
var PromoteSchemaResponseCode;
(function (PromoteSchemaResponseCode) {
    PromoteSchemaResponseCode["NoChangesDetected"] = "NO_CHANGES_DETECTED";
    PromoteSchemaResponseCode["PromotionSuccess"] = "PROMOTION_SUCCESS";
})(PromoteSchemaResponseCode = exports.PromoteSchemaResponseCode || (exports.PromoteSchemaResponseCode = {}));
/** Columns of QueryStats. */
var QueryStatsColumn;
(function (QueryStatsColumn) {
    QueryStatsColumn["AccountId"] = "ACCOUNT_ID";
    QueryStatsColumn["CachedHistogram"] = "CACHED_HISTOGRAM";
    QueryStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    QueryStatsColumn["CacheTtlHistogram"] = "CACHE_TTL_HISTOGRAM";
    QueryStatsColumn["ClientName"] = "CLIENT_NAME";
    QueryStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    QueryStatsColumn["ForbiddenOperationCount"] = "FORBIDDEN_OPERATION_COUNT";
    QueryStatsColumn["FromEngineproxy"] = "FROM_ENGINEPROXY";
    QueryStatsColumn["QueryId"] = "QUERY_ID";
    QueryStatsColumn["QueryName"] = "QUERY_NAME";
    QueryStatsColumn["RegisteredOperationCount"] = "REGISTERED_OPERATION_COUNT";
    QueryStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    QueryStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    QueryStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    QueryStatsColumn["ServiceId"] = "SERVICE_ID";
    QueryStatsColumn["Timestamp"] = "TIMESTAMP";
    QueryStatsColumn["UncachedHistogram"] = "UNCACHED_HISTOGRAM";
    QueryStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(QueryStatsColumn = exports.QueryStatsColumn || (exports.QueryStatsColumn = {}));
var QueryTriggerMetric;
(function (QueryTriggerMetric) {
    /** Number of requests within the window that resulted in an error. Ignores `percentile`. */
    QueryTriggerMetric["ErrorCount"] = "ERROR_COUNT";
    /** Number of error requests divided by total number of requests. Ignores `percentile`. */
    QueryTriggerMetric["ErrorPercentage"] = "ERROR_PERCENTAGE";
    /** Number of requests within the window. Ignores `percentile`. */
    QueryTriggerMetric["RequestCount"] = "REQUEST_COUNT";
    /** Request latency in ms. Requires `percentile`. */
    QueryTriggerMetric["RequestServiceTime"] = "REQUEST_SERVICE_TIME";
})(QueryTriggerMetric = exports.QueryTriggerMetric || (exports.QueryTriggerMetric = {}));
var QueryTriggerScope;
(function (QueryTriggerScope) {
    QueryTriggerScope["All"] = "ALL";
    QueryTriggerScope["Any"] = "ANY";
    QueryTriggerScope["Unrecognized"] = "UNRECOGNIZED";
})(QueryTriggerScope = exports.QueryTriggerScope || (exports.QueryTriggerScope = {}));
var QueryTriggerWindow;
(function (QueryTriggerWindow) {
    QueryTriggerWindow["FifteenMinutes"] = "FIFTEEN_MINUTES";
    QueryTriggerWindow["FiveMinutes"] = "FIVE_MINUTES";
    QueryTriggerWindow["OneMinute"] = "ONE_MINUTE";
    QueryTriggerWindow["Unrecognized"] = "UNRECOGNIZED";
})(QueryTriggerWindow = exports.QueryTriggerWindow || (exports.QueryTriggerWindow = {}));
var ReportSchemaErrorCode;
(function (ReportSchemaErrorCode) {
    ReportSchemaErrorCode["BootIdIsNotValidUuid"] = "BOOT_ID_IS_NOT_VALID_UUID";
    ReportSchemaErrorCode["BootIdIsRequired"] = "BOOT_ID_IS_REQUIRED";
    ReportSchemaErrorCode["CoreSchemaHashIsNotSchemaSha256"] = "CORE_SCHEMA_HASH_IS_NOT_SCHEMA_SHA256";
    ReportSchemaErrorCode["CoreSchemaHashIsRequired"] = "CORE_SCHEMA_HASH_IS_REQUIRED";
    ReportSchemaErrorCode["CoreSchemaHashIsTooLong"] = "CORE_SCHEMA_HASH_IS_TOO_LONG";
    ReportSchemaErrorCode["ExecutableSchemaIdIsNotSchemaSha256"] = "EXECUTABLE_SCHEMA_ID_IS_NOT_SCHEMA_SHA256";
    ReportSchemaErrorCode["ExecutableSchemaIdIsRequired"] = "EXECUTABLE_SCHEMA_ID_IS_REQUIRED";
    ReportSchemaErrorCode["ExecutableSchemaIdIsTooLong"] = "EXECUTABLE_SCHEMA_ID_IS_TOO_LONG";
    ReportSchemaErrorCode["GraphRefInvalidFormat"] = "GRAPH_REF_INVALID_FORMAT";
    ReportSchemaErrorCode["GraphRefIsRequired"] = "GRAPH_REF_IS_REQUIRED";
    ReportSchemaErrorCode["GraphVariantDoesNotMatchRegex"] = "GRAPH_VARIANT_DOES_NOT_MATCH_REGEX";
    ReportSchemaErrorCode["GraphVariantIsRequired"] = "GRAPH_VARIANT_IS_REQUIRED";
    ReportSchemaErrorCode["LibraryVersionIsTooLong"] = "LIBRARY_VERSION_IS_TOO_LONG";
    ReportSchemaErrorCode["PlatformIsTooLong"] = "PLATFORM_IS_TOO_LONG";
    ReportSchemaErrorCode["RuntimeVersionIsTooLong"] = "RUNTIME_VERSION_IS_TOO_LONG";
    ReportSchemaErrorCode["SchemaIsNotParsable"] = "SCHEMA_IS_NOT_PARSABLE";
    ReportSchemaErrorCode["SchemaIsNotValid"] = "SCHEMA_IS_NOT_VALID";
    ReportSchemaErrorCode["ServerIdIsTooLong"] = "SERVER_ID_IS_TOO_LONG";
    ReportSchemaErrorCode["UserVersionIsTooLong"] = "USER_VERSION_IS_TOO_LONG";
})(ReportSchemaErrorCode = exports.ReportSchemaErrorCode || (exports.ReportSchemaErrorCode = {}));
var Resolution;
(function (Resolution) {
    Resolution["R1D"] = "R1D";
    Resolution["R1H"] = "R1H";
    Resolution["R1M"] = "R1M";
    Resolution["R5M"] = "R5M";
    Resolution["R6H"] = "R6H";
    Resolution["R15M"] = "R15M";
})(Resolution = exports.Resolution || (exports.Resolution = {}));
var ResponseHints;
(function (ResponseHints) {
    ResponseHints["None"] = "NONE";
    ResponseHints["SampleResponses"] = "SAMPLE_RESPONSES";
    ResponseHints["Subgraphs"] = "SUBGRAPHS";
    ResponseHints["Timings"] = "TIMINGS";
    ResponseHints["TraceTimings"] = "TRACE_TIMINGS";
})(ResponseHints = exports.ResponseHints || (exports.ResponseHints = {}));
/** Columns of ServiceEdgeServerInfos. */
var ServiceEdgeServerInfosColumn;
(function (ServiceEdgeServerInfosColumn) {
    ServiceEdgeServerInfosColumn["BootId"] = "BOOT_ID";
    ServiceEdgeServerInfosColumn["ExecutableSchemaId"] = "EXECUTABLE_SCHEMA_ID";
    ServiceEdgeServerInfosColumn["LibraryVersion"] = "LIBRARY_VERSION";
    ServiceEdgeServerInfosColumn["Platform"] = "PLATFORM";
    ServiceEdgeServerInfosColumn["RuntimeVersion"] = "RUNTIME_VERSION";
    ServiceEdgeServerInfosColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceEdgeServerInfosColumn["ServerId"] = "SERVER_ID";
    ServiceEdgeServerInfosColumn["Timestamp"] = "TIMESTAMP";
    ServiceEdgeServerInfosColumn["UserVersion"] = "USER_VERSION";
})(ServiceEdgeServerInfosColumn = exports.ServiceEdgeServerInfosColumn || (exports.ServiceEdgeServerInfosColumn = {}));
/** Columns of ServiceErrorStats. */
var ServiceErrorStatsColumn;
(function (ServiceErrorStatsColumn) {
    ServiceErrorStatsColumn["ClientName"] = "CLIENT_NAME";
    ServiceErrorStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceErrorStatsColumn["ErrorsCount"] = "ERRORS_COUNT";
    ServiceErrorStatsColumn["Path"] = "PATH";
    ServiceErrorStatsColumn["QueryId"] = "QUERY_ID";
    ServiceErrorStatsColumn["QueryName"] = "QUERY_NAME";
    ServiceErrorStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    ServiceErrorStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceErrorStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceErrorStatsColumn["Timestamp"] = "TIMESTAMP";
})(ServiceErrorStatsColumn = exports.ServiceErrorStatsColumn || (exports.ServiceErrorStatsColumn = {}));
/** Columns of ServiceFieldLatencies. */
var ServiceFieldLatenciesColumn;
(function (ServiceFieldLatenciesColumn) {
    ServiceFieldLatenciesColumn["FieldHistogram"] = "FIELD_HISTOGRAM";
    ServiceFieldLatenciesColumn["FieldName"] = "FIELD_NAME";
    ServiceFieldLatenciesColumn["ParentType"] = "PARENT_TYPE";
    ServiceFieldLatenciesColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceFieldLatenciesColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceFieldLatenciesColumn["Timestamp"] = "TIMESTAMP";
})(ServiceFieldLatenciesColumn = exports.ServiceFieldLatenciesColumn || (exports.ServiceFieldLatenciesColumn = {}));
/** Columns of ServiceFieldUsage. */
var ServiceFieldUsageColumn;
(function (ServiceFieldUsageColumn) {
    ServiceFieldUsageColumn["ClientName"] = "CLIENT_NAME";
    ServiceFieldUsageColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceFieldUsageColumn["EstimatedExecutionCount"] = "ESTIMATED_EXECUTION_COUNT";
    ServiceFieldUsageColumn["ExecutionCount"] = "EXECUTION_COUNT";
    ServiceFieldUsageColumn["FieldName"] = "FIELD_NAME";
    ServiceFieldUsageColumn["ParentType"] = "PARENT_TYPE";
    ServiceFieldUsageColumn["QueryId"] = "QUERY_ID";
    ServiceFieldUsageColumn["QueryName"] = "QUERY_NAME";
    ServiceFieldUsageColumn["ReferencingOperationCount"] = "REFERENCING_OPERATION_COUNT";
    ServiceFieldUsageColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceFieldUsageColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceFieldUsageColumn["Timestamp"] = "TIMESTAMP";
})(ServiceFieldUsageColumn = exports.ServiceFieldUsageColumn || (exports.ServiceFieldUsageColumn = {}));
/** Columns of ServiceOperationCheckStats. */
var ServiceOperationCheckStatsColumn;
(function (ServiceOperationCheckStatsColumn) {
    ServiceOperationCheckStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    ServiceOperationCheckStatsColumn["ClientName"] = "CLIENT_NAME";
    ServiceOperationCheckStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceOperationCheckStatsColumn["QueryId"] = "QUERY_ID";
    ServiceOperationCheckStatsColumn["QueryName"] = "QUERY_NAME";
    ServiceOperationCheckStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceOperationCheckStatsColumn["Timestamp"] = "TIMESTAMP";
    ServiceOperationCheckStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(ServiceOperationCheckStatsColumn = exports.ServiceOperationCheckStatsColumn || (exports.ServiceOperationCheckStatsColumn = {}));
/** Columns of ServiceQueryStats. */
var ServiceQueryStatsColumn;
(function (ServiceQueryStatsColumn) {
    ServiceQueryStatsColumn["CachedHistogram"] = "CACHED_HISTOGRAM";
    ServiceQueryStatsColumn["CachedRequestsCount"] = "CACHED_REQUESTS_COUNT";
    ServiceQueryStatsColumn["CacheTtlHistogram"] = "CACHE_TTL_HISTOGRAM";
    ServiceQueryStatsColumn["ClientName"] = "CLIENT_NAME";
    ServiceQueryStatsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceQueryStatsColumn["ForbiddenOperationCount"] = "FORBIDDEN_OPERATION_COUNT";
    ServiceQueryStatsColumn["FromEngineproxy"] = "FROM_ENGINEPROXY";
    ServiceQueryStatsColumn["QueryId"] = "QUERY_ID";
    ServiceQueryStatsColumn["QueryName"] = "QUERY_NAME";
    ServiceQueryStatsColumn["RegisteredOperationCount"] = "REGISTERED_OPERATION_COUNT";
    ServiceQueryStatsColumn["RequestsWithErrorsCount"] = "REQUESTS_WITH_ERRORS_COUNT";
    ServiceQueryStatsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceQueryStatsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceQueryStatsColumn["Timestamp"] = "TIMESTAMP";
    ServiceQueryStatsColumn["UncachedHistogram"] = "UNCACHED_HISTOGRAM";
    ServiceQueryStatsColumn["UncachedRequestsCount"] = "UNCACHED_REQUESTS_COUNT";
})(ServiceQueryStatsColumn = exports.ServiceQueryStatsColumn || (exports.ServiceQueryStatsColumn = {}));
/** Columns of ServiceTracePathErrorsRefs. */
var ServiceTracePathErrorsRefsColumn;
(function (ServiceTracePathErrorsRefsColumn) {
    ServiceTracePathErrorsRefsColumn["ClientName"] = "CLIENT_NAME";
    ServiceTracePathErrorsRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceTracePathErrorsRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    ServiceTracePathErrorsRefsColumn["ErrorsCountInPath"] = "ERRORS_COUNT_IN_PATH";
    ServiceTracePathErrorsRefsColumn["ErrorsCountInTrace"] = "ERRORS_COUNT_IN_TRACE";
    ServiceTracePathErrorsRefsColumn["ErrorMessage"] = "ERROR_MESSAGE";
    ServiceTracePathErrorsRefsColumn["Path"] = "PATH";
    ServiceTracePathErrorsRefsColumn["QueryId"] = "QUERY_ID";
    ServiceTracePathErrorsRefsColumn["QueryName"] = "QUERY_NAME";
    ServiceTracePathErrorsRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceTracePathErrorsRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceTracePathErrorsRefsColumn["Timestamp"] = "TIMESTAMP";
    ServiceTracePathErrorsRefsColumn["TraceHttpStatusCode"] = "TRACE_HTTP_STATUS_CODE";
    ServiceTracePathErrorsRefsColumn["TraceId"] = "TRACE_ID";
    ServiceTracePathErrorsRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
    ServiceTracePathErrorsRefsColumn["TraceStartsAt"] = "TRACE_STARTS_AT";
})(ServiceTracePathErrorsRefsColumn = exports.ServiceTracePathErrorsRefsColumn || (exports.ServiceTracePathErrorsRefsColumn = {}));
/** Columns of ServiceTraceRefs. */
var ServiceTraceRefsColumn;
(function (ServiceTraceRefsColumn) {
    ServiceTraceRefsColumn["ClientName"] = "CLIENT_NAME";
    ServiceTraceRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    ServiceTraceRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    ServiceTraceRefsColumn["DurationNs"] = "DURATION_NS";
    ServiceTraceRefsColumn["QueryId"] = "QUERY_ID";
    ServiceTraceRefsColumn["QueryName"] = "QUERY_NAME";
    ServiceTraceRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    ServiceTraceRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    ServiceTraceRefsColumn["Timestamp"] = "TIMESTAMP";
    ServiceTraceRefsColumn["TraceId"] = "TRACE_ID";
    ServiceTraceRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
})(ServiceTraceRefsColumn = exports.ServiceTraceRefsColumn || (exports.ServiceTraceRefsColumn = {}));
var StoreSchemaErrorCode;
(function (StoreSchemaErrorCode) {
    StoreSchemaErrorCode["SchemaIsNotParsable"] = "SCHEMA_IS_NOT_PARSABLE";
    StoreSchemaErrorCode["SchemaIsNotValid"] = "SCHEMA_IS_NOT_VALID";
})(StoreSchemaErrorCode = exports.StoreSchemaErrorCode || (exports.StoreSchemaErrorCode = {}));
var SubgraphChangeType;
(function (SubgraphChangeType) {
    SubgraphChangeType["Addition"] = "ADDITION";
    SubgraphChangeType["Deletion"] = "DELETION";
    SubgraphChangeType["Modification"] = "MODIFICATION";
})(SubgraphChangeType = exports.SubgraphChangeType || (exports.SubgraphChangeType = {}));
var SubscriptionState;
(function (SubscriptionState) {
    SubscriptionState["Active"] = "ACTIVE";
    SubscriptionState["Canceled"] = "CANCELED";
    SubscriptionState["Expired"] = "EXPIRED";
    SubscriptionState["Future"] = "FUTURE";
    SubscriptionState["PastDue"] = "PAST_DUE";
    SubscriptionState["Paused"] = "PAUSED";
    SubscriptionState["Pending"] = "PENDING";
    SubscriptionState["Unknown"] = "UNKNOWN";
})(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
var SubscriptionStateV2;
(function (SubscriptionStateV2) {
    SubscriptionStateV2["Active"] = "ACTIVE";
    SubscriptionStateV2["Canceled"] = "CANCELED";
    SubscriptionStateV2["Expired"] = "EXPIRED";
    SubscriptionStateV2["Future"] = "FUTURE";
    SubscriptionStateV2["PastDue"] = "PAST_DUE";
    SubscriptionStateV2["Paused"] = "PAUSED";
    SubscriptionStateV2["Pending"] = "PENDING";
    SubscriptionStateV2["Unknown"] = "UNKNOWN";
})(SubscriptionStateV2 = exports.SubscriptionStateV2 || (exports.SubscriptionStateV2 = {}));
var ThemeName;
(function (ThemeName) {
    ThemeName["Dark"] = "DARK";
    ThemeName["Light"] = "LIGHT";
})(ThemeName = exports.ThemeName || (exports.ThemeName = {}));
var TicketPriority;
(function (TicketPriority) {
    TicketPriority["P0"] = "P0";
    TicketPriority["P1"] = "P1";
    TicketPriority["P2"] = "P2";
    TicketPriority["P3"] = "P3";
})(TicketPriority = exports.TicketPriority || (exports.TicketPriority = {}));
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["Closed"] = "CLOSED";
    TicketStatus["Hold"] = "HOLD";
    TicketStatus["New"] = "NEW";
    TicketStatus["Open"] = "OPEN";
    TicketStatus["Pending"] = "PENDING";
    TicketStatus["Solved"] = "SOLVED";
})(TicketStatus = exports.TicketStatus || (exports.TicketStatus = {}));
/** Columns of TracePathErrorsRefs. */
var TracePathErrorsRefsColumn;
(function (TracePathErrorsRefsColumn) {
    TracePathErrorsRefsColumn["ClientName"] = "CLIENT_NAME";
    TracePathErrorsRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    TracePathErrorsRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    TracePathErrorsRefsColumn["ErrorsCountInPath"] = "ERRORS_COUNT_IN_PATH";
    TracePathErrorsRefsColumn["ErrorsCountInTrace"] = "ERRORS_COUNT_IN_TRACE";
    TracePathErrorsRefsColumn["ErrorMessage"] = "ERROR_MESSAGE";
    TracePathErrorsRefsColumn["Path"] = "PATH";
    TracePathErrorsRefsColumn["QueryId"] = "QUERY_ID";
    TracePathErrorsRefsColumn["QueryName"] = "QUERY_NAME";
    TracePathErrorsRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    TracePathErrorsRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    TracePathErrorsRefsColumn["ServiceId"] = "SERVICE_ID";
    TracePathErrorsRefsColumn["Timestamp"] = "TIMESTAMP";
    TracePathErrorsRefsColumn["TraceHttpStatusCode"] = "TRACE_HTTP_STATUS_CODE";
    TracePathErrorsRefsColumn["TraceId"] = "TRACE_ID";
    TracePathErrorsRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
    TracePathErrorsRefsColumn["TraceStartsAt"] = "TRACE_STARTS_AT";
})(TracePathErrorsRefsColumn = exports.TracePathErrorsRefsColumn || (exports.TracePathErrorsRefsColumn = {}));
/** Columns of TraceRefs. */
var TraceRefsColumn;
(function (TraceRefsColumn) {
    TraceRefsColumn["ClientName"] = "CLIENT_NAME";
    TraceRefsColumn["ClientVersion"] = "CLIENT_VERSION";
    TraceRefsColumn["DurationBucket"] = "DURATION_BUCKET";
    TraceRefsColumn["DurationNs"] = "DURATION_NS";
    TraceRefsColumn["QueryId"] = "QUERY_ID";
    TraceRefsColumn["QueryName"] = "QUERY_NAME";
    TraceRefsColumn["SchemaHash"] = "SCHEMA_HASH";
    TraceRefsColumn["SchemaTag"] = "SCHEMA_TAG";
    TraceRefsColumn["ServiceId"] = "SERVICE_ID";
    TraceRefsColumn["Timestamp"] = "TIMESTAMP";
    TraceRefsColumn["TraceId"] = "TRACE_ID";
    TraceRefsColumn["TraceSizeBytes"] = "TRACE_SIZE_BYTES";
})(TraceRefsColumn = exports.TraceRefsColumn || (exports.TraceRefsColumn = {}));
var UserPermission;
(function (UserPermission) {
    UserPermission["BillingManager"] = "BILLING_MANAGER";
    UserPermission["Consumer"] = "CONSUMER";
    UserPermission["Contributor"] = "CONTRIBUTOR";
    UserPermission["GraphAdmin"] = "GRAPH_ADMIN";
    UserPermission["LegacyGraphKey"] = "LEGACY_GRAPH_KEY";
    UserPermission["Observer"] = "OBSERVER";
    UserPermission["OrgAdmin"] = "ORG_ADMIN";
})(UserPermission = exports.UserPermission || (exports.UserPermission = {}));
var UserSegment;
(function (UserSegment) {
    UserSegment["JoinMyTeam"] = "JOIN_MY_TEAM";
    UserSegment["LocalDevelopment"] = "LOCAL_DEVELOPMENT";
    UserSegment["NotSpecified"] = "NOT_SPECIFIED";
    UserSegment["ProductionGraphs"] = "PRODUCTION_GRAPHS";
    UserSegment["Sandbox"] = "SANDBOX";
    UserSegment["TryTeam"] = "TRY_TEAM";
})(UserSegment = exports.UserSegment || (exports.UserSegment = {}));
var UserType;
(function (UserType) {
    UserType["Apollo"] = "APOLLO";
    UserType["Github"] = "GITHUB";
    UserType["Sso"] = "SSO";
})(UserType = exports.UserType || (exports.UserType = {}));
var ValidationErrorCode;
(function (ValidationErrorCode) {
    ValidationErrorCode["DeprecatedField"] = "DEPRECATED_FIELD";
    ValidationErrorCode["InvalidOperation"] = "INVALID_OPERATION";
    ValidationErrorCode["NonParseableDocument"] = "NON_PARSEABLE_DOCUMENT";
})(ValidationErrorCode = exports.ValidationErrorCode || (exports.ValidationErrorCode = {}));
var ValidationErrorType;
(function (ValidationErrorType) {
    ValidationErrorType["Failure"] = "FAILURE";
    ValidationErrorType["Invalid"] = "INVALID";
    ValidationErrorType["Warning"] = "WARNING";
})(ValidationErrorType = exports.ValidationErrorType || (exports.ValidationErrorType = {}));
exports.LatestApprovedLaunchDocument = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query LatestApprovedLaunch($serviceId: ID!, $variant: String!) {\n  service(id: $serviceId) {\n    variant(name: $variant) {\n      latestApprovedLaunch {\n        build {\n          result {\n            ... on BuildSuccess {\n              coreSchema {\n                apiDocument\n                coreDocument\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query LatestApprovedLaunch($serviceId: ID!, $variant: String!) {\n  service(id: $serviceId) {\n    variant(name: $variant) {\n      latestApprovedLaunch {\n        build {\n          result {\n            ... on BuildSuccess {\n              coreSchema {\n                apiDocument\n                coreDocument\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n    "])));
var defaultWrapper = function (action, _operationName) { return action(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        LatestApprovedLaunch: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(exports.LatestApprovedLaunchDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'LatestApprovedLaunch');
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1;
