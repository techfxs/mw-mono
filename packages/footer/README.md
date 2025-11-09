# @mw-mono/footer

A reusable React footer component library.

## Installation

This library is part of the mw-mono monorepo.

## Usage

```tsx
import { Footer } from "@mw-mono/footer";

function App() {
  return <Footer companyName='My Company' year={2025} />;
}
```

## Props

- `companyName` (string, optional): The company name to display. Default: "My Company"
- `year` (number, optional): The copyright year. Default: current year
- `className` (string, optional): Additional CSS classes to apply to the footer

## Features

- Three-column layout with About, Quick Links, and Connect sections
- Copyright notice with dynamic year
- Responsive design
- Tailwind CSS styling
- TypeScript support
