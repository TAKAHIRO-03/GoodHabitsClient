import Navbar from "../parts/Navbar";
import Section from "../templates/Section";
import { Link } from "react-router-dom";
import Footer from "../parts/Footer";

export default function HomeView() {

  const whatGoodHabitsText = `GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載GoodHabitsとは？の文言を記載`;
  const featuresText = `特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載特徴紹介の文言を記載`;
  const howToText = `使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載使い方紹介の文言を記載`;
  const everyOneVoiceText = `みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載みんなの声の文言記載`;
  const qaText = `良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載良くある質問を記載`;

  return (
    <div className="home">
      <Navbar />
      <div>
        <h1 className="text">{`覚悟を決める\nやると決めたらもう逃げない`}</h1>
        <ul>
          <li><Link to="/"><span>Webアプリではじめる</span></Link></li>
          <li><Link to="/"><span>iOSアプリで始める</span></Link></li>
          <li><Link to="/"><span>Androidアプリで始める</span></Link></li>
        </ul>
      </div>
      <Section
        title="GoodHabitsとは"
        subtitle={whatGoodHabitsText}
        dark={true}
        id="section1"
      />
      <Section
        title="特徴紹介"
        subtitle={featuresText}
        dark={false}
        id="section2"
      />
      <Section
        title="使い方"
        subtitle={howToText}
        dark={true}
        id="section3"
      />
      <Section
        title="みんなの声"
        subtitle={everyOneVoiceText}
        dark={false}
        id="section4"
      />
      <Section
        title="良くある質問"
        subtitle={qaText}
        dark={true}
        id="section5"
      />
      <Footer />
    </div>
  );
}
