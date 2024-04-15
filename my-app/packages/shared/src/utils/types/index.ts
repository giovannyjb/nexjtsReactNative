export interface MasterItem {
  id: string;
  name: string;
  partner?: string;
  type_entity?: string;
}

export interface MasterItemDocs {
  docInfo?: string;
  file?: string;
}
export interface MasterItemLocation {
  id: string;
  name?: string;
  label?: string;
}
export interface MasterItemPath {
  id: string;
  path: string;
  name?: string;
  state?: string;
  group?: string;
}

export interface MasterItemVideo {
  id: string;
  url?: string;
}

export interface PathsNavigation {
  GetStarted: MasterItemPath;
  Dashboard: MasterItemPath;
  SubsidyManagement: MasterItemPath;
  SelecProject: MasterItemPath;
  InformationPersonalOne: MasterItemPath;
  InformationPersonalTwo: MasterItemPath;
  HomeEconomy: MasterItemPath;
  InitialSavings: MasterItemPath;
  PreviousSavingsMenu: MasterItemPath;
  InformationOwnerEntity: MasterItemPath;
  TraditionCertificate: MasterItemPath;
  UrbanPlanningLicense: MasterItemPath;
  TechnicalViability: MasterItemPath;
  PhotographicRecord: MasterItemPath;
  SelectTypeCreditApprovedOrPre: MasterItemPath;
  SelectComplementaryResources: MasterItemPath;
  SelectTypeComplementaryResources: MasterItemPath;
  DocumentLandRegister: MasterItemPath;
  DocumentValueBudget: MasterItemPath;
  DocumentIdentityWorker: MasterItemPath;
  SavingsSummary: MasterItemPath;
  HomeValueSummary: MasterItemPath;
  ApplicationSummary: MasterItemPath;
  DocumentList: MasterItemPath;
  DocumentUpload: MasterItemPath;
  FinalVerificationProcess: MasterItemPath;
  ViewerYoutube: MasterItemPath;
  ViewerYoutubeGeneralData: MasterItemPath;
  ViewerYoutubePersonalData: MasterItemPath;
  ViewerYoutubePreviousSavings: MasterItemPath;
}

export interface mainVideoYoutube {
  testimonyDeliverySubsidy: MasterItemVideo;
  generalData: MasterItemVideo;
  personalData: MasterItemVideo;
  previousSavingsData: MasterItemVideo;
}

export interface circleBarProps {
  value: number;
  text: string;
}

export interface inputProps {
  label: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error: boolean;
}

export interface MasterFormTwo {
  formItem: FormTwoItem[];
  incomeStart?: number;
  incomeEnd?: number;
  totalMonthlyIncome?: number;
  memberListSurrogate?: MasterItem;
}
export interface PostulationFormItem {
  formOne: FormOneItem;
  formTwo: MasterFormTwo;
  formThree: FormThreeItem;
  formFour: FormFourItem;
  formMenu: FormMenuItem;
  formNavigation: FormNavigationItem;
  formMenuAccordion: FormMenuAccordion;
}

