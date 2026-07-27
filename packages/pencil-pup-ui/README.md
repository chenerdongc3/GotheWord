# Pencil Pup UI

An original React component library for warm, hand-drawn newspaper-comic
interfaces. It uses paper textures, imperfect ink lines, offset shadows and a
small red/blue/yellow palette without using third-party character artwork.

Pencil Pup UI is not affiliated with or endorsed by Peanuts Worldwide, Snoopy,
or Charles M. Schulz Creative Associates. Do not add protected character
names, silhouettes, traced artwork, logos or catchphrases to this package.

## Install

```json
{
  "dependencies": {
    "@gotheword/pencil-pup-ui": "file:packages/pencil-pup-ui"
  }
}
```

Import the package stylesheet once at the application root:

```tsx
import "@gotheword/pencil-pup-ui/style";
```

Then import components from the package entry:

```tsx
import { Button, Card, Input } from "@gotheword/pencil-pup-ui";
```

## Components

The first release contains the primitives required by GotheWord: `Button`,
`Card`, `Cursor`, `Divider`, `Footer`, `Form`, `FormItem`, `Input`, `Modal`,
`Progress`, `Radio`, `Tabs`, `Tag`, `Time`, and `Title`.

## License

MIT. The license covers only the original code in this package. It does not
grant rights to third-party characters or brands.
