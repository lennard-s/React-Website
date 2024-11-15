import React from "react";

// This component takes in either Degree Stats., Employers, or Careers, and populates those tabs accordingly

// Component Crumbs: EmploymentTabs > [>> EmploymentGroup <<]

const EmploymentGroup = ({ title, employmentGroupObject }) => {
    return (
        <>
            <div className="degreeStatistics">
                <h2>{title}</h2>
                <div className="statisticsCards">
                    {title == 'Degree Statistics' &&
                        <>
                            {employmentGroupObject.statistics.map((item, index) => (
                                <div className="statisticsCard" key={index}>
                                    <h3>{item.value}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </>
                    }
                    {title == 'Employers' &&
                        <>
                            {employmentGroupObject.employerNames.map((item, index) => (
                                <div className="statisticsCard" key={index}>
                                    <h3>{item}</h3>
                                </div>
                            ))}
                        </>
                    }
                    {title == 'Careers' &&
                        <div className="statisticsCards">
                            {employmentGroupObject.careerNames.map((item, index) => (
                                <div className="statisticsCard" key={index}>
                                    <h3>{item}</h3>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default EmploymentGroup