import './MiBoton.css';
function MiBoton() {
    const descargarCV = () => {
        const urlPDF = '/cv_simple-Villalba.pdf' ;
        const link = document.createElement('a');
        link.href = urlPDF;
        link.download = 'cv_simple-Villalba.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button className="btn-descargar" onClick={descargarCV}>
            Descargar CV
        </button>
    );
}
export default MiBoton;