import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() total : any;
  @Input() quantity : any;

  button = {
    text : 'CHECKOUT',
    style : 'button checkout-button'
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: '300px',
      width: '400px',
      data: { total: this.total}
    });

    dialogRef.afterClosed().subscribe(res => {
    });
  }

}
