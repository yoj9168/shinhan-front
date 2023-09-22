import styles from "./GlobalStock.module.css";
import ArrowIcon from "../../assets/images/ic_arrow.svg";
import LinkListItem from "../../components/LinkListItem/LinkListItem";
import EventLogo1 from "../../assets/images/event_logo_1.png";
import EventLogo2 from "../../assets/images/event_logo_2.png";
import EventLogo3 from "../../assets/images/event_logo_3.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStockGlobalEvents } from "../../apis/stockApis";
import EventInfo from "../../components/EventInfo/EventInfo";
import BenefitCard from "../../components/BenefitCard/BenefitCard";

const GlobalStock = () => {
  const [openAccordion1, setOpenAccordion1] = useState(false);
  const [openAccordion2, setOpenAccordion2] = useState(false);
  const navigate = useNavigate();

  const [events, setEvent] = useState();


  useEffect(() =>{
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await getStockGlobalEvents();
    setEvent(response);
  }
  
  const onClickAccordion1 = () => {
    setOpenAccordion1(!openAccordion1);
  };
  const onClickAccordion2 = () => {
    setOpenAccordion2(!openAccordion2);
  };

  const [openState1] = useState(false);
  const [openState2] = useState(true);

  const onClickState1 = () => {
    if(!openState1){
      navigate("/");
    }
    
  }
  const onClickState2 = () => {
    if(!openState2){
      navigate("/global");
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.stockSelect}>
        <p className={`${styles.koreanStock} ${openState1 ? styles.stockClick : ""}`} onClick={onClickState1}>국내주식</p>
        <p className={`${styles.globalStock} ${openState2 ? styles.stockClick : ""}`} onClick={onClickState2}>해외주식</p>
      </div>
      <section className={styles.header}>
        {!events && <div>로딩 중...</div>}

        {events && 
        events.map((event, index)=>(
          <div className={styles.event}>
            <div className={styles.roundBadge}>이벤트 {index + 1}</div>
            <div className={styles.headerSubTitle}>{event.subTitle}</div>
            <div className={styles.headerTitle}>
              <span className={styles.primaryColor}>{event.title}</span>
            </div>
            
          <BenefitCard benefit = {event.benefits[0]}/>
          <div className={styles.infoContainer}>
            <EventInfo
              title="기간"
              text={`${event.startDate}-${event.endDate}`}/>
            <EventInfo title={"대상"} text={event.target}/>
            </div>
            <a href={event.buttonLink} target="_blank">
              <div className={styles.applyButton}>{event.buttonLabel}</div>
            </a>
          </div>
        ))}
         {/* 아코디언 메뉴  */}
        <section className={styles.linkSection}>
        {/* 메뉴 1 */}
        <div>
          <div className={styles.accordionContainer} onClick={onClickAccordion1}>
            <div className={styles.accordionTitle}>투자에 필요한 더~ 많은 혜택</div>
            <img src={ArrowIcon} className={`${styles.arrowIcon} ${openAccordion1 ? styles.arrowOpen : ""}`}/>
          </div>

          <div className={`${styles.linkContentContainer} ${openAccordion1 ? styles.itemOpen : ""}`}>
            <LinkListItem
              subText={"수수료+환전우대 혜택까지"}
              text={"해외주식"}
              imageUrl={EventLogo1}
              linkUrl={"https://digitalshinhansec.com/global"}
            />
          </div>
        </div>

        {/* 메뉴 2 */}
        <div className={styles.accordionContainer} onClick={onClickAccordion2}>
          <div className={styles.accordionTitle}>쉽고 빠른 투자 정보</div>
          <img src={ArrowIcon} className={`${styles.arrowIcon} ${openAccordion2 ? styles.arrowOpen : ""}`}/>
        </div>
        <div className={`${styles.linkContentContainer} ${openAccordion2 ? styles.itemOpen : ""}`}>
            <LinkListItem
              subText={"쉽게 이해되는 투자 콘텐츠가 가득!"}
              text={"<알파TV> 구독하기"}
              imageUrl={EventLogo2}
              linkUrl={"https://www.youtube.com/c/shinhaninvest"}
            />
            <LinkListItem
              subText={"한발 빠르게 만나보는 투자 콘텐츠!"}
              text={"카카오톡 채널 추가하기"}
              imageUrl={EventLogo3}
              linkUrl={"https://pf.kakao.com/_xdnLFd"}
            />
          </div>
      </section>

      {/* 이벤트 유의사항 */}
      <section className={styles.noticeSection}>
        <h4 className={styles.noticeTitle}>※ 이벤트 유의사항</h4>
        <ul className={styles.noticeText}>
          <li>
            기간 내 대상 고객이 이벤트를 신청해야 혜택이 적용되며, 신청 시점
            이후 체결된 거래에 한해 수수료 혜택이 적용됩니다.
          </li>
          <li>
            본 이벤트 생애 첫 계좌 개설 신규 고객 조건은 2023.07.01(토) 이전에
            당사에서 개설한 계좌가 없는 고객(IRP, DB, DC 계좌 제외) 입니다.
          </li>
          <li>
            이벤트 대상 계좌는 ① 비대면 증권종합계좌(신한알파, 모바일 홈페이지,
            신한플러스에서 개설한 계좌 한정), ②은행제휴 S-Lite 한정입니다.
            파운트 등 핀테크 제휴계좌는 제외됩니다.
          </li>
        </ul>
        <footer className={styles.footer}>
          서울특별시 영등포구 여의대로 70 (신한투자증권 타워) <br />
          대표이사 김상태 |사업자등록번호 116-81-36684 <br />
          ©2023 SHINHAN SECURITIES CO.,LTD.
        </footer>
      </section>
      </section>
    </div>
  );
};

export default GlobalStock;