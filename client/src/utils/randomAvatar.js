export function randomAvatar() {
  const randomNum = Math.floor(Math.random() * 24) + 1;
  const avatarUrl = `/images/avatars/avatar_${randomNum}.jpg`;
  return avatarUrl;
}

// export function randomProductImage() {
//   const randomNum = Math.floor(Math.random() * 24) + 1;
//   const imageUrl = `/images/products/product_${randomNum}.jpg`;
//   return imageUrl;
// }
