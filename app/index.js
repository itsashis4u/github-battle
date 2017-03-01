var userData = {
  name: 'Ashish Kumar Badtiya',
  username: 'itsashis4u',
  image: 'https://avatars2.githubusercontent.com/u/4126695'
}

const React = require('react');
const ReactDOM = require('react-dom');

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

class ProfilePic extends React.Component{
  render() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
}

class ProfileLink extends React.Component{
  render() {
    return (
      <div>
        <a href={`https://www.github.com/${this.props.username}`}>
          {this.props.username}
        </a>
      </div>
    );
  }
}

class ProfileName extends React.Component{
  render() {
    return <div>{this.props.name}</div>
  }
}

class Avatar extends React.Component{
  render() {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
}


ReactDOM.render(
  <Avatar user={userData} />,
  document.getElementById('app')
);
