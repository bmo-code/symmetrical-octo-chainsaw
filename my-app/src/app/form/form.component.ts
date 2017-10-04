import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Item } from '../item';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output()
  formResult: EventEmitter<Item>;

  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private _CollectionService: CollectionService
  ) {
    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2)
    ]);
    this.refCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);
    this.stateCtrl = fb.control(0);
    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
    this.formResult = new EventEmitter();
   }

  ngOnInit() {
  }

  emitResult() {
    console.log(this.form.value);
    this._CollectionService.addItem({
        name: this.form.get('name').value,
        reference: this.form.get('ref').value,
        state: this.form.get('state').value
      });
    /*this.formResult.emit({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });*/
    this.open();
    this.resetForm();
  }

  test() {
    console.log(this.form.get('ref').errors);
  }

  resetForm() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  isInError(field: string) {
    return this.form.get(field).dirty && this.form.get(field).hasError('minlength');
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajouté !';
    //setInterval(() => modalRef.close(), 5000);
  }

}
