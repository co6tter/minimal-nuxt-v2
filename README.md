# minimal-nuxt-v2

## Overview

Nuxt 3をベースにしたWebアプリケーションの最小構成プロジェクト

## Tech Stack

- **Framework**: Nuxt 3.17.1
- **UI Library**: Vue 3.5.13
- **State Management**: Pinia 3.0.2
- **Testing**: Vitest 3.1.2 with Vue Test Utils
- **Linting/Formatting**: ESLint 9.25.1 + Prettier 3.5.3
- **Package Manager**: pnpm 10.10.0

## Setup

### Prerequisites

- Node.js (推奨バージョン: 18以上)
- pnpm 10.10.0以上

### Installation

```bash
# 依存関係をインストール
pnpm install
```

## Usage

### Development

```bash
# 開発サーバーを起動 (http://localhost:3000)
pnpm dev
```

### Build

```bash
# 本番用ビルド
pnpm build

# ビルド結果をプレビュー
pnpm preview
```

### Testing

```bash
# テストを実行
pnpm test

# UIモードでテストを実行
pnpm test:ui
```

### Code Quality

```bash
# コードフォーマットをチェック
pnpm prettier

# コードフォーマットを自動修正
pnpm prettier:fix
```

## Directory Structure

```
.
├── app.vue                 # ルートコンポーネント
├── nuxt.config.ts          # Nuxt設定ファイル
├── pages/                  # ページコンポーネント
│   ├── index.vue          # トップページ
│   ├── about.vue          # Aboutページ
│   ├── contact.vue        # お問い合わせページ
│   └── login.vue          # ログインページ
├── layouts/               # レイアウトコンポーネント
│   └── default.vue        # デフォルトレイアウト
├── middleware/            # ミドルウェア
│   └── auth.global.ts     # 認証ミドルウェア
├── stores/                # Piniaストア
│   └── auth.ts            # 認証ストア
├── server/                # サーバーサイドAPI
│   └── api/               # APIエンドポイント
├── tests/                 # テストファイル
│   └── pages/             # ページコンポーネントのテスト
├── public/                # 静的ファイル
└── assets/                # アセットファイル
    └── css/
        └── main.css       # グローバルCSS
```

## License

This repository is for personal/private use only.
