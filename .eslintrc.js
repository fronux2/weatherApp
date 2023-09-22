// Dentro de tu archivo .eslintrc.js
module.exports = {
  // Otras configuraciones...
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off'
  },
  env: {
    // Otros entornos...
    jest: true // Configurar para pruebas con Jest
  }
}
