import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/authenticate/services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;

  links = [
    {
      route: 'homePage',
      label: 'Accueil'
    },
    {
      route: 'libraryList',
      label: 'Bibliothèque'
    },
    {
      route: 'admin',
      label: 'ADMIN O-O'
    },
  ];

  // links that need the user to be logged in to view
  linksAuth = [
    {
      route: 'gardens',
      label: 'Mes jardins'
    },
    {
      route: 'userAccount',
      label: 'Mon Compte'
    }
  ];

  constructor(public authServ: AuthenticateService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    if (confirm('Se déconnecter ?')) {
      this.authServ.logout().subscribe(
        () => {
          this.router.navigate(['homePage']);
        },
        error => {
          console.log('Error login out' + error);
          alert(error.status + ' : ' + error.statusText);
        }
      );
    }
  }
}
