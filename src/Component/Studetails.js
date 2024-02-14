import React from "react";
import './studetail.css';

const Stupage = () => 
{
    return(
        <div>
            <header>
                <h1 align="center">The student form</h1>
            </header>
            <body >
                <form>
            <table align="center">
                <tr>
                    <td>
                        <label for="stuname"><b>Student name</b> </label>
                    </td>

                    <td>
                        <input type="text" size="15"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="stuno"><b>Student Number </b></label>
                    </td>

                    <td>
                        <input type="text"  size="15"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="conno"><b>contact number </b></label>
                    </td>

                    <td>
                        <input type="text"  minLength={10} maxLength={10}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="Gen"><b>Gender</b></label>
                    </td>

                    <td>
                     <input type="radio" name="Gen"value="Male"/>
                        <label>Male</label>
                     <input type="radio"name="Gen" value="Female"/>
                        <label>Female</label>
                    </td>
                </tr>
                <tr>
                    <td><label for="stugrp"><b>Student Group</b></label></td>
                    <td>
                        <select name="group">
                        <option value="">select</option>
                        <option value="cse">CSE</option>
                        <option value="aids">AIDS</option>
                        <option value="ece">ECE</option>
                        <option value="ecs">ECS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit" value="Submit" class="button button2">Submit</button>
                       
                    </td>
                    
                    <td>
                    <button type="reset" value="clear" class ="button button1">clear</button>
                    </td>
                </tr>
            </table>
            </form>
            </body>
        </div>

    );
};
 export default Stupage;