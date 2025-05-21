import { useNavigate } from "react-router"

const SettingPage = () => {
    const navigate = useNavigate();
    return (
        <div style={{ color: "white", backgroundColor: "gray", height: "90vh", width: "50vw" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "10vh" }}>
                <button onClick={() => navigate('/MainPage')}>❌</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", justifyContent: "center", padding: "16px" }}>
                <button onClick={() => navigate('/PersonalityDiagnosis')}>性格診断</button>
                <br></br>
                <button>通知</button>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", height: "10vh" }}>
                {/* フッター内容があればここに追加 */}
            </div>
        </div>
    )
}

export default SettingPage