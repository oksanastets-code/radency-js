// згенерувати дату
export function getCurrentDate() {
  const newDate = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return newDate.toLocaleDateString('en-US', options);
}