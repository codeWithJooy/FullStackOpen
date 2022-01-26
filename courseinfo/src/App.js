import React from 'react'

//1.Simple Component

// const App=()=>{
//   return(
//     <h1>Hello World</h1>
//   )
// }



//2.Add console.log to App

// const App=()=>{
//   console.log("Hello From Console")

//   return(
//     <div>
//       <p>Hello World</p>
//     </div>

//   )
// }


//3.Rendering Dynamic component inside App

// const App = ()=>{
//   const now=new Date()
//   const a=10
//   const b=20

//   return(
//     <div>
//       <p>Today is {now.toDateString()}</p>
//       <p>{a} plus {b} is equals to {a+b}</p>
//     </div>

//   )
// }


//4.Adding New component and use it inside App component

// const Hello=()=>{
//    return(
//      <p>Hello world</p>
//    )
// }

// const App =()=>{
//   return(
//     <div>
//       <p>Good Morning</p>
//       <Hello />
//     </div>
//   )
// }


//5.Passing name data to Hello conponent using props

// const Hello =(props)=>{
//    return(
//      <div>
//        <p>Hello {props.name}</p>
//      </div>
//    )
// }

// const App =()=>{
//   return(
//     <div>
//       <p>Greetings</p>
//       <Hello name="Ram" />
//       <Hello name="Abhi" />
//       <Hello name="Kumar" />
//     </div>
//   )
// }



//Exercise 1.1 to 1.2

// const App = () =>{
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return(
//         <div>
//           <h1>{course}</h1>
//           <p>
//             {part1} {exercises1}
//           </p>
//           <p>
//             {part2} {exercises3}
//           </p>
//           <p>
//             {part3} {exercises3}
//           </p>
//           <p>
//             Number of exercises are {exercises1 +exercises2+exercises3}
//           </p>
//         </div>
//   )
// }



//Exercise 1.3

// const Header=(props)=>{
//   console.log(props.course)
//   return(
//     <h1>{props.course}</h1>
//   )
// }

// const Content=(props)=>{
//   console.log(props.name)
//   return(
//     <p>{props.name} {props.exercise}</p>
//   )
// }

// const Total=(props)=>{
//   return(
//     <p>
//       Number of exercises are {props.exercise}
//     </p>
//   )
// }

// const App = () =>{
//   const course = 'Half Stack application development'
//   const part1 ={
//     name:'Fundamentals of React',
//     exercise : 10
//   }
//   const part2 ={
//     name:'Using props to pass data',
//     exercise : 7
//   }
//   const part3 ={
//     name:'State of a component',
//     exercise : 14
//   }
 
//   return(
//         <div>
//           <Header course={course} />
//           <Content name={part1.name}  exercise={part1.exercise}></Content>
//           <Content name={part2.name}  exercise={part2.exercise}></Content>
//           <Content name={part3.name}  exercise={part3.exercise}></Content>
//         </div>
//   )
// }





//Exercise 1.4
const Header=(props)=>{
    console.log(props.course)
    return(
      <h1>{props.course}</h1>
    )
  }
const Parts=(props)=>{
  return(
    <p>{props.name} {props.exercise}</p>
  )
}

const Content=(props)=>{
  console.log(props.name)
  return(
    <div>
    <Parts name={props.parts[0].name} exercise={props.parts[0].exercise} />
    <Parts name={props.parts[1].name} exercise={props.parts[1].exercise}/>
    <Parts name={props.parts[2].name} exercise={props.parts[2].exercise}/>
    </div>
  )
}

const Total=(props)=>{
  return(
  <p>Number of Exercises are {props.parts[0].exercise+props.parts[1].exercise+props.parts[2].exercise}</p>
  )
}



const App = () =>{
  const course = 'Half Stack application development'
  //Part as array of objects
  const part =[
    {
    name:'Fundamentals of React',
    exercise : 10
    },
    {
    name:'Using props to pass data',
    exercise : 7
    },
    {
    name:'State of a component',
    exercise : 14
    }
  ]
 
  return(
        <div>
          <Header course={course} />
          <Content parts={part}></Content>
          <Total parts={part}></Total>
        </div>
  )
}


export default App;