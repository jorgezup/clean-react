import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'
import { EmailValidation } from './email-validation'

describe('EmailValidation', () => {
  test('Should return error with email is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy with email is falid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
