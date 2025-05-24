import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

type Task = {
  task: string;
  deadline: string;
  category: string;
};

function MainPage() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("宿題");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("すべて");

  // ✅ ローカルストレージから読み込み
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // ✅ タスクが変わるたびに保存
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task && deadline) {
      setTasks([...tasks, { task, deadline, category }]);
      setTask("");
      setDeadline("");
      setCategory("宿題");
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "宿題": return "#ffcccc";
      case "テスト": return "#ccffcc";
      case "日課": return "#ccccff";
      case "その他": return "#ffffcc";
      default: return "#ffffff";
    }
  };

  const filteredTasks = filter === "すべて"
    ? tasks
    : tasks.filter(t => t.category === filter);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* ヘッダー */}
      <header style={{ position: "relative", padding: "10px", backgroundColor: "#f8f9fa" }}>
        <button
          onClick={() => navigate('/SettingPage')}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "5px 15px",
            backgroundColor: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          <img
            src="/image/haguruma.jpeg"
            style={{ width: "30px", height: "30px", marginRight: "5px" }}
          />
        </button>
        <h1>Main Page</h1>
      </header>

      {/* ボディ */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h2>ToDo タスク追加</h2>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="タスク名"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ marginRight: "10px" }}
          >
            <option value="宿題">宿題</option>
            <option value="テスト">テスト</option>
            <option value="日課">日課</option>
            <option value="その他">その他</option>
          </select>
          <button onClick={handleAddTask}>追加</button>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>カテゴリで絞り込み：</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="すべて">すべて</option>
            <option value="宿題">宿題</option>
            <option value="テスト">テスト</option>
            <option value="日課">日課</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <h3>タスクリスト</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTasks.map((t, index) => (
            <li
              key={index}
              style={{
                backgroundColor: getCategoryColor(t.category),
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px"
              }}
            >
              <strong>{t.task}</strong>（{t.category}） - 締切: {t.deadline}
              <button
                onClick={() => handleDeleteTask(index)}
                style={{ marginLeft: "10px", backgroundColor: "#ff6666", color: "white" }}
              >
                完了
              </button>
            </li>
          ))}
        </ul>
      </main>

      {/* フッター */}
      <footer style={{ padding: "10px", backgroundColor: "#f8f9fa", textAlign: "center" }}>
        <p>© 2025 Your Company</p>
      </footer>
    </div>
  );
}

export default MainPage;
