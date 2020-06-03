import { Component,OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SearchbarService } from './searchbar.service';
import { halls } from '../functionhall/models/halls';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
public query : string;

constructor(private searchSvc:SearchbarService,private router:Router){
  
  }
  ngOnInit(){
   
  }
  getFunctionhallByCity(){
    localStorage.setItem('searchItem',this.query);
    this.router.navigateByUrl("/functionhall")

  }
}