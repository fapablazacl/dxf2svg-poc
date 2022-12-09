import { Component, OnInit } from '@angular/core';
import { DxfViewer } from "dxf-viewer"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dxf2svg-poc';

  ngOnInit() {
    DxfViewer.SetupWorker()
  }
}
