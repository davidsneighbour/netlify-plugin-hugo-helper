This Netlify build plugin adds caching of Hugo resource files to your build process.

## Setup

Install the package with:

```bash
npm install --save-dev @davidsneighbour/netlify-plugin-hugo-helper
```

Then add it to your `netlify.toml` file:

```toml
[[plugins]]
package = "@davidsneighbour/netlify-plugin-hugo-helper"

[plugins.inputs]
debug = false
```

The `inputs` section can contain the following parameters:

- `cache` - Enable caching of resources between deploys (default: true)
- `debug` - Show verbose logs and list files that are backed up and restored (default: false)
- `srcdir` - Relative path to source directory in case you use Hugo's "--s" option (default: '')
