module.exports = {
    types: [
      { value: '✨ feat',     name: '✨ feat:     A new feature' },
      { value: '🐛 fix',      name: '🐛 fix:      A bug fix' },
      { value: '📝 docs',     name: '📝 docs:     Documentation only changes' },
      { value: '💄 style',    name: '💄 style:    Changes that do not affect the meaning of the code' },
      { value: '🎨 refactor', name: '🎨 refactor: A code change that neither fixes a bug nor adds a feature' },
      { value: '🧪 test',     name: '🧪 test:     Adding or updating tests' },
      { value: '⚙️ chore',    name: '⚙️ chore:    Other changes that don’t modify src or test files' },
      { value: '🚀 perf',     name: '🚀 perf:     A code change that improves performance' },
      { value: '🔧 config',   name: '🔧 config:   Project configuration changes' }
    ],
    messages: {
      type: "Select the type of change you're committing:",
      scope: "What is the scope of this change (optional):",
      subject: "Write a short, imperative description of the change:\n",
      body: 'Provide a longer description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional):\n',
      footer: 'List any ISSUES CLOSED by this change (optional):\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?'
    },
    allowCustomScopes: true,
    allowBreakingChanges: ["feat", "fix"],
    skipQuestions: [],
  };