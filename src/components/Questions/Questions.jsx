import Footer from '../Footer/Footer'
import './Questions.css'

const Questions = () => {
  return (
    <div>
      <div className="container cartQuestions">
        <div>
          <h1 className="titleQuestions">Dudas</h1>

          <p className="textQuestions">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, provident, perspiciatis nam quam eius dolor sint aliquam, unde dicta magnam nostrum. Saepe magnam accusantium officia, expedita laboriosam numquam rem pariatur.</p>
          <p className="textQuestions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic quisquam similique non temporibus labore mollitia, recusandae veniam quod nihil ab, minima ipsa dolorum, impedit explicabo ad maiores harum molestias?</p>
        </div>

        <div>
          <h2 className="subtitleQuestions">Cómo comprar</h2>
          <p className="text2Questions">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa reprehenderit asperiores minima magni ex odit perspiciatis nulla impedit ratione, commodi quod necessitatibus laborum eveniet repellat dicta, numquam rerum error quos!</p>

          <h2 className="subtitleQuestions">Métodos de pago</h2>
          <p className="text2Questions">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas! Porro quidem doloremque itaque laborum a ullam, ex at voluptates aspernatur laboriosam distinctio consequatur, iure quod perspiciatis, voluptatem rem. Beatae.</p>

          <h2 className="subtitleQuestions">Método de envio</h2>
          <p className="text2Questions">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias praesentium at error delectus, recusandae fugiat cumque quidem illo commodi tempore deleniti asperiores quo ad repellat nesciunt nostrum atque pariatur explicabo?</p>
        
          <h2 className="subtitleQuestions">Cómo se cual es mi talle?</h2>
          <p className="text2Questions">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias praesentium at error delectus, recusandae fugiat cumque quidem illo commodi tempore deleniti asperiores quo ad repellat nesciunt nostrum atque pariatur explicabo?</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Questions