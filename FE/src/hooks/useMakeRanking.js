function useMakeRaking(rank) {
  const ranks = [];

  for (let i = rank - 2; i <= rank + 2; i++) {
    ranks.push(i);
  }

  return ranks;
}

export default useMakeRaking;
