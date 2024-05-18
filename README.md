we can integrete CSS in many ways as:

1. Inline Css : 
     <div>
      <h1 style={{fontSize:"50px",color:"tomato"}}>Hye</h1>
    </div>

2. Store the Css in variable and apply the variable in place of css properties as :


    const x = {fontSize:"50px",color:"tomato"}

    function App() {
    return (
        <div>
        <h1 style={x}>Hye</h1>
        </div>
        )
    }

3. We can write the CSS in a specific file named index.css
    this file is then made required in main.jsx using 
    *import './index.css'*

    Why we dont use this CSS?
    This css is basically applied to whole website, lets understand it with a example:
    Let say we are making a myntra app and there are many h1 tags in its html, now if we write properties in index.css targetting h1, then it will target all the h1 tags in the whole web page,until we provide it a particular adress, as we did earlier in frontend prjects.

4. we can use Module.css:   
    under this type of CSS we make css page for each rendering views page and use it as following:

    1.  create a file named fileName.module.css let say for App so, App.module.css
    2.  now give some name inside it and the properties of css for eg : 
    *.heading{
        font-size: 50px;
        color: tomato;
    }*
    3.  now first import the css file in your page (here App.jsx) as:
        *import anyVariableName from './App.module.css'*
        here let say *import css from './App.module.css'*

    4.  now use the css in the html tag by giving it attribute className={css.heading}

    eg : in App.module.css : 
            .heading{
                font-size: 50px;
                color: tomato;
            }

        in App.jsx :
            import React from 'react'
            import css from './App.module.css'

            function App() {
            return (
                    <div>
                    <h1 className={css.heading}>Hye</h1>
                    </div>
                )
            }

            export default App

5.  Bootstrap css 

    Simply go to index.html page and paste your bootstrap cdn below title tag
    And, bootstrap is working

6.  Tailwind css

    go to google search for tailwind css and go to official link by tailwind css
    direct yourself to the heading "get started" and inside it go to the tag "framworks and guides" and go to "vite" then, follow the directions as per the page, and you ready to use tailwind css.

Note : Always restart the server after setting up tailwind css using terminal and packages.

7. Applying CSS using React's javaScript.
    As earlier we used document.querySelector to select any particular element and change its properties whether it would be css or innerHtml, content etc.

    In react the work of document.querySelector is done by useRef

    in app.jsx : 
    *1  simply, make a variable and store the useRef value as null in it.
    *2  apply the ref attribute to the element of html.
    *3  and give it value same as the variable used to Store useRef in *1.
    *4  now the variable used holds the element of html which you wanted to target use it as ref.current to access the value or perform operations.

Note : there may be problem in instant use of the useRef made using variable hence apply, setTimout with 1000ms timout so that it can first retrieve the value and then undertake the further operations.

Learning with example : 

    *1  const focusHead = useRef(null);
    *2  <h1 ref={} className={css.heading}>Hye</h1>
    *3  <h1 ref={focusHead} className={css.heading}>Hye</h1>
    *4  setTimeout(() => {
            console.log(focusHead);
            focusHead.current.style.color = "royalBlue"
        }, 1000);