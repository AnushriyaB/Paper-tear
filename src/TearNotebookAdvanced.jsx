// JSX scaffold for future refactor.
// This file is not executed by index.html yet (no React build pipeline in this folder).

export const tearLevelMessages = {
  beginner: ['Nice start!', 'Keep going!'],
  intermediate: ['Great control!', 'That was smooth!'],
  advanced: ['Master tear!', 'Perfect peel!']
};

export function getMessageByLevel(level = 'beginner') {
  const list = tearLevelMessages[level] || tearLevelMessages.beginner;
  return list[Math.floor(Math.random() * list.length)];
}

export function TearNotebookAdvancedPanel({ level = 'beginner' }) {
  const message = getMessageByLevel(level);
  return (
    <div className="tear-advanced-panel">
      <h3>Tear Level: {level}</h3>
      <p>{message}</p>
    </div>
  );
}
