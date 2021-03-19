# S-Style framework

## Introduction

> **S-Style** This is a small css library that saves you from writing large lines of code and saves you time.


## Code Samples

> To start working with the library you need to add an attribute `data-s=""` to the element  `div`.
***
it should look like this
```html
<div data-s=""></div>
```
***
***Complete code example***

>By adding the `"s-mt/mb/ml/mr-any number-px"` value to the attribute, the element will be styled:
>```html
<div data-s="s-mt/mb/ml/mr-any number-px"></div>
```
***

```css 
div {
      margin-top:  28; /*data-s="s-mt-28-px"*/
      margin-bottom:  28; /*data-s="s-mb-28-px"*/
      margin-left:  28; /*data-s="s-ml-28-px"*/
      margin-right:  28; /*data-s="s-mr-28-px"*/
}
```



## Installation

> First you need to download all the files from[ this link](https://github.com/sargisartashyanmain/S-Style)
***
>***After downloading and connecting all the files, it should look like this***
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="s-frame-css.css" class="css">
    <title>Test</title>
</head>
<body>
    <script src="s-frame-js.js"></script>
</body>
</html>
```

> **At the moment this library can:**
***
>> ### Display flex
***
* ***By adding the `"s-flex-row"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
}
```
2. ***By adding the `"s-flex-col"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: column;
}
```
3. ***By adding the `"s-flex-jc-c"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       justify-content: center;
}
```
4. ***By adding the `"s-flex-jc-sb"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       justify-content: space-between;
}
```
5. ***By adding the `"s-flex-jc-sa"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       justify-content: space-around;
}
```
6. ***By adding the `"s-flex-jc-s"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       justify-content: flex-start;
}
```
7. ***By adding the `"s-flex-jc-e"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       justify-content: flex-end;
}
```
8. ***By adding the `"s-flex-ai-c"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       align-items: center;
}
```
9. ***By adding the `"s-flex-ai-s"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       align-items: flex-start;
}
```
10. ***By adding the `"s-flex-ai-e"` value to the attribute, the element will be styled:***
```css
{
       display: flex;
       flex-direction: row;
       align-items: flex-end;
}
```
***

>> ### Margin/Padding
***
* ***By adding the `"s-mt/mb/ml/mr-any number-px"` value to the attribute, the element will be styled:***
```css 
{
      margin-top:  number px; /*data-s="s-mt-any number-px"*/
      margin-bottom:  number px; /*data-s="s-mb-any number-px"*/
      margin-left:  number px; /*data-s="s-ml-any number-px"*/
      margin-right:  number px; /*data-s="s-mr-any number-px"*/
}
```
2. ***By adding the `"s-pt/pb/pl/pr-any number-px"` value to the attribute, the element will be styled:***
```css 
{
      padding-top:  number px; /*data-s="s-pt-any number-px"*/
      padding-bottom:  number px; /*data-s="s-pb-any number-px"*/
      padding-left:  number px; /*data-s="s-pl-any number-px"*/
      padding-right:  number px; /*data-s="s-pr-any number-px"*/
}
```
3. ***By adding the `"s-mt/mb/ml/mr-any number-%"` value to the attribute, the element will be styled:***
```css 
{
      margin-top:  number %; /*data-s="s-mt-any number-%"*/
      margin-bottom:  number %; /*data-s="s-mb-any number-%"*/
      margin-left:  number %; /*data-s="s-ml-any number-%"*/
      margin-right:  number %; /*data-s="s-mr-any number-%"*/
}
```
4. ***By adding the `"s-pt/pb/pl/pr-any number-%"` value to the attribute, the element will be styled:***
```css 
{
      padding-top:  number %; /*data-s="s-pt-any number-%"*/
      padding-bottom:  number %; /*data-s="s-pb-any number-%"*/
      padding-left:  number %; /*data-s="s-pl-any number-%"*/
      padding-right:  number %; /*data-s="s-pr-any number-%"*/
}
```
***
>> ### Font size
***
* ***By adding the `"s-fz-any number-px"` value to the attribute, the element will be styled:***
```css 
{
      font-size:  number;
}
```
