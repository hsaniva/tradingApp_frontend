import { Input,Component } from '@angular/core';

@Component({
  selector: 'app-update-order-button',
  templateUrl: './update-order-button.component.html',
  styleUrls: ['./update-order-button.component.css']
})
export class UpdateOrderButtonComponent {

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
  // add comment

  onCancelHandled() {
    this.display = "none";
    
  }
}
