module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true
  },
  plugins: ["vitest"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    curly: "warn",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "vue",
            importNames: ["defineProps", "defineEmits"],
            message:
              "It is a compiler macro and no longer needs to be imported."
          }
        ]
      }
    ]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      extends: ["plugin:vitest/recommended"],
      rules: {
        // previously from plugin:jest/style
        "vitest/prefer-to-be": "error",
        "vitest/prefer-to-contain": "error",
        "vitest/prefer-to-have-length": "error",
        // previously from plugin:jest/recommended
        "vitest/no-alias-methods": "error",
        "vitest/no-conditional-expect": "error",
        "vitest/no-disabled-tests": "warn",
        "vitest/no-focused-tests": "error",
        "vitest/no-mocks-import": "error",
        "vitest/no-standalone-expect": "error",
        "vitest/no-test-prefixes": "error",
        // adjust plugin:vitest/recommended
        "vitest/expect-expect": "off",
        "vitest/no-commented-out-tests": "warn",
        // additional rules
        "vitest/consistent-test-it": "error",
        "vitest/max-nested-describe": ["error", { max: 1 }],
        "vitest/no-conditional-in-test": "error",
        "vitest/no-hooks": "error",
        "vitest/no-test-return-statement": "error",
        "vitest/prefer-called-with": "error",
        "vitest/prefer-comparison-matcher": "warn",
        "vitest/prefer-each": "error",
        "vitest/prefer-equality-matcher": "error",
        "vitest/prefer-expect-resolves": "error",
        "vitest/prefer-lowercase-title": [
          "error",
          { ignoreTopLevelDescribe: true }
        ],
        "vitest/prefer-mock-promise-shorthand": "error",
        "vitest/prefer-spy-on": "error",
        "vitest/prefer-strict-equal": "warn",
        "vitest/prefer-todo": "error"
      }
    }
  ]
};
