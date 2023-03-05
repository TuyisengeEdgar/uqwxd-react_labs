export const increment = (val) => {
  return {
    type: "Increment",
    inc: val,
  };
};

export const decrease = (val) => {
  return {
    type: "Decrease",
    decr: val,
  };
};
