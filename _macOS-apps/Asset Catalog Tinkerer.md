---

---

# Asset Catalog Tinkerer
_by Guilherme Rambo (insidegui)_

> An app that lets you open `.car` files and browse/extract their images, or preview them on Finder with QuickLook.

---

(from [github.com/insidegui/AssetCatalogTinkerer](https://github.com/insidegui/AssetCatalogTinkerer)
## Download

You can also install it using [Homebrew Cask](https://caskroom.github.io), simply

```shell
brew cask install asset-catalog-tinkerer
```


## QuickLook Plugin

The app also includes a QuickLook PlugIn so you can see previews of asset catalogs in QuickLook.


## How to use

The app can open any `.car` file, usually located within an app's `Resources` directory.

Once you have an asset catalog opened, you can drag individual assets out or export the entire catalog / selected images to a directory.

## Supported file types

Since version 2.2, Asset Catalog Tinkerer can now read theme store files, not only catalog files.

Theme store files contain assets for UI components, you can find examples of them in `/System/Library/CoreServices/SystemAppearance.bundle`. The app also supports ProKit's theme stores found inside `ProKit.framework`, `LunaKit.framework` and other folders within pro apps.

## Licence
AssetCatalogTinkerer is licensed under the BSD 2-Clause "Simplified" License.

A permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause. Both have very minute differences to the MIT license.

| Permissions    | Limitations | Conditions                   |
| -------------- | ----------- | ---------------------------- |
| Commercial use | Liability   | License and copyright notice |
| Modification   | Warranty    |                              |
| Distribution   |             |                              |
| Private use	 |			   |                              |
