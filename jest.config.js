module.exports = {
  verbose: true,
  collectCoverageFrom: [
    "app/renderer/**",
    "!app/renderer/index.tsx",
    "!app/renderer/tests/**",
    "!app/renderer/dist/**"
  ]
}
