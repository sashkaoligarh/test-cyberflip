export const addId = (arr) => {
  return (arr?.length === 0 ? 1 : arr.length + 1).toString()
}