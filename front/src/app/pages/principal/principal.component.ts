import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  cintasDisponibles: any[] = [];
  socioSeleccionado: string = '';
  sociosDisponibles: any[] = [];
  cintaSeleccionada: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerCintasDisponibles();
    this.obtenerSociosDisponibles();
  }

  obtenerCintasDisponibles() {
    this.http.get<any>('http://localhost:5000/api/cinta').subscribe(
      response => {
        this.cintasDisponibles = response.cintasDisponibles;
      },
      error => {
        console.error(error);
      }
    );
  }

  obtenerSociosDisponibles() {
    this.http.get<any>('http://localhost:5000/api/socio').subscribe(
      response => {
        this.sociosDisponibles = response;
      },
      error => {
        console.error(error);
      }
    );
  }

  enviarFormulario() {
    const formData = {
      numeroCinta: this.cintaSeleccionada,
      nombreSocio: this.socioSeleccionado,
      fechaLlevar: (document.getElementById('fecha') as HTMLInputElement).value
    };

    console.log(formData); // Verificar los datos en la consola

    this.http.post('http://localhost:5000/api/ficha/prestamo', formData).subscribe(
      response => {
        console.log('Formulario enviado con éxito:', response);
        // Realiza cualquier acción adicional después de enviar el formulario
      },
      error => {
        console.error('Error al enviar el formulario:', error);
      }
    );
  }
}
