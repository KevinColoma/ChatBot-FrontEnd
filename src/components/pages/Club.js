import React from 'react';
import '../../App.css';
import Footer from '../Footer'; // Ruta correcta desde /pages a /components/Footer

export default function Club() {
  return (
    <div style={styles.club}>
      <h1 style={styles.heading}>Clubes</h1>

      {/* Sección Filosofía */}
      <section style={styles.section}>
        <div style={styles.filosofiaCDCDDTContent}>
          <i className="fas fa-cogs" style={styles.icon}></i>
          <h2 style={styles.sectionHeading}>CLUBES DE CULTURALES DE DIFUSIÓN TÉCNICA</h2>
          <p style={styles.paragraph}>
            Son aquellos que se encuentran íntimamente ligados a una especialidad o área de conocimiento y que requieren que sus participantes tengan un guarden relación con el área de desempeño técnico. Estos clubes suelen estar ligados a una carrera de la ESPE y se dedican a la difusión científica de su área. En esta categoría se encuentran clubes activos como: ASOCIACIÓN DE INGENIEROS MECÁNICOS “ASME”, DESARROLLO DE SOFTWARE, ECOLÓGICO, GRUPO ESTUDIANTIL (Earthquake Engineering Research Institute) “EERI-ESPE”, POLÍTICA EXTERIOR Y DIPLOMACIA, RAMA ESTUDIANTIL IEEE, ROBÓTICA, CHACAREROS IASA.
          </p>
        </div>
      </section>

      {/* Separación visual */}
      <div style={styles.separador}></div>

      {/* Sección Misión */}
      <section style={styles.section}>
        <div style={styles.CDCASContent}>
          <i className="fas fa-paint-brush" style={styles.icon}></i>
          <h2 style={styles.sectionHeading}>CLUBES DE CULTURALES ARTÍSTICOS/SOCIALES</h2>
          <p style={styles.paragraph}>
            Son aquellos clubes que mantienen una relación directa con la expresión del arte en todas sus formas, pero que no dependen de una carrera o área de conocimiento específico, sino que sus integrantes pueden ser de cualquier área o carrera, pero se encuentran relacionados con alguna expresión artística. Dentro de esta categoría se encuentran los clubes de: FOTOGRAFÍA, PINTURA, DANZA, MÚSICA, FORMACIÓN CORAL, ARTE EN VIDRIO, ORATORIA, LIDERAZGO, etc.
          </p>
        </div>
      </section>

      {/* Separación visual */}
      <div style={styles.separador}></div>

      {/* Sección Visión */}
      <section style={styles.section}>
        <div style={styles.CDContent}>
          <i className="fas fa-futbol" style={styles.icon}></i>
          <h2 style={styles.sectionHeading}>CLUBES DEPORTIVOS</h2>
          <p style={styles.paragraph}>
            Son aquellos que se encuentran alineados con alguna disciplina deportiva o expresiva física. Dentro de esta categoría se encuentran los los clubes de: BÁSQUET, FÚTBOL, TAEKWONDO, etc.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  club: {
    backgroundColor: '#f7f9fc',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    color: '#004080',
    fontSize: '2.5rem',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  sectionHeading: {
    color: '#004080',
    fontSize: '2rem',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.5rem',
    color: '#f39c12',
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
  },
  separador: {
    width: '100%',
    height: '2px',
    backgroundColor: '#004080',
    margin: '40px 0',
  },
  filosofiaCDCDDTContent: {
    backgroundColor: '#e6f7ff',
  },
  CDCASContent: {
    backgroundColor: '#ffe6e6',
  },
  CDContent: {
    backgroundColor: '#e6ffe6',
  },
};
