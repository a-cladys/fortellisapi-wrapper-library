"use strict";
exports.__esModule = true;
exports.FortellisTypescriptLibraryExam = void 0;
var FortellisTypescriptLibraryExam = /** @class */ (function () {
    // Constructor
    function FortellisTypescriptLibraryExam(authorization_key, subscription_id) {
        this.authorization_key = authorization_key;
        this.subscription_id = subscription_id;
    }
    FortellisTypescriptLibraryExam.prototype.callApi = function (reqType, reqURL) {
        if (reqType == "GET") {
            var axios = require('axios');
            // Try get in typescript fortellis API  Get Function 
            // GET Request - Fortellis API
            axios.get(reqURL, {
                headers: {
                    'Authorization': this.authorization_key,
                    'Subscription-Id': this.subscription_id
                }
            })
                .then(function (res) {
                return res.data;
                //console.log(res.data)
            })["catch"](function (error) {
                return error;
                //console.error(error)
            });
        }
        else if (reqType == "GET") {
            return "Post Underdevelopment ";
        }
        else {
            return "Sorry " + reqType + " is Not Supported";
        }
    };
    // Methods 
    FortellisTypescriptLibraryExam.prototype.getRequest = function () {
        return 'authorization_key: ' + this.authorization_key + ', subscription_id: ' + this.subscription_id;
    };
    return FortellisTypescriptLibraryExam;
}());
exports.FortellisTypescriptLibraryExam = FortellisTypescriptLibraryExam;
