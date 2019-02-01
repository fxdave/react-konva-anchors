# react-konva-anchros
A helping package for positioning, and sizing react -konva objects. HTML and CSS provide an easy solution for this, but for canvas, it is more painful. This library aims to ease your work with react-konva.

## Installation
`npm i react-konva-anchors`

## Example

```javascript
<Group ref={this.entity}>

            <Rect
                ref={this.bg}
                width={this.state.bgWidth}
                height={50}
                cornerRadius={10}
                x={this.state.bgPos.x}
                y={this.state.bgPos.y}
                fill="#2f2f2f" />

            <Text
                ref={this.text}
                x={this.state.textPos.x}
                y={this.state.textPos.y}
                text={this.props.name}
                fontSize={22}
                fill="#fff"
                fontFamily="Open Sans" />

            <Group
                ref={this.deleteButton}
                x={this.state.deleteButtonPos.x}
                y={this.state.deleteButtonPos.y}>
                <DeleteButton />
            </Group>

            <Group
                ref={this.addButton}
                x={this.state.addButtonPos.x}
                y={this.state.addButtonPos.y}>
                <AddButton />
            </Group>

            <CenterAnchor
                element={() => this.bg.current}
                change={(x, y) => this.setState({ bgPos: { x, y } })} />

            <PositionAnchor
                
                element={() => this.text.current}
                elementOrigin={{x:0,y:0}}
                elementDesiredOrigin={{x:0.5, y:0.5}}

                reference={() => this.bg.current}
                referenceOrigin={{x:0,y:0}}
                referenceDesiredOrigin={{x:0.5, y:0.5}}

                change={(x, y) => this.setState({ textPos: { x, y } })} />


            <PositionAnchor
                
                element={() => this.deleteButton.current}
                elementOrigin={{x:0.5,y:0.5}}
                elementDesiredOrigin={{x:0.5, y:0.5}}

                reference={() => this.bg.current}
                referenceOrigin={{x:0,y:0}}
                referenceDesiredOrigin={{x:1, y:0}}

                change={(x, y) => this.setState({ deleteButtonPos: { x, y } })} />
            
            <PositionAnchor
                
                element={() => this.addButton.current}
                elementOrigin={{x:0.5,y:0.5}}
                elementDesiredOrigin={{x:0.5, y:0.5}}

                reference={() => this.bg.current}
                referenceOrigin={{x:0,y:0}}
                referenceDesiredOrigin={{x:1, y:0}}

                shift={{x:-25, y:0}}

                change={(x, y) => this.setState({ addButtonPos: { x, y } })} />
            
            <WidthAnchor
                reference={() => this.text.current}
                element={() => this.bg.current}
                padding={25}
                change={width => this.setState({ bgWidth: width })} />

        </Group>
```

## Usage

### CenterAnchor

```javascript
<CenterAnchor
    element={() => this.A_KONVA_ELEMENT_REGERENCE.current}
    change={(x, y) => this.setState({ A_KONVA_ELEMENT_POSITION: { x, y } })} />
```

There are some konva objects where the origin is not at the center of the object for e.g Rect, Text.
If you want to center it, you can use CenterAnchor. This will query the size of the shape and returns a new position for that. (Basically x=width / 2 , y=height / 2). So ensure that you wont move this element, If you want to move, drop into a group and move the group instead.

Use case: If you want to place a rectangle where you click, But you won't know the size of the rectangle, and you want to place in the middle of the pointer. Then this anchor will be a perfect choice.

See: [konvajs/konva#487].

### WidthAnchor

```javascript
<WidthAnchor
    reference={() => this.KONVA_ELEMENT_REFERENCE_TO_WATCH.current}
    element={() => this.KONVA_ELEMENT_REFERENCE_TO_CHANGE.current}
    padding={25}
    change={width => this.setState({ KONVA_ELEMENT_WIDTH: width })} />
```

Sets the width of an element based on another element's width.
Use case: If you have a text, and you want to make a rectangle background for that, this will fit perfectly.

### PositionAnchor

```javascript
<PositionAnchor            
    element={() => this.KONVA_ELEMENT_REFERENCE_TO_MOVE.current}
    elementOrigin={{x:0.5,y:0.5}}
    elementDesiredOrigin={{x:0.5, y:0.5}}
    
    reference={() => this.KONVA_ELEMENT_REFERENCE_TO_WATCH.current}
    referenceOrigin={{x:0,y:0}}
    referenceDesiredOrigin={{x:1, y:0}}
    
    shift={{x:-25, y:0}}
    
    change={(x, y) => this.setState({ KONVA_ELEMENT_POSITION: { x, y } })} />
```
The elementOrigin is the original origin usually {x:0,y:0} or if it is centered then {x:0.5,y:0.5},
but you can set it to anywhere in your shape like: top right corner: {x:1,y:0}.
The elementDesiredOrigin is the origin where you want to grab the element. 
The referenceOrigin is the same as elementOrigin but for the reference element.
The referenceDesiredOrigin is the origin point where you want to place the element.
The shift is a final transformation. 

With origin's you can reach percentage based positioning.
With shift's you can move by pixels.

Use case: For example, you can use it to pose a button to the top right corner of a rectangle.

### CustomAnchor

```javascript
    <CustomAnchor 
        reference={ () => this.KONVA_ELEMENT_REFERENCE_TO_WATCH.current }
        element={ () => this.KONVA_ELEMENT_REFERENCE_TO_CHANGE.current }
        result={ (ref) => ({ x: ref.width(), y:0 }) }
        isUpdateNeeded={ (el, res) => el.x() !== res.x || el.y() !== res.y  }
        change={ (res) => { this.setState({ KONVA_ELEMENT_PROPERTY: res }) } }
    />   
```

The result is a function which returns a computed result from the reference object for example a position.
The isUpdateNeeded is a function that recives the element and the result and returns a boolean. If it is true the change function will be called.

Use case: If you can't find right solution from the anchros above, you can use this.

## Contributing

If you want to help me, form an issue, or send pull requests.