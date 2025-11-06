import './style.css';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import four from '../../assets/four.png';
import five from '../../assets/five.png';
import six from '../../assets/six.png';
import seven from '../../assets/seven.png';
import eight from '../../assets/eight.png';

function Brand() {
    return (
        <div className="container">
            <div className="one">
                <h4>О НАШЕМ БРЕНДЕ</h4>
                <h2>TRUE - СОВЕРШЕННОE ФИТНЕС-ОБОРУДОВАНИЕ</h2>
            </div>

            <div className="img-one" style={{ backgroundImage: `url(${one})` }}>
                <div>
                    <p>
                        Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями,
                        которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей
                        преданности клиентам и их потребностям.
                    </p>
                    <p>
                        Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до
                        технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным
                        партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.
                    </p>
                    <p>
                        Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на
                        оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу
                        взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и
                        инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.
                    </p>
                    <h4>Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может помочь вашей компании добиться успеха.</h4>
                </div>
            </div>

            <div className="innovations">
                <h1>Наши инновации</h1>
                <div className="box">
                    <div className="boxs">
                        <img src={two} alt="TRUE Palisade" />
                        <p>Тренажер Лестница TRUE Palisade</p>
                    </div>
                    <div className="boxs">
                        <img src={three} alt="Composite Strength" />
                        <p>Функциональный тренинг с Composite Strength</p>
                    </div>
                    <div className="boxs">
                        <img src={four} alt="Stretch Frames" />
                        <p>Рамы для стрейтчинга TRUE Stretch</p>
                    </div>
                

                    <div className="boxs">
                        <img src={five} alt="TRUE Traverse" />
                        <p>Латеральный тренажер TRUE Traverse</p>
                    </div>
                   
                    <div className="boxs">
                        <img src={six} alt="Alpine Runner" />
                        <p>Беговая дорожка TRUE Alpine Runner</p>
                    </div>
                    <div className="boxs">
                        <img src={seven} alt="Spectrum" />
                        <p>Эллиптический тренажер TRUE Spectrum</p>
                    </div>
                </div>
            </div>

            <div className="img-two" style={{ backgroundImage: `url(${eight})` }}>
                <div>
                    <h3>TRUE FITNESS</h3>
                    <h2>Получите эксклюзивное предложение на тренажеры TRUE FITNESS</h2>
                    <p>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
                    <div className="form">
                        <input placeholder="имя" type="text" />
                        <input placeholder="телефон" type="number" />
                        <input placeholder="e-mail" type="text" />
                        <button>отправить</button>
                        <p className="policy">
                            «Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