export interface FormMenuItem {
  stateHomeSubsidy: boolean;
  stateNoJobSubsidy: boolean;
  stateNewHome: boolean;
  stateRebuild: boolean;
  stateBuildHome: boolean;
  typeCreditApproved: string;
  stateYesIHave: boolean;
  stateDontHave: boolean;
  stateApprovedCredit: boolean;
  statePreApprovedCredit: boolean;
  solidarityContribution: boolean;
  stateTerritorialContribution: boolean;
  donations: boolean;
  anotherResources: boolean;
  complementaryYesIHave: boolean;
  complementaryDontHave: boolean;
  scheduledSavingsYesIHave: boolean;
  scheduledSavingsDontHave: boolean;
  stateYesIHaveLayoffs: boolean;
  stateDontHaveLayoffs: boolean;
  stateYesIHaveContractualSavings: boolean;
  stateDontHaveContractualSavings: boolean;
  stateYesIHavePeriodicContributions: boolean;
  stateDontHavePeriodicContributions: boolean;
  stateYesIHaveInitialFee: boolean;
  stateDontHaveInitialFee: boolean;
  stateYesIHaveWorkForceSavings: boolean;
  stateDontHaveWorkForceSavings: boolean;
  statePrivacyPoliciesCheck: boolean;
  stateSwornStatementCheck: boolean;
  stateNotificationCheck: boolean;
  stateUnassignedApplicantCheck: boolean;
  stateYesIHaveContributionLotOrLandSavings: boolean;
  stateDontHaveContributionLotOrLandSavings: boolean;
}
export interface FormThreeItem {
  //variable auxiliar
  lotOwnerNameAuxiliary: string;
  numberIdentificationOwnerAuxiliary: number | "";
  realEstateRegisNumberAuxiliary: number | "";
  deepRegisDateAuxiliary: string;
  // ahorro programado uno
  scheduledNameOwner: MasterItemOwner;
  scheduledSavingsVl: number | "";
  scheduledSavingsCapturingEntity: MasterItem;
  scheduledSavingsAccountNumber: number | "";
  scheduledSavingsCertificationDate: string;
  scheduledSavingsOpeningDate: string;
  // ahorro programado dos
  scheduledNameOwnerTwo: MasterItemOwner;
  scheduledSavingsVlTwo: number | "";
  scheduledSavingsCapturingEntityTwo: MasterItem;
  scheduledSavingsAccountNumberTwo: number | "";
  scheduledSavingsCertificationDateTwo: string;
  scheduledSavingsOpeningDateTwo: string;
  // ahorro programado three
  scheduledNameOwnerThree: MasterItemOwner;
  scheduledSavingsVlThree: number | "";
  scheduledSavingsCapturingEntityThree: MasterItem;
  scheduledSavingsAccountNumberThree: number | "";
  scheduledSavingsCertificationDateThree: string;
  scheduledSavingsOpeningDateThree: string;
  ///// ahorro contractual uno
  contractualScheduledNameOwner: MasterItemOwner;
  contractualscheduledSavingsVl: number | "";
  contractualCapturingEntity: MasterItem;
  contractualAccountNumber: number | "";
  contractualCertificationDate: string;
  contractualOpeningDate: string;
  ///// ahorro contractual dos
  contractualScheduledNameOwnerTwo: MasterItemOwner;
  contractualscheduledSavingsVlTwo: number | "";
  contractualCapturingEntityTwo: MasterItem;
  contractualAccountNumberTwo: number | "";
  contractualCertificationDateTwo: string;
  contractualOpeningDateTwo: string;
  ///// ahorro contractual tres
  contractualScheduledNameOwnerThree: MasterItemOwner;
  contractualscheduledSavingsVlThree: number | "";
  contractualCapturingEntityThree: MasterItem;
  contractualAccountNumberThree: number | "";
  contractualCertificationDateThree: string;
  contractualOpeningDateThree: string;

  //// ahorro periodico uno
  periodicdNameOwner: MasterItemOwner;
  periodicContributionsVl: number | "";
  periodicCapturingEntity: MasterItem;
  periodicCertificationDate: string;
  periodicFirstPayment: string;
  //// ahorro periodico dos
  periodicdNameOwnerTwo: MasterItemOwner;
  periodicContributionsVlTwo: number | "";
  periodicCapturingEntityTwo: MasterItem;
  periodicCertificationDateTwo: string;
  periodicFirstPaymentTwo: string;
  //// ahorro periodico tres
  periodicdNameOwnerThree: MasterItemOwner;
  periodicContributionsVlThree: number | "";
  periodicCapturingEntityThree: MasterItem;
  periodicCertificationDateThree: string;
  periodicFirstPaymentThree: string;
  /// cesantias uno
  severanceNameOwner: MasterItemOwner;
  severancePackageVl: number | "";
  severancePackageCapturingEntity: MasterItem;
  severancePackageImmobilizationDate: string;
  severancePackageCertificationDate: string;
  /// cesantias dos
  severanceNameOwnerTwo: MasterItemOwner;
  severancePackageVlTwo: number | "";
  severancePackageCapturingEntityTwo: MasterItem;
  severancePackageImmobilizationDateTwo: string;
  severancePackageCertificationDateTwo: string;
  //// cesantias tres
  severanceNameOwnerThree: MasterItemOwner;
  severancePackageVlThree: number | "";
  severancePackageCapturingEntityThree: MasterItem;
  severancePackageImmobilizationDateThree: string;
  severancePackageCertificationDateThree: string;
  //cuota inicial uno
  downPaymentNameOwner: "";
  downPaymentVl: number | "";
  downPaymentCapturingEntity: string;
  downPaymentCertificationDate: string;
  downPaymentFirstPayment: string;
  //cuota inicial dos
  downPaymentNameOwnerTwo: "";
  downPaymentVlTwo: number | "";
  downPaymentCapturingEntityTwo: string;
  downPaymentCertificationDateTwo: string;
  downPaymentFirstPaymentTwo: string;
  //cuota inicial tres
  downPaymentNameOwnerThree: "";
  downPaymentVlThree: number | "";
  downPaymentCapturingEntityThree: string;
  downPaymentCertificationDateThree: string;
  downPaymentFirstPaymentThree: string;
  contributionLandVl: number | "";
  contributionlaborVl: number | "";
  approvedCredit: number | "";
  preApprovedCredit: number | "";
  solidarityContributions: number | "";
  territorialEntityContribution: number | "";
  donationOtherEntities: number | "";
  AnotherResources: number | "";
  entityCreditApprovedPreApproved: string;
  dateCreditApprovedPreApproved: string;
}

