export const getRatingNumber = (stars: string) => {
  const count = (stars.match(/★/g) || []).length;
  const half = stars.includes('½') ? 0.5 : 0;
  return (count + half).toFixed(1);
};
