import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ConnectService } from '../core/connect.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  form;
  public mobile:boolean = false;

  constructor(public connectService: ConnectService, private formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
      assunto: 'DEMO',
      name: '',
      country: '',
      soundcloud: '',
      instagram: '',
      aboutyou: '',
      email: '',
      yearsmusicproduction: '',
      youtube: '',
      facebook: '',
      somethingspecial: '',
    })
  }

  ngOnInit() {
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  async sendForm(){
    await this.connectService.sendMail(this.form.value).subscribe(res => {
      this.form.reset();
      alert('E-mail enviado!')
    });
  }

}
