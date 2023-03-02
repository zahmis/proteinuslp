import { mailRegex } from 'utils/regex';

export default class Validation {
  static formValidate = (type: string, value: string) => {
    const nameValidation = (name: string): string => {
      if (!name) return '名前を入力してください';
      return '';
    };

    const emailValidation = (email: string): string => {
      if (!email) return 'メールアドレスを入力してください';

      if (!mailRegex.test(email))
        return '正しい形式でメールアドレスを入力してください';

      return '';
    };

    switch (type) {
      case 'name':
        return nameValidation(value);
      case 'email':
        return emailValidation(value);
    }
  };
}
