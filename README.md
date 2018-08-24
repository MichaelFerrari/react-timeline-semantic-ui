# react-timeline-semantic-ui

This react timeline component is built with Semantic UI react. For more information about Semantic UI React, please visit this [link](http://react.semantic-ui.com/).

![picture](https://raw.githubusercontent.com/MichaelFerrari/cs373-collatz/master/Screenshot.png)

## Installation
```
npm install react-timeline-semantic-ui --save
```


## Usage

```
import Timeline from 'react-timeline-semantic-ui';

<Timeline
  direction="left"
  icon="user"
  title="Title"
  time="Time"
  description="Description."
  color="red"
  tags={['tag1', 'tag2']}
  lineHeight={4}
/>
```

### Timeline props

| Name         | Type   | Description                              |
| ------------ | ------ | ---------------------------------------- |
| title        | string | The title of this timeline component. |
| direction    | enum   | Enums: 'left', 'right'. It specifies which way the timeline component locates. |
| icon         | string | The name of the icon. Please refer to [icon] (http://react.semantic-ui.com/elements/icon/). |
| time         | string | The time of this timeline card. |
| description  | string | The description of this timeline card. |
| color        | enum   | Enums: 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'. It specifies the color of icon and the timeline card. |
| tags         | array  | An array of strings. |
| lineHeight   | number | The height of middle line going through icons. The number refers to the number of timeline cards. |
| labelColor   | enum   | Optional. Same enum values as color. The color of top label of the timeline component. |
| lineColor    | enum   | Optional. Same enum values as color. The color of middle line of the timeline component. |


## License

__PUT LICENSE HERE__

Copyright (c) 2018 Chuqi Zhou.
