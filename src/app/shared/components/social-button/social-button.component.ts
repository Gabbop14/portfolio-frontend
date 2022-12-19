import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonConfig } from '../../models/social-button';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'social-button',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTooltipModule],
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent {

  @Input() config: SocialButtonConfig = {
    icon: 'las la-exclamation',
    tooltipLabel: 'Default site',
    link: '#'
  };

}
