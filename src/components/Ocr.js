/**
 * Created by arturwojciechowski on 20.07.17.
 */
import React from 'react'
import ocrSpaceApi from 'ocr-space-api'

export default class Ocr extends React.Component {
  render (){

    var options =  {
      apikey: '<406bcc0b8188957>',
      language: 'pol', // Polish
      imageFormat: 'image/png', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
      isOverlayRequired: true
    };

    return (




// Image file to upload
    const imageFilePath = "imageFile.jpg";

// Run and wait the result
    ocrSpaceApi.parseImageFromLocalFile(imageFilePath, options)
      .then(function (parsedResult) {
        console.log('parsedText: \n', parsedResult.parsedText);
        console.log('ocrParsedResult: \n', parsedResult.ocrParsedResult);
      }).catch(function (err) {
      console.log('ERROR:', err);
    });
    )
  }
}