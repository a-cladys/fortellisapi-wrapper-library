"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortellisTypescriptLibraryExam = void 0;
class FortellisTypescriptLibraryExam {
    // Constructor
    constructor(authorization_key, subscription_id) {
        this.authorization_key = authorization_key;
        this.subscription_id = subscription_id;
    }
    async postRequest(reqURL, body) {
        return new Promise(async (resolve, reject) => {
            const axios = require('axios');
            await axios.post(reqURL, body, {
                headers: {
                    'Authorization': this.authorization_key,
                    'Subscription-Id': this.subscription_id,
                    "content-type": "application/json",
                }
            })
                .then((res) => {
                return resolve(res);
            })
                .catch((error) => {
                return reject(error);
            });
        });
    }
    async getRequest(reqURL) {
        return new Promise(async (resolve, reject) => {
            const axios = require('axios');
            await axios.get(reqURL, {
                headers: {
                    'Authorization': this.authorization_key,
                    'Subscription-Id': this.subscription_id
                }
            })
                .then((res) => {
                return resolve(res);
            })
                .catch((error) => {
                return reject(error);
            });
        });
    }
    async deleteRequest(reqURL) {
        return new Promise(async (resolve, reject) => {
            const axios = require('axios');
            await axios.delete(reqURL, {
                headers: {
                    'Authorization': this.authorization_key,
                    'Subscription-Id': this.subscription_id
                }
            })
                .then((res) => {
                return resolve(res);
            })
                .catch((error) => {
                return reject(error);
            });
        });
    }
}
exports.FortellisTypescriptLibraryExam = FortellisTypescriptLibraryExam;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ydGVsbGlzLWxpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZm9ydGVsbGlzLWxpYnJhcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSw4QkFBOEI7SUFNdkMsY0FBYztJQUNkLFlBQVksaUJBQXlCLEVBQUUsZUFBdUI7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFZO1FBQzFDLE9BQU8sSUFBSSxPQUFPLENBQU0sS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUU5QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQzNCLE9BQU8sRUFBRTtvQkFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtvQkFDdkMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQ3ZDLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2FBQ0osQ0FBQztpQkFDRyxJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEVBQUU7Z0JBQzNCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXhCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDbEIsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUE7UUFFVixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQWM7UUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBTSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBRTlDLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNwQixPQUFPLEVBQUU7b0JBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7b0JBRXZDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlO2lCQUMxQzthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxFQUFFO2dCQUMzQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV4QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7Z0JBQ2xCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBRVYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFjO1FBQzlCLE9BQU8sSUFBSSxPQUFPLENBQU0sS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUU5QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsT0FBTyxFQUFFO29CQUNMLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO29CQUV2QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsZUFBZTtpQkFDMUM7YUFDSixDQUFDO2lCQUNHLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRTtnQkFDM0IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUNsQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQTtRQUVWLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKO0FBOUVELHdFQThFQyJ9