function plugin(_snowpackConfig, pluginOptions = {}) {
  let entrypoints = pluginOptions.entrypoints;

  if (!entrypoints) {
    throw new Error(
      `[snowpack-plugin-known-entrypoints] option "entrypoints" is required`
    );
  }

  return {
    name: "snowpack-plugin-known-entrypoints",
    knownEntrypoints: entrypoints,
  };
}

module.exports = plugin;
