export class FortellisTypescriptLibraryExam {

    // Data members
    authorization_key: string;
    subscription_id: string;

    // Constructor
    constructor(authorization_key: string, subscription_id: string) {
        this.authorization_key = authorization_key;
        this.subscription_id = subscription_id;
    }

    async postRequest(reqURL: string, body: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {

            const axios = require('axios');
            await axios.post(reqURL, body, {
                headers: {
                    'Authorization': this.authorization_key,
                    'Subscription-Id': this.subscription_id,
                    "content-type": "application/json",
                }
            })
                .then((res: { data: JSON; }) => {
                    return resolve(res);

                })
                .catch((error: any) => {
                    return reject(error);
                })

        });
    }

    async getRequest(reqURL: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {

            const axios = require('axios');
            await axios.get(reqURL, {
                headers: {
                    'Authorization': this.authorization_key
                    ,
                    'Subscription-Id': this.subscription_id
                }
            })
                .then((res: { data: JSON; }) => {
                    return resolve(res);

                })
                .catch((error: any) => {
                    return reject(error);
                })

        });
    }

    async deleteRequest(reqURL: string): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {

            const axios = require('axios');
            await axios.delete(reqURL, {
                headers: {
                    'Authorization': this.authorization_key
                    ,
                    'Subscription-Id': this.subscription_id
                }
            })
                .then((res: { data: JSON; }) => {
                    return resolve(res);

                })
                .catch((error: any) => {
                    return reject(error);
                })

        });
    }

}