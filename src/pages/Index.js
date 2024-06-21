import React from 'react';
import style from '../assets/style/pages/index.module.scss';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa';
import workImg1 from '../assets/images/asset/work-com1.png';
import workImg2 from '../assets/images/asset/work-com2.png';
import workImg3 from '../assets/images/asset/work-com3.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SlideUp({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
      }}>
      {children}
    </div>
  );
}

const Index = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <section id="home" class={`${style.home}`}>
          <article className={`${style.main}`}>
            <div className={`${style.mainWrap}`}>
              <SlideUp>
                <div className={`${style.mainTit}`}>
                  <strong>Uni's</strong>
                  <strong>everyday publishing</strong>
                </div>
                <p className={`${style.mainSub}`}>
                  '나'와 '타인'을 위한 튼튼한 코드를 작성하고, <br />
                  최신기술과 다양한 라이브러리를 사용하려 시도하고 있습니다. <br />
                  오늘보다 더 나아진 내일의 나를 위해 열심히 움직이고 있어요!
                </p>
              </SlideUp>
            </div>
          </article>
        </section>
        <section id="profile" className={`${style.profile}`}>
          <article className={`${style.profile}`}>
            <div className={`${style.profileWrap}`}>
              <SlideUp>
                <div className={`${style.profileImg}`}>
                  <img src="" alt="profile" />
                  <a href="https://jeonguni-career.notion.site/cf91240b64674ddbba1d1a0752d094c1?pvs=4" target="_blank">
                    경력기술서
                    <i className="icon-angle">
                      <FaAngleRight />
                    </i>
                  </a>
                </div>
                <div className={`${style.profileSub}`}>
                  <span>
                    about <strong>uni</strong>
                  </span>
                  <p>
                    안녕하세요, 웹 퍼블리셔 이정윤입니다. <br />
                    html, css뿐만 아니라 React 환경에서 컴포넌트 단위의 마크업 작업이 가능합니다. <br />
                    <br />
                    반응형과 웹 접근성, 웹 표준을 고려한 UI를 만들고 있어요. <br />
                    프로젝트의 퍼포먼스 극대화를 위해 사람들 사이의 소통의 적극성을 중요하게 생각해요. <br />
                    <br />
                    소속감을 중요하게 생각해 팀원들과 작업에 대한 이야기를 나누려고 부단히 노력하는 사람입니다.
                  </p>
                </div>
              </SlideUp>
            </div>
          </article>
        </section>
        <section id="work" class={`${style.work}`}>
          <article className={`${style.work}`}>
            <h2 className={`${style.workTit}`}>이런 작업을 했어요!</h2>
            <div className={`${style.workWrap}`}>
              <SlideUp>
                <div className={`${style.workItem}`}>
                  <div className={`${style.workImg}`}>
                    <img src={workImg1} alt="icecream edu image" />
                  </div>
                  <div className={`${style.workDsc}`}>
                    <h3>
                      (주)아이스크림에듀 <sup>23.07 ~ 재직중</sup>
                    </h3>
                    <ul>
                      <li>AI 디지털교과서 퍼블리싱</li>
                      <li>AI Tutor 퍼블리싱</li>
                      <li>Dream Writing 웹버전 전환 퍼블리싱</li>
                      <li>챗봇 체험단 퍼블리싱</li>
                      <li>수학의 세포들 유지보수 담당</li>
                      <li>자사 서비스 퍼블리싱 전담</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp>
                <div className={`${style.workItem}`}>
                  <div className={`${style.workImg}`}>
                    <img src={workImg2} alt="nton image" />
                  </div>
                  <div className={`${style.workDsc}`}>
                    <h3>
                      NtoN<sup>21.08 ~ 23.06</sup>
                    </h3>
                    <ul>
                      <li>포스코 ICT Smart 안전관제 솔루션 개발 참여 및 퍼블리싱</li>
                      <li>대원 칸타빌 브랜드 홈페이지 구축 퍼블리싱</li>
                      <li>태영건설 모바일AS 퍼블리싱</li>
                      <li>CJ 대한통운 건설 차세대 ERP시스템 모바일 구축 퍼블리싱</li>
                      <li>홈페이지 구축 퍼블리싱</li>
                      <li>홈페이지 퍼블리싱 관련 유지보수</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <SlideUp>
                <div className={`${style.workItem}`}>
                  <div className={`${style.workImg}`}>
                    <img src={workImg3} alt="octo image" />
                  </div>
                  <div className={`${style.workDsc}`}>
                    <h3>
                      옥토컴퍼니<sup>21.05 ~ 21.08</sup>
                    </h3>
                    <ul>
                      <li>자사 서비스 홈페이지 디자인</li>
                      <li>자사 서비스 홈페이지 퍼블리싱</li>
                      <li>회사 소개서 및 이미지 작업 다수</li>
                    </ul>
                  </div>
                </div>
              </SlideUp>
              <a href="https://jeonguni-career.notion.site/cf91240b64674ddbba1d1a0752d094c1?pvs=4" target="_blank">
                이외에도 더 많은 작업을 했습니다 :D!
                <i className="icon-angle">
                  <FaAngleRight />
                </i>
              </a>
            </div>
          </article>
        </section>
        <section id="list" class={`${style.list}`}>
          <article class={`${style.listInner}`}></article>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Index;
