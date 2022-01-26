const Header=(props)=>{
    return(
      <h1>{props.course}</h1>
    )
}
const Part=(props)=>{
     return(
     <p>{props.name} {props.exercise}</p>
     )
}

const Content=(props)=>{
    return(
        <div>
        <Part name={props.part[0].name} exercise={props.part[0].exercise} />
        <Part name={props.part[1].name} exercise={props.part[1].exercise} />
        <Part name={props.part[2].name} exercise={props.part[2].exercise} />
        </div>
    )
}

const Total=(props)=>{
   return(
       <p>
           Total Exercises are {props.part[0].exercise+props.part[1].exercise+props.part[2].exercise}
       </p>
   )
}

const AppFinal=()=>{
    const course={
        name: 'Half Stack application development',
        part:[
            {
                name: 'Fundamentals of React',
                exercise: 10
            },
            {
                name: 'Using props to pass data',
                exercise: 7

            },
            {
                name: 'State of a component',
                exercise: 14
            }
        ]
    }

    return(
        <div>
            <Header course={course.name} />
            <Content part={course.part} />
            <Total part={course.part}  />
        </div>
    )
}
export default AppFinal;