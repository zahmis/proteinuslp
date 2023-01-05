// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // テスト環境のnext.config.jsと.envファイルを読み込むために、Next.jsアプリへのパスを指定します。
  dir: "./",
});

// Jestに渡す任意のカスタム設定を追加する。
/** @type {import('jest').Config} */
const customJestConfig = {
  // 各テストを実行する前に、さらに設定オプションを追加する
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // TypeScriptでbaseUrlをルートディレクトリに設定している場合、aliasを動作させるために以下のようにする必要があります。
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfigは、next/jestが非同期でNext.jsの設定を読み込めるようにするために、このようにエクスポートされます。
module.exports = createJestConfig(customJestConfig);
