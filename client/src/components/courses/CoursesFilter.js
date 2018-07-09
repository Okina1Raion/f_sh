import React from 'react';

const CoursesFilter = ({departmentId, departments, onChange, onClick}) => {
    let filterStyle = {marginTop: 10 + 'px'};
    let selectStyle = {marginRight: 10 + 'px', marginLeft: 10 + 'px'};

    return (
        <div style={filterStyle}>
            Select Department:
            <select
                name="departmentId"
                value={departmentId}
                onChange={onChange}
                style={selectStyle}>

                <option value="">All</option>
                {departments.map((department) => {
                    return <option key={department.value} value={department.value}>{department.text}</option>;
                })}
            </select>

            <input type="submit" value="Filter" onClick={onClick} />
        </div>
    );
};

CoursesFilter.propTypes = {
    departmentId: React.PropTypes.string.isRequired,
    departments: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default CoursesFilter;
