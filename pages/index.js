import Layout from "../components/layout/layout";
import { Slider, VerticalSlider, VerticalTest } from "../components/slider/slider";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={s.middle}>
        <div className={s.crop} /* Profile Slider */>
          <Slider
            images={[
              [
                "https://eddencei.sirv.com/profile%20pic/FabianLioner.jpg",
                "Fabian Lioner",
                true,
              ],
            ]}
          />
        </div>
      </div>

      <div className={s.verticalGlow} /* Vertical Slider */>
        <VerticalTest
          content={[
            [
              "https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg",
              "Landing Page",
            ],
            [
              "https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg",
              "E-Commerce",
            ],
            [
              "https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg",
              "Portafolio Digital",
            ],
            [
              "https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg",
              "Showroom",
            ],
          ]}
        />
      </div>
    </Layout>
  );
}
