## Tutut ( create simple popup alerts)

Tutut is a JavaScript library used to create simple popup alerts.
<img src="Logo.png" width="250"/>

### ✨Purpose
- Notify the user
- Display a confirmation message before an important action
- Create a more engaging UI than the browser's default `alert()`
- Lightweight
- No dependencies
- Simple API

### How to Use 
```js
    //Basic example 
    Tutut.success({
        title : "Title",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    })
   
    // alert type available
    Tutut.info({})  //for alert type info
	Tutut.success({}) //for alert type success
	Tutut.warning({}) //for alert type warning
	Tutut.danger({}) //for alert type danger
	Tutut.confirm({}) //for alert type confirm
	Tutut.delete({}) //for alert type delete
	Tutut.question({}) //for alert type question
    
```
### how to use with cdn
```html
<!DOCTYPE html>

<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tutut@latest/style.min.css">
</head>
<body>

<!-- Yout More code --->

<script type="module">
    import Tutut from 'https://cdn.jsdelivr.net/npm/tutut@latest/dist/index.min.js'
    window.Tutut = Tutut
</script>  

<script>
     window.onload = ()=>{
        Tutut.success({
            title : "Message",
            text : "Content Message"
        })
    }

</script>
</body>
</html>
```
### How to use it modularly

```bash
npm i tutut
```

```js
import 'tutut/style.css'
import Tutut from 'tutut'

Tutut.success({
    title : "Message",
    text : "Content Message"
})

```

### Tutut with Option Property 
```js
    // Tutut.success({message},{option})
    Tutut.success({title : "lorem ipsum",text : "sit amet"},{overlayClose : false})
    // it's means open alert with title "lorem ipsum" body text "sit amet" with overlay option Close false
```
### Tutut Callback Type Confirm
Tutut will display the "cancel and confirm" buttons in the Tutut warning, danger, and confirmation message types, "cancel and delete" in the delete message type, and "ok" in the info, success, and question message types.

example to show cancel and confirm button
```js
    Tutut.delete({
	    title : "lorem ipsum",
	    text : "sit amet"
    },{showConfirm : true})
```

example to show cancel and confirm button with callback
```js
    // This only applies to warning, danger, confirm and delete message types.
    Tutut.delete({
	    title : "lorem ipsum",
	    text : "sit amet"
    },{
        showConfirm : true,
        onConfirm : ()=>{ alert("Confirm Success") },
        onCancel : ()=>{ alert("Cancel Success") }
      })
```
example to show cancel and confirm button with callback with message success
```js
    // This only applies to warning, danger, confirm and delete message types.
    Tutut.delete({
	    title : "Message",
	    text : "Are you sure you want to delete this data?"
    },{
        showConfirm : true,
        onConfirm : ()=>{ 
            let deleted = true
	        if(deleted){
	            Tutut.success({
		            title : "Message",
		            text : "Deleted Success"
		        })
	        }
        },
        onCancel : ()=>{ alert("Cancel Success") }
      })
```

```js
    // This only applies to info, success and question message types.
    Tutut.info({
	    title : "lorem ipsum",
	    text : "sit amet"
    },{
        showConfirm : true,
        onOk : ()=>{ alert("Ok Success") },
      })
```
### Tutut Message Property 

| name property | purpose              | type   |
| ------------- | -------------------- | ------ |
| title         | title message        | string |
| text          | content text message | string |

### Tutut Option Property

| name property       | purpose                    | type                    |
| ------------------- | -------------------------- | ----------------------- |
| showCloseButton<br> | display show close button  | boolean (true \| false) |
| showConfirm<br>     | display the confirm button | boolean (true \| false) |
| overlayClose<br>    | enable exit with overlay   | boolean (true \| false) |
| onConfirm<br>       | callback confirm button    | function                |
| onCancel            | callback cancel button     | function                |
| onOke               | callback ok button         | function                |

