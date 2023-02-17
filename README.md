#### Notes
yoembed-react-sdk is a reack SDK.

Any react app can integrate the yoembed-react-sdk into their application and create an embeddable import button.
Please look into the sample Importer App to know about the usage of yoembed-react-sdk.

## Install
- Using NPM
```` bash
npm i yoembed
````

The yoembed-react-sdk connects the YoBulk backend and data engine to the react app through the 
`yoHostUrl` and `importerId` variables passed to yoembed-react-sdk.

````javascript 
                    {importerId ? (
                    <iframe
                      src={`${yoHostUrl}/importer/${importerId}`}
                      title="yocsv"
                      width="100%"
                      height="100%"
                    ></iframe>
                  ) : (
                    <iframe
                      src={`${yoHostUrl}/saasloader/${templateId}`}
                      title="yocsv"
                      width="100%"
                      height="100%"
                    ></iframe>
                  )}


````

                  
                  
                  





