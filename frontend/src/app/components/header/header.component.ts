import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/@core/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.tokenStorageService.logout();
  }

}
