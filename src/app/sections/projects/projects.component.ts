import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardProjectComponent } from 'src/app/shared/components/card-project/card-project.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule, CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  
}
