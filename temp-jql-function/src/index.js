export const issuesWithText = async (args) => {
  console.log('Hello from issuesWithText()');

  const { clause } = args;
  const { operator } = clause;
  const [text] = clause.arguments;

  const jqlFragment = `summary${operator === 'in' ? ' ~ ' : ' !~ '}'${text}'`;
  return { jql: jqlFragment };
}
