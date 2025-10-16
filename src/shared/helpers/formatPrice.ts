export function formatPrice(price: number | string): string {
  const num = typeof price === 'string' ? parseFloat(price) : price;

  if (Number.isNaN(num)) {
    return '';
  }

  return num % 1 === 0 ? `${num}` : num.toFixed(2);
}
