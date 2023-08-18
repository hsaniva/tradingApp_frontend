import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cancel-order-button',
  templateUrl: './cancel-order-button.component.html',
  styleUrls: ['./cancel-order-button.component.css']
})
export class CancelOrderButtonComponent {
  display="none";

  @Input()
  id :string ="";

  openModal() {
    this.display = "block";
    console.log(this.id);
  }
  onCloseHandled() {
    this.display = "none";
  }

  onCancelHandled() {
    this.display = "none";
    
  }


}
