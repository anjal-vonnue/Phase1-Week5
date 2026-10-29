export function debounce(callback: () => void, delay: number): () => void {
  let timer: number;
  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}
