
export function findSpanIndexAndLanguage(number, obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const [start, end] = obj[key]
        if (number >= start && number < end) {
            const language = isEven(key) ? 0 : 1
            let newId = parseInt(key)
            if (language === 0) {
              newId = parseInt(newId/2)
            } else {
              newId = parseInt((newId-1)/2)
            }
          return {sentenceId: newId, languageId: language}
        }
      }
    }
    return null
}

export function isEven(number) {
    if (number % 2 === 0){
        return true
    } else {
        return false
    }
}

export function generateSearchOptions(bookObjectList) {

  const searchOptions = []

  bookObjectList.map((object) => {
    const bookId = object.id
  })
}
  