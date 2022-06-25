import { Component, OnChanges, Input } from "@angular/core";

@Component ({
  selector: 'app-star',
  templateUrl: './star.component.html'
})
export class starComponent implements OnChanges {

  @Input()
  rating: number = 0;

  starWidth!: number;


  ngOnChanges(): void {
    this.starWidth = this.rating * 94 / 5;

  }

}
