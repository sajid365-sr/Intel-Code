
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
       <div className='mainContainer'>
         <Accordion className='accordion' defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is the purpose of react router?</Accordion.Header>
          <Accordion.Body>
          <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>

          <p>React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does context api works?</Accordion.Header>
          <Accordion.Body>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            
            <span className='text-primary'>React.createContext()</span> 
            <p>Syntax:</p>
            <p className='text-success'>const MyContext = React.createContext(defaultValue);</p>

            <p> is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is useRef hook?</Accordion.Header>
          <Accordion.Body>
           <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. </p>

           <span className='text-success'>Syntax:</span>
           <p className='text-primary'>const refContainer = useRef(initialValue);</p>

           <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
       </div>
    );
};

export default Blog;