import regexes from '@/constants/regexes'

function checkInputValidation(value: string, type: string) {
  const isValid = regexes[type].reg.test(value)
  const condition = regexes[type].condition
  return { isValid, condition }
}

export default checkInputValidation