export interface FormFourItem {
  solutionModality: MasterItem;
  deepRegisDate: string;
  lotOwnerName: string;
  realEstateRegisNumber: number | "";
  numberIdentificationOwner: number | "";
  solutionModalityCity: MasterItem;
  solutionModalityNeighborhood: string;
  requestedSubsidyVl: number | "";
  vlSFV: number | "";
  vlNewHome: number | "";
  vlBudget: number | "";
  vlLotCadastral: number | "";
  totalVlOwnSiteConstruction: number | "";
  totalPreviousSavings: number;
  otherComplementaryResources: number;
  totalHousingFinancing: number;
}

export interface MasterItemOwner {
  id: string;
  name: string;
  numberIdentification: string;
}

export interface MasterStateCitiesTopVis {
  dataCitiesTopVis: MasterItemCityTopVis[];
  error: string;
  loading: boolean;
}
export interface DocumentItem {
  id: string;
  postulation: string;
  documentation_type: string;
  document_name: string;
  url_doc: string;
  dt_creation: Date | null;
  dt_update: Date | null;
  owner: string;

  // uploadFile: File | null
}

export interface PostulationItem {
  id: string;
  form: PostulationFormItem;
  dt_settled: string;
  dt_update: string;
  postulation_state: string;
  user: string;
  reference: string;
  version: number;
  url_pdf: string;
  date_rejected_postulation: string;
}

export interface PostulationState {
  postulations: PostulationItem[];
  postulationId: string;
  postulationForm: PostulationFormItem;
  postulationDocs: DocumentItem[];
  documentWithoutAssignment: MasterDocumentWithoutAssignment[];
  postulationType: string;
  isPostulantWithoutAssignment: boolean;
  sending: boolean;
  formState: string;
  forwardTo: string;
  isFovisAvailability: Availability;
  selectHomeMember: FormTwoItem[];
  isMobile: boolean;
  loading: boolean;
  loadingDocs: boolean | null;
  loadingSuccess: boolean;
  cesantiesEntity: MasterItem[];
  scheduledSavingsEntity: MasterItem[];
  periodicContributionsEntity: MasterItem[];
  contractualSavingsEntity: MasterItem[];
  userExists: boolean;
  isClearDocsDone: boolean;
  savingsResumeState: boolean;
  answersRequeriments: answersRequeriments;
  pendingDocsMembers: [] | string[];
  homeMemberDocs: string;
  modalityAux?: Modality;
  createEndVideo?: DataRegisterVideoYoutube;
  videoId?: string;
  registerVideoPostulation: DataRegisterVideoYoutube[];
}
export interface Modality {
  modality: string;
  type: string;
}

export interface FormTwoItem {
  id?: string;
  headHousehold: string;
  name: string;
  lastName: string;
  birthDate: string;
  tpDocument: MasterItem;
  numberIdentification: number | "";
  relationship: MasterItem;
  specialCondition: MasterItem;
  tpPostulant: MasterItem;
  civilStatus: MasterItem;
  gender: MasterItem;
  occupation: MasterItem;
  mntIncome: number;
  haveAffiliationCompensationFund: MasterItem;
  nameAffiliationCompensationFund: MasterItem;
  haveSeveranceFund: MasterItem;
  nameSeveranceFund: MasterItem;
}

