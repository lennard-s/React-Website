import React from "react";
import PeopleModal from "./PeopleModal";

// This component takes in one of the two people groups (faculty or staff),
// loops through them, and creates a PeopleModal for each person in the group. 

// Component Crumbs: PeopleTabs > [>> PeopleGroup <<] > PeopleModal

const PeopleGroup = ({ title, peopleGroupObject }) => {
    return (
        <>
            {/* we need to put out the title then iterate*/}
            <h2>{title}</h2>
            <div className="peopleList">
                {peopleGroupObject.map((p, index) =>
                    <div className="peopleListItem" key={index}>
                        <img src={p.imagePath} alt="person" />
                        <PeopleModal {...p} />
                    </div>
                )}
            </div>
        </>
    )
}

export default PeopleGroup