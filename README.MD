# dev-deva

## Installing as a package
```
$ cd server
$ npm install
$ npm start
```
```
$ cd client
$ npm install
$ npm start
```

## API
Method | Endpoint | Description | Query Parameters | Body | Response
------ | -------- | ----------- | ---------------- | ---- | --------
GET    | /asset/search    | get by search | typeOfAsset ,word ,building |  | { asset:[arry data]}
-- | --| -- | -- | -- | --
POST | /asset/create | create asset and subComponentAsset  |  | { "serialNumber": string,"registerDate": string,"building": string,"receivedDate": string,"productName": string,"quantity":number,"pics": object,"isPackage": boolean } | 
-- | --| -- | -- | -- | --
PUT | /asset/update | update asset and subComponentAsset |  | { "assetId": number,"serialNumber": string,"registerDate": string,"building": string","receivedDate": string,"productName": string,"quantity":number,"pics": object,"isPackage": boolean } | 
-- | --| -- | -- | -- | --
DELETE | /asset/delete | delete asset and subComponentAsset |  | { "assetId":number }  | --




