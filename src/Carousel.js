import Banner1 from './img/Banner1.png';
import Banner2 from './img/Banner2.png';
import Banner3 from './img/Banner3.png';
import banner4 from './img/banner4.png';

function Carousel() {
  return (
    <div>

      <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">


        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>

        </div>


        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner1} alt="Los Angeles" className="d1"></img>
          </div>
          <div className="carousel-item">
            <img src={Banner2} alt="Chicago" className="d1"></img>
          </div>
          <div className="carousel-item">
            <img src={Banner3} alt="Chicago" className="d1"></img>
          </div>
          <div className="carousel-item">
            <img src={banner4} alt="Chicago" className="d1"></img>
          </div>

        </div>


        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

    </div>
  );
}
export default Carousel;