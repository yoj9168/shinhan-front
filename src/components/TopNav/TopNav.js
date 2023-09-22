import Logo from "../../assets/images/logo.svg";
import styles from "./TopNav.module.css";
import Share from "../../assets/images/ic_share.svg";
const TopNav = () => {
  const APP_DOWNLOAD_LINK="https://www.shinhansec.com/siw/customer-center/open-accounts/712501/view.do#appDown";
  const onClickShare = () =>{
    const url = window.document.location.href;
    navigator.clipboard.writeText(url).then(()=>{
      alert("url 링크가 복사되었습니다.");
    })
    .catch((error) => alert("실패했습니다."));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <img src={Logo} alt="logo"></img>
        <div className={styles.rightContainer}>
          <a href={APP_DOWNLOAD_LINK} target="_blank">
            <div className={styles.roundButton}>앱 다운로드</div>
          </a>
          <a href="#" className={styles.shareButton} onClick={onClickShare}>
            <img src={Share} alt="share"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
