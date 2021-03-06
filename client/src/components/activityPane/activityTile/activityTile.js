import React, { Component } from 'react'
import './activityTile.css'
import history from '../../../services/history'

class ActivityTile extends Component {

    render() {
        const { header, desc, user } = this.props;
        return (
            <div className="col-12 p-1">
                <div className="bg-light activity-tile tile-big">
                    <a onClick={() => { history.push(`/profile`) }}>
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="activity-user-img" />
                    </a>
                    <h5>{header}</h5>
                    <p>{desc}</p>
                    <p className="d-none d-xl-block">{user.name}</p>
                </div>
            </div>
        )
    }
}

export default ActivityTile