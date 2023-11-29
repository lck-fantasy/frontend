'use client'
import { useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import checkInputValidation from '@/utils/checkInputValidation'

export default function SignupForm() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const debouncedUsername = useDebounce(username)
  const debouncedPassword = useDebounce(password)

  const { isValid: isUsernameValid, condition: usernameCondition } =
    checkInputValidation(debouncedUsername, 'username')
  const { isValid: isPwdValid, condition: pwdCondition } = checkInputValidation(
    debouncedPassword,
    'password',
  )

  return (
    <div>
      {!isUsernameValid && <div>{usernameCondition}</div>}
      아이디
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {!isPwdValid && <div>{pwdCondition}</div>}
      비밀번호
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      비밀번호확인
      <input type="text" />
    </div>
  )
}
