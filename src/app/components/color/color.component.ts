import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
  filterColor = "";
  constructor(private colorService: ColorService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getColors();

  }
  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentColorClass(color: Color) {
    if (this.currentColor == color)
      return 'list-group-item active';
    else
      return 'list-group-item';

  }

  getAllColorClass() {
    if (!this.currentColor)
      return 'list-group-item active';
    else
      return 'list-group-item';

  }

  CleanCurrentColor() {
    this.currentColor = null;
  }
}
