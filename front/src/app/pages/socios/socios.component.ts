import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  socios: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerSocios();
  }

  // Función para obtener la lista de socios desde el servidor
  obtenerSocios() {
    this.http.get<any[]>('http://localhost:5000/api/socio/').subscribe(
      (response) => {
        this.socios = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Función para generar el informe en formato PDF y descargarlo
  generarReporte() {
    this.http.get('http://localhost:5000/api/pdf/', { responseType: 'blob' }).subscribe(
      (blob: Blob) => {
        // Crear un enlace de descarga
        const downloadLink = document.createElement('a');

        // Establecer la URL del objeto Blob como el href del enlace
        downloadLink.href = URL.createObjectURL(blob);

        // Establecer el nombre del archivo deseado para la descarga
        downloadLink.download = 'laboratorio14-reporte.pdf';

        // Simular un clic en el enlace para iniciar la descarga del archivo
        downloadLink.click();

        // Revocar la URL del objeto Blob para liberar memoria
        URL.revokeObjectURL(downloadLink.href);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
