import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './user-service.service';
import { User } from './user';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   
  
  data: any;


  ngOnInit() {
   // this.disableCSS();
    //this.disableJavaScript();
  }

  disableCSS() {
    const styles = document.getElementsByTagName('link');
    for (let i = styles.length - 1; i >= 0; i--) {
      styles[i].disabled = true; // Disable CSS
    }
    
    const styleTags = document.getElementsByTagName('style');
    for (let i = styleTags.length - 1; i >= 0; i--) {
      styleTags[i].disabled = true; // Disable inline styles
    }
  }

  disableJavaScript() {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      scripts[i].parentNode?.removeChild(scripts[i]); // Remove scripts
    }
  }
  title = 'felowshipclient';
  

  
}
