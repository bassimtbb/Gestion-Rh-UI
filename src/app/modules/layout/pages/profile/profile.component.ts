import { Component } from '@angular/core';
import { Utilisateur } from '../../../../services/models';
import { AuthenticationService, UtilisateurControllerService } from '../../../../services/services';
import { TokenService } from '../../../../services/token/token.service';
import { Router } from '@angular/router';
import {OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  show: boolean = false;
  inputsDisabled = true; 
  utilisateur: Utilisateur | null = null;
  updatedUserInfo: any = {}; // Declare updatedUserInfo object


  constructor(
    private utilisateurService: UtilisateurControllerService,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    // const email = this.tokenService.email;
    // if (email) {
    //   this.utilisateurService.loadUserByUsername({ username: email as string })
    //     .subscribe(utilisateur => {
    //       console.log('Utilisateur retrieved:', utilisateur);
    //       console.log('Utilisateur retrieved:', this.tokenService.token);

    //       this.utilisateur = utilisateur;
    //     });
    // }
  
  }
  toggleInputs() {
    this.inputsDisabled = !this.inputsDisabled;
  }
   toggle() {
     this.show=!this.show;


   }
   logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }


// ProfileComponent modification



}
