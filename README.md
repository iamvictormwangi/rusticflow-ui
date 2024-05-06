<link rel="stylesheet" href="./src/global.module.css">

## Table of Content

[Installation](#install)
[Usage](#usage)
[Components](#components)
  - [Alert](#alert)
  - [Avatar](#avatar)
  - [Box](#box)
  - [Button](#button)
  - [Carousel](#carousel)
  - [Dropdown](#dropdown)
  - [Footer](#footer)
  - [Group](#group)
  - [Hero](#hero)
  - [Image](#image)
  - [Input](#input)
  - [List](#list)
  - [Mask](#mask)
  - [Message](#message)
  - [Modal](#modal)
  - [Notification](#notification)
  - [Pagination](#pagination)
  - [Panel](#panel)
  - [Parallax](#parallax)
  - [Progress](#progres)
  - [Table](#table)
  - [Textarea](#textarea)
  - [Tooltip](#tooltip)

## Install

### npm

npm install rusticflow-ui

### pnpm

pnpm add rusticflow-ui

## Usage

Add styles in a top level component or a layout.tsx/.jsx file so that you do not have to keep sourcing it in child components.

```jsx

import "rusticflow-ui/dist/cjs/index.css"

```
Import a component in the component you are in.

```jsx
// Include components

import { Box } from "rusticflow-ui"

```

You can import multiple components at once.


```jsx
// Include components

import { Alert, Box, Carousel, Text } from "rusticflow-ui"

```

Use your component. For Example Here we are using Box component.

```jsx
const App = () => {
  return (
    <Box>
      <div className="content">
        <div class="content">
        <Text variant="h4">
          <div class="card"></div>
        </Text>
        </div>
      </div>
    </Box>
  )
}
```

## Components

<h3 id="alert">Alert</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  <div class="content">
    I am Alert
  </div>
</Alert>

```

<div class="alert">
  <div class="content">
    I am alert
  </div>
</div>

Alert support the following props

- className
- style

Example Alert with passed props


```jsx

<Alert
  className="bg--yellow"
  style={{ color: "green" }}
>
  I am Alert
</Alert>

```

<h3 id="avatar">Avatar</h3>


Example

```jsx
import { Avatar } from "rusticflow-ui"
```

Example

```jsx

<Avatar>
  U
</Avatar>

```

Avatar support the following props

- className
- style

<Avatar>
</Avatar>

<h3 id="box">Box</h3>

Example

```jsx
import { Box, Image, Text } from "rusticflow-ui"
```

Example

```jsx

<Box>
  <div className="content">
    <div className="box__heading">
    <Image></Image>
    </div>
    <div class="box__footer">
      <Text variant="h3" className="box__title">Rustic Flow</Text>
      <Text className="lead">Sit explicabo accusamus elit explicabo enim temporibus Velit dolor officia.</Text>
    </div>
  </div>
</Box>

```

Box support the following props

- className
- style


<h3 id="button">Button</h3>

Example

```jsx
import { Button } from "rusticflow-ui"
```

Example

```jsx

<Button onClick={() => console.log("clicked ...")}">
  Click me
</Button>

```

<button class="btn">Click me</button>

Button support the following props

- className
- style
- onClick


<h3 id="carousel">Carousel</h3>

Example

```jsx
import { Carousel } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="dropdown">Dropdown</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="footer">Footer</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="group">Group</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="hero">Hero</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="image">Image</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="input">Input</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="list">List</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="mask">Mask</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="message">Message</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```

<h3 id="modal">Modal</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style

```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```

<h3 id="notificationi">Notification</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style

```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```

<h3 id="pagination">Pagination</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="panel">Panel</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="parallax">Parallax</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="progres">Progress</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="table">Table</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


<h3 id="textarea">Textarea</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style

```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```

<h3 id="tooltip">Tooltip</h3>

Example

```jsx
import { Alert } from "rusticflow-ui"
```

Example

```jsx

<Alert>
  I am Alert
</Alert>

```

Alert support the following props

- className
- style


```jsx

<Alert className="bg--yellow" style={{ color: "green" }}>
  I am Alert
</Alert>

```