export interface MasterState {
  data: MasterItem[];
  error: string;
  loading: boolean;
}
export interface MasterStatePostulantType {
  dataPostulantType: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateTpDocument {
  dataTpDocument: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateOccupation {
  dataOccupation: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateLayoffsEntities {
  dataLayoffsEntities: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateFinancialEntities {
  dataFinancialEntities: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateSpecialCondition {
  dataSpecialCondition: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateCivilStatus {
  dataCivilStatus: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateRelationship {
  dataRelationship: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateGender {
  dataGender: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateCityTopVis {
  data: MasterItemCityTopVis[];
  error: string;
  loading: boolean;
}

export interface Availability {
  available: boolean;
  next_enabled_date: string;
  next_closing_date: string;
}

export interface DataRegisterVideoYoutube {
  postulation: string;
  video: string | undefined;
}

export interface MasterDocumentWithoutAssignment {
  id: string;
}

export interface BasicDataFormItem {
  basicData: FormItemBasicData;
}

export interface FormItemBasicData {
  headName: string;
  headLastName: string;
  headTpDocument: MasterItem;
  headNumberIdentification: string;
  headGender: MasterItem;
  headCivilStatus: MasterItem;
  homeAddress: MasterItemAddress;
  homeNeighborhood: string;
  homeLocation: MasterItem;
  homePhoneOne: string;
  homePhoneTwo: string;
  email: string;
  //subsidio vivienda
  ownerName: string;
  project: MasterItemProject;
  companyName?: string;
  companyAddress: MasterItemAddress;
  companyLocation: string;
  company: MasterItemCompany;
  workAddress: MasterItemAddress;
  workLocation: MasterItem;
  workPhoneOne: string;
  workPhoneTwo: string;
  id?: string;
  headHousehold: string;
  headRelationship: string;
  headSpecialCondition: MasterItem;
  headOccupation: MasterItem;
  headMntIncome: number;
  headTpPostulant: MasterItem;
  //fosfec
  postulateMode: MasterItem;
}

export interface MasterStateTest {
  data: boolean;
  error: string;
  loading: boolean;
}

export interface MasterDocumentTypes {
  id: string;
  name: string;
  abbreviation: string;
}

export interface FormOneItem {
  ownerName: string;
  project: MasterItemProject;
  homeAddress: MasterItemAddress;
  homeNeighborhood: string;
  homeLocation: MasterItem;
  homePhoneOne: string;
  homePhoneTwo: string;
  companyName?: string;
  companyAddress: MasterItemAddress;
  companyLocation: string;
  companyAddressNew: string;
  companyLocationNew: string;
  company: MasterItemCompany;
  workAddress: MasterItemAddress;
  workLocation: MasterItem;
  workPhoneOne: string;
  workPhoneTwo: string;
  id?: string;
  headHousehold: string;
  headName: string;
  headLastName: string;
  headBirthDate: string;
  headTpDocument: MasterItem;
  headNumberIdentification: number;
  headRelationship: string;
  headSpecialCondition: MasterItem;
  headCivilStatus: MasterItem;
  headGender: MasterItem;
  headOccupation: MasterItem;
  headMntIncome: number;
  headTpPostulant: MasterItem;
  headCellPhone: number;
  solutionModalityId: string;
  headSeveranceFund: MasterItem;
  solutionModalityCity: { id: string; name: string };
}

export interface MasterItemProject {
  id: string;
  name: string;
  offerer: string;
  description: string;
  sap_code: string;
  solution_modality: MasterItem;
  zone: MasterItem;
  location_id?: string;
}
export interface MasterStateProject {
  data: MasterItemProject[];
  error: String;
  loading: boolean;
}

export interface MasterItemCompany {
  id: string;
  name: string;
  sap_code: string;
  number_identification: string;
  address: string;
  telephone: string;
  municipality: string;
  municipality_name: string;
  region: string;
  region_name: string;
  search_company: string;
}
export interface MasterItemAddress {
  id: string;
  mainRoad: MasterItem;
  mainRoadNumber: string;
  mainRoadLetter: MasterItem;
  sectorIdentification: string;
  roadNumber: string;
  suffixLetter: MasterItem;
  propertyNumber: string;
  otherFeatures: string;
  fullAddress: string;
}

export interface MasterStateCompany {
  dataCompany: MasterItemCompany[];
  name: string;
  error: string;
  loading: boolean;
}

export interface MasterItemNew {
  label: string;
  value: string;
}

export interface MasterStateTest {
  data: boolean;
  error: string;
  loading: boolean;
}

export interface MasterItemProject {
  id: string;
  name: string;
  offerer: string;
  description: string;
  sap_code: string;
  solution_modality: MasterItem;
  zone: MasterItem;
}

export interface MasterItemCityTopVis {
  location: string;
  name: string;
}

export interface DeviceDetect {
  isBrowser: boolean;
  browserMajorVersion: string;
  browserFullVersion: string;
  browserName: string;
  engineName: string;
  engineVersion: string;
  osName: string;
  osVersion: string;
  userAgent: string;
}

export interface InfoClient {
  browserInfo: DeviceDetect;
  deviceType: string;
}

export type ReactSubmitEvent =
  | React.FormEvent<HTMLFormElement>
  | React.FocusEvent<HTMLInputElement>;

export type ReactMouseEvent =
  | MouseEvent
  | React.MouseEvent<HTMLDivElement>
  | React.MouseEvent<HTMLButtonElement>
  | React.ChangeEvent<HTMLSelectElement>;

export interface User {
  [anyProp: string]: any;
}
export interface AuthState {
  loadingAuth: boolean;
  currentUser: User;
  accessToken: string;
  isAuthenticated: boolean;
  error?: string;
  isAffiliateValid: string;
}
export interface FormNavigationItem {
  selectProject: boolean;
  informationPersonalOne: boolean;
  informationPersonalTwo: boolean;
  homeEconomy: boolean;
  homeMembers: boolean;
  selectScheduledSavings: boolean;
  hasLayOffs: boolean;
  initialFee: boolean;
  periodicContributions: boolean;
  contractualVoluntarySavings: boolean;
  contributionLotOrLandSavings: boolean;
  previousSavingsMenu: boolean;
  informationOwnerEntity: boolean;
  selectTypeCreditApprovedOrPre: boolean;
  complementaryResource: boolean;
  savingsSummary: boolean;
  homeValueSummary: boolean;
  documentLandRegister: boolean;
  documentValueBudget: boolean;
  documentIdentityWorker: boolean;
  applicationSummary: boolean;
  documentList: boolean;
  workForceSavings: boolean;
}

export interface FormMenuAccordion {
  sectionOne: MenuAccordionItem;
  sectionTwo: MenuAccordionItem;
  sectionThree: MenuAccordionItem;
  sectionFour: MenuAccordionItem;
  sectionFive: MenuAccordionItem;
}

export interface MenuAccordionItem {
  id: number;
  isVisible: boolean;
}

export interface MasterItemAffiliationCompensationFund {
  dataAffiliationCompensationFund: MasterItem[];
  error: string;
  loading: boolean;
}

export interface MasterStateNavigation {
  loadingButton: boolean;
  disableButton: boolean;
}

export interface answersRequeriments {
  firstQuestion: boolean | null;
  secondQuestion: boolean | null;
  thirdQuestion: boolean | null;
  fourthQuestion: boolean | null;
  fifthQuestion: boolean | null;
}

export interface RequiredDocument {
  id: string;
  document: DocumentType;
  docName?: string;
  docDescription?: string;
  hasDocumentInDB?: boolean;
}

export interface DocumentationState {
  postulationDocs: DocumentItem[];
  error: string;
  loading: boolean;
  familyDocument: MasterItemDocs;
}

export interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  size?: number;
}
export interface RootState {
  authState: AuthState;
  postulationState: PostulationState;
  projectsState: MasterStateProject;
  genderState: MasterStateGender;
  typeDocumentsState: MasterStateTpDocument;
  civilStatusState: MasterStateCivilStatus;
  specialConditionsState: MasterStateSpecialCondition;
  postulantTypesState: MasterStatePostulantType;
  relationshipState: MasterStateRelationship;
  OccupationsState: MasterStateOccupation;
  companyState: MasterStateCompany;
  layoffsEntitiesState: MasterStateLayoffsEntities;
  financialEntitiesState: MasterStateFinancialEntities;
  citiesTopVisState: MasterStateCitiesTopVis;
  infoClientState: InfoClient;
  affiliationCompensationFundState: MasterItemAffiliationCompensationFund;
  navigationState: MasterStateNavigation;
  documentationState: DocumentationState;
}
