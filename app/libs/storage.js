export default {
  get(k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    }
    catch(e) {
      console.error('Failed to retrieve item from storage', e);
    }
  },
  set(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
  }
};
