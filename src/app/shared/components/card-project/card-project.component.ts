import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'card-project',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  @ViewChild('cardContent') cardContent?: ElementRef<HTMLElement>;

  hiddenText = false;

  hideText(): void{
    this.hiddenText = !this.hiddenText;
    if(this.cardContent){
      if(this.hiddenText){
        this.cardContent.nativeElement.classList.add('text-blur-out');
      }else{
        this.cardContent.nativeElement.classList.replace('text-blur-out', 'text-focus-in');
      }
    }
  }
}
