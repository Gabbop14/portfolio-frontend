import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export enum SkillsComponentModeEnum{
  Hard = 'hard',
  Soft = 'soft'
}

@Component({
  selector: 'skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input() mode = SkillsComponentModeEnum.Hard;

}
