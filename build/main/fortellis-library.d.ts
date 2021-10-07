export declare class FortellisTypescriptLibraryExam {
    authorization_key: string;
    subscription_id: string;
    constructor(authorization_key: string, subscription_id: string);
    postRequest(reqURL: string, body: string): Promise<any>;
    getRequest(reqURL: string): Promise<any>;
    deleteRequest(reqURL: string): Promise<any>;
}
