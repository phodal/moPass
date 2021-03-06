# Serverless Password Manager

> a serverless personal password manager tools

Roadmap:

 - [x] Serverless
 - [x] Client: CLI
 - [x] Client: Chrome Plugin
 - [x] Features: 2-Step Verification
 - [ ] Client: WeChat-app
 - [ ] Security: New Devices

## Screenshots

Chrome Screenshots

![Mopass Chrome Screenshots](./docs/images/mopass-chrome-ss.png)

Command Line Screenshots

![Mopass Command Line Screenshots](./docs/images/mopass-cli-ss.png)

## CLI 

Code in [./command](./command)

### Usage

```
npm install -g mopass
```

Commands:

 - Create Encrypt Key: ``mopass --createKey``
 - Generate New Password: ``mopass --generate``
 - Fetch Passwords from Server: ``mopass fetch``
 - Get Password By Title: ``mopass --get [title]``
 - List All Titles: ``mopass --list``
 - Update password bt Title: ``mopass --update [title]``
 - Create MFA: ``mopass --create mfa`` or ``mopass --mfa``
 - Update password by Title: ``mopass --update [title]``
 - Delete password by Title: ``mopass --delete [title]``
 - Import MFAs from AndOTP: ``mopass --import [fileName] --type mfa``

### Features

 - [x] Sync Remote Passwords
 - [x] List All Passwords Alias/Title
 - [x] Get Password by Alias/Title
 - [x] Delete One Password
 - [ ] QRCode Generator for Password

## Serverless Server

### Setup

1. Setup AWS Accounts && Serverless Framework
2. Setup: `yarn install`
3. Config: change domain & DB in `serverless.yml`
4. Deploy: `sls deploy`

## Chrome Plugins

### Setup

1. Config key in options page

## Documents for Developer

### ToC

```
├── browsers   // Chrome Extensions
├── command    // CLI
├── common     // Common Code
├── docs       // Documents
├── server     // Serverless Server
└── weapp      // Wechat App [todo]
```

LICENSE
---

@ 2019 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas).  This code is distributed under the GPL license. See `LICENSE` in this directory.
