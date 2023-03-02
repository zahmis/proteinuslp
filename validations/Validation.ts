const nameValidation = (name: string): string => {
  if (!name) return '名前を入力してください';
  if (name.length < 2) return '名前は2文字以上で入力してください';

  return '';
};

const emailValidation = (email: string): string => {
  if (!email) return 'メールアドレスを入力してください';

  const regex =
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(email)) return '正しい形式でメールアドレスを入力してください';

  return '';
};

export default class Validation {
  static formValidate = (type: string, value: string) => {
    switch (type) {
      case 'name':
        return nameValidation(value);
      case 'email':
        return emailValidation(value);
    }
  };
}
