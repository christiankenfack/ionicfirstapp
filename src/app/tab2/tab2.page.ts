import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}

  async addPhotoToGallery(){
    this.photoService.addNewToGallery()

  }
    
  }  

