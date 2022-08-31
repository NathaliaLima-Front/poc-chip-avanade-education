import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ativacao-chip',
  templateUrl: './ativacao-chip.component.html',
  styleUrls: ['./ativacao-chip.component.sass']
})
export class AtivacaoChipComponent implements OnInit {
  cliente: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  cadastroFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
  });
  documentsFormGroup = this._formBuilder.group({
    cpfCnpj: ['', Validators.required],
  });

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
}
