export default {
  authentication: {
    driver: 'laravelSanctum', // null | laravelSanctum
    config: {
      url: 'http://localhost:8080/sanctum/csrf-token',
    },
  },
}
