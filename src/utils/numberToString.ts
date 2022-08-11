export default (salary: number, value: number) => `R$${((salary - value).toFixed(2)).toString()}`;
