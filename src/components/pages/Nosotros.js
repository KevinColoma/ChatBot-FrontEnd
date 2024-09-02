import React from 'react';
import '../../App.css';
import Footer from '../Footer'; // Ruta correcta desde /pages a /components/Footer
import '../Footer.css'; // Ruta correcta desde /pages a /components/Footer.css


export default function Nosotros() {
  return (
    <div className='nosotros'>
      <h1>Nosotros</h1>

      {/* Sección Filosofía */}
      <section className='filosofia'>
        <div className='filosofia-content'>
          <i className="fas fa-lightbulb"></i>
          <h2>Filosofía</h2>
          <p>
            La institución se debe fundamentalmente a la sociedad y Fuerzas Armadas, orientando su esfuerzo en contribuir a la solución de sus necesidades de desarrollo mediante la formación profesional, técnica y científica.
          </p>
          <p>
            Buscamos la excelencia como institución centenaria y referente en la sociedad, practicando principios como el respeto por la dignidad humana y la identidad ESPE, junto con los valores de disciplina, integridad, liderazgo, creatividad, cohesión y efectividad.
          </p>
        </div>
      </section>

      {/* Separación visual */}
      <div className="separador"></div>

      {/* Sección Misión */}
      <section className='mision'>
        <div className='mision-content'>
          <i className="fas fa-rocket"></i>
          <h2>Misión</h2>
          <p>
            La Universidad de las Fuerzas Armadas-ESPE forma personas en el campo científico y tecnológico bajo un marco de principios y valores. Genera conocimiento transferible para contribuir al progreso del país y de las Fuerzas Armadas a través de la docencia, investigación y vinculación con la sociedad.
          </p>
        </div>
      </section>

      {/* Separación visual */}
      <div className="separador"></div>

      {/* Sección Visión */}
      <section className='vision'>
        <div className='vision-content'>
          <i className="fas fa-globe"></i>
          <h2>Visión al 2025</h2>
          <p>
            Al 2025, seremos reconocidos a nivel nacional e internacional como una institución de educación superior de calidad en docencia, investigación y vinculación. Nos convertiremos en un referente de pensamiento en seguridad y defensa, al servicio del país y las Fuerzas Armadas.
          </p>
        </div>
      </section>
    </div>
  );
}
