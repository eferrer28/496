import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from 'ionic-native';


@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})

export class Cam {
    imgSrc: any;

  constructor() {}

  actionCamera(){
    let options : CameraOptions = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.PNG,
        targetHeight:500,
        targetWidth: 500,
       // saveToPhotoAlbum: false
    };
    Camera.getPicture(options).then((imageUri) => {
        this.imgSrc = imageUri;
    });
  }


}
