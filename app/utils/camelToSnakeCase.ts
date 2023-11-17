export default function camelToSnakeCase(obj: any): any {
  const snakeCaseObj: any = {}

  Object.keys(obj).forEach((key) => {
    const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    snakeCaseObj[snakeKey] = obj[key]
  })

  return snakeCaseObj
}
