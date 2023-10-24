import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <article
        style={{
          transform: isInView ? 'none' : 'translateY(100px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}>
        {children}
      </article>
    </section>
  );
}

const Index = () => {
  return (
    <div className="layout">
      <Header />
      <Section>
        <section>
          <article className="main">
            <div className="main-tit">
              <strong>Uni's</strong>
              <strong>everyday publishing</strong>
            </div>
            <p className="main-sub">
              '나'와 '타인'을 위한 튼튼한 코드를 작성하고, <br />
              최신기술과 다양한 라이브러리를 사용하려 시도하고 있습니다. <br />
              오늘보다 더 나아진 내일의 나를 위해 열심히 움직이고 있어요!
            </p>
          </article>
        </section>
      </Section>
      <Section>
        <section>
          <article className="profile">
            <div className="profile-img">
              <img src="" alt="profile" />
              <a href="notion">경력기술서</a>
            </div>
            <div className="profile-sub">
              <span>
                about <strong>uni</strong>
              </span>
              <p>
                안녕하세요, 웹 퍼블리셔 이정윤입니다. <br />
                html, css뿐만 아니라 React 환경에서 컴포넌트 단위의 마크업 작업이 가능합니다. <br />
                반응형과 웹 접근성, 웹 표준을 고려한 UI를 만들고 있어요. <br />
                협업을 위한 사람들 사이의 소통을 위한 퍼포먼스와 적극성을 중요하게 생각해요. <br />
                소속감을 중요하게 생각해 팀원들과 작업에 대한 이야기를 나누려고 부단히 노력하는 사람입니다.
              </p>
            </div>
          </article>
        </section>
      </Section>
      <Section>
        <section>
          <article className="work">in</article>
        </section>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
