export const revisarPresupuesto = (budget, remainingBudget) => {
  let clase;
  if (budget / 4 > remainingBudget) {
    clase = "alert alert-danger";
  } else if (budget / 2 > remainingBudget) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }
  return clase;
};
