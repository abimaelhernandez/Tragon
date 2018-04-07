import * as React from 'react';
import { Link } from 'react-router';
import { MemberEntity } from '../../database/schema.js';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

export class MembersPage extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = { members: [] };
  }

 componentDidMount() {
    vendors.fetchMembers()
      .then((members) => {
        this.setState({ members });
      });
  }

   render() {
    return (
      <div className="row">
        <h2> Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {
              this.state.members.map((member) =>
                <MemberRow
                  key={member.id}
                  member={member}
                />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
};
