type RegexType = {
  [key: string]: {
    reg: RegExp
    condition: string
  }
}

const regexes: RegexType = {
  username: {
    reg: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,20}$/,
    condition: '영어와 숫자를 조합하여 5~20자로 입력해주세요.',
  },
  name: {
    reg: /^[가-힣]{2,5}$/,
    condition: '이름은 한글 2~5자로 입력해주세요.',
  },
  email: {
    reg: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    condition: '이메일 형식이 올바르지 않습니다.',
  },
  password: {
    reg: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/,
    condition: '영어, 숫자, 특수문자를 조합하여 8~24자로 입력해주세요.',
  },
}

export default regexes
