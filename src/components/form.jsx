import React from "react";
import {showData} from "../redux/actions/actions";
import "./form.css";
import {useDispatch} from "react-redux";
import {useState, useEffect} from "react";
import {connent} from "react-redux";
import {useSelector} from "react-redux";
import {dataReducer} from "../redux/reducers/reducer";

const Form = () => {
  const [mySkills, setMySkills] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otherSkills, setOtherSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [immediateJoiner, setImmediateJoiner] = useState("");
  const [react, setReact] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [ui, setUi] = useState("");
  const [angular, setAngular] = useState("");
  const [nodeJs, setNodeJs] = useState("");
  const [dotNet, setDotNet] = useState("");
  const [html, setHtml] = useState("");
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   otherSkills: "",
  //   exp: "",
  //   iJ: "",
  // });

  // const onChangeHandler = (event) => {
  //   setFormData(() => ({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  const onSelectHandler = (event) => {
    const targtValue = event.currentTarget.value;

    // let foundtItem = skills?.find((item) => item === targtValue);
    // if (foundtItem) {
    //   let filtered = skills?.filter((item) => item !== foundtItem);
    //   skills = [...filtered];
    // } else {
    //   skills.push(targtValue);
    // }
  };

  // const [fname, setfname] = useState('');
  // const [lname, setlname] = useState('');
  //   const [skills, setSkills] = useState([]);
  //   formData.skills.push(skills);
  // const [otherSkills, setotherSkills] = useState('');
  // const [exp, setExp] = useState('');
  // const [EJ, setEJ] = useState('');
  // const [formData, setFormData] = useState([]);
  // let skills = [];
  const renderSelected = (e) => {
    // const targtValue = e.currentTarget.value;
    // console.log("targetValue", targtValue);
    // let foundtItem = skills?.find((item, index) => item === targtValue);
    // if (foundtItem) {
    //   console.log("filter", foundtItem);
    //   let filtered = skills?.filter((item) => item !== foundtItem);
    //   console.log("filter", filtered);
    //   skills = [...filtered];
    // } else {
    //   console.log("filter", foundtItem);
    //   skills.push(targtValue);
    // }
    // console.log("skills", skills);
    // setMySkills(skills);
    // setSkills((prev) =>
    //   prev.some((data) => data === targtValue)
    //     ? prev.filter((data) => data !== targtValue)
    //     : [...prev, targtValue]
    // );
  };

  // setFormData = [...formData, setFormData(push(fname,lname,skills,otherSkills,exp,EJ))]

  // console.log(`${fname} ${lname}`);
  // console.log(`Skills are`, skills);
  // console.log(otherSkills);
  // console.log(exp);
  // console.log(EJ)
  // console.log(formData)

  let skills = [];

  let skillsItem = [...skills];
  const handleChecked = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(name);
    console.log("isChecked", isChecked);
    if (isChecked) {
      skills.push(value);
      // setMySkills([...skills]);
    } else {
      let res = skills.filter((item) => item !== value);
      skills = [...res];
    }
  };

  const onHandleSubmit = (event) => {
    console.log("skills", skills);
    event.preventDefault();
    let splititedOtherSkills = otherSkills?.split(",");

    // let skills = skillsItem?.filter((item) => item !== "");
    if (splititedOtherSkills?.length) {
      splititedOtherSkills?.map((item) => {
        skillsItem.push(item);
      });
    } else {
      skillsItem.push(otherSkills);
    }
    // console.log("skill", skillsItem);
    let formData = {
      firstName: firstName,
      lastName: lastName,
      experience: experience,
      immediateJoiner: immediateJoiner,
      otherSkills: otherSkills,
      skills: skillsItem,
    };
    console.log("formData", formData);
    dispatch(dataReducer(formData));
    setFirstName("");
    setLastName("");
    setChecked(false);
    // if (formData?.otherSkills) {
    //   let splittedItem = formData?.otherSkills.split(",");
    //   console.log("splittedItem", splittedItem);
    //   if (splittedItem.length) {
    //     splittedItem?.map((item) => {
    //       formData?.skills?.push(item);
    //     });
    //   } else {
    //     formData  .skills?.push(formData?.otherSkills);
    //     // Object.preventExtensions(formData);
    //   }
    // }
    // console.log("skills", mySkills);

    // duplicateFormData.skills = skills;
  };

  return (
    <section id="ReactForm">
      <div className="container">
        <div className="ReactForm">
          <form onSubmit={onHandleSubmit}>
            <label htmlFor="">First Name :</label> <br />
            <input
              type="text"
              value={firstName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />{" "}
            <br /> <br />
            <label htmlFor="">Last Name :</label> <br />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />{" "}
            <br /> <br />
            <label htmlFor="">Choose skills :</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              name="html"
              type="checkbox"
              value="HTML 5"
            />
            <label htmlFor="">HTML 5</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              type="checkbox"
              value="CSS"
              name="css"
            />
            <label htmlFor="">CSS</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              type="checkbox"
              value="JavaScript"
              name="js"
            />
            <label htmlFor="">Javascript</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              type="checkbox"
              value="React"
              name="react"
            />
            <label htmlFor="">React</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              type="checkbox"
              value="Angular"
              name="angular"
            />
            <label htmlFor="">Angular</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              type="checkbox"
              value="Node JS"
              name="node"
            />
            <label htmlFor="">Node JS</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              type="checkbox"
              name="asp"
              value="ASP.Net"
            />
            <label htmlFor="">ASP.Net</label> <br />
            <input
              onChange={(e) => handleChecked(e)}
              type="checkbox"
              name="ui"
              value="UI/ UX"
            />
            <label htmlFor="">UI/ UX</label> <br />
            <input
              type="text"
              name="otherSkills"
              value={otherSkills}
              onChange={(e) => setOtherSkills(e.target.value)}
              placeholder="Any Other Skills..."
            />{" "}
            <br /> <br />
            <label htmlFor="">
              1: *Do you have at least one year of experience
            </label>{" "}
            <br />
            <input
              type="radio"
              value="Yes"
              onChange={(e) => setExperience(e.target.value)}
              name="exp"
              id=""
            />
            <label htmlFor="">Yes</label>
            <br />
            <input
              type="radio"
              value="No"
              onChange={(e) => setExperience(e.target.value)}
              name="exp"
              id=""
            />
            <label htmlFor="">No</label> <br /> <br />
            <label htmlFor="">2: *Are you a immediate joiner</label> <br />
            <input
              type="radio"
              value="Yes"
              onChange={(e) => setImmediateJoiner(e.target.value)}
              name="iJ"
              id=""
            />
            <label htmlFor="">Yes</label>
            <br />
            <input
              type="radio"
              value="No"
              onChange={(e) => setImmediateJoiner(e.target.value)}
              name="iJ"
              id=""
            />
            <label htmlFor="">No</label> <br /> <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
