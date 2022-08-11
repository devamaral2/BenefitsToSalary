export default (str: string) => Number(str.split('').splice(2, 15).join(''));
