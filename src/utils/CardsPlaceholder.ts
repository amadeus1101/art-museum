export function CardsPlaceholder(count: number) {
  let arr = [];
  while (count > 0) {
    arr.push(count--);
  }
  return arr.map((elem) => {
    return {
      id: elem,
      title: 'Loading...',
      artist_title: 'Please wait...',
      is_public_domain: true,
      image_id: '#'
    };
  });
}
