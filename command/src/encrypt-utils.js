const CryptoJS = require('crypto-js')
const fs = require('fs')

const generator = require('./generator')

let iv

function getUserHome() {
  return process.env.HOME || process.env.USERPROFILE
}

function getKeyPath() {
  return getUserHome() + '/.mopass.key'
}

function getKey() {
  let keyFile = fs.readFileSync(getKeyPath()).toString().split('\n')[0]
  return CryptoJS.enc.Utf8.parse(keyFile)
}

function isExistKeyAndIv(key, iv) {
  if (!key || !iv) {
    console.log('not key or iv')
    return false
  }

  return true
}

function decrypt(word) {
  let key = getKey()
  if (!isExistKeyAndIv(key, iv)) {
    return
  }

  let encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

function encrypt(word) {
  let key = getKey()
  if (!isExistKeyAndIv(key, iv)) {
    return
  }

  let srcs = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.ciphertext.toString().toUpperCase()
}

function configIv(config) {
  iv = CryptoJS.enc.Utf8.parse(config.iv)
}

function hashString(str) {
  return CryptoJS.MD5(str).toString()
}

function createKey() {
  return fs.writeFileSync(getKeyPath(), generator.createKey())
}

function configKey(key) {
  return fs.writeFileSync(getKeyPath(), key)
}

module.exports.decrypt = decrypt
module.exports.encrypt = encrypt
module.exports.configIv = configIv
module.exports.createKey = createKey
module.exports.configKey = configKey
module.exports.hashString = hashString
