# wagtailmdx
wagtailmdx adds the [MDXEditor](https://github.com/mdx-editor/editor) as widget and textfield intended for use with an MarkdownX frontend including custom components for [Wagtail](https://github.com/wagtail/wagtail).
In order to enable MDX components, you have to provide your own and include the jsx definition. See the example in the source code. You are free to use the editor for ordinary md.

## Quick start
- Include `wagtailmdx` in yout INSTALLED_APPS
- Add an `MDXField()` to your pages

## Build
1) Build all the editor js using `npx webpack`
2) Build/copy the python package with `python -m build`

## Why this package exists?
I started using wagtail as a headless cms in combination with a next.js frontend. TO unlock the potential of using custom jsx components in the frontend, but keep the flexibility for the editor (me) in the backend, I discoverd the possipility of using markdownX components.
The output of this field can than be used as an API response for the [MDXRemote](https://github.com/hashicorp/next-mdx-remote) component.
The MDXEditor just seemed like a reasonable choice.

This package is also an example how to simply integrate custom JS with wagtail. Because, at least for me, the process with stimulus did not appear as straight-forward during some changes in wagtail. Maybe it saves some folks a bit of time

## Things to note
### State
This package is more of a proof of concept for a personal project and not really polished. But I think it is still useful as a reference.
### React instance
The editor packages an own instane of React. Firstly I wanted to just embed the component in the existing react instance provided by wagtail. The editor however needs at leas React>=18, which was not provided at the point of writing. Can be changed later.
### Third party Packages
### [MDXEditor](https://github.com/mdx-editor/editor)
MIT © Petyo Ivanov.