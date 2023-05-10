/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate()
}

