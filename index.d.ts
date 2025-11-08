declare module '@apiverve/contactextractor' {
  export interface contactextractorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface contactextractorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class contactextractorWrapper {
    constructor(options: contactextractorOptions);

    execute(callback: (error: any, data: contactextractorResponse | null) => void): Promise<contactextractorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: contactextractorResponse | null) => void): Promise<contactextractorResponse>;
    execute(query?: Record<string, any>): Promise<contactextractorResponse>;
  }
}
