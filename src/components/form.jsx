import React from 'react'
import { showData } from '../redux/actions/actions';
import './form.css'
import { useDispatch } from 'react-redux';

const Form = () => {

    const dispatch = useDispatch();

    return (
        <section id="ReactForm">
            <div className="container">
                <div className="ReactForm">
                    <form >
                        <label htmlFor="">First Name :</label> <br />
                        <input type="text" />  <br /> <br />

                        <label htmlFor="">Last Name :</label> <br />
                        <input type="text" />  <br /> <br />

                        <label htmlFor="">Choose skills :</label> <br /> 
                        <input type="checkbox" />
                        <label htmlFor="">HTML 5</label> <br />
                        <input type="checkbox" />
                        <label htmlFor="">CSS</label> <br />
                        <input type="checkbox" />
                        <label htmlFor="">Javascript</label> <br />
                        <input type="checkbox" />
                        <label htmlFor="">React</label> <br />
                        <input type="checkbox" />
                        <label htmlFor="">Angular</label> <br />
                        <input type="checkbox" />
                        <label htmlFor="">Node JS</label> <br />
                        <input type="checkbox" />
                        <label htmlFor="">ASP.Net</label> <br />
                        <input type="checkbox" />
                        <label htmlFor="">UI/ UX</label> <br />
                        <input type="text" placeholder='Any Other Skills...' /> <br /> <br /> 

                        <label htmlFor="">1: *Do you have one year of experience</label> <br />
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Yes</label><br />
                        <input type="radio" name="" id="" />
                        <label htmlFor="">No</label> <br /> <br />

                        <label htmlFor="">2: *Are you a immediate joiner</label> <br />
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Yes</label><br />
                        <input type="radio" name="" id="" />
                        <label htmlFor="">No</label> <br /> <br />
                        <input type="submit" onClick={()=> dispatch(showData())} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form;
