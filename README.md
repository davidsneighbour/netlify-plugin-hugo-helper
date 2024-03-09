This [Netlify build plugin](https://docs.netlify.com/integrations/build-plugins/) adds caching of [Hugo](https://gohugo.io/) resource files to your build process.

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

* `cache` - Enable caching of resources between deploys (default: true)
* `debug` - Show verbose logs and list backed up and restored files (default: false)
* `srcdir` - Relative path to source directory in case you use Hugo's "--s" option (default: '')

To configure the plugin for a certain deploy context, you can use the `context` subsection:

```toml
[[context.production.plugins]]
package = "@davidsneighbour/netlify-plugin-hugo-helper"

[context.production.plugins.inputs]
debug = false
```
