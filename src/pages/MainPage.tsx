import { useNavigate } from "react-router";


function MainPage() {

    const navigate = useNavigate();

  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the main page!</p>
      <button onClick={() => navigate('./SettingPage')}>設定ページへ</button>
    </div>
  );
}
export default MainPage;