import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
      <h1>示例仓库骨架</h1>
      <p>这是最小可运行的 Rsbuild + React 应用骨架。</p>
      <ul>
        <li>开发：pnpm -w -C apps/example dev</li>
        <li>构建：pnpm -w -C apps/example build</li>
        <li>预览：pnpm -w -C apps/example preview</li>
      </ul>
    </div>
  );
}


