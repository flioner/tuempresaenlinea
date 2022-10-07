import Layout from "../components/layout/layout";
import { Slider } from "../components/slider/slider";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={s.middle}>
        <div className={s.crop}>
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
    </Layout>
  );
}
