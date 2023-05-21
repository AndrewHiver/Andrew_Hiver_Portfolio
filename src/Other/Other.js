import "./Other.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import City from '../Assets/City.png';
import Makima from '../Assets/Makima 1.png';
import Displate from '../Assets/Displate.png';
import Berserk from '../Assets/Dessin1.png';
import Snow from '../Assets/Dessin_Neige.jpg';

function Other() {
    return (
        <div className="Other">
            <Carousel className="main-slide">
                <div>
                    <img src={City} height="565px" width="500px" />
                </div>
                <div>
                    <img src={Makima} height="565px" width="500px" />
                </div>
                <div>
                    <img src={Berserk} height="565px" width="500px" />
                </div>
            </Carousel>
            <br />
            <br />
            <br />
            <h1 className="container">My passion</h1>
            <br />
            <p className="container">One of my passions is drawing. I have been creating digital drawings regularly since 2017, ranging from original characters to landscapes and various other subjects. I have a drawing style that leans towards Flat Art, and I enjoy exploring different techniques and artistic styles.

                Digital drawing allows me to express my creativity in a practical and innovative way. I am constantly inspired by the infinite possibilities offered by digital software and tools, which allows me to experiment and continuously improve my skills. I particularly appreciate the precision and flexibility that digital drawing offers, as well as the ease of editing and sharing my artwork.

                For me, it is a rewarding way to express my ideas and bring my artistic vision to life.
            </p>
            <br />
            <br />
            <br />
            <div className="container">

                <img src={Snow} alt="Ma image" className="image" />
            </div>
            <br />
            <br />
            <br />
            <h1 className="container">My project on Displate</h1>
            <br />
            <p className="container">
                In addition to my passion for digital drawing, I am excited about sharing my artwork with a wider audience and making it accessible in the form of Displates. Displates are high-quality metal prints that provide an elegant and long-lasting presentation of my work.

                I believe that my digital drawings can bring a unique artistic touch to people's living and working spaces. I am committed to creating a diverse and appealing collection of Displates that reflect my artistic style.

                The opportunity to sell my digital drawings as Displates would not only allow me to share my passion but also engage in a business endeavor that motivates me and enables me to further develop my skills as a digital artist.
            </p>
            <br />
            <br />
            <br />
            <div className="container">

                <img src={Displate} alt="Ma image" className="displate" />
            </div>

        </div>
    );
}

export default Other;