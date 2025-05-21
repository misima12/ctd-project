import React, { useState } from 'react';
import {useNavigate}from "react-router";

const questions = [
  {
    question: '新しいことに挑戦するのが好きですか？',
    options: ['はい', 'いいえ'],
    scores: [2, 0],
  },
  {
    question: '友達と過ごすのが好きですか？',
    options: ['はい', 'いいえ'],
    scores: [2, 0],
  },
  {
    question: '計画を立てて行動する方ですか？',
    options: ['はい', 'いいえ'],
    scores: [2, 0],
  },
  {
    question: '細かいことに気がつく方ですか？',
    options: ['はい', 'いいえ'],
    scores: [2, 0],
  },
  {
    question: 'ストレスを感じやすいですか？',
    options: ['はい', 'いいえ'],
    scores: [2, 0],
  },
];

const getResult = (score: number) => {
  if (score >= 8) return 'あなたはバランスの取れた性格です。';
  if (score >= 5) return 'あなたは社交的で前向きな性格です。';
  return 'あなたは落ち着いた慎重な性格です。';
};

const PersonalityDiagnosis: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qIdx: number, oIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = oIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const totalScore = answers.reduce(
    (sum, ans, idx) => sum + (ans !== -1 ? questions[idx].scores[ans] : 0),
    0
  );
    const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <h2>性格診断</h2>
      {!showResult ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {questions.map((q, qIdx) => (
            <div key={qIdx} style={{ marginBottom: 20 }}>
              <p>{q.question}</p>
              {q.options.map((opt, oIdx) => (
                <label key={oIdx} style={{ marginRight: 10 }}>
                  <input
                    type="radio"
                    name={`q${qIdx}`}
                    checked={answers[qIdx] === oIdx}
                    onChange={() => handleSelect(qIdx, oIdx)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button type="submit" disabled={answers.includes(-1)}>
            診断する
          </button>
          <button onClick={() =>navigate ('/SettingPage')}>❌</button>
        </form>
      ) : (
        <div>
          <h3>診断結果</h3>
          <p>{getResult(totalScore)}</p>
          <button onClick={() => { setAnswers(Array(questions.length).fill(-1)); setShowResult(false); }}>
            もう一度診断する
          </button>
          <button onClick={() =>navigate ('/SettingPage')}>設定ページに戻る</button>
        </div>
      )}
    </div>
  );
};

export default PersonalityDiagnosis;