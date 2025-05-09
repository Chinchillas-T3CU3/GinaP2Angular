import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ac2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ac2.component.html',
  styleUrls: ['./ac2.component.css']
})
export class Ac2Component {
  inputValor = '';
  pasos: string[] = [];

  actualizarPasos() {
    this.pasos = this.inputValor
      .split(',')
      .map(p => p.trim().toLowerCase())
      .filter(p => p.length > 0);
  }

  getStepStyle(index: number): any {
    return {
      color: this.pasos.length > index ? 'green' : 'red'
    };
  }
}
