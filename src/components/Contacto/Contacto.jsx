import './Contacto.css'


const Contacto = () => {
  return (
    <div className="container" id="cartContacto">
      <h1 className="titleContacto">Contactanos</h1>

      <form id='form'>
        <p className="titleForm">Nombre y Apellido:</p>
        <input type="text" placeholder='nombre y apellido' className="inputForm"/>

        <p className="titleForm">E-Mail:</p>
        <input type="email" name="email" placeholder='e-mail' className="inputForm"/>

        <p className="titleForm">Celular:</p>
        <input type="tel" name="phone" placeholder='celular' className="inputForm"/>

        <p className="titleForm">Deje su mensaje:</p>
        <textarea cols="70" rows="10"></textarea>

        <button type="submit" className="btnEnviar">Enviar</button>
      </form>
    </div>
  )
}

export default Contacto