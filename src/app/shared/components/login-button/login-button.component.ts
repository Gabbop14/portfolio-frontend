import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'login-button',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTooltipModule, TranslateModule],
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent {
  constructor(private dialog: MatDialog){}

  openLoginModal(): void{
    this.dialog.open(LoginComponent, {
      width: '50vw',
      maxWidth: '400px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms',
    });
  }
}
