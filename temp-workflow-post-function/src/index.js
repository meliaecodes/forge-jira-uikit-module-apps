export const postfunction = ({ issue, transition: { from, to } }) => {
  console.log(`PostFunction for issue ${issue.key} for transition from status ${from.id} to ${to.id}`);
};
