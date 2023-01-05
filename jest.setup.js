// オプション: 各テストの前にテストフレームワークを設定する、もしくはセットアップする。
// このファイルを削除した場合は、`jest.config.js`から `setupFilesAfterEnv` を削除する。

// __tests__/testing-library.js で使用される。
// 詳しくはこちら: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
