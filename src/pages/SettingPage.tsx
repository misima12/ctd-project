import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SettingPage = () => {
  const navigate = useNavigate();

  const [notificationTime, setNotificationTime] = useState("オフ");

  // 初期値を localStorage から読み込む
  useEffect(() => {
    const saved = localStorage.getItem("notificationTime");
    if (saved) {
      setNotificationTime(saved);
    }
  }, []);

  // 選択が変わったら保存
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setNotificationTime(value);
    localStorage.setItem("notificationTime", value);
  };

  return (
    <div style={{ color: "white", backgroundColor: "gray", height: "90vh", width: "50vw" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "10vh" }}>
        <button onClick={() => navigate('/')}>❌</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", justifyContent: "center", padding: "16px" }}>
        <button onClick={() => navigate('/PersonalityDiagnosis')}>性格診断</button>
        <br />
        <label style={{ marginBottom: "8px" }}>通知タイミングを選択：</label>
        <select value={notificationTime} onChange={handleChange}>
          <option value="オフ">オフ</option>
          <option value="30分前">30分前</option>
          <option value="1時間前">1時間前</option>
          <option value="3時間前">3時間前</option>
          <option value="6時間前">6時間前</option>
          <option value="12時間前">12時間前</option>
          <option value="1日前">1日前</option>
          <option value="3日前">3日前</option>
          <option value="7日前">7日前</option>
        </select>
      </div>
    </div>
  );
};

export default SettingPage;
