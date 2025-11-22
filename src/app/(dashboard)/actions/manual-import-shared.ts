export type ManualImportResult = {
  success: boolean;
  message: string;
  errors?: string[];
};

export const manualImportInitialState: ManualImportResult = {
  success: false,
  message: ''
};

