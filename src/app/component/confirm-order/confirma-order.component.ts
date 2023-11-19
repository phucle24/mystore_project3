import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullName!: string | null;
  totalPrice!: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.fullName = params.get('fullName');
      this.totalPrice = Number(params.get('totalPrice'));
    });
  }
}
