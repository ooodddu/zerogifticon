import { useEffect, useState } from "react";
import styles from "./pageStyles/GiftBoxDetail.module.css";
import { useParams } from "react-router-dom";
import { getData, TEMP_URL } from "../api";

function GiftBoxDetail() {
  const { giftId } = useParams();
  const [item, setItem] = useState({});

  console.log(giftId);

  const handleLoad = async () => {
    const gifts = await getData(`${TEMP_URL}/${giftId}`);
    setItem(gifts);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  console.log(item);

  return (
    <div className={styles.detail}>
      <img className={styles.itemImg} src={item.img} alt={item.title}></img>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.barcode}>바코드</div>
      <div className={styles.use}>사용기한</div>
      <button className={styles.button}>감사 메세지 보내기</button>
    </div>
  );
}

export default GiftBoxDetail;