import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { AuthService } from '../_services/auth.service';
import { EventBusService } from '../_services/EventBusService';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  siteLanguage: string = 'English';
  siteLocale!:string;

  public searchForm!:FormGroup;
  title: string = "";

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showClerkBoard = false;
  username?: string;
  eventBusSub?: Subscription;

  languageList = [  
    { code: 'en', label: 'English' },  
    { code: 'fr', label: 'Français' },  
  
  ];

  isEnglish!: boolean;

  constructor( 
    private router:Router,
    private formBuilder: FormBuilder,
    private tokenStorageService: TokenStorageService,
    private eventBusService: EventBusService,
    private authService: AuthService) { 
      this.searchForm = this.formBuilder.group({
        search: ''
      });
    }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showClerkBoard = this.roles.includes('ROLE_CLERK');
      this.username = user.username;
    }
    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;

    if (window.location.pathname.split('/')[1] == "fr"){
      this.isEnglish = false;
    }
    else if (window.location.pathname.split('/')[1] == "en"){
      this.isEnglish = true;
    }

  }
  ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    this.showClerkBoard = false;

    this.authService.logout();
    
  }

  public Search(): void{
    this.title=this.searchForm.get('search')?.value;
    if(this.title == ""){
      this.router.navigate(['/home']);
    }
    else{
    this.router.navigate(['/products/title/',this.title]);
       
    }
  }
  
  // public selectLanguage(){
  //   this.siteLocale = window.location.pathname.split('/')[1];
  //   this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;
  // }
  
}
