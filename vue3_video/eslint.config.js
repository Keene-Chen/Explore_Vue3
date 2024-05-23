/**
 * @file eslint.config.js
 * @desc based on antfu/eslint-config and eslint-plugin-perfectionist
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.04.09-22:13:14
 */

import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'antfu/top-level-function': 'off',
    'import/order': 'off',
    'no-console': 'off',
    'unused-imports/no-unused-vars': 'warn',
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'vue/html-self-closing': 'off',
  },
})
