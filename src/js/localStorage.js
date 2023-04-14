export function addToStorage(key, value){
try {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error(error);
  }
};

export function getFromStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
  }
};

export function removeFromStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};