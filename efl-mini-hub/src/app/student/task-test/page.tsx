'use client';

import ChunkingTask from '@/components/tasks/ChunkingTask';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const samplePayload = {
  "type": "chunking",
  "sentence": "In our efforts to be the good child, the uncomplaining employee, or the cooperative patient, many of us fall into the trap of trying to please people by going along with whatever they want us to do.",
  "chunks": [
    "In our efforts to be the good child, the uncomplaining employee, or the cooperative patient,",
    " many of us fall into the trap of trying to please people",
    " by going along with whatever they want us to do."
  ],
  "explanation": "문장의 긴 전치사구(도입부)와 주절, 그리고 행위의 방식을 설명하는 전치사구를 기준으로 의미 단위별로 끊어 읽는 것이 문장 이해에 도움이 됩니다."
};

export default function TaskTestPage() {
  return (
    <div className="space-y-6 pt-4 pb-20">
      <div className="fade-in">
        <Link href="/student/dashboard" className="text-slate-400 hover:text-white flex items-center gap-2 mb-4 w-fit">
          <ArrowLeft className="w-4 h-4" /> 돌아가기
        </Link>
        <h1 className="text-2xl font-extrabold flex items-center gap-2">
          🧪 LogicFlow Task PoC 
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          AI가 생성한 인터랙티브 학습 과업 (Chunking) 미리보기입니다.
        </p>
      </div>

      <ChunkingTask taskData={samplePayload} />
      
      <div className="glass-card p-5 mt-8 border-purple-500/30 bg-purple-500/5">
        <h3 className="font-bold text-purple-300 mb-2">💡 향후 확장 로드맵</h3>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>학생이 취약한 &quot;하위 스킬(Micro-Skill)&quot;을 발견하면 이런 마이크로 태스크를 먼저 풀게 합니다.</li>
          <li>태스크 결과(클릭 위치, 시간 등)를 <code>learner_evidence</code>에 기록하여 마스터리를 올립니다.</li>
          <li>Chunking 외에도 대명사 찾기(Linking), 순서 맞추기 등 다양한 플러그인 컴포넌트를 추가할 수 있습니다.</li>
        </ul>
      </div>
    </div>
  );
}
