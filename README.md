# fortellisapi-wrapper-library
**This is a wrapper library for making network(http) requests to Fortellis platform.** 

Please install the library using below comand in the terminal.


```diff

npm i fortellisapi-wrapper-library in green
```
(https://www.npmjs.com/package/fortellisapi-wrapper-library)

To use this wrapper library first you have to import the library using the steps:
```diff
 import {FortellisTypescriptLibraryExam} from 'fortellisapi-wrapper-library'

```


Now that we have imported the library from npm we can use it in our project. 

Create a new object of Fortellis library that we just imported. \
The constructor expects two parameters:
 - authentication key (String)
 - subscription Id (String)


There are **three** types of requests that can be called using this library **(GET,POST,DELETE)**.
```diff
@@ Sample implementation Using Vehicle Specifications API @@
+ GET
getRequest(reqUrl: String)
This method expects the request url and will return the response in case of SUCCESS and wil return the ERROR in case of failure.
 
var fortellisLibraryGet =  new FortellisTypescriptLibraryExam("Basic WWMzUnYxQ0Q2eEcwaUxoanE2bnE4dXJyZ2lCMjNMQUw6eTdoYTdETGdSWkhJUGlBaw==", "test")
var resGet =fortellisLibraryGet.getRequest('https://api.fortellis.io/vehicles/reference/v4/vehicle-specifications/BUIC-VERANO-2012-US')
resGet.then(function (response) {
    console.log("-->> GET RESPONSE: " , response.data);
}).catch(function (err) {
    console.log("-->> GET ERROR: " , err.message);
});
```

```diff
@@ Sample implementation Using CDKDrive Customer API @@
+ POST
postRequest(reqURL: string, body: string)
This method expects the request url and body and will return the response in case of SUCCESS and wil return the ERROR in case of failure.

var fortellisLibraryPost =  new FortellisTypescriptLibraryExam("Basic TUg1N0FndndFb2ZXTTZMckdhWGtyRVkzS2Joa0FiYXM6dEdCM1M4ckhXbHNPdk5adA==", "test")
 var postBody={
    "customerId": "ABCDEFGH012345678"
};

var resPost =fortellisLibraryPost.postRequest('https://api.fortellis.io/cdkdrive/crm/v1/customers/',JSON.stringify(postBody))
resPost.then(function (response) {
    console.log("-->>  POST RESPONSE: " , response.data);
}).catch(function (err) {
    console.log("-->> POST ERROR: " , err.message);
});
```

```diff
@@ Sample implementation Using Elead Sales Opportunities V2 Api @@
+ DELETE
 deleteRequest(reqURL: string)
 This method expects the request url and will return the response in case of SUCCESS and wil return the ERROR in case of failure.

var fortellisLibraryDelete =  new FortellisTypescriptLibraryExam("Basic WHRWUDB3Um5YWVVLUWRRMEdESlVONzA0NEtwb3N5Z2o6RFZBa1N3Q3AydVMxMWF3ZQ==", "test")
var resDelete =fortellisLibraryDelete.deleteRequest('https://api.fortellis.io/sales/v2/elead/opportunities/tradein/b980f525-803c-4339-a2bd-caf0896bf599')
resDelete.then(function (response) {
    console.log("-->> DELETE RESPONSE: " , response);
}).catch(function (err) {
    console.log("-->> DELETE ERROR: " , err.message);
});

```
