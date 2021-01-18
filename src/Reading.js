import React from "react";
import "./App.css";
import { readingData } from "./data";

const HomePageHeader = () => {
    return (
        <header className="header">
            <h2>Votre lecture</h2>
        </header>
    );
};

function Reading(props) {
    

        return (
            <div>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        );

}




export class Readings extends React.Component {


    render() {


        return (

            <div className="reading-container">
                <HomePageHeader />
                {readingData.map((data, key) => {




                    if (key === this.props.id) {

                        return (

                            <div key={key}>

                                <Reading
                                    id={data.id}
                                    title={data.title}
                                    content={data.content}
                                />
                            </div>


                        );
                    } else
                        return (<div key={key} />);





                })}
            </div>

        );
    }
};