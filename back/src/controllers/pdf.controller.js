//LISTA DE ESPERA
//cintas en lista de espera (consulta de tipo inner para obtener el nombre de la pelicula segun el id de la cinta)
//socio que la requiere (al darle click al boton de solicitar y no tiene cintas disponibles se agrega a la tabla y se agrega el nombre del socio)
//Socio qeu debe devolver
//Dias de retraso y su numero de telefono

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { obtenerFichasEspera } from './ficha.controller.js';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generarTablaPDF = async (req, res) => {
  try {
    const fichasEspera = await obtenerFichasEspera();

    const doc = new jsPDF();

    const fechaActual = new Date();
    doc.setFontSize(12);
    doc.text(`Fecha: ${fechaActual.toLocaleDateString()}`, 10, 10);
    doc.text('Autor: Ayoria Chagua', 10, 20);

    const headers = ['Pelicula', 'Socio Solicitante', 'Nro del Solicitante','Socio Retrasado', 'Días de Retardo'];

    const data = fichasEspera.map((ficha) => [
      ficha.pelicula.nombre,
      ficha.socioSolicitante.nombre,
      ficha.socioSolicitante.telefono,
      ficha.socioRetrasado.nombre,
      ficha.diasDeRetardo
    ]);
    
    console.log(data)

    doc.autoTable({
      head: [headers],
      body: data,
      margin: { top: 30 },
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=tabla-ficha-lista-espera.pdf');
    res.contentType('application/pdf');
    res.send(Buffer.from(doc.output('arraybuffer')));
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el PDF' });
  }
};


