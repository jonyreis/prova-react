export function getDate() {
  let data = new Date();
  let day = String(data.getDate()).padStart(2, '0');
  let month = String(data.getMonth() + 1).padStart(2, '0');
  let year = data.getFullYear();
  
  return `${day}/${month}/${year}`
}