import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    SharedModule,
    GifsModule,
  ]
})
export class AppComponent {
  title = 'gifApp';
}
