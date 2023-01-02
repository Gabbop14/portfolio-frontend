import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMe } from 'src/app/shared/models/about-me';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe?: AboutMe;

  constructor(){}

  ngOnInit(): void {
    
  }

}
