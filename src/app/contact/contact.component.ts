import { Component, OnInit, HostListener } from '@angular/core';
import { ConnectService } from '../core/connect.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form;
  public mobile:boolean = false;

  constructor(public connectService: ConnectService, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      assunto: 'CONTATO',
      name: '',
      phone: '',
      email: '',
      facebook: '',
      message: '',
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
