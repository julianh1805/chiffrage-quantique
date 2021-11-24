import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantic-project',
  templateUrl: './quantic-project.component.html',
  styleUrls: ['./quantic-project.component.scss']
})
export class QuanticProjectComponent implements OnInit {

  imageQubit: any = './assets/images/qubits.PNG';
  imageBlock: any = './assets/images/Blocksphere.png';

  constructor() { }

  ngOnInit() {
  }

}
