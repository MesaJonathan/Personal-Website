//functional component
function Profile(props){
    
    //destruct props like this :)
    const { arg1, arg2 } = props;

    //jsx in html
    return (
        <h1>
            Who's the funniest guy {arg1} {arg2} 
        </h1>
    );
}

export default Profile;