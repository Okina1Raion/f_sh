import React from 'react';
import {connect} from 'react-redux';
import StudentStatisticsList from './student/StudentStatisticsList';
import {loadStudentsStatistics} from '../actions/studentActions';

class AboutPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            statistics: props.statistics
        };
    }

    componentWillMount() {
        this.props.loadStudentsStatistics();
    }

    render() {
        return (
            <div className="container">
                <h2>Student Body Statistics</h2>

                <div className="col-xs-3">
                    <StudentStatisticsList statistics={this.props.statistics}/>
                </div>
            </div>
        );
    }
}

AboutPage.propTypes = {
    statistics: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        statistics: state.student.statisticsList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadStudentsStatistics: () => loadStudentsStatistics()(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);