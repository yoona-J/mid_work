import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';

// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import MuseumPage from './views/MuseumPage/MuseumPage.js';
import DetailProductPage from './views/MuseumPage/DetailProductPage/DetailProductPage.js';
import AboutPage from './views/AboutPage/AboutPage.js';
import NFTPage from './views/NFTPage/NFTPage.js';
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"

//admin page
import UploadPage from './views/AdminPage/UploadPage/UploadPage'

function App() {

  const design = () => {
    if (window.location.href === 'http://localhost:3000/' || window.location.href === 'http://3.37.190.182/') {
      return <div style={{display: 'none'}}></div>
    } else {
      return <div style={{ paddingTop: '69px', minHeight: '120px', background: '#282828' }}></div>
    }
  }

  
  return (
      <Suspense fallback={(<div>Loading...</div>)}>
        <Helmet>
          <title>Artudent</title>
          <meta name='description' content="대학생, 신진 작가의 작품을 통해 아이디어를 얻거나 작품을 구매할 수 있는 온라인 전시 갤러리 Artudent입니다." />
          <meta name="keywords" content="아튜던트, 온라인 갤러리, 온라인 전시, 미술 작품, 미술 플랫폼, 미술" />
          <meta name="author" content="Artudent" />

          <meta name="og:site_name" content="Artudent" />
          <meta name="og:title" content="Artudent" />
          <meta name="og:description" content="대학생, 신진 작가의 작품을 통해 아이디어를 얻거나 작품을 구매할 수 있는 온라인 전시 갤러리 Artudent입니다." />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://artudent.co.kr" />
          <meta name="og:image" content="https://artudent.co.kr/favicon.ico" />
        </Helmet>
        <NavBar />
          {design()}
          <Switch>
            <Route exact path="/" component={(LandingPage)} />
            <Route exact path="/museum" component={(MuseumPage)} />
            <Route exact path="/museum/:uploadId" component={(DetailProductPage)} />
            <Route exact path="/about" component={(AboutPage)} />
            <Route exact path="/nft" component={(NFTPage)} />
            <Route exact path="/auth/admin/upload" component={(UploadPage)} />
          </Switch>
        <Footer />
      </Suspense>
  );
}

export default App;
