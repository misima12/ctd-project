import { useNavigate } from "react-router";


function MainPage() {

    const navigate = useNavigate();

    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* ヘッダー */}
          <header style={{ position: "relative", padding: "10px", backgroundColor: "#f8f9fa" }}>
              <button
                  onClick={() => navigate('./SettingPage')}
                  style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px 15px",
                      backgroundColor:"white",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                  }}
              >
                <img
                        src="/image/haguruma.jpeg" // 必要に応じてパスを修正
                        style={{ width: "30px", height: "30px", marginRight: "5px" }}
                    />
              </button>
              <h1>Main Page</h1>
          </header>

          {/* ボディ */}
          <main style={{ flex: 1, padding: "20px" }}>
              <p>Welcome to the main page!</p>
          </main>

          {/* フッター */}
          <footer style={{ padding: "10px", backgroundColor: "#f8f9fa", textAlign: "center" }}>
              <p>© 2025 Your Company</p>
          </footer>
      </div>
  );
}
export default MainPage;