# snowpack-plugin-known-entrypoints

Add known entrypoints to Snowpack.

## Install

```
npm install snowpack-plugin-known-entrypoints
```

```js
// snowpack.config.js
module.exports = {
  entrypoints: ["my-entrypoint"],
};
```

## Plugin options

| Name          | Type       | Description                            |
| :------------ | :--------- | :------------------------------------- |
| `entrypoints` | `string[]` | List of entrypoints to add to Snowpack |
